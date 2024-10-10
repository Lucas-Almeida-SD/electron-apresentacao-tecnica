const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const chrome = document.getElementById('chrome');
chrome.addEventListener('click', () => {
  window.versions.openChrome();
})