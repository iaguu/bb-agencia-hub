import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import { useElectronCollection } from "../hooks/useElectronCollection";

const emptyCampaign = {
  id: "",
  name: "",
  objective: "",
  clientBrand: "",
  budget: "",
  status: "draft",
  notes: ""
};

const CampaignsPage = () => {
  const { items: campaigns, setItems } = useElectronCollection("campaigns", []);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [form, setForm] = React.useState(emptyCampaign);

  const handleNew = () => {
    setForm({ ...emptyCampaign, id: Date.now().toString() });
    setIsModalOpen(true);
  };

  const handleEdit = (c) => {
    setForm(c);
    setIsModalOpen(true);
  };

  const handleDelete = (c) => {
    if (!window.confirm(`Remover campanha "${c.name}"?`)) return;
    setItems(campaigns.filter((x) => x.id !== c.id));
  };

  const handleSubmit = () => {
    const exists = campaigns.some((c) => c.id === form.id);
    let next;
    if (exists) {
      next = campaigns.map((c) => (c.id === form.id ? form : c));
    } else {
      next = [...campaigns, form];
    }
    setItems(next);
    setIsModalOpen(false);
  };

  return (
    <div className="page campaigns-page">
      <Card
        title="Campanhas"
        description="Controle de campanhas de mídia paga e lançamentos."
      >
        <div className="toolbar">
          <Button onClick={handleNew}>Nova campanha</Button>
        </div>

        {campaigns.length === 0 ? (
          <p className="muted">
            Nenhuma campanha cadastrada. Comece criando o planejamento de uma
            campanha piloto.
          </p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cliente</th>
                <th>Objetivo</th>
                <th>Orçamento</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.clientBrand}</td>
                  <td>{c.objective}</td>
                  <td>{c.budget}</td>
                  <td>
                    <span className={`badge badge-status-${c.status}`}>
                      {c.status === "draft" && "Rascunho"}
                      {c.status === "running" && "Em andamento"}
                      {c.status === "paused" && "Pausada"}
                      {c.status === "finished" && "Finalizada"}
                    </span>
                  </td>
                  <td className="table-actions">
                    <button
                      className="link"
                      onClick={() => handleEdit(c)}
                    >
                      Editar
                    </button>
                    <button
                      className="link link-danger"
                      onClick={() => handleDelete(c)}
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
        title={form.id ? "Editar campanha" : "Nova campanha"}
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
            <span>Nome da campanha</span>
            <input
              className="input"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </label>
          <label>
            <span>Cliente / marca</span>
            <input
              className="input"
              value={form.clientBrand}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, clientBrand: e.target.value }))
              }
            />
          </label>
          <label>
            <span>Objetivo</span>
            <input
              className="input"
              value={form.objective}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, objective: e.target.value }))
              }
            />
          </label>
          <label>
            <span>Orçamento previsto</span>
            <input
              className="input"
              value={form.budget}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, budget: e.target.value }))
              }
            />
          </label>
          <label>
            <span>Status</span>
            <select
              className="input"
              value={form.status}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, status: e.target.value }))
              }
            >
              <option value="draft">Rascunho</option>
              <option value="running">Em andamento</option>
              <option value="paused">Pausada</option>
              <option value="finished">Finalizada</option>
            </select>
          </label>
          <label className="form-full">
            <span>Notas</span>
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

export default CampaignsPage;
