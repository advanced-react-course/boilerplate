import { FC } from 'react';
import * as S from './styles';

export const Logo: FC = () => (
  <S.Logo
    data-testid="logo-component"
    src="/images/logo.svg"
    alt="Application logo"
  />
);
