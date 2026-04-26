# 2048-- 部署指南

由于本项目的架构已重构为**纯前端静态单页应用（SPA）**，无需要配置 Python、Flask 或 Docker 环境。整个游戏只有一个 `index.html`（内嵌了所有的 CSS 与 JS 以及依赖资源），这使得部署变得极其简单且**完全免费**。

以下提供两种主流的部署方案：

---

## 方案一：静态网站托管服务（极力推荐，免费且带全球 CDN）

目前最流行、最简单的方式。无需购买服务器，无需运维。

### 1. GitHub Pages (最方便)
1. Fork 本仓库
2. 进入 Fork 的仓库，点击 `Settings` -> `Pages`
3. 在 `Build and deployment` 下拉菜单中选择 `Deploy from a branch`
4. Branch 选择 `main`，文件夹选择 `/ (root)`，点击 `Save`
5. 等待 1 分钟左右，刷新页面顶部会显示你的专属游戏链接！

### 2. Cloudflare Pages (速度最快)
1. 注册并登录 [Cloudflare](https://dash.cloudflare.com/)
2. 在左侧菜单选择 `Workers & Pages`
3. 点击 `Create application` -> 选择 `Pages` 标签页 -> `Connect to Git`，授权 GitHub 账号
4. 选择 `2048--` 仓库，点击 `Begin setup`
5. `Framework preset` 选择 `None`，`Build command` 留空，`Build output directory` 留空
6. 点击 `Save and Deploy`。你的游戏将立即上线，并由 Cloudflare 提供全球边缘节点加速！

---

## 方案二：传统 VPS 部署 (使用 Nginx 托管)

如果有自己的服务器（如阿里云, 谷歌云等），且想托管在自己的独立域名下：

### 1. 安装 Nginx
还没安装 Nginx 的，先在服务器上安装：
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx -y

# CentOS/RHEL
sudo yum install epel-release
sudo yum install nginx -y
```

### 2. 上传文件到服务器
将本仓库的 `index.html` 上传到服务器的 Nginx 默认网页根目录中，通常是 `/var/www/html/`。

```bash
# 在本地项目目录下，使用 scp 上传到你的 VPS：
scp index.html root@your-vps-ip:/var/www/html/
```
*(提示：记得先把 `/var/www/html/` 下原有的默认文件清空)*

### 3. (可选) 配置 Nginx 绑定域名
如果想绑定独立域名，可以在 `/etc/nginx/sites-available/` 下创建一个配置文件（如 `2048.conf`）：

```nginx
server {
    listen 80;
    server_name your-domain.com; # 替换为你的真实域名

    root /var/www/html;          # 确保路径对应你上传的路径
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

启用配置并重启 Nginx：
```bash
sudo ln -s /etc/nginx/sites-available/2048.conf /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

### 4. 访问游戏
在浏览器中输入服务器 IP 或绑定的域名即可开始畅玩！