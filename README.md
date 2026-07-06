# 百草浮生 · AI 问诊

React + Vite 制作的推演式中医问诊游戏网页。

## 本地打开

```bash
npm install
npm run dev
```

终端出现地址后，在浏览器中打开即可。终端关闭后，本地地址也会停止。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个仓库。
2. 把本项目文件推送到仓库的 `main` 分支。
3. 打开仓库的 `Settings → Pages`。
4. 在 `Build and deployment → Source` 中选择 `GitHub Actions`。
5. 打开仓库的 `Actions` 页面，等待部署任务变成绿色。
6. 部署完成后，网站地址会显示在任务详情和 `Settings → Pages` 中。

项目已包含 `.github/workflows/deploy.yml`，以后每次推送到 `main`
都会自动重新构建并发布网站。
