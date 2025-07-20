# 使用Python 3.9作为基础镜像
FROM python:3.9-slim

# 设置工作目录
WORKDIR /app

# 复制依赖文件
COPY requirements.txt .

# 安装Python依赖
RUN pip install --no-cache-dir -r requirements.txt

# 复制应用代码
COPY . .

# 暴露端口
EXPOSE 9969

# 设置环境变量
ENV FLASK_APP=2048.py
ENV FLASK_ENV=production

# 启动命令
CMD ["python", "2048.py"] 