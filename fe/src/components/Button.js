import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 52px;
  border: none;
  background: ${({ theme }) => theme.color.primary.main};
  font-size: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray.white};
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.color.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.color.primary.dark};
  }

  &[disabled] {
    background: #CCC;
    cursor: default;
  }
`;
