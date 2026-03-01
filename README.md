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

An enhanced version of the classic 2048 game, now with even more fun features! This is a little project I whipped up in my spare time—hope it brings you some joy!

## 🎯 Game Intro

2048 is a simple yet addictive number-merging game. On a 4x4 grid, swipe up, down, left, or right to merge tiles with the same number. The goal? Reach 2048 (but hey, you can keep going for even higher scores)!

**How to play:**
- Move tiles with arrow keys (←↑→↓), or swipe on mobile.
- When two tiles with the same number collide, they merge into one.
- After each move, a new 2 or 4 will randomly appear in an empty spot.
- The game ends when there are no more moves left.

## ✨ Special Features

### 1. Undo Function
- Made a wrong move? No worries!
- Just hit the "Undo" button to go back one step.
- You can undo as many times as you like, all the way back to the start.
- Never let a slip of the finger ruin your game again!

### 2. Secret Cheat Mode
- Enter the magic sequence: ←←→→ →→←← (left, left, right, right; right, right, left, left).
- All tiles will magically turn into 128!
- An Easter egg to skip the early grind — just for fun.
- Pro tip: Cheating is fun, but don’t overdo it! 😉

## 🎯 Demo

🎯 : [Play here](http://2048.765431.xyz/)
<img width="1279" alt="demo" src="assets/demo_v2.png" />

## 📁 Project Structure
```text
2048/
├── assets/                   # Project media and screenshots
├── static/
│   ├── css/
│   │   └── styles.css        # Game styles
│   └── js/
│       └── script.js         # Frontend game logic
├── index.html                # Main game page
├── 2048.py                   # Backend server
├── requirements.txt          # Python dependencies
├── Dockerfile                # Docker image configuration
├── docker-compose.yml        # Docker compose configuration
└── DEPLOYMENT.md             # Deployment guide
```

**File Descriptions:**
- `assets/`: Stores project images such as demonstration screenshots (`demo_v1.png`, `demo_v2.png`, etc.).
- `2048.py`: Backend server written with Flask, handles game logic and API requests.
- `script.js`: Frontend game logic, including moves, animations, and special features.
- `styles.css`: Game styles, making sure everything looks nice and responsive.
- `index.html`: The main page that brings everything together.
- `requirements.txt`: Lists the Python dependencies needed to run the backend.
- `Dockerfile`: Defines the environment to run the app using Docker.
- `docker-compose.yml`: Simplifies Docker deployment by managing services.
- `DEPLOYMENT.md`: Step-by-step guide for deploying the application.

## 🚀 Getting Started

**Method 1: Download Release**
1. Download the latest release.
2. Make sure you have Python 3.x installed.
3. Install dependencies: `pip install flask`
4. Run: `python 2048.py`
5. Open your browser and go to: [http://localhost:3000](http://localhost:3000)

**Method 2: Clone from GitHub**
```bash
git clone https://github.com/sz30/2048.git
cd 2048
pip install flask
python 2048.py
```

## 🎨 Customization

Want to make it your own? Tweak `styles.css` for a new look, or dive into `script.js` to change up the gameplay. All code is well-commented for easy hacking!

## 📝 License

GPL-2.0 license

## 🤝 Contributing

Still updating! Issues and Pull Requests are super welcome—let’s make this game even more awesome together!

## 🙏 Acknowledgements

Thanks to the following sponsors for supporting this project:
- [/](#) providing the server

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sz30/2048--&type=date&legend=top-left)](https://www.star-history.com/#sz30/2048--&type=date&legend=top-left)

---
_Last updated: Mar. 2026_
