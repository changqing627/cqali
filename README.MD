IP: 120.55.180.71

## 1.升级操作系统
```
apt-get update
```

## 2.安装npm
```
apt-get install npm
y
```

## 3. 安装 n
```
npm install n -g
n latest
```

### 9.启动服务
cd tasks
node main.js
cd ..
node sever.js

### 10.永久启动服务
npm install pm2 -g
pm2 start server.js --name "zhufengnodejs-crawl"

