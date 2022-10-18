import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { HomePageTemplate, HomePageTemplateProperties } from '~templates';

const Index: NextPage<HomePageTemplateProperties> = ({ ...properties }) => {
  return (
    <>
      <Head>
        <title>{properties.title}</title>
      </Head>

      <HomePageTemplate {...properties} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageProperties: HomePageTemplateProperties = {
    title: 'Boilerplate',
    subtitle:
      'TypeScript, ReactJS, NextJS, Styled Components, Storybook, Jest, and more...',
  };

  return {
    props: { ...pageProperties },
  };
};

export default Index;
