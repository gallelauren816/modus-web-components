// @ts-ignore: JSX/MDX with Stencil
import docs from './modus-select-storybook-docs.mdx';
import { html } from 'lit-html';

export default {
  title: 'User Inputs/Select',
  parameters: {
    docs: {
      inlineStories: false,
      page: docs,
    },
    options: {
      isToolshown: true
    },
    controls: {
      disabled: true,
    },
    viewMode: 'docs'
  },
};

const Template = () => html`
  <modus-select id="select-demo-1" label="Select Demo 1" options-display-prop="display"></modus-select>
  <modus-select disabled helper-text="Helper demo" id="select-demo-2" label="Select Demo 2" options-display-prop="display"></modus-select>
  <modus-select error-text="Error demo" label="Select Demo 3"></modus-select>
  <modus-select label="Select Demo 4" valid-text="Valid demo"></modus-select>
  ${setSelects()}
`;
export const Default = Template.bind({});

const setSelects = () => {
  const tag = document.createElement('script');
  tag.innerHTML = `
    const modusSelect = document.querySelector('#select-demo-1');
    modusSelect.options = [ { display: 'Option 1' }, { display: 'Option 2' }, { display: 'Option 3' } ];

    const modusSelect2 = document.querySelector('#select-demo-2');
    const options = [ { display: 'Option 1' }, { display: 'Option 2' }, { display: 'Option 3' } ];
    modusSelect2.options = options;
    modusSelect2.value = options[1]
  `;

  return tag;
};
