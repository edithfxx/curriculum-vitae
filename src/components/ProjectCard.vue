<script setup>
// 作品卡片：資料由 props 傳入，互動透過 emits 通知上層
defineProps({
  project: { type: Object, required: true },
  favorited: { type: Boolean, default: false },
});

const emit = defineEmits(["view-detail", "toggle-favorite"]);
</script>

<template>
  <article
    class="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-zinc-900/80 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-zinc-900"
  >
    <div class="relative z-10 flex flex-1 flex-col p-5">
      <div class="flex flex-wrap gap-2">
        <span
          class="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200"
        >
          {{ project.category }}
        </span>
      </div>
      <h3 class="mt-4 text-xl font-bold text-white">{{ project.title }}</h3>
      <p class="mt-2 flex-1 text-sm leading-7 text-slate-300">
        {{ project.summary }}
      </p>
      <ul class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="t in project.tech.slice(0, 4)"
          :key="t"
          class="rounded-full bg-white/5 px-2.5 py-1 text-xs font-semibold text-slate-300"
        >
          {{ t }}
        </li>
      </ul>
      <div class="mt-5 flex gap-3">
        <!-- 收藏：透過 emits 通知上層，由上層統計收藏數量 -->
        <button
          class="rounded-lg border px-4 py-2 text-sm font-bold transition"
          :class="
            favorited
              ? 'border-amber-300/40 bg-amber-300/15 text-amber-200'
              : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
          "
          :aria-pressed="favorited"
          :aria-label="
            favorited ? `取消收藏 ${project.title}` : `收藏 ${project.title}`
          "
          @click="emit('toggle-favorite', project.id)"
        >
          {{ favorited ? "★ 已收藏" : "☆ 收藏" }}
        </button>
        <!-- 查看作品：透過 emits 把 id 交給上層，由上層負責跳轉 -->
        <button
          class="flex-1 rounded-lg bg-cyan-300 px-4 py-2 text-sm font-bold text-zinc-950 transition hover:bg-cyan-200"
          :aria-label="`查看 ${project.title} 作品詳情`"
          @click="emit('view-detail', project.id)"
        >
          查看作品
        </button>
      </div>
    </div>
  </article>
</template>
