<template>
  <section id="writing" class="section">
    <div class="section-header">Writing</div>

    <div class="writing-list">
      <a
        v-for="post in writings"
        :key="post.title"
        class="writing-row"
        :href="post.url"
        target="_blank"
      >
        <span class="writing-year">{{ post.year }}</span>
        <span class="writing-title">{{ post.title }}</span>
      </a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  writings: { type: Array, required: true },
})
</script>

<style scoped>
.writing-row {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 14px 20px;
  border-radius: 8px;
  border: 1px solid transparent;
  margin-bottom: 4px;
  text-decoration: none;
  transition: background 0.25s, border-color 0.25s;
}

.writing-row:hover {
  background: var(--navy-light);
  border-color: var(--slate-dim);
}

.writing-year {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--slate);
  min-width: 38px;
  padding-top: 3px;
}

.writing-title {
  font-size: 15px;
  font-weight: 500;
  color: var(--slate-light);
  transition: color 0.2s;
}

.writing-row:hover .writing-title { color: var(--green); }
</style>
