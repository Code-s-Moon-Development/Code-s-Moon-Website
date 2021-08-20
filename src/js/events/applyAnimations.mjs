const yellowedTriangleEL = document.querySelector('.yellowed-triangle');
const observerTargetsELs = [
  ...document.querySelectorAll('.fade-element'),
].slice(1);
const mainEL = document.querySelector('main');
const imagesContainerEL = document.querySelector('.images-container');
let blockObserver = false;

function oberserverCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetEL = entry.target;
      const animationName = targetEL.dataset.animationName;

      targetEL.classList.remove('fade-element');
      targetEL.classList.add(animationName);

      observer.unobserve(targetEL);
    }
  });
}

function apllyAnimationsIfTheElementsAreVisible() {
  if (!('IntersectionObserver' in window)) {
    // Fallback
    observerTargetsELs.forEach((targetEL) =>
      targetEL.classList.remove('fade-element')
    );
    return;
  }

  const observerOptions = {
    root: null,
    threshold: 0.15,
  };
  const observer = new IntersectionObserver(
    oberserverCallback,
    observerOptions
  );

  observerTargetsELs.forEach((targetEL) => observer.observe(targetEL));
  blockObserver = true;
}

export function scheduleAnimations() {
  const responsiveStylesForSmallerScreensIsApplied =
    getComputedStyle(mainEL).display === 'block'; // On the responsive for smaller screens it's applied display: block on the <main>

  if (responsiveStylesForSmallerScreensIsApplied && !blockObserver) {
    apllyAnimationsIfTheElementsAreVisible();
  }

  return responsiveStylesForSmallerScreensIsApplied;
}

export function applyAnimationsWhenThePageLoads() {
  const descriptionContainerEL = document.querySelector(
    '.description-container'
  );
  const actionsAnchorsELs = [
    ...document.querySelectorAll('.actions-anchors-container > a'),
  ].slice(0, 2);

  mainEL.classList.remove('fade-element');
  descriptionContainerEL.classList.add('appear-to-right'); // Apply animations
  actionsAnchorsELs.forEach((anchorEL) =>
    anchorEL.classList.add('appear-growing-with-delay')
  );
  imagesContainerEL.classList.add('appear-to-top');

  if (scheduleAnimations(mainEL)) return;

  yellowedTriangleEL.classList.remove('fade-element');
  yellowedTriangleEL.classList.add('appear-growing');
}
