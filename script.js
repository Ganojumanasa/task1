window.addEventListener('DOMContentLoaded', () => {
  alert("Welcome to Your Name's Portfolio Website!");

  // Animate progress bars on page load
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    // Read width from inline style width attribute (e.g. 90%)
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
});
