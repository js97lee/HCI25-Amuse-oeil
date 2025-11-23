// Super Flow Effect for Zone 3
// Creates triangular fragments that scale independently for parallax effect

export function initSuperFlow(swiper) {
  if (!swiper || !swiper.slides) return;

  const slides = swiper.slides;
  
  slides.forEach((slide) => {
    if (slide.classList.contains('super-flow-processed')) return;
    slide.classList.add('super-flow-processed');

    const slideContent = slide.querySelector('.work-card-slider');
    if (!slideContent) return;

    // Wait for content to be rendered
    const checkSize = () => {
      if (slideContent.offsetWidth === 0 || slideContent.offsetHeight === 0) {
        setTimeout(checkSize, 50);
        return;
      }

      // Remove existing fragments
      const existingFragments = slideContent.querySelector('.super-flow-fragments');
      if (existingFragments) {
        existingFragments.remove();
      }

      // Create fragment container
      const fragmentContainer = document.createElement('div');
      fragmentContainer.className = 'super-flow-fragments';
      
      // Create triangular fragments
      const fragmentSize = 100; // Size of each triangle
      const cols = Math.ceil(slideContent.offsetWidth / fragmentSize) + 1;
      const rows = Math.ceil(slideContent.offsetHeight / fragmentSize) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Create two triangles per cell (forming a square)
          const x = col * fragmentSize;
          const y = row * fragmentSize;

          // Triangle 1 (top-left to bottom-right)
          const triangle1 = createTriangle(x, y, fragmentSize, 'tl-br');
          fragmentContainer.appendChild(triangle1);

          // Triangle 2 (top-right to bottom-left)
          const triangle2 = createTriangle(x, y, fragmentSize, 'tr-bl');
          fragmentContainer.appendChild(triangle2);
        }
      }

      slideContent.style.position = 'relative';
      slideContent.appendChild(fragmentContainer);

      // Add mouse/touch interaction
      const handleMove = (e) => handleFragmentInteraction(e, fragmentContainer, slideContent);
      slideContent.addEventListener('mousemove', handleMove);
      slideContent.addEventListener('touchmove', handleMove);
      slideContent.addEventListener('mouseleave', () => resetFragments(fragmentContainer));
    };

    checkSize();
  });
}

function createTriangle(x, y, size, type) {
  const triangle = document.createElement('div');
  triangle.className = 'super-flow-triangle';
  
  const points = type === 'tl-br' 
    ? `0,0 ${size},0 ${size},${size}`
    : `0,0 0,${size} ${size},${size}`;

  triangle.innerHTML = `<svg width="${size}" height="${size}" style="position: absolute; top: 0; left: 0;">
    <polygon points="${points}" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>
  </svg>`;

  triangle.style.cssText = `
    position: absolute;
    top: ${y}px;
    left: ${x}px;
    width: ${size}px;
    height: ${size}px;
    pointer-events: none;
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform-origin: center;
    will-change: transform;
  `;

  triangle.dataset.x = x;
  triangle.dataset.y = y;

  return triangle;
}

function handleFragmentInteraction(e, fragmentContainer, slideContent) {
  const rect = slideContent.getBoundingClientRect();
  const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
  const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

  const triangles = fragmentContainer.querySelectorAll('.super-flow-triangle');
  const maxDistance = Math.max(rect.width, rect.height) * 0.6;

  triangles.forEach((triangle) => {
    const triangleX = parseFloat(triangle.dataset.x) + 50; // center of triangle
    const triangleY = parseFloat(triangle.dataset.y) + 50;

    const dx = x - triangleX;
    const dy = y - triangleY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const normalizedDistance = Math.min(distance / maxDistance, 1);

    // Scale based on distance (closer = larger scale, further = smaller)
    const scale = 0.7 + (1 - normalizedDistance) * 0.6; // 0.7 to 1.3
    const rotation = (1 - normalizedDistance) * 8;
    const translateX = dx * 0.1 * (1 - normalizedDistance);
    const translateY = dy * 0.1 * (1 - normalizedDistance);

    triangle.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotation}deg)`;
  });
}

function resetFragments(fragmentContainer) {
  const triangles = fragmentContainer.querySelectorAll('.super-flow-triangle');
  triangles.forEach((triangle) => {
    triangle.style.transform = 'translate(0, 0) scale(1) rotate(0deg)';
  });
}

export function cleanupSuperFlow(swiper) {
  if (!swiper || !swiper.slides) return;
  
  swiper.slides.forEach((slide) => {
    const fragments = slide.querySelectorAll('.super-flow-fragments');
    fragments.forEach((fragment) => fragment.remove());
    slide.classList.remove('super-flow-processed');
  });
}

