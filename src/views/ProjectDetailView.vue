<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { projects } from "@/data/portfolio";

const route = useRoute();

// 依路徑參數 id 找出對應作品（route.params.id 為字串，需轉數字比對）
const project = computed(() =>
  projects.find((p) => p.id === Number(route.params.id)),
);
</script>

<template>
  <main class="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 lg:py-14">
    <RouterLink
      to="/projects"
      class="mb-5 inline-flex rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:bg-white/10"
    >
      ← 返回作品列表
    </RouterLink>

    <article
      v-if="project"
      class="overflow-hidden rounded-lg border border-white/10 bg-zinc-900/85 shadow-2xl shadow-black/30 backdrop-blur-xl"
    >
      <div class="p-6 sm:p-8">
        <div class="flex flex-wrap gap-2">
          <span
            class="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200"
          >
            {{ project.category }}
          </span>
        </div>
        <h1 class="mt-5 text-3xl font-bold text-white sm:text-4xl">
          {{ project.title }}
        </h1>
        <p class="mt-3 text-base font-bold leading-7 text-cyan-100">
          {{ project.role }}
        </p>
        <p class="mt-4 text-base leading-8 text-slate-300">
          {{ project.description }}
        </p>

        <section
          v-if="project.highlights?.length"
          class="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-5"
        >
          <h2 class="text-lg font-bold text-white">工程亮點</h2>
          <ul class="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <li v-for="item in project.highlights" :key="item">
              <span class="text-cyan-200">•</span>
              {{ item }}
            </li>
          </ul>
        </section>

        <section
          v-if="project.process?.items?.length"
          class="mt-6 rounded-lg border border-cyan-300/20 bg-cyan-300/[0.04] p-5"
        >
          <p class="text-sm font-bold text-cyan-200">開發流程</p>
          <h2 class="mt-2 text-lg font-bold text-white">
            {{ project.process.title }}
          </h2>
          <ul class="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <li v-for="item in project.process.items" :key="item">
              <span class="text-cyan-200">•</span>
              {{ item }}
            </li>
          </ul>
        </section>

        <section class="mt-6">
          <h2 class="text-lg font-bold text-white">使用技術</h2>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="t in project.tech"
              :key="t"
              class="rounded-full bg-white/5 px-3 py-1.5 text-sm font-semibold text-slate-200"
            >
              {{ t }}
            </li>
          </ul>
        </section>

        <a
          :href="project.link"
          target="_blank"
          rel="noopener"
          class="mt-8 inline-flex rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-cyan-200"
        >
          前往作品 →
        </a>
      </div>
    </article>

    <!-- 找不到對應 id 時的提示 -->
    <div
      v-else
      class="rounded-lg border border-white/10 bg-white/[0.04] p-10 text-center text-slate-300 backdrop-blur-xl"
    >
      <h2 class="text-2xl font-bold text-white">找不到這個作品</h2>
      <p class="mt-3">作品 id「{{ route.params.id }}」不存在。</p>
    </div>
  </main>
</template>
