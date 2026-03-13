<template>
  <section id="projects" class="section">
    <div class="section-header">Projects</div>

    <div class="project-list">
      <div
        v-for="(proj, i) in projects"
        :key="proj.title"
        class="project-card"
        :class="{ clickable: proj.url }"
        @click="proj.url && openLink(proj.url)"
      >
        <!-- Image side -->
        <div class="project-img-wrap">
          <template v-if="proj.image && isVimeo(proj.image)">
            <img
              :src="getVimeoThumbnail(proj.image)"
              :alt="proj.title"
              class="vimeo-thumbnail"
            />
            <iframe
              :src="getVimeoEmbedUrl(proj.image)"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              class="vimeo-iframe"
              @load="onVimeoLoad"
            />
          </template>
          <video
            v-else-if="proj.image && isVideo(proj.image)"
            :src="proj.image"
            autoplay
            loop
            muted
            playsinline
          />
          <img v-else-if="proj.image" :src="proj.image" :alt="proj.title" />
          <div v-else class="project-img-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            이미지 준비 중
          </div>
        </div>

        <!-- Text side -->
        <div class="project-body">
          <div class="project-num">{{ String(i + 1).padStart(2, '0') }}.</div>
          <div class="project-title">
            {{ proj.title }}
            <span v-if="proj.url" class="arrow">↗</span>
          </div>
          <p class="project-desc">{{ proj.desc }}</p>
          <div class="tags">
            <span v-for="t in proj.tags" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  projects: { type: Array, required: true },
})

function openLink(url) {
  if (url && url !== '#') window.open(url, '_blank')
}

function isVideo(path) {
  if (!path) return false
  return /\.(mp4|webm|mov)$/i.test(path)
}

function isVimeo(url) {
  if (!url) return false
  return /vimeo\.com/i.test(url)
}

function getVimeoEmbedUrl(url) {
  // Extract video ID from Vimeo URL
  const match = url.match(/vimeo\.com\/video\/(\d+)/)
  if (match && match[1]) {
    return `https://player.vimeo.com/video/${match[1]}?muted=1&autoplay=1&loop=1&background=1&autopause=0`
  }
  return url
}

function getVimeoThumbnail(url) {
  // Extract video ID and get thumbnail
  const match = url.match(/vimeo\.com\/video\/(\d+)/)
  if (match && match[1]) {
    return `https://vumbnail.com/${match[1]}.jpg`
  }
  return ''
}

function onVimeoLoad(event) {
  // Fade out thumbnail when iframe is loaded
  const thumbnail = event.target.previousElementSibling
  if (thumbnail && thumbnail.classList.contains('vimeo-thumbnail')) {
    setTimeout(() => {
      thumbnail.style.opacity = '0'
      thumbnail.style.pointerEvents = 'none'
    }, 500)
  }
}
</script>

<style scoped>
.project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 12px;
  border: 1px solid transparent;
  margin-bottom: 16px;
  overflow: hidden;
  transition: border-color 0.25s, box-shadow 0.25s;
  min-height: 220px;
}

.project-card.clickable { cursor: pointer; }

.project-card:hover {
  border-color: var(--slate-dim);
  box-shadow: 0 12px 40px rgba(2, 12, 27, 0.6);
}

/* Alternate: even cards flip image to right */
.project-card:nth-child(even) { direction: rtl; }
.project-card:nth-child(even) > * { direction: ltr; }

/* Image */
.project-img-wrap {
  position: relative;
  overflow: hidden;
  background: var(--navy-light);
  min-height: 200px;
}

.project-img-wrap img,
.project-img-wrap video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s var(--ease), filter 0.4s;
  filter: grayscale(30%) brightness(0.85);
}

.project-img-wrap .vimeo-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  transition: opacity 0.8s ease, transform 0.5s var(--ease), filter 0.4s;
  filter: grayscale(30%) brightness(0.85);
}

.project-img-wrap .vimeo-iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%) scale(1.3);
  transition: transform 0.5s var(--ease), filter 0.4s;
  filter: grayscale(30%) brightness(0.85);
  pointer-events: none;
  z-index: 1;
}

.project-card:hover .project-img-wrap img,
.project-card:hover .project-img-wrap video {
  transform: scale(1.04);
  filter: grayscale(0%) brightness(1);
}

.project-card:hover .project-img-wrap .vimeo-thumbnail {
  transform: scale(1.04);
  filter: grayscale(0%) brightness(1);
}

.project-card:hover .project-img-wrap .vimeo-iframe {
  transform: translate(-50%, -50%) scale(1.35);
  filter: grayscale(0%) brightness(1);
}

.project-img-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(100, 255, 218, 0.05);
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .project-img-wrap::after { opacity: 1; }

/* Placeholder */
.project-img-placeholder {
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #0d1f3c 0%, #1a2f50 100%);
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--slate-dim);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.project-img-placeholder svg {
  width: 32px;
  height: 32px;
  stroke: var(--slate-dim);
}

/* Text body */
.project-body {
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--navy-light);
  transition: background 0.25s;
}

.project-card:hover .project-body { background: #152641; }

.project-num {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--green);
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.project-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;
  line-height: 1.3;
}

.project-card:hover .project-title { color: var(--green); }

.arrow {
  font-size: 14px;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s, transform 0.2s;
  flex-shrink: 0;
}

.project-card:hover .arrow {
  opacity: 1;
  transform: translateX(0);
}

.project-desc {
  font-size: 13px;
  color: var(--slate);
  line-height: 1.7;
  margin-bottom: 16px;
}

@media (max-width: 640px) {
  .project-card {
    grid-template-columns: 1fr;
  }
  .project-card:nth-child(even) { direction: ltr; }
  .project-img-wrap { min-height: 160px; }
}
</style>
