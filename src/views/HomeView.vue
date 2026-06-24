<script setup>
import { RouterLink } from "vue-router";
import { profile, projects } from "@/data/portfolio";
import ProfileCard from "@/components/ProfileCard.vue";

const featuredProjects = projects.filter((project) => project.featured);
</script>

<template>
  <main class="w-full px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
    <section aria-labelledby="profile-name" class="flex w-full justify-center">
      <!-- 個人介紹資料透過 props 傳入 ProfileCard -->
      <div class="w-full max-w-[1040px]">
        <ProfileCard :profile="profile">
          <template #actions> 
            <div class="flex flex-col gap-3 sm:flex-row">
              <RouterLink
                to="/projects"
                class="inline-flex justify-center rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-cyan-200"
              >
                瀏覽作品
              </RouterLink>
              <RouterLink
                to="/skills"
                class="inline-flex justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                查看技能
              </RouterLink>
            </div>
          </template>
        </ProfileCard>
      </div>
    </section>

    <section
      aria-labelledby="featured-projects-title"
      class="mt-14 flex w-full justify-center lg:mt-10"
    >
      <div class="w-full max-w-[1180px]">
        <div
          class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p class="text-sm font-bold text-cyan-200">Featured Projects</p>
            <h2
              id="featured-projects-title"
              class="mt-2 text-2xl font-bold text-white"
            >
              精選作品
            </h2>
          </div>
          <RouterLink
            to="/projects"
            class="inline-flex w-fit rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:bg-white/10 hover:text-cyan-100"
          >
            查看全部作品
          </RouterLink>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="project in featuredProjects"
            :key="project.id"
            class="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-zinc-900/80 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-zinc-900"
          >
            <div class="relative z-10 flex flex-1 flex-col">
              <div class="flex flex-wrap gap-2">
                <span
                  class="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200"
                >
                  {{ project.category }}
                </span>
              </div>
              <h3 class="mt-4 text-xl font-bold text-white">
                {{ project.title }}
              </h3>
              <p class="mt-2 flex-1 text-sm leading-7 text-slate-300">
                {{ project.summary }}
              </p>
              <RouterLink
                :to="`/projects/${project.id}`"
                class="mt-5 inline-flex text-sm font-bold text-cyan-200 transition group-hover:text-cyan-100"
              >
                查看案例 →
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
