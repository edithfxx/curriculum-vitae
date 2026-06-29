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
              <RouterLink to="/projects"
                class="inline-flex justify-center rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-cyan-200">
                瀏覽作品
              </RouterLink>
              <RouterLink to="/skills"
                class="inline-flex justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                查看技能
              </RouterLink>
              <a :href="profile.resume" target="_blank" rel="noopener noreferrer"
                class="inline-flex justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                查看履歷
              </a>
              <a href="https://github.com/edithfxx" target="_blank" rel="noopener noreferrer"
                class="inline-flex justify-center items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a :href="`mailto:${profile.email}`"
                class="inline-flex justify-center items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                聯絡我
              </a>
            </div>
          </template>
        </ProfileCard>
      </div>
    </section>

    <section aria-labelledby="featured-projects-title" class="mt-14 flex w-full justify-center lg:mt-10">
      <div class="w-full max-w-[1180px]">
        <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-sm font-bold text-cyan-200">Featured Projects</p>
            <h2 id="featured-projects-title" class="mt-2 text-2xl font-bold text-white">
              精選作品
            </h2>
          </div>
          <RouterLink to="/projects"
            class="inline-flex w-fit rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:bg-white/10 hover:text-cyan-100">
            查看全部作品
          </RouterLink>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <article v-for="project in featuredProjects" :key="project.id"
            class="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-zinc-900/80 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-zinc-900">
            <div class="relative z-10 flex flex-1 flex-col">
              <div class="flex flex-wrap gap-2">
                <span class="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">
                  {{ project.category }}
                </span>
              </div>
              <h3 class="mt-4 text-xl font-bold text-white">
                {{ project.title }}
              </h3>
              <p class="mt-2 flex-1 text-sm leading-7 text-slate-300">
                {{ project.summary }}
              </p>
              <RouterLink :to="`/projects/${project.id}`"
                class="mt-5 inline-flex text-sm font-bold text-cyan-200 transition group-hover:text-cyan-100">
                查看案例 →
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
