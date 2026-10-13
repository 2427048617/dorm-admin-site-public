# 宿舍查寝销假管理系统 · 公开演示版网站

本仓库为《宿舍查寝销假管理系统建设方案》的**脱敏公开演示版**静态网站，可一键部署到 **GitHub Pages**。

> **部署说明**：本目录为公开版本，仅含对外展示内容（项目背景、方案总览、功能概览、角色简介、实施计划、零成本预算、结论建议），不含任何内部敏感信息（人脸核验技术细节、数据同步机制细节、内部流程细节等）。完整版保留在私有仓库，不公开部署。

## 网站内容

| 页面 | 文件 | 说明 |
|---|---|---|
| 首页概览 | `index.html` | 项目背景、方案总览架构图、双线开发、关键数据 |
| 功能模块 | `features.html` | 功能模块概览、角色职责简表 |
| 实施计划与预算 | `plan.html` | 费用预算（一期 0 元）、双线实施计划、甘特示意 |
| 结论与立项建议 | `conclusion.html` | 方案结论、立项建议 |

## 目录结构

```
dorm-admin-site-public/
├── index.html            # 首页（必须位于仓库根目录）
├── features.html         # 功能模块
├── plan.html             # 实施计划与预算
├── conclusion.html       # 结论与立项建议
├── favicon.svg           # 站点图标
├── assets/
│   ├── css/
│   │   └── style.css     # 全站统一样式
│   └── js/
│       └── main.js       # 导航交互脚本
└── README.md             # 本文件（部署说明）
```

## 本地预览

任选一种方式：

```bash
# 方式一：VS Code Live Server 插件
# 右键 index.html → Open with Live Server

# 方式二：Python 简易服务器
python -m http.server 8080
# 浏览器打开 http://localhost:8080
```

## 部署到 GitHub Pages

### 方式一：新公开仓库

1. 在 GitHub 新建公开仓库（如 `dorm-admin-site-public`）。
2. 将本目录内所有文件上传到仓库根目录（`index.html` 必须位于根目录）。
3. 打开仓库 **Settings → Pages**：
   - **Source** 选择 `Deploy from a branch`
   - **Branch** 选择 `main`，目录选 `/ (root)`
4. 点击 **Save**，等待 1~2 分钟构建完成。
5. 访问 `https://<你的用户名>.github.io/<仓库名>/` 即可看到网站。

### 方式二：已有仓库（推到子目录）

```bash
git add dorm-admin-site-public/
git commit -m "添加公开演示版网站"
git push
```

然后在 **Settings → Pages** 中设置分支与子目录，访问对应 URL。

## 公开版与完整版分工

- **公开版（本目录）**：部署到公开仓库 + GitHub Pages，供对外演示与宣传。
- **完整版**：仅保留在私有仓库，包含全部内部方案内容，不公开访问。

## 自定义

- **站点图标**：替换 `favicon.svg` 即可。
- **主题色**：修改 `assets/css/style.css` 顶部的 CSS 变量（`--primary` 等）。
- **页面文案**：各 `*.html` 为纯静态页面，直接编辑对应文件。

## 许可

仅供校园内部项目参考使用。
