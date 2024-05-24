import styled, { css } from 'styled-components';

export default styled.button`
  height: 52px;
  padding: 0 16px;
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

  ${({ theme, danger }) => danger && css`
  background: ${theme.color.danger.main};

  &:hover {
    background: ${theme.color.danger.light};
  }

  &:active {
    background: ${theme.color.danger.dark};
  }
  `}
`;
