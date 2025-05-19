const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const section = entry.target;

    if (entry.isIntersecting) { 
        section.classList.add('visible');
      
    } else {
      section.classList.remove('visible');
    }});
}, {
  threshold: 0.7,
});

document.querySelectorAll('.observe').forEach(section => {
  observer.observe(section);
  console.log(section);
});
