<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
    <div class="flex w-full justify-center px-5 sm:px-8 lg:px-10">
      <div class="flex w-full max-w-[1180px] items-center justify-between py-4">
        <RouterLink to="/" class="text-base font-bold tracking-normal text-white sm:text-lg">
          個人作品集
        </RouterLink>
        <nav class="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
          <RouterLink
            to="/"
            class="rounded-md px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            首頁
          </RouterLink>
          <RouterLink
            to="/skills"
            class="rounded-md px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            技能
          </RouterLink>
          <RouterLink
            to="/projects"
            class="rounded-md px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            作品
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  background: rgba(56, 189, 248, 0.14);
  color: #67e8f9;
}
</style>
