import * as S from './styles';
const Main = ({
  title = 'Advanced React Course',
  description = 'TypeScript, ReactJS, NextJS and Styled Components',
}) => (
  <S.Wrapper>
    <S.Logo src="/images/logo.svg" alt="" />
    <S.Title>{title}</S.Title>

    <S.Description>{description}</S.Description>
    <S.Illustration src="/images/hero-illustration.svg" alt="" />
  </S.Wrapper>
);

export default Main;
