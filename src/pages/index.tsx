import HomeTemplate, { HomeTemplateProperties } from 'templates/Home';

function Index(properties: HomeTemplateProperties) {
  return <HomeTemplate {...properties} />;
}

export default Index;

const pageProperties: HomeTemplateProperties = {
  title: 'Boilerplate',
  subtitle:
    'TypeScript, ReactJS, NextJS, Styled Components, Storybook, Jest, and more...',
};

export const getStaticProps = async () => ({
  props: { ...pageProperties },
});
