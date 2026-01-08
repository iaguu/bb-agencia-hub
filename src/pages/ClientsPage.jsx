import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import { useElectronCollection } from "../hooks/useElectronCollection";

const emptyForm = {
  id: "",
  name: "",
  brand: "",
  segment: "",
  contactName: "",
  contactPhone: "",
  contactEmail: "",
  city: "",
  plan: "social",
  notes: ""
};

const ClientsPage = () => {
  const { items: clients, loading, setItems } = useElectronCollection(
    "clients",
    []
  );
  const [search, setSearch] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [form, setForm] = React.useState(emptyForm);

  const filtered = React.useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return clients;
    return clients.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.brand.toLowerCase().includes(q) ||
        c.segment.toLowerCase().includes(q)
    );
  }, [clients, search]);

  const handleNew = () => {
    setForm({ ...emptyForm, id: Date.now().toString() });
    setIsModalOpen(true);
  };

  const handleEdit = (client) => {
    setForm(client);
    setIsModalOpen(true);
  };

  const handleDelete = (client) => {
    if (!window.confirm(`Remover cliente "${client.brand}"?`)) return;
    const next = clients.filter((c) => c.id !== client.id);
    setItems(next);
  };

  const handleSubmit = () => {
    const exists = clients.some((c) => c.id === form.id);
    let next;
    if (exists) {
      next = clients.map((c) => (c.id === form.id ? form : c));
    } else {
      next = [...clients, form];
    }
    setItems(next);
    setIsModalOpen(false);
  };

  return (
    <div className="page clients-page">
      <Card
        title="Clientes"
        description="Cadastro dos negócios atendidos pela agência."
      >
        <div className="toolbar">
          <input
            className="input"
            placeholder="Buscar por nome, marca ou segmento..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={handleNew}>Novo cliente</Button>
        </div>

        {loading ? (
          <p className="muted">Carregando clientes...</p>
        ) : filtered.length === 0 ? (
          <p className="muted">
            Nenhum cliente cadastrado ainda. Comece criando o primeiro.
          </p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Marca</th>
                <th>Segmento</th>
                <th>Cidade</th>
                <th>Plano</th>
                <th>Contato</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((client) => (
                <tr key={client.id}>
                  <td>
                    <div className="table-main">
                      <strong>{client.brand}</strong>
                      <span className="muted small">{client.name}</span>
                    </div>
                  </td>
                  <td>{client.segment}</td>
                  <td>{client.city}</td>
                  <td>
                    <span className={`badge badge-plan-${client.plan}`}>
                      {client.plan === "social" && "Social Media"}
                      {client.plan === "performance" && "Performance"}
                      {client.plan === "full" && "Full Service"}
                    </span>
                  </td>
                  <td>
                    <div className="table-main">
                      <span>{client.contactName}</span>
                      <span className="muted small">
                        {client.contactPhone || client.contactEmail}
                      </span>
                    </div>
                  </td>
                  <td className="table-actions">
                    <button
                      className="link"
                      onClick={() => handleEdit(client)}
                    >
                      Editar
                    </button>
                    <button
                      className="link link-danger"
                      onClick={() => handleDelete(client)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>

      <Modal
        isOpen={isModalOpen}
        title={form.id ? "Editar cliente" : "Novo cliente"}
        onClose={() => setIsModalOpen(false)}
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSubmit}>Salvar</Button>
          </>
        }
      >
        <div className="form-grid">
          <label>
            <span>Nome do responsável / empresa</span>
            <input
              className="input"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </label>
          <label>
            <span>Marca</span>
            <input
              className="input"
              value={form.brand}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, brand: e.target.value }))
              }
            />
          </label>
          <label>
            <span>Segmento</span>
            <input
              className="input"
              value={form.segment}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, segment: e.target.value }))
              }
            />
          </label>
          <label>
            <span>Cidade</span>
            <input
              className="input"
              value={form.city}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, city: e.target.value }))
              }
            />
          </label>
          <label>
            <span>Plano</span>
            <select
              className="input"
              value={form.plan}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, plan: e.target.value }))
              }
            >
              <option value="social">Social Media</option>
              <option value="performance">Performance</option>
              <option value="full">Full Service</option>
            </select>
          </label>
          <label>
            <span>Nome do contato</span>
            <input
              className="input"
              value={form.contactName}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, contactName: e.target.value }))
              }
            />
          </label>
          <label>
            <span>Telefone</span>
            <input
              className="input"
              value={form.contactPhone}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, contactPhone: e.target.value }))
              }
            />
          </label>
          <label>
            <span>E-mail</span>
            <input
              className="input"
              value={form.contactEmail}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, contactEmail: e.target.value }))
              }
            />
          </label>
          <label className="form-full">
            <span>Notas / briefing inicial</span>
            <textarea
              className="input textarea"
              rows={3}
              value={form.notes}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, notes: e.target.value }))
              }
            />
          </label>
        </div>
      </Modal>
    </div>
  );
};

export default ClientsPage;
