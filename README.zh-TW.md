<div align="right">
  <details>
    <summary >🌐 Other Language</summary>
    <div>
      <div align="center">
        <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=ja">日本語</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=ko">한국어</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=hi">हिन्दी</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=th">ไทย</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=fr">Français</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=de">Deutsch</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=es">Español</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=it">Itapano</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=ru">Русский</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=pt">Português</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=nl">Nederlands</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=pl">Polski</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=ar">العربية</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=fa">فارسی</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=tr">Türkçe</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=vi">Tiếng Việt</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048--&lang=id">Bahasa Indonesia</a>
      </div>
    </div>
  </details>
</div>

[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md)

# 🎮 2048++

一個基於經典2048遊戲的增強版本，加入了更多有趣的功能！這個專案是我在閒暇時間開發的一個小遊戲，希望能給大家帶來一些樂趣。

## 🎯 遊戲介紹

2048是一個簡單但令人上癮的數字合併遊戲。在4x4的棋盤上，透過上下左右滑動來合併相同的數字，目標是獲得2048這個數字（當然，你可以繼續玩下去獲得更高的分數！）。

### 基本玩法：
- 使用方向鍵（←↑→↓）移動方塊，手機端支援滑動操作
- 相同數字的方塊相撞時會合併成為它們的和
- 每次移動後會在空白處隨機出現一個 2 或 4
- 當無法移動時遊戲結束

## ✨ 特色功能

### 1. 撤回功能
- 不小心走錯了一步？別擔心！
- 點擊"撤回"按鈕，立即回到上一步
- 支援連續撤回，直到遊戲開始狀態
- 再也不用因為手滑而懊惱了！

### 2. 隱藏的作弊模式
- 滑動特殊序列：←←→→ →→←←（左左右右 右右左左）
- 啟動後所有數字都會變成128
- 彩蛋功能，可快速跳過初期階段，僅供娛樂
- 溫馨提示：作弊雖好，但不要貪杯喔！

## 🎯 Demo

🎯 : [試玩](http://2048.765431.xyz/)
<img width="1279" alt="demo" src="assets/demo_v2.png" />

## 📁 專案結構

```text
2048/
├── assets/                   # 圖片與媒體資源
├── static/
│   ├── css/
│   │   └── styles.css        # 遊戲介面樣式
│   └── js/
│       └── script.js         # 前端遊戲邏輯
├── index.html                # 遊戲主頁面
├── 2048.py                   # 後端伺服器
├── requirements.txt          # Python 依賴檔案
├── Dockerfile                # Docker 鏡像配置檔案
├── docker-compose.yml        # Docker compose 配置檔案
└── DEPLOYMENT.md             # 部署指南
```

### 檔案說明：
- `assets/`: 存放專案演示截圖及媒體檔案（如舊版介面 `demo_v1.png` 以及現版介面 `demo_v2.png`）
- `2048.py`: 使用Flask框架編寫的後端伺服器，處理遊戲邏輯和API請求
- `script.js`: 前端遊戲邏輯，包含移動處理、動畫效果和特殊功能實現
- `styles.css`: 遊戲介面樣式，確保遊戲美觀且響應式
- `index.html`: 遊戲主頁面，整合所有資源
- `requirements.txt`: 運行後端所需的Python依賴列表
- `Dockerfile`: 定義使用 Docker 運行小遊戲的環境配置
- `docker-compose.yml`: 用於簡化 Docker 部署和服務的管理
- `DEPLOYMENT.md`: 詳細的專案部署指南

## 🚀 快速開始

### 方法一：直接下載
1. 下載最新的release版本
2. 確保安裝了Python 3.x
3. 安裝依賴：`pip install flask`
4. 運行：`python 2048.py`
5. 打開瀏覽器並訪問: [http://localhost:3000](http://localhost:3000)

### 方法二：從GitHub複製
```bash
git clone [https://github.com/sz30/2048.git](https://github.com/sz30/2048.git)
cd 2048
pip install flask
python 2048.py
```

🎨 自訂義

你可以透過修改styles.css來自訂遊戲的外觀，或者透過修改script.js來調整遊戲的行為。所有的程式碼都有詳細的註釋，方便你進行修改！

📝 許可證

GPL-2.0 license

🤝 貢獻

持續更新中，歡迎提交Issue和Pull Request！讓我們一起把這個遊戲變得更好玩！

🙏 致謝

感謝以下贊助者對本專案的支援：
- [/](#)  提供伺服器

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sz30/2048--&type=date&legend=top-left)](https://www.star-history.com/#sz30/2048--&type=date&legend=top-left)
---
*最後更新：2026年3月*
