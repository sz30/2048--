[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md)

<h1 align="center">2048--</h1>

<p align="center">
  <em>An enhanced version of the classic 2048 game, featuring an undo mechanic and a fast mode!</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-GPL--2.0-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
</p>


## 🎮 Demo

👉 [Play here](http://2048.765431.xyz/)
<div align="center">
  <img width="800" alt="2048-- Demo" src="assets/demo_v2.png" />
</div>


## ✨ Special Features

### 1. Undo Function
- Made a wrong move? No worries!
- Just hit the "Undo" button to go back one step.
- You can undo as many times as you like, all the way back to the start.
- Never let a slip of the finger ruin your game again!

### 2. Fast Mode
- Enter the magic sequence: ⬅️⬅️ ➡️➡️  ➡️➡️ ⬅️⬅️ (left, left, right, right; right, right, left, left).
- All tiles will magically turn into 128!
- An Easter egg to skip the early grind — just for fun.


## 🚀 Getting Started & Deployment

This project has been refactored into a **Pure Frontend Single-Page Application (SPA)**, making deployment and playing extremely lightweight.

### Method 1: Play Locally (Easiest)
- `git clone https://github.com/sz30/2048--.git` or download the zip.
- Unzip it and simply double-click `index.html` to start playing in your browser!

### Method 2: Static Site Hosting (Recommended)
Zero-cost, one-click deployment with global CDN using hosting platforms. Click the buttons below to deploy instantly:

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/sz30/2048--)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sz30/2048--)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sz30/2048--)

Or configure manually:
- **GitHub Pages**: Fork repo -> Settings -> Pages -> Enable Deploy from a branch (select main) -> Save.
- **Cloudflare Pages**: Dashboard -> Pages -> Connect to Git (select repo) -> Framework preset: `None` -> Deploy.

### Method 3: Traditional VPS Deployment (Nginx)
For advanced users with their own servers (e.g., Serv00):
1. Install Nginx on your server.
2. Upload `index.html` to your Nginx web directory (usually `/var/www/html`).
3. (Optional) Configure an Nginx virtual host for your domain and restart the service.

*(For a detailed step-by-step guide, please refer to the built-in `DEPLOYMENT.md`)*


## 📁 Project Structure
```text
2048--/
├── assets/                   # Historical files and media resources
├── index.html                # Main file containing all HTML/CSS/JS
└── DEPLOYMENT.md             # Deployment guide
```

**File Descriptions:**
- `assets/`: Stores historical project files and media resources (such as demonstration screenshots `demo_v2.png`).
- `index.html`: **The core file**. This game has been extremely stripped down; all structure (HTML), styling (CSS), matrix calculation, and game mechanics (JS) are encapsulated in this single file. This follows the KISS principle, making distribution and hosting extremely easy.
- `DEPLOYMENT.md`: Step-by-step guide for deploying the application (Static hosting & VPS).


## 🎨 Customization

Thanks to the ultra-minimalist single-file architecture, modding this game couldn't be easier! No build tools or dev environments required. Just open `index.html` in any text editor:

- **Tweak the UI**: Locate the `<style>` block at the top to completely overhaul the theme colors, tile border-radius, or typography.
- **Hack the Mechanics**: Scroll down to the `<script>` block where all matrix logic and scoring live. Want a 5x5 board? A new cheat code? Go for it!

The code is standalone and begging to be hacked. Have fun!


## 📝 License & Contributing

- license: [GPL-2.0](https://github.com/sz30/2048--/blob/main/LICENSE.txt)
- Still updating! Issues and PRs are super welcome—let’s make this game even more awesome together!


## 🙏 Acknowledgements

Thanks to the following sponsors for supporting this project:
- [/](#) providing the server


## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sz30/2048--&type=date&legend=top-left)](https://www.star-history.com/#sz30/2048--&type=date&legend=top-left)


---
_Last updated: May. 2026_
