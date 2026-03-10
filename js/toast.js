const toast = 'server-status-toast';
const LOCAL_SUBSTR = 'localhost';

class Toast {

  constructor(SERVER_URL){
    this.toastElement = document.getElementById(toast);
    this.serverURL = SERVER_URL;
    this.isLocalServer = this.serverURL.includes(LOCAL_SUBSTR);
  }

  showToast() {
    if (this.isLocalServer){
    this.toastElement.classList.remove('hidden');
    this.toastElement.classList.add('visible');
    }
  }

  hideToast() {
    this.toastElement.classList.remove('visible');
    this.toastElement.classList.add('hidden');
  }

}

export default Toast;
