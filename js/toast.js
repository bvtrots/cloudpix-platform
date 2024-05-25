const toast = document.getElementById('server-status-toast');

export function showToast() {
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('visible'), 1000);
}

export function hideToast() {
  toast.classList.add('hidden');
  setTimeout(() => toast.classList.add('visible'), 1000);
}
