# LeiBlog

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fleilog&project-name=leiblog&repository-name=leiblog)

>一个基于 VitePress 构建的现代化个人博客系统，具有优雅的设计和丰富的功能。

## ✨ 功能特性

- 📝 **Markdown 写作** - 支持标准 Markdown 语法，专注于内容创作
- 🏷️ **分类标签** - 完善的文章分类和标签系统
- 📅 **归档功能** - 按时间归档文章，方便查找历史内容
- 🎬 **娱乐模块** - 电影、音乐、电视剧推荐和评价
- 📚 **系列文章** - 支持文档和笔记系列化管理
- 💬 **评论系统** - 集成 Waline 评论系统
- 🎨 **主题定制** - 基于 VitePress 的自定义主题
- 📱 **响应式设计** - 完美适配桌面端和移动端
- ⚡ **快速加载** - 基于 Vite 的极速构建和热更新
- 🔍 **搜索功能** - 内置全文搜索
- 🌙 **暗色模式** - 支持明暗主题切换

## 🛠️ 技术栈

- **框架**: [VitePress](https://vitepress.dev/) - 基于 Vite 和 Vue 3 的静态站点生成器
- **UI 框架**: [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- **构建工具**: [Vite](https://vitejs.dev/) - 下一代前端构建工具
- **包管理器**: [pnpm](https://pnpm.io/) - 快速、节省磁盘空间的包管理器
- **评论系统**: [Waline](https://waline.js.org/) - 简洁、安全的评论系统
- **进度条**: [nprogress-v2](https://github.com/rstacruz/nprogress) - 页面加载进度条
- **插件扩展**:
  - `vitepress-markdown-timeline` - 时间线组件
  - `vitepress-sidebar` - 侧边栏自动生成

## 📦 安装

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 克隆项目

```bash
git clone https://github.com/your-username/leiblog.git
cd leiblog
```

### 安装依赖

```bash
pnpm install
```

## 🚀 使用方法

### 开发模式

```bash
pnpm run blog:dev
```

启动开发服务器，默认访问 `http://localhost:5173`

### 构建生产版本

```bash
pnpm run blog:build
```

构建静态文件到 `blog/.vitepress/dist` 目录

### 预览生产版本

```bash
pnpm run blog:preview
```

预览构建后的静态站点

## 📁 项目结构

```
leiblog/
├── blog/                    # 博客内容目录
│   ├── .vitepress/         # VitePress 配置
│   │   ├── config.mts      # 站点配置
│   │   ├── theme/          # 自定义主题
│   │   └── content/        # 内容加载器
│   ├── articles/           # 文章目录
│   │   ├── lists/          # 文章列表页
│   │   ├── category/       # 分类页
│   │   ├── tag/            # 标签页
│   │   └── archive/        # 归档页
│   ├── fun/                # 娱乐模块
│   │   ├── movies/         # 电影
│   │   ├── music/          # 音乐
│   │   └── tv-shows/       # 电视剧
│   ├── series/             # 系列文章
│   │   ├── docs/           # 文档系列
│   │   └── notes/          # 笔记系列
│   └── site/               # 站点页面
│       ├── about/          # 关于页面
│       ├── author/         # 作者页面
│       └── message/        # 留言页面
├── package.json            # 项目配置
├── vercel.json            # Vercel 部署配置
└── .gitignore             # Git 忽略文件
```

## 📝 写作指南

### 创建新文章

1. 在 `blog/articles/` 目录下创建 `.md` 文件
2. 添加 frontmatter 元数据：

```yaml
---
title: 文章标题
date: 2024-01-01
categories: [分类名称]
tags: [标签1, 标签2]
---

# 文章内容

这里是文章正文...
```

### Frontmatter 字段说明

- `title`: 文章标题
- `date`: 发布日期 (YYYY-MM-DD)
- `categories`: 文章分类（数组）
- `tags`: 文章标签（数组）
- `description`: 文章描述（可选）
- `author`: 作者（可选）

## 🚀 部署

### Vercel 部署（推荐）

点击上方的 "Deploy with Vercel" 按钮，或者：

1. Fork 本项目到你的 GitHub
2. 在 Vercel 中导入项目
3. Vercel 会自动检测并使用 `vercel.json` 配置进行部署

### 手动部署

1. 构建项目：
```bash
pnpm run blog:build
```

2. 将 `blog/.vitepress/dist` 目录部署到任何静态托管服务

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

[MIT License](LICENSE)

## 🙏 致谢

- [VitePress](https://vitepress.dev/) - 优秀的静态站点生成器
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Waline](https://waline.js.org/) - 简洁的评论系统

---

⭐ 如果这个项目对你有帮助，请给它一个 Star！