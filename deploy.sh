#!/bin/bash

# 2048游戏自动部署脚本
# 适用于serv00免费VPS

echo "=== 2048游戏部署脚本 ==="
echo "开始部署..."

# 检查Docker是否安装
if ! command -v docker &> /dev/null; then
    echo "错误: Docker未安装，请先安装Docker"
    exit 1
fi

# 检查Docker Compose是否安装
if ! command -v docker-compose &> /dev/null; then
    echo "错误: Docker Compose未安装，请先安装Docker Compose"
    exit 1
fi

# 停止并删除旧容器（如果存在）
echo "清理旧容器..."
docker-compose down 2>/dev/null || true
docker stop 2048-game 2>/dev/null || true
docker rm 2048-game 2>/dev/null || true

# 构建新镜像
echo "构建Docker镜像..."
docker-compose build --no-cache

# 启动服务
echo "启动服务..."
docker-compose up -d

# 等待服务启动
echo "等待服务启动..."
sleep 5

# 检查服务状态
if docker-compose ps | grep -q "Up"; then
    echo "✅ 部署成功！"
    echo "🌐 访问地址: http://localhost:9969"
    echo "📊 查看日志: docker-compose logs -f"
    echo "🛑 停止服务: docker-compose down"
else
    echo "❌ 部署失败，请检查日志"
    docker-compose logs
    exit 1
fi 