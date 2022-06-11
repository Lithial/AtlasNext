//component.jsx
exports.component = (name) => `const ${name} = () => {
\treturn <div></div>;
};

export default ${name};

${name}.propTypes = {};
${name}.defaultProps = {};
`;
//component.stories.js
exports.story = (name) => `import ${name} from "./${name}";

export default {
\ttitle: "${name}",
\tcomponent: ${name},
};

const ${name}Template = (args) => <${name} {...args}/>;

export const ${name}Example = ${name}Template.bind({});

${name}Example.args = {};
`;
//component.test.jsx
//TODO add testing support to generate scripts
exports.testFile = (name) => `import { render } from "@testing-library/react";
import ${name} from "./${name}";
`;
// index.js
exports.barrel = (name) => `import ${name} from "./${name}";

export default ${name};
`;
