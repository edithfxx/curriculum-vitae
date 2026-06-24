import avatar from "@/assets/images/avatar.jpeg";

// 個人資料（寫死，不串接 API）
export const profile = {
  name: "陳旻青",
  title: "前端工程師 Frontend Developer",
  avatar: avatar,
  bio: "好的程式，不只解決今天的問題，\n而是能被未來工程師理解與維護",
  resume: "https://pda.104.com.tw/profile/share",
};

// 技能資料
export const skills = [
  {
    id: 1,
    name: "HTML",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    id: 1,
    name: "CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  },
  {
    id: 2,
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/JavaScript_shield_logo_%28no_text%29.svg",
  },
  {
    id: 3,
    name: "Vue",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  },
  {
    id: 4,
    name: "Git",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    id: 6,
    name: "Nuxt",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg",
  },
];

// 作品資料
export const projects = [
  {
    id: 1,
    title: "Microsoft 仿切",
    category: "靜態切版 / RWD",
    role: "前端切版與響應式版面實作",
    featured: false,
    summary: "以 Microsoft 官方網站為參考的靜態網頁切版作品。",
    description:
      "練習大型企業網站常見的導覽列、產品區塊、卡片式排版、Footer 與 RWD 響應式版面設計，著重於 HTML 結構規劃與 CSS 版面控制。",
    highlights: [
      "依照大型企業網站版型拆解頁面區塊",
      "實作導覽列、產品卡片、內容區塊與 Footer",
      "使用 CSS 控制桌機與手機版響應式排版",
      "練習靜態頁面結構規劃與樣式模組化管理",
    ],
    tech: ["HTML", "CSS", "RWD"],
    link: "https://edithfxx.github.io/personal-portfolio/microsoft-cut/index.html",
  },
  {
    id: 2,
    title: "九星連線",
    category: "CSS 動畫 / 視覺特效",
    role: "前端視覺構成與 CSS 動畫實作",
    featured: false,
    summary: "以星體排列與宇宙視覺為主題的 CSS 動畫作品。",
    description:
      "透過 HTML 建立畫面結構，並使用 CSS 製作星體位置、連線效果與動畫視覺，展現前端視覺設計與動畫能力。",
    highlights: [
      "使用 HTML 建立星體與連線的畫面結構",
      "透過 CSS Position 控制星體排列與視覺層次",
      "使用 CSS Animation 呈現宇宙主題動態效果",
      "練習以純前端技術完成視覺特效作品",
    ],
    tech: ["HTML", "CSS", "CSS Animation"],
    link: "https://edithfxx.github.io/personal-portfolio/nine-stars/index.html",
  },
  {
    id: 3,
    title: "行星繞日",
    category: "CSS 動畫 / 軌道模擬",
    role: "CSS keyframes 與動畫節奏實作",
    featured: false,
    summary: "以太陽系行星運轉為主題的 CSS 軌道動畫作品。",
    description:
      "使用 CSS keyframes、定位、軌道動畫與旋轉效果呈現行星繞日的動態畫面，練習動畫速度控制與視覺層次設計。",
    highlights: [
      "使用 CSS keyframes 製作行星旋轉與繞日效果",
      "以定位與層級控制軌道、星體與背景關係",
      "調整不同元素的動畫速度與視覺節奏",
      "練習主題式 CSS 動畫與畫面細節控制",
    ],
    tech: ["HTML", "CSS", "CSS Animation"],
    link: "https://edithfxx.github.io/personal-portfolio/planets-orbiting-the-sun/index.html",
  },
  {
    id: 6,
    title: "個人速查表",
    category: "Vue 3 CDN / 知識管理工具",
    role: "產品需求拆解、前端資料模型、CRUD 與本機資料流程實作",
    featured: true,
    summary: "為個人學習與開發流程打造的程式碼速查與知識管理工具。",
    description:
      "以 Vue 3 CDN 製作免打包的單頁工具，將常用程式碼片段、指令、語法對照與觀念筆記整理成可搜尋、可複製、可編輯的知識庫。支援多型態卡片、跨分類搜尋、CRUD、JSON 匯入匯出與 localStorage 工作副本，目標是讓開發時常用資訊能在短時間內找到並複用。",
    highlights: [
      "從個人學習與開發痛點出發，設計可長期維護的前端知識管理工具",
      "設計 5 種卡片型態，分別對應程式碼、逐行指令、對照表、多區塊與觀念筆記",
      "實作跨分類即時搜尋、關鍵字高亮與 Ctrl+K 快捷搜尋",
      "依內容型態設計整段、逐行、逐列與區塊複製流程",
      "實作新增、編輯、刪除、分類與子分類管理，讓資料可直接在介面維護",
      "以 localStorage 作為工作副本，並透過 JSON 匯入匯出完成備份與跨裝置轉移",
    ],
    process: {
      title: "AI-assisted Workflow",
      items: [
        "使用 AI 協助需求拆解、資料型態設計與互動流程規劃",
        "透過 AI 討論逐行複製、長內容呈現、localStorage 與 JSON 資料流程取捨",
        "建立 CLAUDE.md 專案脈絡文件，讓 AI 協作能延續既有決策與限制",
        "由我負責最終規格取捨、功能實作、資料維護流程與使用體驗驗證",
      ],
    },
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue 3 CDN",
      "localStorage",
      "JSON",
      "Fetch API",
      "Clipboard API",
      "RWD",
    ],
    link: "https://edithfxx.github.io/cheat-sheet",
  },
  {
    id: 4,
    title: "色弱遊戲",
    category: "JavaScript 互動 / 小遊戲",
    role: "遊戲邏輯、DOM 操作與互動流程實作",
    featured: true,
    summary: "60 秒內找出不同色塊的色覺辨識互動遊戲。",
    description:
      "以色塊找不同為核心玩法，使用 JavaScript 動態產生題目、管理倒數與分數狀態，並依答題結果提供畫面回饋與 Web Audio API 音效。難度會隨答對數提升，方塊數增加且顏色差異逐步縮小。",
    highlights: [
      "以 60 秒限時挑戰設計遊戲流程與結算畫面",
      "動態產生色塊題目，並隨答對數提升方塊數與顏色相近程度",
      "使用 DOM 事件處理答題判斷、分數統計與畫面回饋",
      "使用 Web Audio API 即時合成答題、倒數與結束音效",
    ],
    process: {
      title: "AI-assisted Workflow",
      items: [
        "使用 AI 協助需求拆解、規則衝突檢查與互動流程規劃",
        "透過 AI Code Review 檢查命名、狀態管理、重複邏輯與邊界條件",
        "由我負責最終規格取捨、程式重構、RWD 調整與測試驗證",
      ],
    },
    tech: ["HTML", "CSS", "JavaScript", "DOM", "Web Audio API", "RWD"],
    link: "https://edithfxx.github.io/personal-portfolio/color-blindness/index.html",
  },
  {
    id: 5,
    title: "主題收藏展示館",
    category: "Vue 3 / 資料管理",
    role: "Vue 狀態管理、表單處理與資料互動實作",
    featured: true,
    summary: "以 Vue 3 建立的超自然主題收藏與調查紀錄工具。",
    description:
      "以靈異檔案庫為主題，使用 Vue 3 建立資料驅動介面，支援新增調查紀錄、分類篩選、星等評分、統計資訊、展開內容與 localStorage 持久化。開發時同步納入 WCAG A / AA 規劃，包含表單標籤、錯誤提示、鍵盤操作與 ARIA 狀態。",
    highlights: [
      "使用 Vue 3 建立可新增、篩選與展開的收藏資料介面",
      "設計 6 種現象分類，讓資料模型具備擴充性",
      "使用 localStorage 保存使用者新增資料，重新整理後不遺失",
      "規劃表單驗證、字數提示、星等操作與統計資訊",
      "導入 WCAG A / AA 觀念，處理 label、aria-invalid、aria-describedby 與鍵盤操作",
    ],
    process: {
      title: "AI-assisted Workflow",
      items: [
        "使用 AI 協助需求拆解、視覺風格比較與規格衝突檢查",
        "透過 AI 規劃資料分類、表單欄位、互動流程與 WCAG A / AA 對應項目",
        "由我負責最終主題選擇、Vue 資料綁定、localStorage 實作與互動驗證",
      ],
    },
    tech: ["HTML", "CSS", "JavaScript", "Vue 3", "localStorage", "ARIA"],
    link: "https://edithfxx.github.io/personal-portfolio/collect/index.html",
  },
  {
    id: 7,
    title: "金門水產試驗所網站改版 Prototype",
    category: "網站改版 / 官方形象網站",
    role: "前端介面設計、資訊架構整理與多頁流程實作",
    featured: true,
    summary: "以金門水產試驗所為對象的官方網站改版 prototype，整合機構介紹、海洋教育、活動資訊、最新消息與特色商城等核心服務。",
    description:
      "本專案以建立官方可信任形象為目標，使用 Vue 3、Vue Router、Pinia 與 Tailwind CSS 建置網站 prototype，規劃首頁分流與多頁內容架構，串接認識水試所、海洋教育、參觀與活動、最新消息與特色商城等主要任務流程，並加入中英文雙語切換與前端假資料展示，模擬正式上線前的資訊服務體驗。",
    highlights: [
      "以官方網站改版為題，重新整理首頁分流與整體資訊架構",
      "建置關於我們、海洋教育、參觀活動、最新消息、商城與購物車等多頁面流程",
      "使用 Vue Router 與 Pinia 管理頁面路由與前端狀態",
      "導入 vue-i18n，支援 zh-TW / en-US 雙語切換與語系保存",
      "整合商品、活動、消息與教育文章假資料，模擬完整內容展示情境",
      "搭配 Tailwind CSS、Swiper 與 PixiJS 強化版面表現與互動視覺",
    ],
    tech: [
      "Vue 3",
      "Vue Router",
      "Pinia",
      "Vite",
      "Tailwind CSS 4",
      "vue-i18n",
      "Swiper",
      "PixiJS",
      "JavaScript",
    ],
    link: "https://nchu-11503-kinmen-fishers.dev-hub.io/",
  }
];
