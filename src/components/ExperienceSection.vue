<template>
  <section id="experience" class="section">
    <div class="section-header">Experience</div>

    <div class="exp-list">
      <div v-for="exp in experiences" :key="exp.company" class="exp-card">
        <div class="exp-period">{{ exp.period }}</div>
        <div class="exp-role">{{ exp.role }}</div>
        <div class="exp-company">· {{ exp.company }}</div>
        <p class="exp-desc">{{ exp.desc }}</p>
        <div class="tags">
          <span v-for="t in exp.tags" :key="t" class="tag">{{ t }}</span>
        </div>
      </div>
    </div>

    <a :href="resumeUrl" target="_blank" class="resume-btn">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      이력서 전체 보기
    </a>
  </section>
</template>

<script setup>
defineProps({
  experiences: { type: Array, required: true },
  resumeUrl: { type: String, default: "#" },
});
</script>

<style scoped>
.exp-card {
  padding: 20px;
  border-radius: 8px;
  border: 1px solid transparent;
  margin-bottom: 4px;
  transition:
    background 0.25s,
    border-color 0.25s,
    box-shadow 0.25s;
  cursor: default;
}

.exp-card:hover {
  background: var(--navy-light);
  border-color: var(--slate-dim);
  box-shadow: 0 8px 28px rgba(2, 12, 27, 0.5);
}

.exp-period {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 1px;
  color: var(--slate);
  text-transform: uppercase;
  margin-bottom: 5px;
}

.exp-role {
  font-size: 16px;
  font-weight: 600;
  color: var(--slate-light);
  margin-bottom: 3px;
  transition: color 0.2s;
}

.exp-card:hover .exp-role {
  color: var(--green);
}

.exp-company {
  font-size: 13px;
  color: var(--green);
  margin-bottom: 10px;
}

.exp-desc {
  font-size: 14px;
  color: var(--slate);
  line-height: 1.7;
  margin-bottom: 14px;
  word-break: keep-all;
}

.resume-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 28px;
  padding: 11px 20px;
  border: 1px solid var(--green);
  border-radius: 4px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: 13px;
  background: none;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;
}

.resume-btn:hover {
  background: var(--green-dim);
}

.resume-btn svg {
  width: 14px;
  height: 14px;
}
</style>
