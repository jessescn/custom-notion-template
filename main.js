const { app, BrowserWindow, screen, globalShortcut } = require('electron')
const path = require('path')

let win = null

function createWindow () {
    const mainScreen = screen.getPrimaryDisplay();
    const dimensions = mainScreen.size

    win = new BrowserWindow({
        width: dimensions.width,
        height: dimensions.height,
        transparent: true,
        frame: false,
        icon: "./assets/notion.png",
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, 'notion.js')
        }
    })

    win.loadURL("https://www.notion.so/")
}

// You can use this method to bind shortcuts for your notion 
function createShortcuts(){
    const close = "Ctrl+Shift+Delete"

    globalShortcut.register(close, app.quit);
}

app.whenReady().then(setTimeout(createWindow, 200)).then(createShortcuts);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
