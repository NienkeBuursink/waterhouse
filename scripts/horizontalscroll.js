const section = document.querySelector('.proces-section');
const sticky = document.querySelector('#sticky-horizontal');
const track = document.querySelector('#proces-wrapper');
const steps = document.querySelectorAll('.stap');
const totalSteps = steps.length;

let active = false; // ADD THIS LINE

if (section && sticky && track && steps.length) {
  section.style.height = `${totalSteps * 100}vh`;
  
  // Observer to toggle active state
  const observer = new IntersectionObserver((entries) => {
    active = entries[0]?.isIntersecting || false;
    sticky.style.scrollBehavior = active ? 'smooth' : 'auto';
  }, { threshold: 0 });
  
  observer.observe(section);
}

window.addEventListener('scroll', () => {
  if (!active) return; // define active

  const rect = section.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const totalScrollable = section.offsetHeight - viewportHeight;
  const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
  const progress = totalScrollable > 0 ? scrolled / totalScrollable : 0;

  // SNAP TO NEAREST STEP
  const stepProgress = progress * (totalSteps - 1);
  const snappedStep = Math.round(stepProgress);
  const snappedProgress = totalSteps > 1 ? snappedStep / (totalSteps - 1) : 0;
  
  const maxTranslate = (totalSteps - 1) * window.innerWidth;
  const translateX = -snappedProgress * maxTranslate;
  
  track.style.transform = `translateX(${translateX}px)`; // track now defined
});

