import React from "react";
import { Container, Text } from "./style";
import { urlApi } from "../../services/api";

export const TopBanner = ({ tipo, descricao, thumb }) => {
 
  const urlImage = `url(${urlApi}/uploads/${thumb})`


  return (
    <Container style={{ backgroundImage: urlImage }}>
      <Text>
        <h2>{tipo}</h2>
        <p>{descricao}</p>
      </Text>
    </Container>
  );
};
