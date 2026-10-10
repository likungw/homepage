# Kun Li Homepage · Purple Motion V3

此补丁基于上一版 `homepage_gallery_v2` 源码制作，沿用已有的 Next.js 13、Framer Motion 和 Tailwind CSS，无需安装新依赖。

## 这版改动

1. **Our Research Directions**：滚动到文字区域时逐字打字，只播放一次；预留正文的完整布局高度，避免抖动；系统开启“减少动态效果”时自动显示全文。
2. **Research Directions → project showcase**：三个研究方向改为紫色大幅项目展示卡片；桌面端左右交错、移动端上下排列；滚动入场、平滑悬停、独立的科学示意动效。
3. **整站紫色系**：改为紫色强调色与渐变，Home 首屏、按钮、导航 active 状态及动图相册边框/背面统一协调。
4. **保留原效果**：四张研究动图的倾斜叠放、拖拽、翻面、视频自动播放均保持；**About 页面及其照片相册没有修改**。

## 本地安装（Windows + VS Code）

1. 备份 `D:\Home\homepage` 下将被覆盖的文件。
2. 解压 ZIP，将其中 `components`、`pages`、`styles` 文件夹**合并**到 `D:\Home\homepage`，选择覆盖同名文件。不要删除原项目，也不要覆盖/删除 `.git` 文件夹。
3. 如果开发服务器已经运行，保存后通常自动刷新；如未运行，在项目根目录执行 `npm.cmd run dev`。
4. 打开 `http://localhost:3000`，滚动到下方 **Our Research Directions** 查看打字机和交错项目卡片。浏览器缓存旧版时按 `Ctrl + Shift + R` 强制刷新。

## 本次需要覆盖/新增的源码文件

- `pages/index.tsx`（覆盖）
- `components/ResearchShowcase.tsx`（覆盖）
- `components/ResearchDirections.tsx`（新增）
- `components/TypewriterText.tsx`（新增）
- `components/NavLink.tsx`（覆盖）
- `styles/globals.css`（覆盖）

**重要：** 未覆盖 `data/research.ts`，你已经设置的四张动图路径、研究方向内容和 About 个人资料都将保留。主页独立使用一组紫色动图强调色，位置在 `pages/index.tsx` 的 `galleryPalette`。

## 以后自己微调

- 打字速度：`pages/index.tsx` 中 `<TypewriterText ... speed={27} />`，数字越小越快（单位：毫秒/字符）。
- 打字正文：修改 `pages/index.tsx` 中的 `researchVision`。
- 三个方向的标题、说明、关键词：`data/research.ts` 中 `researchDirections`。
- 研究动图：`data/research.ts` 中 `researchDemos[*].mediaSrc`，视频放到 `public/research/`。
- 紫色调、卡片间距、动画细节：`styles/globals.css` 尾部 `Version 3 · purple research studio` 区域。
- 卡片进入动画的弹簧参数：`components/ResearchDirections.tsx` 中 `transition={{ type: "spring", ... }}`。

## 验证范围

- 新增/改动的 TSX 已通过 TypeScript transpile 的语法检查，CSS 通过 PostCSS 解析。
- 未新增依赖；未改 `package.json`、About 页面、论文和成员数据。
- 当前执行环境没有完整的 Next.js 依赖，因此**未完成 `npm run build` 和真实浏览器交互验收**；请在本地查看，如果有报错，发给我终端的第一条错误。
