<div align="right">
  <details>
    <summary >🌐 Other Language</summary>
    <div>
      <div align="center">
        <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=ja">日本語</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=ko">한국어</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=hi">हिन्दी</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=th">ไทย</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=fr">Français</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=de">Deutsch</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=es">Español</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=it">Itapano</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=ru">Русский</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=pt">Português</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=nl">Nederlands</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=pl">Polski</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=ar">العربية</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=fa">فارسی</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=tr">Türkçe</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=vi">Tiếng Việt</a>
        | <a href="https://openaitx.github.io/view.html?user=sz30&project=2048-magic&lang=id">Bahasa Indonesia</a>
      </div>
    </div>
  </details>
</div>

[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md)

# 🎮 2048 ++

一个基于经典2048游戏的增强版本，加入了更多有趣的功能！这个项目是我在闲暇时间开发的一个小游戏，希望能给大家带来一些乐趣。

## 🎯 游戏介绍

2048是一个简单但令人上瘾的数字合并游戏。在4x4的棋盘上，通过上下左右滑动来合并相同的数字，目标是获得2048这个数字（当然，你可以继续玩下去获得更高的分数！）。

### 基本玩法：
- 使用方向键或WASD控制方块移动
- 相同数字的方块相撞时会合并成为它们的和
- 每次移动后会在空白处随机出现一个2或4
- 当无法移动时游戏结束

## ✨ 特色功能

### 1. 撤回功能
- 不小心走错了一步？别担心！
- 点击"撤回"按钮，立即回到上一步
- 支持连续撤回，直到游戏开始状态
- 再也不用因为手滑而懊恼了！

### 2. 隐藏的作弊模式
- 滑动特殊序列：←←→→→→←←（左左右右 右右左左）
- 激活后所有数字都会变成128
- 这是一个彩蛋功能，仅供娱乐使用
- 温馨提示：作弊虽好，但不要贪杯哦！

## 🎯 Demo

🎯 : [试玩](http://34.150.49.127:5000/)
<img width="1279" alt="demo" src="https://github.com/user-attachments/assets/28fb9014-e52e-49b7-a413-a79b5f8749f0" />




## 📁 项目结构
```
2048/
├── static/
│ ├── css/
│ │ └── styles.css # 游戏界面样式
│ └── js/
│ └── script.js # 前端游戏逻辑
├── index.html # 游戏主页面
└── 2048.py # 后端服务器
```

### 文件说明：
- `2048.py`: 使用Flask框架编写的后端服务器，处理游戏逻辑和API请求
- `script.js`: 前端游戏逻辑，包含移动处理、动画效果和特殊功能实现
- `styles.css`: 游戏界面样式，确保游戏美观且响应式
- `index.html`: 游戏主页面，整合所有资源

## 🚀 快速开始

### 方法一：直接下载
1. 下载最新的release版本
2. 确保安装了Python 3.x
3. 安装依赖：`pip install flask`
4. 运行：`python 2048.py`
5. 在浏览器中访问：`http://localhost:9969`

### 方法二：从GitHub克隆
```bash
git clone https://github.com/sz30/2048.git
cd 2048
pip install flask
python 2048.py
```

## 🎨 自定义

你可以通过修改`styles.css`来自定义游戏的外观，或者通过修改`script.js`来调整游戏的行为。所有的代码都有详细的注释，方便你进行修改！

## 📝 许可证

GPL-2.0 license

## 🤝 贡献

持续更新中，欢迎提交Issue和Pull Request！让我们一起把这个游戏变得更好玩！

## 🙏 致谢

感谢以下赞助者对本项目的支持：
- [/](https://#/) 提供服务器
- [Serv00](https://serv00.com/) 提供服务器
  
---
*最后更新：2025年8月*
