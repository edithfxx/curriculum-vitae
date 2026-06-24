<script setup>
defineProps({
  name: { type: String, required: true },
  img: { type: String, required: true },
});
</script>

<template>
  <div class="group rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]">
    <div class="flex items-center gap-4">
      <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white p-2">
        <img :src="img" :alt="name" class="h-full w-full object-contain" />
      </div>
      <div>
        <h3 class="text-lg font-bold text-white">{{ name }}</h3>
      </div>
    </div>
  </div>
</template>
