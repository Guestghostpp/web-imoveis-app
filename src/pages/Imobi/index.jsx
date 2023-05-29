import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { TopBanner } from "../../components/TopBanner";
import Api, { urlApi } from "../../services/api";
import { toast } from "react-toastify";
import {
  Container,
  Descripition,
  Left,
  Profile,
  ProfileContact,
  ProfileDescripition,
  ProfileFormContact,
  ProfileImg,
  Right,
  Thumb,
} from "./style";

export const Imobi = () => {
  const { slug } = useParams();
  const [dataImobi, setDataImobi] = useState([]);

  useEffect(() => {
    Api.get(`/listimobi/${slug}`)
      .then((res) => {
        setDataImobi(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [slug]);

  const {
    tipo,
    cidade,
    endereco,
    descricao,
    thumb,
    telefone,
    name,
    email,
    userId,
  } = dataImobi;

  const [client_name, setClientName] = useState("");
  const [client_email, setClientEmail] = useState("");
  const [client_message, setClientMenssage] = useState("");

  const dataMenssage = { client_name, client_email, client_message, userId };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Api.post("/createmessage", dataMenssage)
      .then((res) => {
        if (!res.data.error == true) {
          toast(res.data.message);
        } else {
          toast(res.data.message);
        }
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <TopBanner tipo={tipo} descricao={descricao} thumb={thumb} />
      <Container>
        <Left>
          <Thumb>
            <img src={`${urlApi}/uploads/${thumb}`} alt="" />
          </Thumb>
          <Descripition>
            <h2>{tipo}</h2>
            <h5>{cidade}</h5>
            <h5>{endereco}</h5>
            <p>{descricao}</p>
          </Descripition>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
              <img
                src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                alt=""
              />
            </ProfileImg>
            <ProfileDescripition>
              <h3>{name}</h3>
              <p>Descrição do Usuário</p>
            </ProfileDescripition>
          </Profile>
          <ProfileContact>
            <h3>Informações pata contato:</h3>
            <p>{telefone}</p>
            <p>{email}</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contrate o anunciante</h3>
            <form onSubmit={handleSubmit} autoComplete="off">
              <Input
                type="text"
                placeholder="Nome:"
                name="client_name"
                onChange={(e) => setClientName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="E-mail:"
                name="client_email"
                onChange={(e) => setClientEmail(e.target.value)}
                required
              />
              <Textarea
                placeholder="Menssagem:"
                name="client_message"
                onChange={(e) => setClientMenssage(e.target.value)}
                required
              />
              <Button>Enviar mensagem</Button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </>
  );
};
