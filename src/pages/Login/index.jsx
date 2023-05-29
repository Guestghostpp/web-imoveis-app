import React, { useState } from "react";
import { Container, ContainerForm, Form, Label } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { appAuth } from "../../context/appAuth";

export const Login = () => {
  const auth = appAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth.authenticate(email, password);
  };

  return (
    <Container>
      <h2>Acesse sua conta</h2>
      <p>Entre com seu e-mail e senha</p>
      <ContainerForm>
        <Form onSubmit={handleSubmit}>
          <Label>E-mail</Label>
          <Input
            type="text"
            placeholder="Informe seu e-mail"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Senha</Label>
          <Input
            type="password"
            placeholder="Informe sua senha"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Fazer Login</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};
