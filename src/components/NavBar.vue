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
          <a
            href="https://github.com/edithfxx/curriculum-vitae"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-md px-3 py-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            title="GitHub"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
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
