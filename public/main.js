const { getByLabelText } = require('@testing-library/react');
const { app, BrowserWindow, ipcMain, dialog, Menu } = require('electron')

let primaryWindow;

function createWindow () {
  // Create the browser window.
  primaryWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: true,
    }
  })

  // remove the menu bar
  primaryWindow.removeMenu()

  // load the index.html from a url
  primaryWindow.loadURL('http://localhost:3000');

  // Open the DevTools.
  primaryWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {

  // create primary window
  createWindow()

  // create menu bar object
  const template = [
    {
      label: 'Options',
      submenu:[
        {
          role:'reload'
        },
        {
          label: "Home",
          click: function() {
            console.log("to Home activity"),
            primaryWindow.loadURL('http://localhost:3000/#/')
          }
        },
        {
          label: 'Code Viewer',
          click: function() {
             console.log('To Code View activity') 
             // Route to the code view activity
             primaryWindow.loadURL('http://localhost:3000/#/CodeViewer')
          }
        },
        {
          label: 'Graph Viewer',
          click: function() {
             console.log('To Graph Viewer activity') 
             // Route to the graph view activity
             primaryWindow.loadURL('http://localhost:3000/#/GraphViewer')
          }
        },
        {
          label: 'CWL file generator',
          click: function() { 
            console.log('to CWL activity') 
            // Route to the CWL activity
            primaryWindow.loadURL('http://localhost:3000/#/CWLGenerator')
          }
        }
      ]
    }
  ]

  // instantiating the menu object
  const menu = Menu.buildFromTemplate(template)

  // Apply the menu to the current application
  Menu.setApplicationMenu(menu)

})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }

})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// General Error dialogue box. Include calls to this when writting error catch statements
ipcMain.on('general-error', (event, arg) => {
  dialog.showErrorBox('General Error', 'An unclassified error has taken place')
})


// example IPC for button launch
ipcMain.on('launch-google', (event, arg) => {
    createWindow()
})



