/**
 * 게임개발총론 인터랙티브 다이어그램 공용 유틸
 */

/** 툴팁 표시 */
function showTooltip(el, html, anchorEl) {
  el.innerHTML = html;
  el.classList.add('visible');
  if (anchorEl) {
    const rect = anchorEl.getBoundingClientRect();
    const containerRect = el.parentElement.getBoundingClientRect();
    el.style.left = (rect.left - containerRect.left + rect.width / 2 - el.offsetWidth / 2) + 'px';
    el.style.top = (rect.bottom - containerRect.top + 12) + 'px';
  }
}

/** 툴팁 숨기기 */
function hideTooltip(el) {
  el.classList.remove('visible');
}

/** 간단 애니메이션: 요소를 순차적으로 fade-in */
function staggerFadeIn(selector, delayMs = 120) {
  const els = document.querySelectorAll(selector);
  els.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = `opacity 0.4s ${i * delayMs}ms, transform 0.4s ${i * delayMs}ms`;
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  });
}

/** SVG 화살표 경로 생성 (두 점 사이 곡선) */
function curvedArrowPath(x1, y1, x2, y2, curve = 0.3) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const cx = mx - dy * curve;
  const cy = my + dx * curve;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}
