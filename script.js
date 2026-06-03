const images = [
  "AK47.png",
  "iphone.png",
  "三渲二盆栽.png",
  "保温杯.png",
  "匕首.png",
  "坦克.png",
  "头盔前.png",
  "安全摄像头.png",
  "宝箱.png",
  "小机器人.png",
  "手机蓝.png",
  "无人机.png",
  "星球.png",
  "春花小桥.png",
  "机甲.png",
  "橘子.png",
  "泳池.png",
  "电竞椅.png",
  "电风扇.png",
  "相机.png",
  "眼镜.png",
  "科幻仓.png",
  "科幻仓SS.png",
  "罐装可乐.png",
  "美味蛋糕.png",
  "脉动图.png",
  "金项链.png",
  "键盘.png",
  "香水.png",
  "香水瓶.png",
];

const videos = [
  "卡通小人.mp4",
  "可爱机器人.mp4",
  "四六级耳机.mp4",
  "地铁花海.mp4",
  "头戴耳机pro.mp4",
  "头盔.mp4",
  "宿舍.mp4",
  "小狐狸.mp4",
  "战斗机.mp4",
  "手枪.mp4",
  "星城启幕x.mp4",
  "星球.mp4",
  "樱花小道.mp4",
  "池核.mp4",
  "流星.mp4",
  "游戏手柄.mp4",
  "湖心亭.mp4",
  "烟花.mp4",
  "爱莉的生日蛋糕.mp4",
  "狂奔小车.mp4",
  "甜甜圈.mp4",
  "科幻立方.mp4",
  "笔记本.mp4",
  "苏珊娜.mp4",
  "落日海面.mp4",
  "蓝牙耳机.mp4",
  "走路机器人.mp4",
  "飞雷.mp4",
  "鼠标.mp4",
];

const imageGallery = document.getElementById('imageGallery');
const videoGallery = document.getElementById('videoGallery');
const heroImage = document.getElementById('heroImage');
const tabImages = document.getElementById('tabImages');
const tabVideos = document.getElementById('tabVideos');

function formatTitle(filename) {
  return filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ').trim();
}

function createImageCard(name) {
  const card = document.createElement('article');
  card.className = 'media-card';

  const preview = document.createElement('div');
  preview.className = 'media-preview';

  const image = document.createElement('img');
  image.alt = formatTitle(name);
  image.dataset.src = `images/${name}`;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.fetchPriority = 'low';
  image.src = 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420"></svg>';

  preview.appendChild(image);

  const title = document.createElement('h3');
  title.textContent = formatTitle(name);

  const meta = document.createElement('p');
  meta.textContent = '';

  card.append(preview, title, meta);

  return card;
}

function createVideoCard(name) {
  const card = document.createElement('article');
  card.className = 'media-card';

  const preview = document.createElement('div');
  preview.className = 'media-preview';

  const video = document.createElement('video');
  video.dataset.src = `videos/${name}`;
  video.preload = 'none';
  video.controls = true;
  video.muted = true;
  video.playsInline = true;
  video.poster = 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"></svg>';

  preview.appendChild(video);

  const title = document.createElement('h3');
  title.textContent = formatTitle(name);

  const meta = document.createElement('p');
  meta.textContent = '';

  card.append(preview, title, meta);

  return card;
}

function loadResource(element) {
  if (!element.dataset.src) return;
  element.src = encodeURI(element.dataset.src);
  if (element.tagName === 'VIDEO') {
    element.load();
  }
  delete element.dataset.src;
}

const mediaObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    loadResource(entry.target);
    observer.unobserve(entry.target);
  });
}, { rootMargin: '220px 0px', threshold: 0.1 });

function renderGallery() {
  images.forEach((name, index) => {
    const card = createImageCard(name);
    imageGallery.appendChild(card);
    mediaObserver.observe(card.querySelector('img'));

    if (index === 0 && heroImage) {
      heroImage.src = encodeURI(`images/${name}`);
    }
  });

  videos.forEach(name => {
    const card = createVideoCard(name);
    videoGallery.appendChild(card);
    mediaObserver.observe(card.querySelector('video'));
  });
}

function setActiveTab(activeTab) {
  if (activeTab === 'image') {
    tabImages.classList.add('active');
    tabVideos.classList.remove('active');
    document.getElementById('imageSection').scrollIntoView({ behavior: 'smooth' });
  } else {
    tabVideos.classList.add('active');
    tabImages.classList.remove('active');
    document.getElementById('videoSection').scrollIntoView({ behavior: 'smooth' });
  }
}

tabImages.addEventListener('click', () => setActiveTab('image'));
tabVideos.addEventListener('click', () => setActiveTab('video'));

document.addEventListener('DOMContentLoaded', renderGallery);

// 根据 hero 视频的元数据自动设置 hero 框的宽高比，确保精确匹配视频长宽
document.addEventListener('DOMContentLoaded', () => {
  const heroVideo = document.getElementById('heroVideo');
  const heroFrame = document.querySelector('.hero-frame');
  if (heroVideo && heroFrame) {
    heroVideo.addEventListener('loadedmetadata', () => {
      const w = heroVideo.videoWidth;
      const h = heroVideo.videoHeight;
      if (w && h) {
        heroFrame.style.aspectRatio = `${w} / ${h}`;
      }
    });
  }
});

