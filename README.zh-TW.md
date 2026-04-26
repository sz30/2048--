[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md)

<h1 align="center">2048--</h1>

<p align="center">
  <em>經典數字消除遊戲 2048 的增強版本，加入了 回撤機制 與 快速模式 等有趣的功能！</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-GPL--2.0-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript">
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
- 滑動特殊序列：⬅️⬅️ ➡️➡️  ➡️➡️ ⬅️⬅️（左左右右 右右左左）
- 啟動後所有數字都會變成 128
- 彩蛋功能，可快速跳過初期階段，僅供娛樂
- 溫馨提示：加速雖好，但不要貪杯喔！


## 🚀 快速開始與部署

本專案已重構為**純前端靜態單頁應用（SPA）**，部署與遊玩極其輕量。

### 方法一：本地直接遊玩（最簡單）
- `git clone https://github.com/sz30/2048--.git` 或下載壓縮檔。
- 解壓縮後，雙擊打開 `index.html` 即可在瀏覽器中開始遊戲！

### 方法二：靜態網站託管方案（首選建議）
利用託管平台零成本、一鍵部署並附帶全球 CDN 加速。您可以點擊下方按鈕直接一鍵部署：

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/sz30/2048--)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sz30/2048--)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sz30/2048--)

或者手動配置：
- **GitHub Pages**: Fork 本倉庫 -> 進入 Settings -> Pages -> 開啟 Deploy from a branch (選 main 分支) -> Save。
- **Cloudflare Pages**: 登入控制台 -> Pages -> Connect to Git 選中倉庫 -> Framework preset 選 `None` -> 部署。

### 方法三： VPS 部署方案 (Nginx)
1. 在伺服器安裝 Nginx。
2. 將專案根目錄下的 `index.html` 上傳至伺服器的 Nginx 網頁目錄（通常是 `/var/www/html`）。
3. (可選) 配置 Nginx 虛擬主機綁定獨立域名，重啟服務即可。

*(更詳盡的部署圖文步驟，請參閱內置的 `DEPLOYMENT.md` 部署指南)*


## 📁 專案結構

```text
2048--/
├── assets/                   # 歷史文件及媒體資源
├── index.html                # 核心檔案：包含所有的 HTML/CSS/JS
└── DEPLOYMENT.md             # 部署指南
```

### 檔案說明：
- `assets/`: 存放專案歷史文件及媒體檔案（如演示截圖 `demo_v2.png`）。
- `index.html`: **核心檔案**。本遊戲已極致精簡，所有的遊戲介面（HTML）、樣式（CSS）以及矩陣計算、動畫邏輯（JS）全部封裝在此檔案中，遵循 KISS 原則，便於分發與部署。
- `DEPLOYMENT.md`: 詳細的專案部署指南（包含靜態網站託管與 VPS 部署方案）。


## 🎨 自訂義

本遊戲採用極簡的單檔案架構，無需配置任何開發環境，只需用記事本或任意編輯器打開 `index.html`：

- **修改外觀**：找到頂部的 `<style>` 標籤，可以隨意修改配色方案、方塊圓角或字體大小，定製專屬 UI。
- **新增玩法**：找到底部的 `<script>` 標籤，所有的矩陣邏輯和計分規則都清晰可見，可輕鬆創造獨特的 2048 變種（例如改成 5x5 棋盤，或是引入全新的彩蛋機制）。


## 🤝 開源協定與協作共建

- 開源協定：[GPL-2.0](https://github.com/sz30/2048--/blob/main/LICENSE.txt)
- 本專案持續更新中，歡迎提交Issue和PRs。讓我們一起把這個遊戲變得更好玩！


## 🙏 鳴謝

感謝以下贊助者對本專案的支援：
- [/](#)  提供伺服器


## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sz30/2048--&type=date&legend=top-left)](https://www.star-history.com/#sz30/2048--&type=date&legend=top-left)


---
*最後更新：2026年5月*
