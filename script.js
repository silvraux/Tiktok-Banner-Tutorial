document.querySelectorAll('.copy-button').forEach((button) => {
  button.addEventListener('click', async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      const original = button.textContent;
      button.textContent = 'Copied';
      window.setTimeout(() => { button.textContent = original; }, 1400);
    } catch {
      button.textContent = 'Select manually';
      window.setTimeout(() => { button.textContent = 'Copy'; }, 1800);
    }
  });
});
