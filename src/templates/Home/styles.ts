import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    text-align: center;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
  `}
`;
