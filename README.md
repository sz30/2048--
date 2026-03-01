[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md)

<h1 align="center">2048--</h1>

<p align="center">
  <em>An enhanced version of the classic 2048 game, featuring an undo mechanic and a fast mode!</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-GPL--2.0-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/python-3.x-blue.svg" alt="Python 3.x">
  <img src="https://img.shields.io/badge/framework-Flask-red.svg" alt="Flask">
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
- Enter the magic sequence: ←←→→ →→←← (left, left, right, right; right, right, left, left).
- All tiles will magically turn into 128!
- An Easter egg to skip the early grind — just for fun.


## 🚀 Getting Started

**Method 1: Clone from GitHub**
```bash
git clone https://github.com/sz30/2048--.git
cd 2048--
pip install flask
python 2048--.py
```
Open your browser and go to: [http://localhost:3000](http://localhost:3000)

**Method 2: Docker**
*(For specific containerization DEPLOYMENT strategies, please refer to the built-in 'Deployment.md' guide for the full text.)*

**Method 3: Download Release**
1. Download the latest release.
2. Make sure you have Python 3.x installed.
3. Install dependencies: `pip install flask`
4. Run: `python 2048--.py`
5. Open your browser and go to: [http://localhost:3000](http://localhost:3000)


## 📁 Project Structure
```text
2048--/
├── assets/                   # Project media and screenshots
├── static/
│   ├── css/
│   │   └── styles.css        # Game styles
│   └── js/
│       └── script.js         # Frontend game logic
├── index.html                # Main game page
├── 2048--.py                   # Backend server
├── requirements.txt          # Python dependencies
├── Dockerfile                # Docker image configuration
├── docker-compose.yml        # Docker compose configuration
└── DEPLOYMENT.md             # Deployment guide
```

**File Descriptions:**
- `assets/`: Stores project images such as demonstration screenshots (`demo_v1.png`, `demo_v2.png`, etc.).
- `2048--.py`: Backend server written with Flask, handles game logic and API requests.
- `script.js`: Frontend game logic, including moves, animations, and special features.
- `styles.css`: Game styles, making sure everything looks nice and responsive.
- `index.html`: The main page that brings everything together.
- `requirements.txt`: Lists the Python dependencies needed to run the backend.
- `Dockerfile`: Defines the environment to run the app using Docker.
- `docker-compose.yml`: Simplifies Docker deployment by managing services.
- `DEPLOYMENT.md`: Step-by-step guide for deploying the application.


## 🎨 Customization

Want to make it your own? Tweak `styles.css` for a new look, or dive into `script.js` to change up the gameplay. All code is well-commented for easy hacking!


## 📝 License & Contributing

- license: [GPL-2.0](https://github.com/sz30/2048--/blob/main/LICENSE.txt)
- Still updating! Issues and PRs are super welcome—let’s make this game even more awesome together!


## 🙏 Acknowledgements

Thanks to the following sponsors for supporting this project:
- [/](#) providing the server


## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sz30/2048--&type=date&legend=top-left)](https://www.star-history.com/#sz30/2048--&type=date&legend=top-left)


---
_Last updated: Mar. 2026_
