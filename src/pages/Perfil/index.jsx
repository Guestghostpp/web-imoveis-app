import React, { useEffect, useState } from "react";
import { Container, Form, Left, Message, Right } from "./style";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Api from "../../services/api";
import { toast } from "react-toastify";
import { getLocalStorage } from "../../context/utils";

export const Perfil = () => {
  const [thumb, setThumb] = useState("");
  const [tipo, setTipo] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const user = getLocalStorage();
  const { id } = user;

  const data = {
    id,
    thumb,
    tipo,
    endereco,
    cidade,
    uf,
    valor,
    descricao,
    name,
    email,
    telefone,
  };

  const [menssage, setMenssage] = useState([]);

  useEffect(() => {
    Api.get(`/findmessage/${id}`)
      .then((res) => {
        setMenssage(res.data.messages);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    Api.post("/createimobi", data, headers)
      .then((res) => {
        if (res.data.error) {
          toast(res.data.message);
        } else {
          toast(res.data.message);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Left>
        <h2>Minhas menssagens</h2>
        {menssage.map((item) => (
          <Message key={item.id}>
            <span>Nome: {item.client_name}</span>
            <span>Email: {item.client_email}</span>
            <p>{item.client_message}</p>
          </Message>
        ))}
      </Left>
      <Right>
        <h2>Cadastrar Imóvel</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="file"
            name="thumb"
            onChange={(e) => setThumb(e.target.files[0])}
          />
          <Input
            type="text"
            name="tipo"
            placeholder="Informe o tipo do imóvel:"
            onChange={(e) => setTipo(e.target.value)}
          />
          <Input
            type="text"
            name="endereco"
            placeholder="Informe o endereco:"
            onChange={(e) => setEndereco(e.target.value)}
          />
          <Input
            type="text"
            name="cidade"
            placeholder="Informe a cidade:"
            onChange={(e) => setCidade(e.target.value)}
          />
          <Input
            type="text"
            name="uf"
            placeholder="Informe a uf:"
            onChange={(e) => setUf(e.target.value)}
          />
          <Input
            type="text"
            name="descricao"
            placeholder="Descrição do imóvel:"
            onChange={(e) => setDescricao(e.target.value)}
          />
          <Input
            type="text"
            name="name"
            placeholder="Informe seu nome:"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            name="email"
            placeholder="Informe seu email:"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            name="valor"
            placeholder="Informe o valor:"
            onChange={(e) => setValor(e.target.value)}
          />
          <Input
            type="text"
            name="telefone"
            placeholder="Informe o telefone:"
            onChange={(e) => setTelefone(e.target.value)}
          />
          <Button type="submit">Cadastrar Imóvel</Button>
        </Form>
      </Right>
    </Container>
  );
};
