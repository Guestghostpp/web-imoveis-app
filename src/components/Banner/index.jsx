import { Container, Text } from "./style";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <Container>
      <Text>
        <h2>Descubra a beleza do seu próximo apartamento</h2>
        <p>
          Milhares de pessoas têm seus apartamentos em disputa. Não perca a
          chance de adquirir sua casa própria hoje
        </p>
        <Link to="/perfil">
          <span>Cadastre seu anúncio</span>
        </Link>
      </Text>
    </Container>
  );
};
