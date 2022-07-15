import React from "react";
import { HeaderComponent } from "../Components/headerComponent";
import useForm from "../Hooks/useForm";
import { useProtectedPage } from "../Hooks/ProtectedPage";
import { useNavigate } from "react-router-dom";

export const CreateTripPage = () => {
  const navigate = useNavigate();
  useProtectedPage();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });
  const creatTrip = (event) => {
    event.preventDefault();
    console.log("Viagem criada", form);
    cleanFields();
  };

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>Create Trip Page</div>
      <form onSubmit={creatTrip}>
        <input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome da Viagem"
          required
          pattern={"^.{5,}"}
          title={"O nome da viagem deve ter no mínimo 05 caracteres"}
        ></input>
        <select
          name={"planet"}
          value={form.planet}
          onChange={onChange}
          placeholder="Destino"
          required
        >
          <option value="Mercúrio">Mercúrio</option>
          <option value="Vênus">Vênus</option>
          <option value="Marte">Marte</option>
          <option value="Júpiter">Júpiter</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Netuno">Netuno</option>
        </select>
        <input
          name={"date"}
          type={"date"}
          value={form.date}
          onChange={onChange}
          placeholder="Data da Viagem"
          required
        ></input>
        <input
          name={"description"}
          value={form.description}
          onChange={onChange}
          placeholder="Descreva aqui a viagem"
          required
        ></input>
        <input
          name={"durationInDays"}
          value={form.durationInDays}
          onChange={onChange}
          placeholder="Duração da viagem"
          required
          type={"number"}
        ></input>

        <div>
          <button>Criar</button>
        </div>
      </form>
    </>
  );
};
