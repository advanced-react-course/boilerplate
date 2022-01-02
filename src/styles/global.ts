import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

type GlobalStyleProps = {
  removeBackground?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  ${({ theme, removeBackground }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      ${!removeBackground &&
      css`
        background-color: ${theme.colors.darkGray};
      `}
    }
  `}
`;

export default GlobalStyles;
