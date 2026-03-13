export const PROFILE = {
  name: "손승현",
  title: "Frontend Developer",
  bio: "사용자 경험에 집착하는 웹 개발자. 아름다운 인터페이스와 견고한 코드를 함께 추구합니다.",
  resume: "#",
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/sonsonsh1125",
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
    },
    {
      label: "Velog",
      url: "https://velog.io/@tmdgus8911",
      icon: `<svg width="192" height="192" viewBox="0 0 192 192" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z" fill="currentColor"></path></svg>`,
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sonsonsh/",
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    },
    {
      label: "Email",
      url: "mailto:tmdgus8911@gmail.com",
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
    },
  ],
};

export const ABOUT_HTML = `
  <p><span class="hl">Interactive</span>웹부터 SSR 기반의 대규모 글로벌 서비스까지 <br /><span class="hl">폭넓은 스펙트럼</span>을 보유한 프론트엔드 엔지니어입니다. 퍼블리싱과 프론트엔드의 경계에 얽매이지 않는 유연한 문제 해결 능력을 갖췄습니다.</p>
  <p>논리적인 소통을 통해 협업의 효율을 높이고, <span class="hl">능동적</span>인 자세로 프로젝트의 기술적 난제해결을 위해 노력합니다.</p>
`;

export const EXPERIENCES = [
  {
    period: "2022.04 — 2026.02",
    role: "Frontend Developer",
    company: "DFY",
    desc: "Hyundai 및 SM Ent. 등 글로벌 브랜드 전담 에이전시에서 퍼블리싱부터 Vue 기반 컴포넌트 시스템 및 Canvas 인터랙션 구현까지 프론트엔드 전 영역 담당",
    tags: ["Vue.js", "TypeScript", "Nuxt", "Tailwind CSS", "GSAP"],
  },
  {
    period: "2020.12 — 2021.12",
    role: "Web Publisher",
    company: "Mecayours",
    desc: "OCI 및 우체국보험 등 대형 클라이언트 6개 프로젝트 기획부터 퍼블리싱까지 전 과정 담당",
    tags: ["JavaScript", "SCSS", "ES6", "Node.js"],
  },
];

export const PROJECTS = [
  {
    title: "Innocean",
    desc: "글로벌 광고 기획사 이노션 공식 웹사이트 리뉴얼 프로젝트로 Nuxt 3 기반 SSR 아키텍처를 도입하여 성능과 글로벌 대응력을 강화",
    tags: ["Vue.js", "Nuxt", "TailwindCSS"],
    url: "https://www.innocean.com/ww-ko",
    image: "/projects/Innocean_thumb.mp4",
  },
  {
    title: "SM Ent. Naevis Official",
    desc: "SM 엔터테인먼트의 버츄얼 아티스트 '나이비스(nævis)'를 위한 공식 프로모션 웹사이트. 디지털 월드와 리얼 월드를 넘나드는 컨셉에 맞춘 인터랙티브한 랜딩 페이지 구현",
    tags: ["ES6", "SCSS", "GSAP"],
    url: "https://naevisofficial.com/",
    image: "/projects/naevis_thumb.png",
  },
  {
    title: "GENESYS PIP RENEWAL",
    desc: "글로벌 브랜드 표준 UI 컴포넌트 개발 및 AEM CMS 통합 프로젝트",
    tags: ["AEM", "ES6", "ScrollTrigger"],
    url: "https://www.genesis.com/kr/ko/main.html",
    image: "https://player.vimeo.com/video/919084817",
  },
  {
    title: "Visit Peru",
    desc: "페루 지역의 관광 데이터와 소셜 콘텐츠를 인터랙티브하게 전달하는 공식 웹사이트 개발",
    tags: ["Leaflet", "ES6", "ScrollTrigger"],
    url: "https://visitperu.dfy.me/",
    image: "/projects/visitperu_thumb.jpg",
  },
  {
    title: "YG+ Buffz",
    desc: "카페24 기반 이커머스 구축 및 커스텀 스크립트로 플랫폼 기능 확장",
    tags: ["cafe24", "javascript", "ScrollTrigger"],
    url: "https://buffz.co.kr/",
    image: "/projects/buffz_thumb.webp",
  },
];

export const WRITINGS = [
  {
    year: "2026",
    title: "Diff 알고리즘에 대한 깊생",
    url: "https://velog.io/@tmdgus8911/%EB%94%94%ED%94%84-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98",
  },
  {
    year: "2025",
    title: "디자인 토큰으로 디자이너들과 싸우기",
    url: "https://velog.io/@tmdgus8911/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%86%A0%ED%81%B0%EC%9C%BC%EB%A1%9C-%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EB%93%A4%EA%B3%BC-%EC%8B%B8%EC%9A%B0%EA%B8%B0",
  },
  {
    year: "2025",
    title: "TDD 한번에 정리하기",
    url: "https://velog.io/@tmdgus8911/TDD-%ED%95%9C%EB%B2%88%EC%97%90-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0",
  },
  {
    year: "2025",
    title: "사파리 태블릿 환경 동영상 재생 이슈",
    url: "https://velog.io/@tmdgus8911/TIL-%EC%82%AC%ED%8C%8C%EB%A6%AC-%ED%83%9C%EB%B8%94%EB%A6%BF-%ED%99%98%EA%B2%BD-%EB%8F%99%EC%98%81%EC%83%81-%EC%9E%AC%EC%83%9D-%EC%9D%B4%EC%8A%88",
  },
];
