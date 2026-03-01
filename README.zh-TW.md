[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md)

<h1 align="center">2048--</h1>

<p align="center">
  <em>經典數字消除遊戲 2048 的增強版本，加入了 回撤機制 與 快速模式 等有趣的功能！</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-GPL--2.0-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/python-3.x-blue.svg" alt="Python 3.x">
  <img src="https://img.shields.io/badge/framework-Flask-red.svg" alt="Flask">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
</p>


## 🎮 Demo
👉 [試玩](http://2048.765431.xyz/)
<div align="center">
  <img width="800" alt="2048-- Demo" src="assets/demo_v2.png" />
</div>


## ✨ 特色功能

### 1. 撤回功能
- 不小心走錯了一步？別擔心！
- 點擊"撤回"按鈕，立即回到上一步
- 支援連續撤回，直到遊戲開始狀態
- 再也不用因為手滑而懊惱了！

### 2. 快速模式
- 滑動特殊序列：←←→→ →→←←（左左右右 右右左左）
- 啟動後所有數字都會變成 128
- 彩蛋功能，可快速跳過初期階段，僅供娛樂
- 溫馨提示：加速雖好，但不要貪杯喔！


## 🚀 快速開始

### 方法一：雲端運行(建議)
```bash
git clone https://github.com/sz30/2048--.git
cd 2048--
pip install flask
python 2048--.py
```
開啟瀏覽器並訪問: [http://localhost:3000](http://localhost:3000)

### 方法二：使用 Docker 環境
*(具體的容器化部署策略，請參閱內置的 `DEPLOYMENT.md` 中文指南以獲得全文)*

### 方法三：本地運行偵錯
1. 下載最新的release版本
2. 確保安裝了Python 3.x
3. 安裝依賴：`pip install flask`
4. 運行：`python 2048--.py`
5. 開啟瀏覽器並訪問: [http://localhost:3000](http://localhost:3000)


## 📁 專案結構

```text
2048--/
├── assets/                   # 圖片與媒體資源
├── static/
│   ├── css/
│   │   └── styles.css        # 遊戲介面樣式
│   └── js/
│       └── script.js         # 前端遊戲邏輯
├── index.html                # 遊戲主頁面
├── 2048--.py                   # 後端伺服器
├── requirements.txt          # Python 依賴檔案
├── Dockerfile                # Docker 鏡像配置檔案
├── docker-compose.yml        # Docker compose 配置檔案
└── DEPLOYMENT.md             # 部署指南
```

### 檔案說明：
- `assets/`: 存放專案演示截圖及媒體檔案（如舊版介面 `demo_v1.png` 以及現版介面 `demo_v2.png`）
- `2048--.py`: 使用Flask框架編寫的後端伺服器，處理遊戲邏輯和API請求
- `script.js`: 前端遊戲邏輯，包含移動處理、動畫效果和特殊功能實現
- `styles.css`: 遊戲介面樣式，確保遊戲美觀且響應式
- `index.html`: 遊戲主頁面，整合所有資源
- `requirements.txt`: 運行後端所需的Python依賴列表
- `Dockerfile`: 定義使用 Docker 運行小遊戲的環境配置
- `docker-compose.yml`: 用於簡化 Docker 部署和服務的管理
- `DEPLOYMENT.md`: 詳細的專案部署指南


## 🎨 自訂義

可以透過修改styles.css來自訂遊戲的外觀，或者透過修改script.js來調整遊戲的行為。所有的程式碼都有詳細的註釋，方便進行修改！


## 🤝 開源協定與協作共建

- 開源協定：[GPL-2.0](https://github.com/sz30/2048--/blob/main/LICENSE.txt)
- 本專案持續更新中，歡迎提交Issue和PRs。讓我們一起把這個遊戲變得更好玩！


## 🙏 鳴謝

感謝以下贊助者對本專案的支援：
- [/](#)  提供伺服器


## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sz30/2048--&type=date&legend=top-left)](https://www.star-history.com/#sz30/2048--&type=date&legend=top-left)


---
*最後更新：2026年3月*
