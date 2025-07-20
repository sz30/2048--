#!/bin/bash

# 2048游戏服务监控脚本

echo "=== 2048游戏服务状态监控 ==="
echo "时间: $(date)"
echo ""

# 检查Docker服务状态
echo "📦 Docker服务状态:"
if systemctl is-active --quiet docker; then
    echo "✅ Docker服务运行正常"
else
    echo "❌ Docker服务未运行"
    exit 1
fi

echo ""

# 检查容器状态
echo "🐳 容器状态:"
if docker ps | grep -q "2048-game"; then
    echo "✅ 2048游戏容器运行中"
    echo "容器信息:"
    docker ps | grep "2048-game"
else
    echo "❌ 2048游戏容器未运行"
    echo "尝试启动容器..."
    docker-compose up -d
fi

echo ""

# 检查端口监听
echo "🌐 端口监听状态:"
if netstat -tulpn | grep -q ":9969"; then
    echo "✅ 端口9969正在监听"
    netstat -tulpn | grep ":9969"
else
    echo "❌ 端口9969未监听"
fi

echo ""

# 检查应用响应
echo "🔍 应用响应测试:"
if curl -s -o /dev/null -w "%{http_code}" http://localhost:9969 | grep -q "200"; then
    echo "✅ 应用响应正常 (HTTP 200)"
else
    echo "❌ 应用无响应或错误"
fi

echo ""

# 显示资源使用情况
echo "💾 资源使用情况:"
echo "内存使用:"
free -h | grep "Mem"
echo ""
echo "磁盘使用:"
df -h | grep "/$"
echo ""
echo "Docker容器资源使用:"
docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.NetIO}}"

echo ""
echo "=== 监控完成 ===" 