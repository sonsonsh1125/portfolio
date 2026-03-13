<template>
  <aside class="left-panel">
    <div class="left-top">
      <h1 class="profile-name">{{ profile.name }}</h1>
      <h2 class="profile-title">{{ profile.title }}</h2>
      <p class="profile-bio">{{ profile.bio }}</p>

      <nav class="nav">
        <button
          v-for="item in navItems"
          :key="item.id"
          class="nav-btn"
          :class="{ active: activeSection === item.id }"
          @click="$emit('nav-click', item.id)"
        >
          {{ item.label }}
        </button>
      </nav>
    </div>

    <div class="socials">
      <button
        v-for="s in profile.socials"
        :key="s.label"
        class="social-btn"
        :aria-label="s.label"
        @click="openLink(s.url)"
        v-html="s.icon"
      />
    </div>
  </aside>
</template>

<script setup>
defineProps({
  profile:       { type: Object,  required: true },
  navItems:      { type: Array,   required: true },
  activeSection: { type: String,  default: 'about' },
})

defineEmits(['nav-click'])

function openLink(url) {
  if (url) window.open(url, '_blank')
}
</script>

<style scoped>
.left-panel {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 320px;
  min-width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 0;
}

.profile-name {
  font-size: clamp(30px, 3.5vw, 48px);
  font-weight: 700;
  color: var(--white);
  letter-spacing: -0.5px;
  line-height: 1.1;
}

.profile-title {
  font-size: 18px;
  font-weight: 500;
  color: var(--slate-light);
  margin: 10px 0 16px;
}

.profile-bio {
  font-size: 14px;
  color: var(--slate);
  max-width: 260px;
  line-height: 1.65;
}

/* Nav */
.nav {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  transition: color 0.25s var(--ease);
  width: fit-content;
}

.nav-btn::before {
  content: '';
  display: block;
  height: 1px;
  width: 28px;
  background: currentColor;
  transition: width 0.25s var(--ease);
}

.nav-btn:hover,
.nav-btn.active {
  color: var(--white);
}

.nav-btn:hover::before,
.nav-btn.active::before {
  width: 60px;
}

/* Socials */
.socials {
  display: flex;
  gap: 18px;
}

.social-btn {
  color: var(--slate);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  transition: color 0.2s, transform 0.2s;
}

.social-btn:hover {
  color: var(--white);
  transform: translateY(-3px);
}

:deep(.social-btn svg) {
  width: 19px;
  height: 19px;
  fill: currentColor;
}

@media (max-width: 768px) {
  .left-panel {
    position: static;
    height: auto;
    width: 100%;
    padding: 56px 0 32px;
  }

  .nav { display: none; }
}
</style>
