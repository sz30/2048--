let board = JSON.parse(localStorage.getItem('gameBoard')) || [];
let currentScore = parseInt(localStorage.getItem('currentScore')) || 0;
let bestScore = parseInt(localStorage.getItem('bestScore')) || 0;

// 撤销功能相关
let historyStack = JSON.parse(localStorage.getItem('historyStack')) || [];

// 检测作弊模式的滑动序列
const cheatCode = ['left', 'left', 'right', 'right', 'right', 'right', 'left', 'left'];
let inputSequence = [];

// 是否处于作弊模式
let isCheatMode = false;

// 初始化游戏
async function initGame() {
    try {
        const response = await fetch('/init');
        const data = await response.json();
        board = data.board;
        currentScore = 0;
        
        // 从localStorage和cookie中获取最佳分数，并使用较大值
        const cookieBestScore = parseInt(document.getElementById('best-score').textContent) || 0;
        bestScore = Math.max(parseInt(localStorage.getItem('bestScore') || 0), cookieBestScore);
        localStorage.setItem('bestScore', bestScore);
        
        historyStack = []; // 清空历史记录栈

        updateUI(); // 更新界面显示
        
        // 更新分数显示
        document.getElementById('current-score').textContent = currentScore;
        document.getElementById('best-score').textContent = bestScore;
        
        // 保存游戏状态
        saveGameState();
    } catch (error) {
        console.error('初始化游戏失败:', error);
    }
}

// 更新界面
function updateUI() {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = ''; // 清空棋盘

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            
            if (board[i][j] !== 0) {
                cell.textContent = board[i][j];
                cell.classList.add(`tile-${board[i][j]}`);
            }
            gridContainer.appendChild(cell);
        }
    }
    
    // 根据单元格宽度调整字体大小
    adjustFontSize();
}

// 根据棋盘大小调整字体
function adjustFontSize() {
    const cells = document.querySelectorAll('.cell');
    const gridContainer = document.getElementById('grid-container');
    const cellWidth = gridContainer.offsetWidth / 4 * 0.9; // 考虑间距后的单元格宽度
    
    cells.forEach(cell => {
        if (cell.textContent) {
            if (cell.textContent.length <= 2) {
                cell.style.fontSize = `${cellWidth * 0.5}px`; // 1-2位数字
            } else if (cell.textContent.length === 3) {
                cell.style.fontSize = `${cellWidth * 0.4}px`; // 3位数字
            } else {
                cell.style.fontSize = `${cellWidth * 0.3}px`; // 4位及更多数字
            }
        }
    });
}

// 保存游戏状态到localStorage
function saveGameState() {
    localStorage.setItem('gameBoard', JSON.stringify(board));
    localStorage.setItem('currentScore', currentScore);
    localStorage.setItem('bestScore', bestScore);
    localStorage.setItem('historyStack', JSON.stringify(historyStack));
}

// 检测合并状态
function detectMerges(oldBoard, newBoard, direction) {
    const merged = Array(4).fill().map(() => Array(4).fill(false));
    
    // 根据移动方向确定遍历顺序
    const rows = direction === 'down' ? [3, 2, 1, 0] : [0, 1, 2, 3];
    const cols = direction === 'right' ? [3, 2, 1, 0] : [0, 1, 2, 3];
    
    if (direction === 'left' || direction === 'right') {
        // 水平移动
        for (let i = 0; i < 4; i++) {
            for (let j of cols) {
                if (newBoard[i][j] !== 0 && newBoard[i][j] === oldBoard[i][j] * 2) {
                    // 检查是否真的发生了合并
                    const oldValue = oldBoard[i][j];
                    const newValue = newBoard[i][j];
                    if (oldValue !== 0 && newValue === oldValue * 2) {
                        merged[i][j] = true;
                    }
                }
            }
        }
    } else {
        // 垂直移动
        for (let j = 0; j < 4; j++) {
            for (let i of rows) {
                if (newBoard[i][j] !== 0 && newBoard[i][j] === oldBoard[i][j] * 2) {
                    // 检查是否真的发生了合并
                    const oldValue = oldBoard[i][j];
                    const newValue = newBoard[i][j];
                    if (oldValue !== 0 && newValue === oldValue * 2) {
                        merged[i][j] = true;
                    }
                }
            }
        }
    }
    
    return merged;
}

