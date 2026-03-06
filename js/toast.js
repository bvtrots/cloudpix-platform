const toast = document.getElementById('server-status-toast');


export function showToast() {
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('visible'), 1000);
}

// function hideToast() {
//   toast.classList.remove('visible');
//   setTimeout(() => toast.classList.add('hidden'), 500);
// }
