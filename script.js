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
      note.style.position = 'fixed';
      note.style.right = '18px';
      note.style.bottom = '18px';
      note.style.background = 'rgba(3,59,76,0.9)';
      note.style.color = '#fff';
      note.style.padding = '12px 16px';
      note.style.borderRadius = '10px';
      note.style.zIndex = 9999;
      document.body.appendChild(note);
      setTimeout(()=> note.remove(), 6000);
    });
  }
});