# 2048游戏部署指南 - serv00免费VPS

## 📋 前置要求

- serv00免费VPS容器
- SSH访问权限
- 基本的Linux命令行知识

## 🚀 快速部署（推荐）

### 1. 上传项目文件

将整个项目文件夹上传到serv00容器：

```bash
# 方法1: 使用scp上传
scp -r ./2048 username@your-serv00-ip:/home/username/

# 方法2: 使用git（如果项目在GitHub上）
git clone https://github.com/your-username/2048.git
cd 2048
```

### 2. 一键部署

```bash
# 进入项目目录
cd /path/to/2048

# 给部署脚本执行权限
chmod +x deploy.sh

# 运行自动部署脚本
./deploy.sh
```

### 3. 验证部署

```bash
# 查看服务状态
docker-compose ps

# 查看日志
docker-compose logs -f

# 测试访问
curl http://localhost:9969
```

## 🔧 手动部署

如果自动部署失败，可以手动执行以下步骤：

### 1. 安装Docker（如果未安装）

```bash
# 更新包管理器
sudo apt update

# 安装Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 安装Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 2. 构建和运行

```bash
# 构建镜像
docker build -t 2048-game .

# 运行容器
docker run -d -p 9969:9969 --name 2048-game --restart unless-stopped 2048-game
```

## 🌐 访问游戏

部署成功后，通过以下方式访问：

- **本地访问**: http://localhost:9969
- **公网访问**: http://your-serv00-ip:9969
- **域名访问**: http://your-domain.com:9969（如果配置了域名）

## 📊 管理命令

```bash
# 查看服务状态
docker-compose ps

# 查看实时日志
docker-compose logs -f

# 重启服务
docker-compose restart

# 停止服务
docker-compose down

# 更新代码后重新部署
./deploy.sh
```

## 🔍 故障排除

### 常见问题

1. **端口被占用**
   ```bash
   # 查看端口占用
   netstat -tulpn | grep 9969
   
   # 修改端口（编辑docker-compose.yml）
   ports:
     - "8080:9969"  # 改为8080端口
   ```

2. **Docker权限问题**
   ```bash
   # 将用户添加到docker组
   sudo usermod -aG docker $USER
   # 重新登录或重启
   ```

3. **内存不足**
   ```bash
   # 清理Docker缓存
   docker system prune -a
   ```

### 查看详细日志

```bash
# 查看容器日志
docker logs 2048-game

# 查看Docker Compose日志
docker-compose logs

# 进入容器调试
docker exec -it 2048-game /bin/bash
```

## 🔄 更新部署

当代码有更新时：

```bash
# 1. 上传新代码
# 2. 重新部署
./deploy.sh

# 或者手动更新
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## 📝 注意事项

1. **免费VPS限制**: serv00免费容器可能有资源限制，建议监控内存和CPU使用情况
2. **端口开放**: 确保9969端口在防火墙中开放
3. **域名配置**: 如需使用域名访问，请配置DNS解析到serv00 IP
4. **备份**: 定期备份游戏数据和配置

## 🆘 获取帮助

如果遇到问题：
1. 查看日志文件
2. 检查Docker和系统状态
3. 参考serv00官方文档
4. 联系技术支持 