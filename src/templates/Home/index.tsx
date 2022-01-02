import Logo from 'components/Logo';
import * as S from './styles';

export type HomeTemplateProps = {
  title: string;
  subtitle: string;
};

export default function HomeTemplate({ title, subtitle }: HomeTemplateProps) {
  return (
    <S.Wrapper>
      <Logo />

      <S.Title data-testid="title">{title}</S.Title>

      <S.Subtitle data-testid="subtitle">{subtitle}</S.Subtitle>
    </S.Wrapper>
  );
}
