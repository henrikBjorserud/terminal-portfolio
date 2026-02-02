(() => {
  const input = document.getElementById('input');
  const sections = document.querySelectorAll('.section');
  const commands = ['about', 'projects', 'contact', 'help'];

  // Load ASCII banner
  fetch('assets/chair/chair.txt')
    .then(r => r.text())
    .then(t => { document.getElementById('ascii-banner').textContent = t; });

  // Focus input on any click
  document.addEventListener('click', () => input.focus());

  input.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const cmd = input.value.trim().toLowerCase();
    input.value = '';

    if (cmd === 'clear') {
      sections.forEach(s => s.classList.remove('visible'));
      return;
    }

    if (commands.includes(cmd)) {
      sections.forEach(s => s.classList.remove('visible'));
      document.getElementById(cmd).classList.add('visible');
      document.getElementById(cmd).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
})();
