const box = document.getElementById('toasts');

export const toast = (message, timer=1000) => {
  if (message.trim() == '') {
    return;
  }

  const toastElement = document.createElement('div')
  toastElement.textContent = message
  toastElement.className = 'toast'

  box.appendChild(toastElement)
  setTimeout(() => toastElement.remove(), timer);
}