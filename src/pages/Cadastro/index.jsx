import React, { useState } from "react";
import { Container, ContainerForm, Form, Label } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import Api from "../../services/api";
import { toast } from "react-toastify";

export const Cadastro = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputValue = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await Api.post("/createusers", data);
    const { error, message } = res.data;
    if (!error) {
      toast(message);
    } else {
      toast(message);
    }
  };

  return (
    <Container>
      <h2>Crie sua conta</h2>
      <p>Cadastre-se para acessar a plataforma</p>
      <ContainerForm>
        <Form onSubmit={handleSubmit}>
          <Label>Nome</Label>
          <Input
            name="name"
            type="text"
            placeholder="Informe seu nome"
            onChange={inputValue}
          />
          <Label>E-mail</Label>
          <Input
            name="email"
            type="text"
            placeholder="Informe seu e-mail"
            onChange={inputValue}
          />
          <Label>Senha</Label>
          <Input
            name="password"
            type="password"
            placeholder="Informe sua senha"
            onChange={inputValue}
          />
          <Button>Fazer Cadastro</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};
