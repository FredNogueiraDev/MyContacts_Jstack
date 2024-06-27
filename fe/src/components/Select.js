import styled from 'styled-components';

export default styled.select`
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
  -webkit-appearance: none !important;

  &:focus {
    border-color: ${({ theme }) => theme.color.primary.main};
  }

  &[disabled] {
    background: ${({ theme }) => theme.color.gray[100]};
    border-color: ${({ theme }) => theme.color.gray[100]};
  }
`;
