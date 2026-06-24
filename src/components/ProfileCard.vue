<script setup>
// 個人介紹卡片：資料由上層透過 props 傳入
defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article
    class="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 sm:p-8 lg:p-10"
  >
    <div
      class="relative flex flex-col gap-7 md:flex-row md:items-center lg:gap-10"
    >
      <img
        :src="profile.avatar"
        :alt="profile.name"
        class="h-32 w-32 shrink-0 rounded-lg border border-cyan-300/50 object-cover shadow-lg shadow-cyan-950/60 sm:h-40 sm:w-40 lg:h-52 lg:w-52"
      />
      <div class="min-w-0 flex-1">
        <p
          class="mb-3 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200"
        >
          Frontend Developer
        </p>
        <h1
          id="profile-name"
          class="text-2xl font-bold tracking-normal text-white sm:text-5xl"
        >
          {{ profile.name }}
        </h1>
        <p class="mt-3 text-base font-semibold text-cyan-200 sm:text-lg">
          {{ profile.title }}
        </p>
        <p
          class="mt-6 max-w-2xl whitespace-pre-line text-base leading-8 text-slate-300"
        >
          {{ profile.bio }}
        </p>
        <!-- actions slot 讓上層頁面決定要放哪些 CTA，例如瀏覽作品、查看技能。 -->
        <div v-if="$slots.actions" class="mt-7">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </article>
</template>
