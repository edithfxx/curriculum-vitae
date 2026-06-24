<script setup>
import SkillCard from '@/components/SkillCard.vue'
import { skills } from '@/data/portfolio'
</script>

<template>
  <main class="w-full px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
    <div class="flex w-full justify-center">
      <div class="w-full max-w-[1180px]">
        <section aria-labelledby="skills-title" class="mb-8 rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl lg:mb-10 lg:p-7">
          <p class="text-sm font-bold text-cyan-200">Skill Matrix</p>
          <h1 id="skills-title" class="mt-2 text-3xl font-bold text-white">我的技能</h1>
          <p class="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            以前端畫面實作、互動邏輯、Vue 資料狀態與版本管理為核心，對應作品中的實際功能。
          </p>
        </section>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <!-- v-for 渲染技能，資料透過 props 傳入 SkillCard -->
          <SkillCard
            v-for="skill in skills"
            :key="skill.id"
            :name="skill.name"
            :img="skill.img"
          />
        </div>
      </div>
    </div>
  </main>
</template>
