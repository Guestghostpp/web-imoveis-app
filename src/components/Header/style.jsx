import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 150px;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  background-color: var(--white);

  @media screen and (max-width: 768px) {
    padding: 15px;
    height: auto;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const Menu = styled.div`
  li {
    border: 1px solid var(--gray);
    padding: 10px 15px;
    border-radius: 10px;
  }

  li:hover {
    background-color: var(--gray);
    cursor: pointer;
  }
  ul {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;
