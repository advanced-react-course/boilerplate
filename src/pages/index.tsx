import HomeTemplate, { HomeTemplateProps } from 'templates/Home';

function Index(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />;
}

export default Index;

const pageProps: HomeTemplateProps = {
  title: 'Boilerplate',
  subtitle:
    'TypeScript, ReactJS, NextJS, Styled Components, Storybook, Jest, and more...',
};

export const getStaticProps = async () => ({
  props: { ...pageProps },
});
