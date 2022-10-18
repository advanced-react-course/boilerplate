module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/shared/{{pascalCase name}}/index.tsx',
        templateFile: './templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/shared/{{pascalCase name}}/styles.ts',
        templateFile: './templates/component/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/shared/{{pascalCase name}}/stories.tsx',
        templateFile: './templates/component/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/shared/{{pascalCase name}}/test.tsx',
        templateFile: './templates/component/test.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'Create a page template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/templates/{{pascalCase name}}/index.tsx',
        templateFile: './templates/template/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/templates/{{pascalCase name}}/styles.ts',
        templateFile: './templates/component/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/templates/{{pascalCase name}}/stories.tsx',
        templateFile: './templates/template/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/templates/{{pascalCase name}}/test.tsx',
        templateFile: './templates/template/test.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/pages/{{dashCase name}}.tsx',
        templateFile: './templates/page.tsx.hbs',
      },
    ],
  });
};
