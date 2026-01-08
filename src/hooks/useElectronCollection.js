import React from "react";

const getApi = () => {
  if (typeof window !== "undefined" && window.agenciaAPI) {
    return window.agenciaAPI;
  }
  // fallback para ambiente web (sem Electron)
  return {
    getCollection: async () => [],
    saveCollection: async (_name, data) => data
  };
};

export function useElectronCollection(name, initial = []) {
  const [items, setItems] = React.useState(initial);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let mounted = true;
    const api = getApi();
    api
      .getCollection(name)
      .then((data) => {
        if (mounted) {
          setItems(Array.isArray(data) ? data : []);
        }
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [name]);

  const persist = async (next) => {
    const api = getApi();
    setItems(next);
    await api.saveCollection(name, next);
  };

  return { items, loading, setItems: persist };
}
