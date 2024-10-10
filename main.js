const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("node:path")
// const { exec } = require('child_process')

function createWindow () {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  })

  window.loadFile(path.join(__dirname, 'renderer', 'index.html'))

  // ipcMain.handle('open-chrome', () => {
  //   exec('start chrome "www.google.com"');
  //   exec('google-chrome "www.google.com"');
  // });
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  app.quit();
});