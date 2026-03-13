<template>
  <!-- Cursor glow -->
  <div class="cursor-glow" :style="glowStyle" />

  <div class="layout">
    <LeftPanel
      :profile="profile"
      :nav-items="navItems"
      :active-section="activeSection"
      @nav-click="scrollTo"
    />

    <main class="right-panel">
      <AboutSection :html="aboutHtml" />
      <ExperienceSection
        :experiences="experiences"
        :resume-url="profile.resume"
      />
      <ProjectSection :projects="projects" />
      <WritingSection :writings="writings" />

      <p class="footer">
        Built with
        <a href="https://vuejs.org" target="_blank">Vue 3</a>
        &
        <a href="https://vitejs.dev" target="_blank">Vite</a>
        · Deployed on
        <a href="https://vercel.com" target="_blank">Vercel</a>
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import {
  PROFILE,
  ABOUT_HTML,
  EXPERIENCES,
  PROJECTS,
  WRITINGS,
} from "./data/portfolio.js";

import LeftPanel from "./components/LeftPanel.vue";
import AboutSection from "./components/AboutSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ProjectSection from "./components/ProjectSection.vue";
import WritingSection from "./components/WritingSection.vue";

const profile = ref(PROFILE);
const aboutHtml = ref(ABOUT_HTML);
const experiences = ref(EXPERIENCES);
const projects = ref(PROJECTS);
const writings = ref(WRITINGS);

const activeSection = ref("about");
const mouseX = ref(0);
const mouseY = ref(0);

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
];

const glowStyle = computed(() => ({
  background: `radial-gradient(500px circle at ${mouseX.value}px ${mouseY.value}px, rgba(29,52,97,.18), transparent 70%)`,
}));

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function onMouseMove(e) {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
}

let observer;
onMounted(() => {
  window.addEventListener("mousemove", onMouseMove);
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) activeSection.value = e.target.id;
      });
    },
    { threshold: 0.45 },
  );
  navItems.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  window.removeEventListener("mousemove", onMouseMove);
  observer?.disconnect();
});
</script>

<style>
@import "./assets/styles/global.css";

/* Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap");

#app {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.cursor-glow {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 50;
  transition: opacity 0.3s;
}

.layout {
  display: flex;
  max-width: 1100px;
  width: 100%;
  padding: 0 40px;
  gap: 48px;
}

.right-panel {
  flex: 1;
  padding: 80px 0 120px;
  max-width: 620px;
}

.footer {
  margin-top: 80px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--slate-dim);
  text-align: center;
}

.footer a {
  color: var(--slate-light);
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
    padding: 0 20px;
    gap: 0;
  }
  .right-panel {
    padding: 0 0 80px;
  }
}
</style>