// 计算分数变化
function calculateScoreDifference(oldBoard, newBoard, direction) {
    const merged = detectMerges(oldBoard, newBoard, direction);
    let scoreChange = 0;
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (merged[i][j]) {
                scoreChange += newBoard[i][j];
            }
        }
    }
    
    return scoreChange;
}

// 处理移动逻辑
async function handleMove(direction) {
    // 保存当前状态到历史记录栈
    historyStack.push({
        board: JSON.parse(JSON.stringify(board)), // 深拷贝当前棋盘
        score: currentScore,
    });
    
    // 保存历史记录到localStorage
    localStorage.setItem('historyStack', JSON.stringify(historyStack));

    // 检查是否匹配作弊模式序列
    inputSequence.push(direction);
    if (inputSequence.length > 8) inputSequence.shift(); // 只保留最近8次输入
    if (JSON.stringify(inputSequence) === JSON.stringify(cheatCode)) {
        enterCheatMode();
        return;
    }

    const oldBoard = JSON.parse(JSON.stringify(board));
    
    try {
        const response = await fetch('/move', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ direction, board: oldBoard }),
        });
        
        const data = await response.json();

        if (data.error) {
            console.error(data.error);
            return;
        }

        // 检测是否有变化
        const hasChanged = JSON.stringify(data.board) !== JSON.stringify(oldBoard);
        
        if (hasChanged) {
            // 计算分数变化
            const scoreChange = calculateScoreDifference(oldBoard, data.board, direction);
            currentScore += scoreChange;
            
            // 更新分数显示
            document.getElementById('current-score').textContent = currentScore;
            
            if (currentScore > bestScore) {
                bestScore = currentScore;
                localStorage.setItem('bestScore', bestScore);
                document.getElementById('best-score').textContent = bestScore;
            }
            
            // 更新当前棋盘数据
            board = data.board;
            
            // 保存游戏状态
            saveGameState();
            
            // 更新UI，显示动画
            updateBoardWithAnimation(oldBoard, data.board, direction);
        }

        if (data.gameOver) {
            setTimeout(() => {
                showGameOverModal();
                // 游戏结束时，确保撤销按钮仍然可点击
                document.getElementById('undo-button').style.position = 'relative';
                document.getElementById('undo-button').style.zIndex = '20';
            }, 300); // 等待动画完成后显示游戏结束对话框
        }
    } catch (error) {
        console.error('移动请求失败:', error);
    }
}

// 通过对比找出变化的单元格并平滑更新
function updateBoardWithAnimation(oldBoard, newBoard, direction) {
    const gridContainer = document.getElementById('grid-container');
    const cells = Array.from(gridContainer.querySelectorAll('.cell'));
    const merged = detectMerges(oldBoard, newBoard, direction);
    
    // 更新单元格内容并添加动画效果
    cells.forEach(cell => {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        
        if (newBoard[row][col] !== oldBoard[row][col]) {
            if (newBoard[row][col] !== 0) {
                if (merged[row][col]) {
                    // 合并动画
                    cell.textContent = newBoard[row][col];
                    cell.className = `cell tile-${newBoard[row][col]} pulse`;
                    
                    // 动画结束后移除动画类
                    cell.addEventListener('animationend', () => {
                        cell.classList.remove('pulse');
                    }, { once: true });
                } else if (oldBoard[row][col] === 0) {
                    // 新出现的滑块动画
                    cell.textContent = newBoard[row][col];
                    cell.className = `cell tile-${newBoard[row][col]} appear`;
                    
                    // 动画结束后移除动画类
                    cell.addEventListener('animationend', () => {
                        cell.classList.remove('appear');
                    }, { once: true });
                } else {
                    // 移动的滑块
                    cell.textContent = newBoard[row][col];
                    cell.className = `cell tile-${newBoard[row][col]}`;
                }
            } else {
                // 从有值变为空
                cell.textContent = '';
                cell.className = 'cell';
            }
        }
    });
    
    // 调整字体大小
    adjustFontSize();
}

