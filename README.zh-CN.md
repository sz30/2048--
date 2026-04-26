[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md)

<h1 align="center">2048--</h1>

<p align="center">
  <em>经典数字消除游戏 2048 的增强版本，加入了 回撤机制 与 快速模式 等有趣的功能！</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-GPL--2.0-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
</p>

## 🎮 Demo

👉 [试玩](http://2048.765431.xyz/)
<div align="center">
  <img width="800" alt="2048-- Demo" src="assets/demo_v2.png" />
</div>


## ✨ 特色功能

### 1. 撤回功能
- 不小心走错了一步？别担心！
- 点击"撤回"按钮，立即回到上一步
- 支持连续撤回，直到游戏开始状态
- 再也不用因为手滑而懊恼了！

### 2. 快速模式
- 滑动特殊序列：⬅️⬅️ ➡️➡️  ➡️➡️ ⬅️⬅️（左左右右 右右左左）
- 激活后所有数字都会变成128
- 彩蛋功能，可快速跳过初期阶段，仅供娱乐


## 🚀 快速开始与部署

本项目已重构为**纯前端静态单页应用（SPA）**，部署与游玩极其轻量。

### 方法一：本地直接游玩（最简单）
- `git clone https://github.com/sz30/2048--.git` 或下载压缩包。
- 解压后，双击打开 `index.html` 即可在浏览器中开始游戏！

### 方法二：静态网站托管方案（推荐）
利用托管平台零成本、一键部署并附带全球 CDN 加速。点击下方按钮直接一键部署：

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create/pages)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sz30/2048--)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sz30/2048--)

或者手动配置：
- **GitHub Pages**: Fork 本仓库 -> 进入 Settings -> Pages -> 开启 Deploy from a branch (选 main 分支) -> Save。
- **Cloudflare Pages**: 登录控制台 -> Pages -> Connect to Git 选中仓库 -> Framework preset 选 `None` -> 部署。

### 方法三： VPS 部署 (Nginx)
1. 在服务器安装 Nginx。
2. 将项目根目录下的 `index.html` 上传至服务器的 Nginx 网页目录（通常是 `/var/www/html`）。
3. (可选) 配置 Nginx 虚拟主机绑定独立域名，重启服务即可。

*(更详尽的部署图文步骤，请参阅内置的 `DEPLOYMENT.md` 部署指南)*


## 📁 项目结构

```text
2048--/
├── assets/                   # 历史文件及媒体资源
├── index.html                # 核心文件：包含所有的 HTML/CSS/JS
└── DEPLOYMENT.md             # 部署指南
```

### 文件说明：
- `assets/`: 存放项目历史文件及媒体文件（如演示截图 `demo_v2.png`）。
- `index.html`: **核心文件**。本游戏已极致精简，所有的游戏界面（HTML）、样式（CSS）以及矩阵计算、动画逻辑（JS）全部封装在此文件中，遵循 KISS 原则，便于分发与部署。
- `DEPLOYMENT.md`: 详细的项目部署指南（包含静态网站托管与 VPS 部署方案）。


## 🎨 自定义

本游戏采用极简的单文件架构，无需配置任何开发环境，只需用记事本或任意编辑器打开 `index.html`：

- **修改外观**：找到顶部的 `<style>` 标签，可以随意修改配色方案、方块圆角或字体大小，定制专属 UI。
- **新增玩法**：找到底部的 `<script>` 标签，所有的矩阵逻辑和计分规则都清晰可见，可轻松创造独特的 2048 变种（例如改成 5x5 棋盘，或是引入全新的彩蛋机制）。


## 🤝 开源协议与协作共建

- 开源协议：[GPL-2.0](https://github.com/sz30/2048--/blob/main/LICENSE.txt)
- 本项目持续更新中，欢迎提交Issue和PRs。让我们一起把这个游戏变得更好玩！


## 🙏 致谢

感谢以下赞助者对本项目的支持：

- [/](#) 提供服务器


## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sz30/2048--&type=date&legend=top-left)](https://www.star-history.com/#sz30/2048--&type=date&legend=top-left)


---
*最后更新：2026年5月*