# GitHub Pages 部署教學指南

本文件說明如何使用 `gh-pages` 套件，將 Vue 3 + Vite 專案部署到 GitHub Pages。

---

## 目錄
1. [前置要求](#前置要求)
2. [設定步驟](#設定步驟)
3. [部署流程](#部署流程)
4. [驗證部署](#驗證部署)
5. [常見問題](#常見問題)

---

## 前置要求

- Node.js 版本 20.19.0 或更高（或 22.12.0 以上）
- npm 已安裝
- Git 已配置並能推送到 GitHub
- 已有 GitHub 帳號與 repository

---

## 設定步驟

### 1. 安裝 gh-pages 套件

在專案根目錄執行：

```bash
npm install --save-dev gh-pages
```

或如果已在 `devDependencies` 中，直接執行：

```bash
npm install
```

### 2. 設定 `vite.config.js`

在 `vite.config.js` 中加入 `base` 路徑。若部署到 `https://username.github.io/repository-name/` 格式，需設定：

```javascript
export default defineConfig({
  base: '/repository-name/',  // 改為你的 repository 名稱
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  // ... 其他設定
})
```

**注意：**
- 若是 `username.github.io` 類型的 repository，`base` 可設為 `/`
- 確保 repository 名稱與設定相符

### 3. 更新 `package.json`

在 `scripts` 區塊新增部署指令：

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**指令說明：**
- `predeploy`：執行 `deploy` 前會自動執行 `build`
- `deploy`：將 `dist` 資料夾推送到 `gh-pages` 分支

---

## 部署流程

### 步驟 1：確保程式碼已提交

```bash
git add .
git commit -m "準備部署到 GitHub Pages"
git push origin main  # 或你的主要分支
```

### 步驟 2：執行部署

```bash
npm run deploy
```

**過程說明：**
1. 自動執行 `npm run build`，編譯專案到 `dist` 資料夾
2. `gh-pages` 套件會將 `dist` 內容推送到 `gh-pages` 分支
3. 部署完成後會顯示成功訊息

### 步驟 3：設定 GitHub Pages

到你的 GitHub repository：

1. 進入 **Settings > Pages**
2. 在 **Build and deployment** 區塊中：
   - **Source** 選擇 `Deploy from a branch`
   - **Branch** 選擇 `gh-pages` 和 `/ (root)`
3. 點擊 **Save** 確認設定

---

## 驗證部署

### 檢查部署狀態

1. **GitHub Actions 日誌**
   - 到 repository 的 **Actions** 標籤
   - 查看最新的 `pages build and deployment` 日誌
   - 確認部署成功（綠色勾勾）

2. **Pages 設定**
   - 進入 **Settings > Pages**
   - 查看 "Your site is live at" 下顯示的網址
   - 網址格式應為：`https://username.github.io/repository-name/`

3. **訪問網站**
   - 等待 1-2 分鐘讓 GitHub 處理
   - 在瀏覽器訪問顯示的網址
   - 確認頁面正常加載

---

## 常見問題

### Q1: 部署後頁面顯示 404 或空白？

**原因：** `vite.config.js` 中的 `base` 路徑設定不正確。

**解決方法：**
```javascript
// 錯誤
base: '/repository-name'  // 缺少末尾 /

// 正確
base: '/repository-name/'  // 有末尾 /
```

修改後重新部署：
```bash
npm run deploy
```

### Q2: 部署後資源（圖片、CSS）加載失敗？

**原因：** 相對路徑受 `base` 設定影響。

**解決方法：**
- 使用別名 `@` 導入資源：
  ```javascript
  import img from '@/assets/images/avatar.jpeg'
  ```
- 確保 `vite.config.js` 有正確設定 `alias`：
  ```javascript
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
  ```

### Q3: 如何更新已部署的網站？

修改程式碼後，執行：
```bash
npm run deploy
```

自動化流程：
1. 新程式碼編譯到 `dist`
2. `dist` 推送到 `gh-pages` 分支
3. GitHub 自動更新網站

### Q4: 部署時出現權限錯誤？

**原因：** Git 認證失敗。

**解決方法：**
- 確保 GitHub SSH 金鑰已配置：
  ```bash
  git config user.name "Your Name"
  git config user.email "your-email@example.com"
  ```
- 或使用 GitHub Token 登入

### Q5: gh-pages 分支不存在時會怎樣？

**正常流程：** `gh-pages` 套件會自動建立 `gh-pages` 分支並推送。

如果遇到問題，可手動建立空分支：
```bash
git checkout --orphan gh-pages
git rm -rf .
git commit --allow-empty -m "Init gh-pages"
git push origin gh-pages
```

### Q6: 如何設定自訂域名？

1. 到 **Settings > Pages > Custom domain**
2. 輸入你的自訂域名（例：`portfolio.example.com`）
3. 在域名註冊商設定 DNS 指向 GitHub Pages
4. 確認 **Enforce HTTPS** 已啟用

---

## 最佳實踐

### 1. 定期備份主分支
```bash
git push origin main
```

### 2. 在部署前測試本地版本
```bash
npm run build
npm run preview
```

### 3. 監控部署日誌
- 定期檢查 GitHub Actions
- 確認沒有隱藏的部署失敗

### 4. 版本管理
- `main` 分支：開發版本
- `gh-pages` 分支：已部署版本（不需手動編輯）

### 5. 使用 `.gitignore` 排除不必要的檔案
```
node_modules/
dist/
.DS_Store
```

---

## 相關命令速查

| 指令 | 說明 |
|------|------|
| `npm run dev` | 本地開發伺服器 |
| `npm run build` | 編譯生產版本 |
| `npm run preview` | 預覽編譯後的版本 |
| `npm run deploy` | 部署到 GitHub Pages |

---

## 延伸閱讀

- [GitHub Pages 官方文件](https://pages.github.com/)
- [Vite 官方文件 - 部署靜態網站](https://vite.dev/guide/static-deploy.html)
- [gh-pages npm 套件](https://www.npmjs.com/package/gh-pages)

---

## 支援與回饋

如有部署問題，可檢查：
1. GitHub Pages 設定（Settings > Pages）
2. GitHub Actions 部署日誌
3. 瀏覽器開發者工具（F12）查看錯誤
