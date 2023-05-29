import { Container, Logo, Menu } from "./style";
import logoImg from "../../assets/logoImg.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const handleLogooff = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  const userLogged = localStorage.getItem("user");

  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={logoImg} alt="" />
        </Link>
      </Logo>
      <Menu>
        <ul>
          {userLogged ? (
            <Link to="" onClick={handleLogooff}>
              <li>Sair</li>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <li>Login</li>
              </Link>
              <Link to="/cadastro">
                <li>Cadastrar</li>
              </Link>
            </>
          )}
        </ul>
      </Menu>
    </Container>
  );
};
