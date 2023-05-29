import styled from "styled-components";

export const Container = styled.input`
  height: 50px;
  padding: 8px 15px;
  border-radius: 3px;
  width: 100%;
  color: var(--secondary);
  letter-spacing: 0.1px;
  font-size: 0.938rem;
  margin-bottom: 10px;
  outline: none;
  border-color: var(--gray-light);
  border: 1px solid var(--shade);

  @media screen and (max-width: 768px) {
    height: 40px;
    padding: 6px 12px;
    font-size: 0.85rem;
  }

  @media screen and (max-width: 480px) {
    height: 30px;
    padding: 4px 8px;
    font-size: 0.75rem;
  }
`;
