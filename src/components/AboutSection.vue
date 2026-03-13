<template>
  <section id="about" class="section">
    <div class="section-header">About</div>
    <div class="about-text" v-html="html" />
  </section>
</template>

<script setup>
defineProps({
  html: { type: String, required: true },
});
</script>

<style scoped>
.about-text :deep(p) {
  color: var(--slate);
  line-height: 1.8;
  margin-bottom: 14px;
  word-break: keep-all;
}

.about-text :deep(p:last-child) {
  margin-bottom: 0;
}

.about-text :deep(.hl) {
  color: var(--green);
  font-weight: 500;
}
</style>
