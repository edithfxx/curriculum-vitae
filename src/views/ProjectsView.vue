<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard.vue";

const router = useRouter();

const favoriteIds = ref([]);

// 接收 ProjectCard 的 toggle-favorite，切換收藏狀態
const handleToggleFavorite = (id) => {
  const index = favoriteIds.value.indexOf(id);
  if (index === -1) {
    favoriteIds.value.push(id);
  } else {
    favoriteIds.value.splice(index, 1);
  }
};
</script>

<template>
  <main class="w-full px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
    <div class="flex w-full justify-center">
      <div class="w-full max-w-[1180px]">
        <section
          aria-labelledby="projects-title"
          class="mb-8 flex flex-col gap-5 rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:flex-row sm:items-end sm:justify-between lg:mb-10 lg:p-7"
        >
          <div>
            <p class="text-sm font-bold text-cyan-200">Project Cases</p>
            <h1 id="projects-title" class="mt-2 text-3xl font-bold text-white">
              我的作品
            </h1>
            <p class="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              依能力類型整理作品，列表保留摘要，詳細頁呈現完整工程亮點。
            </p>
          </div>
          <span
            class="w-fit rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-200"
          >
            已收藏 {{ favoriteIds.length }} 件
          </span>
        </section>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <!-- v-for 渲染作品；資料透過 props 傳入，互動透過 emits 由本層處理 -->
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
            :favorited="favoriteIds.includes(project.id)"
            @view-detail="(id) => router.push(`/projects/${id}`)"
            @toggle-favorite="handleToggleFavorite"
          />
        </div>
      </div>
    </div>
  </main>
</template>
