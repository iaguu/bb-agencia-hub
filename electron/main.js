const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
const isDev = process.env.NODE_ENV === "development";
const { setupDataEngineIpc } = require("./dataEngine");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1360,
    height: 768,
    minWidth: 1200,
    minHeight: 700,
    backgroundColor: "#05060a",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // Caminho absoluto para o arquivo dist/index.html
  const distIndex = path.join(__dirname, "..", "dist", "index.html");
  const distExists = fs.existsSync(distIndex);

  // --- Fallback automático ---
  if (isDev || !distExists) {
    console.log("[AgênciaHub] Carregando em modo DEV:", "http://localhost:5173");
    mainWindow.loadURL("http://localhost:5173");
  } else {
    console.log("[AgênciaHub] Carregando build:", distIndex);
    mainWindow.loadFile(distIndex);
  }

  // Apenas abre DevTools em dev
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();
  setupDataEngineIpc(ipcMain);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
