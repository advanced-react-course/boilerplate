import styled, { css } from 'styled-components';

export const Logo = styled.img`
  ${({ theme }) => css`
    width: 25rem;
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`;
