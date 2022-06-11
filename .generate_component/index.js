const fs = require("fs");
const { component, story, testFile, barrel } = require("./component_templates.js");

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error("You must include a component name.");

const dir = `./src/components/${name}/`;
const styleDir = `./styles/components`
// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error("A component with that name already exists.");

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
	if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}/${name}.jsx`, component(name), writeFileErrorHandler);
// _component.scss
fs.writeFile(`${styleDir}/_${name}.scss`, "", writeFileErrorHandler);
// storybook.jsx
fs.writeFile(`${dir}/${name}.stories.jsx`, story(name), writeFileErrorHandler);
// test.tsx
fs.writeFile(`${dir}/${name}.test.jsx`, testFile(name), writeFileErrorHandler);
// index.tsx
fs.writeFile(`${dir}/index.js`, barrel(name), writeFileErrorHandler);

// insert new component into 'components/index.ts file
fs.readFile("./src/components/index.js", "utf8", function (err, data) {
	if (err) throw err;

	// grab all components and combine them with new component
	const currentComponents = data.match(/(?<=import )(.*?)(?= from)/g);
	let newComponents;

	if (currentComponents) {
		newComponents = [name, ...currentComponents].sort();
	} else {
		newComponents = [name].sort();
	}
	const removeDuplicates = [...new Set(newComponents)];

	// create the import and export statements
	const importStatements = removeDuplicates
		.map((importName) => `import ${importName} from "./${importName}";\n`)
		.join("");
	const exportStatements = `export {\n${removeDuplicates
		.map((component) => `  ${component},\n`)
		.join("")}};\n`;

	const fileContent = `${importStatements}\n${exportStatements}`;

	fs.writeFile(`./src/components/index.js`, fileContent, writeFileErrorHandler);
});
//import partial into src/index.scss
fs.readFile("./styles/globals.scss", "utf8", function (err, data) {
	if (err) throw err;

	const lineTemplate = `@import "./components/${name}";\n`;

	const fileContent = `${data}\n${lineTemplate}`;

	fs.writeFile(`./styles/globals.scss`, fileContent, writeFileErrorHandler);
});
