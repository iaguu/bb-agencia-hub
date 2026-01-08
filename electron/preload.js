const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("agenciaAPI", {
  getCollection: async (name) => {
    return ipcRenderer.invoke("agencia:getCollection", name);
  },
  saveCollection: async (name, data) => {
    return ipcRenderer.invoke("agencia:saveCollection", { name, data });
  }
});
