import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  background-color: var(--blue);
  line-height: 24px;
  border: none;
  color: var(--white);
  font-size: 0.8rem;
  font-weight: 600;
  transition: 0.3s;
  padding: 12px 20px;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    padding: 10px 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
    padding: 8px 12px;
  }
`;
