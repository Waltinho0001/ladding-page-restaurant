export function initForm() {
  const form = document.querySelector('.reservation-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button');
    const originalText = btn.innerText;

    btn.innerText = 'Reserva Solicitada!';
    btn.style.background = '#28a745';
    btn.style.color = '#fff';

    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.background = 'var(--primary)';
      btn.style.color = '#121212';
      form.reset();
    }, 3000);
  });
}