// 进入作弊模式
function enterCheatMode() {
    isCheatMode = true;
    replaceAllTilesWith128(); // 替换所有非空格子为128
    
    // 显示作弊模式提示
    const gameContainer = document.getElementById('game-container');
    const cheatNotification = document.createElement('div');
    cheatNotification.id = 'cheat-notification';
    cheatNotification.textContent = '作弊模式已激活!';
    cheatNotification.style.position = 'absolute';
    cheatNotification.style.top = '10px';
    cheatNotification.style.left = '50%';
    cheatNotification.style.transform = 'translateX(-50%)';
    cheatNotification.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
    cheatNotification.style.color = 'white';
    cheatNotification.style.padding = '10px 20px';
    cheatNotification.style.borderRadius = '5px';
    cheatNotification.style.zIndex = '100';
    gameContainer.appendChild(cheatNotification);
    
    // 3秒后自动退出作弊模式
    setTimeout(() => {
        exitCheatMode();
        if (cheatNotification.parentNode) {
            cheatNotification.parentNode.removeChild(cheatNotification);
        }
    }, 3000);
}

// 替换所有棋盘上的滑块为128
function replaceAllTilesWith128() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] !== 0) {
                board[i][j] = 128; // 修改为128
            }
        }
    }
    updateUI();
}

// 退出作弊模式
function exitCheatMode() {
    isCheatMode = false;
}

// 撤销上一步操作
function undoMove() {
    if (historyStack.length === 0) {
        alert("没有可以撤销的操作！");
        return;
    }

    // 如果游戏结束弹窗正在显示，先隐藏它
    const modal = document.getElementById('game-over-modal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    }

    const previousState = historyStack.pop(); // 弹出最近的历史状态
    board = previousState.board; // 恢复棋盘
    currentScore = previousState.score; // 恢复分数
    
    // 更新界面
    updateUI();
    
    // 更新分数显示
    document.getElementById('current-score').textContent = currentScore;
    
    // 保存游戏状态
    saveGameState();
}

// 重启游戏
function handleRestart() {
    // 确保模态窗口关闭
    const modal = document.getElementById('game-over-modal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    }
    
    // 重新初始化游戏
    setTimeout(() => {
        initGame();
    }, 10);
}

// 显示游戏结束弹窗
function showGameOverModal() {
    const modal = document.getElementById('game-over-modal');
    modal.style.display = 'block';
    
    // 确保Undo按钮在游戏结束时仍然可用
    document.getElementById('undo-button').style.zIndex = '20';
}

// 关闭游戏结束弹窗并重新开始游戏
function initGameAndCloseModal() {
    const modal = document.getElementById('game-over-modal');
    modal.style.display = 'none';
    setTimeout(() => {
        initGame();
    }, 10); // 短暂延迟确保模态窗口先关闭
}

// 监听键盘事件（PC端）
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            handleMove('up');
            break;
        case 'ArrowDown':
            handleMove('down');
            break;
        case 'ArrowLeft':
            handleMove('left');
            break;
        case 'ArrowRight':
            handleMove('right');
            break;
        case 'z': // 使用 'z' 键作为撤销快捷键
            undoMove();
            break;
    }
});

// 触摸事件处理（移动端）
let startX = 0;
let startY = 0;

document.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
});

document.addEventListener('touchend', (event) => {
    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    // 忽略很小的移动
    if (Math.abs(deltaX) < 20 && Math.abs(deltaY) < 20) return;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            handleMove('right');
        } else {
            handleMove('left');
        }
    } else {
        if (deltaY > 0) {
            handleMove('down');
        } else {
            handleMove('up');
        }
    }
});

// 监听窗口大小变化，调整字体
window.addEventListener('resize', adjustFontSize);

// 页面加载时初始化游戏
window.addEventListener('load', () => {
    // 尝试从localStorage获取游戏状态
    const savedBoard = localStorage.getItem('gameBoard');
    
    // 如果有保存的游戏状态，恢复游戏
    if (savedBoard && savedBoard !== '[]') {
        board = JSON.parse(savedBoard);
        currentScore = parseInt(localStorage.getItem('currentScore')) || 0;
        bestScore = parseInt(localStorage.getItem('bestScore')) || 0;
        historyStack = JSON.parse(localStorage.getItem('historyStack')) || [];
        
        // 更新界面
        updateUI();
        
        // 更新分数显示
        document.getElementById('current-score').textContent = currentScore;
        document.getElementById('best-score').textContent = bestScore;
    } else {
        // 否则初始化新游戏
        initGame();
    }
});