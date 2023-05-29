import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 100px 150px;
  background-color: var(--white);

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 50px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  img {
    width: 200px;
  }
  h3 {
    margin-bottom: 10px;
  }
  ul {
    li {
      margin: 15px 0;
    }
  }

  nav {
    display: flex;
    margin-top: 13px;
    gap: 20px;
  }

`;

export const Copy = styled.div`
  display: flex;
  padding: 15px 150px;
  justify-content: space-between;
  background-color: var(--blue);
  color: var(--white);

  ul {
    display: flex;
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 15px;
    text-align: center;

    ul {
      margin-top: 10px;
    }
  }
`;
