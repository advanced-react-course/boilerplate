import { FC } from 'react';
import { Logo } from '~components';
import * as S from './styles';

export type HomePageTemplateProperties = {
  title: string;
  subtitle: string;
};

export const HomePageTemplate: FC<HomePageTemplateProperties> = ({
  title,
  subtitle,
}) => {
  return (
    <S.Wrapper data-testid="home-page-template">
      <Logo />

      <S.Title data-testid="title">{title}</S.Title>

      <S.Subtitle data-testid="subtitle">{subtitle}</S.Subtitle>
    </S.Wrapper>
  );
};