window.addEventListener('scroll', () => {
  const shift = Math.min(window.scrollY * 0.02, 24);
  document.documentElement.style.setProperty('--bg-shift', `${shift}px`);
});

/* Motion + physics for background shapes with click-to-pop */
(function(){
  const container = document.querySelector('.motion-background');
  if (!container) return;

  const shapes = Array.from(container.querySelectorAll('.shape'));
  const w = () => container.clientWidth || window.innerWidth;
  const h = () => container.clientHeight || window.innerHeight;

  // Initialize physics state for each shape
  const items = shapes.map((el, i) => {
    // reset any left/top from CSS to allow transform control
    el.style.left = '0px';
    el.style.top = '0px';

    const cw = parseFloat(getComputedStyle(el).width) || (el.offsetWidth || 24);
    const ch = parseFloat(getComputedStyle(el).height) || (el.offsetHeight || 24);

    // assign corner origin (round-robin) so shapes start from four corners
    const corner = i % 4; // 0: br, 1: bl, 2: tr, 3: tl
    let x, y;
    if (corner === 0) { x = w() - (Math.random() * 140 + 20); y = h() - (Math.random() * 140 + 20); }
    if (corner === 1) { x = (Math.random() * 140 + 20); y = h() - (Math.random() * 140 + 20); }
    if (corner === 2) { x = w() - (Math.random() * 140 + 20); y = (Math.random() * 140 + 20); }
    if (corner === 3) { x = (Math.random() * 140 + 20); y = (Math.random() * 140 + 20); }

    // random velocity magnitude and direction, typically towards interior
    const speed = (Math.random() * 0.9 + 0.6) * (Math.random() < 0.6 ? 1 : 0.7);
    // direct generally along diagonal towards opposite quadrant plus jitter
    const vx = (corner === 0 || corner === 2) ? -(Math.random() * 0.8 + 0.2) * speed : (Math.random() * 0.8 + 0.2) * speed;
    const vy = (corner === 0 || corner === 1) ? -(Math.random() * 0.8 + 0.2) * speed : (Math.random() * 0.8 + 0.2) * speed;

    const state = {
      el,
      x, y,
      vx, vy,
      w: cw,
      h: ch,
      angle: Math.random() * 360,
      angVel: (Math.random() - 0.5) * 20,
      scale: 1,
      alive: true
    };

    // set initial transform so shape appears at the computed position immediately
    el.style.transform = `translate(${Math.round(state.x)}px, ${Math.round(state.y)}px) rotate(${Math.round(state.angle)}deg) scale(${state.scale})`;

    // lightweight interaction: add a small random impulse on pointer down
    el.addEventListener('pointerdown', (ev) => {
      ev.stopPropagation();
      // apply a short random velocity change to make motion feel reactive
      state.vx += (Math.random() - 0.5) * 1.6;
      state.vy += (Math.random() - 0.5) * 1.6;
      // small temporary scale pulse
      const prev = state.scale;
      state.scale = 1.08;
      setTimeout(() => { state.scale = prev; }, 220 + Math.random()*160);
    });

    return state;
  });

  // animation loop with basic collision against container edges
  let last = performance.now();
  function step(now) {
    const dt = Math.min((now - last) / 16.666, 4); // ~60fps normalized
    last = now;
    const width = w();
    const height = h();

    for (const s of items) {
      if (!s.alive) continue;
      // small random jitter to make motion irregular
      s.vx += (Math.random() - 0.5) * 0.02 * dt;
      s.vy += (Math.random() - 0.5) * 0.02 * dt;

      s.x += s.vx * 6 * dt;
      s.y += s.vy * 6 * dt;
      s.angle += s.angVel * 0.02 * dt;

      // collision with bounds
      const minX = 8;
      const minY = 8;
      const maxX = width - s.w - 8;
      const maxY = height - s.h - 8;
      let bounced = false;
      if (s.x < minX) { s.x = minX; s.vx = Math.abs(s.vx) * 0.94; bounced = true; }
      if (s.x > maxX) { s.x = maxX; s.vx = -Math.abs(s.vx) * 0.94; bounced = true; }
      if (s.y < minY) { s.y = minY; s.vy = Math.abs(s.vy) * 0.94; bounced = true; }
      if (s.y > maxY) { s.y = maxY; s.vy = -Math.abs(s.vy) * 0.94; bounced = true; }

      // slight friction
      s.vx *= 0.999;
      s.vy *= 0.999;

      // render transform including rotation
      s.el.style.transform = `translate(${Math.round(s.x)}px, ${Math.round(s.y)}px) rotate(${Math.round(s.angle)}deg) scale(${s.scale})`;
    }

    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);

  // handle resize: keep shapes inside
  window.addEventListener('resize', () => {
    const W = w(); const H = h();
    for (const s of items) {
      if (s.x > W - s.w - 8) s.x = W - s.w - 12;
      if (s.y > H - s.h - 8) s.y = H - s.h - 12;
    }
  });
})();
