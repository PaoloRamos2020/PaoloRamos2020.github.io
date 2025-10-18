document.addEventListener('DOMContentLoaded', () => {
  console.log('Portafolio Beach Party cargado.');

  const btn = document.getElementById('rsvpBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      btn.disabled = true;
      btn.textContent = '¡Confirmado!';
      btn.classList.add('confirmed');
      // Mensaje breve en pantalla
      const note = document.createElement('div');
      note.textContent = '¡Gracias! Te esperamos en la playa. Revisa tu correo para más detalles.';
      note.className = 'rsvp-note';
      note.style.position = 'fixed';
      note.style.right = '18px';
      note.style.bottom = '18px';
      note.style.background = 'rgba(3,59,76,0.95)';
      note.style.color = '#fff';
      note.style.padding = '12px 16px';
      note.style.borderRadius = '10px';
      note.style.zIndex = 9999;
      note.style.boxShadow = '0 10px 30px rgba(3,59,76,0.18)';
      document.body.appendChild(note);
      setTimeout(()=> note.remove(), 6000);
    });
  }

  // Reveal on scroll (IntersectionObserver)
  const reveals = document.querySelectorAll('.container, .card, .hero-content, .gallery img, .brand, footer');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal','active');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.12});
  reveals.forEach(el => io.observe(el));

  // Header shrink on scroll + gentle parallax hero
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('shrink', y > 40);
    // parallax: mover background ligeramente
    if (hero) hero.style.backgroundPosition = `center ${Math.max(-20, -y * 0.12)}px`;
    lastScroll = y;
  }, {passive: true});
});