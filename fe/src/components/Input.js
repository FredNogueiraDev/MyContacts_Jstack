import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  border: none;
  background: ${({ theme }) => theme.color.gray.white};
  border: 2px solid ${({ theme }) => theme.color.gray.white};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  appearence: none;

  &:focus {
    border-color: ${({ theme }) => theme.color.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.color.danger.main};
    border-color: ${theme.color.danger.main} !important;

  `}
`;
