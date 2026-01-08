const fs = require("fs");
const path = require("path");

const baseDir = path.join(process.cwd(), "data", "agencia");

function ensureBaseDir() {
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }
}

function getCollectionPath(name) {
  ensureBaseDir();
  return path.join(baseDir, `${name}.json`);
}

function readCollection(name) {
  const file = getCollectionPath(name);
  if (!fs.existsSync(file)) {
    return [];
  }
  try {
    const raw = fs.readFileSync(file, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    if (Array.isArray(parsed.items)) return parsed.items;
    return [];
  } catch (err) {
    console.error("Erro ao ler collection", name, err);
    return [];
  }
}

function writeCollection(name, data) {
  const file = getCollectionPath(name);
  const payload = Array.isArray(data) ? data : [];
  fs.writeFileSync(file, JSON.stringify({ items: payload }, null, 2), "utf-8");
  return payload;
}

function setupDataEngineIpc(ipcMain) {
  ipcMain.handle("agencia:getCollection", async (_event, name) => {
    return readCollection(name);
  });

  ipcMain.handle("agencia:saveCollection", async (_event, payload) => {
    const { name, data } = payload || {};
    return writeCollection(name, data);
  });
}

module.exports = {
  setupDataEngineIpc
};
