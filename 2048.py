from flask import Flask, render_template, jsonify, request, send_from_directory
import random
import os

app = Flask(__name__, static_url_path='/static', static_folder='static')

# 初始化棋盘
def init_board():
    board = [[0] * 4 for _ in range(4)]
    add_random_tile(board)
    add_random_tile(board)
    return board

# 添加随机滑块
def add_random_tile(board):
    empty_cells = [(i, j) for i in range(4) for j in range(4) if board[i][j] == 0]
    if empty_cells:
        i, j = random.choice(empty_cells)
        board[i][j] = random.choice([2, 4])

# 移动逻辑
def move(board, direction):
    new_board = [row[:] for row in board]
    merged = [[False] * 4 for _ in range(4)]

    if direction == 'up':
        for col in range(4):
            for row in range(1, 4):
                if new_board[row][col] != 0:
                    temp_row = row
                    while temp_row > 0 and new_board[temp_row - 1][col] == 0:
                        new_board[temp_row - 1][col] = new_board[temp_row][col]
                        new_board[temp_row][col] = 0
                        temp_row -= 1
                    if temp_row > 0 and new_board[temp_row - 1][col] == new_board[temp_row][col] and not merged[temp_row - 1][col]:
                        new_board[temp_row - 1][col] *= 2
                        new_board[temp_row][col] = 0
                        merged[temp_row - 1][col] = True

    elif direction == 'down':
        for col in range(4):
            for row in range(2, -1, -1):
                if new_board[row][col] != 0:
                    temp_row = row
                    while temp_row < 3 and new_board[temp_row + 1][col] == 0:
                        new_board[temp_row + 1][col] = new_board[temp_row][col]
                        new_board[temp_row][col] = 0
                        temp_row += 1
                    if temp_row < 3 and new_board[temp_row + 1][col] == new_board[temp_row][col] and not merged[temp_row + 1][col]:
                        new_board[temp_row + 1][col] *= 2
                        new_board[temp_row][col] = 0
                        merged[temp_row + 1][col] = True

    elif direction == 'left':
        for row in range(4):
            for col in range(1, 4):
                if new_board[row][col] != 0:
                    temp_col = col
                    while temp_col > 0 and new_board[row][temp_col - 1] == 0:
                        new_board[row][temp_col - 1] = new_board[row][temp_col]
                        new_board[row][temp_col] = 0
                        temp_col -= 1
                    if temp_col > 0 and new_board[row][temp_col - 1] == new_board[row][temp_col] and not merged[row][temp_col - 1]:
                        new_board[row][temp_col - 1] *= 2
                        new_board[row][temp_col] = 0
                        merged[row][temp_col - 1] = True

    elif direction == 'right':
        for row in range(4):
            for col in range(2, -1, -1):
                if new_board[row][col] != 0:
                    temp_col = col
                    while temp_col < 3 and new_board[row][temp_col + 1] == 0:
                        new_board[row][temp_col + 1] = new_board[row][temp_col]
                        new_board[row][temp_col] = 0
                        temp_col += 1
                    if temp_col < 3 and new_board[row][temp_col + 1] == new_board[row][temp_col] and not merged[row][temp_col + 1]:
                        new_board[row][temp_col + 1] *= 2
                        new_board[row][temp_col] = 0
                        merged[row][temp_col + 1] = True

    # 检查是否有变化
    if new_board != board:
        add_random_tile(new_board)
    return new_board

# 检查游戏是否结束
def is_game_over(board):
    for row in board:
        if 0 in row:
            return False
    for row in range(4):
        for col in range(4):
            if (col < 3 and board[row][col] == board[row][col + 1]) or \
               (row < 3 and board[row][col] == board[row + 1][col]):
                return False
    return True

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/init')
def init():
    board = init_board()
    return jsonify({'board': board})

@app.route('/move', methods=['POST'])
def move_route():
    data = request.json
    if not data or 'board' not in data or 'direction' not in data:
        return jsonify({'error': 'Invalid request data'}), 400

    current_board = data.get('board')
    direction = data.get('direction')

    # 验证 board 是否为二维数组
    if not isinstance(current_board, list) or not all(isinstance(row, list) for row in current_board):
        return jsonify({'error': 'Invalid board format'}), 400

    # 验证 direction 是否为有效值
    if direction not in ['up', 'down', 'left', 'right']:
        return jsonify({'error': 'Invalid direction'}), 400

    new_board = move(current_board, direction)
    game_over = is_game_over(new_board)
    return jsonify({'board': new_board, 'gameOver': game_over})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)