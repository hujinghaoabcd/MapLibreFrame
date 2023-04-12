# 项目初始化配置

### 1 Github拉取项目 
```bash
git clone https://github.com/hujinghaoabcd/MapLibreFrame.git
```
### 2 创建中文README_CN.md
```bash
touch README_CN.md
```

### 3 初始化npm，在终端中输入以下命令
```bash
npm init
```
### 4 创建docs、src、examples、dist、lib、tests文件夹
```
mkdir docs src examples dist lib tests
```

### 5 创建.gitignore文件，忽略node_modules文件夹
```
touch .gitignore
```

### 6 创建exports.js、index.js
```
touch exports.js index.js
```

### 7 安装maplibre-gl 、http-server等项目依赖
```bash
npm install maplibre-gl --save

npm install @maplibre/maplibre-gl-geocoder --save

npm install http-server --save
```
```bash
npm install browserify --save-dev

npm install tinyify --save-dev

npm install watchify --save-dev

npm install tape --save-dev

npm install uglifyify --save-dev

npm install ncp --save-dev

```
### 8 添加一些通用的js包到lib

### 9 创建一个index.html

```bash
touch index.html
```

### 10 配置package.json文件

```json
{
  "name": "maplibreframe",
  "version": "1.0.0",
  "description": "MapLibreFrame is a MapLibre-based webgis development framework that provides a wide range of features and tools for building efficient, dynamic GIS applications.",
  "main": "index.js",
  "scripts": {
    "build": "browserify -p tinyify -g uglifyify exports.js > dist/maplibreframe.min.js && ncp ./src/css/maplibreframe.css ./dist/maplibreframe.css --stopOnErr",
    "dev": "watchify exports.js --verbose -o dist/maplibreframe.js ",
    "all": "browserify -p tinyify exports.js > dist/maplibreframe.min.js && watchify exports.js --verbose -o dist/maplibreframe.js ",
    "serve": "http-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/hujinghaoabcd/MapLibreFrame.git"
  },
  "keywords": [
    "MapLibre",
    "framework",
    "webgis",
    "GIS",
    "WebGL"
  ],
  "author": "@jinghaohu",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/hujinghaoabcd/MapLibreFrame/issues"
  },
  "homepage": "https://github.com/hujinghaoabcd/MapLibreFrame#readme",
  "dependencies": {
    "@maplibre/maplibre-gl-geocoder": "^1.5.0",
    "http-server": "^14.1.1",
    "maplibre-gl": "^2.4.0"
  },
  "devDependencies": {
    "browserify": "^17.0.0",
    "ncp": "^2.0.0",
    "tape": "^5.6.3",
    "tinyify": "^4.0.0",
    "uglifyify": "^5.0.2",
    "watchify": "^4.0.0"
  }
}
```