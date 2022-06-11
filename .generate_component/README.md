# Generate Component

This is a script that uses templates to pre-generate all the files required for new components. Currently it makes:

-   componentName.jsx
-   componentName.test.jsx
-   componentName.stories.jsx
-   componentName.js - this is for proper import conventions
-   \_componentName.scss

This script also adds the components scss partial to the /styles/index.scss file.

The script still needs a template for the tests file as I have yet to finish it.

## How to use

Run `yarn gc $1` where $1 is the name of the file you want to create. This will create all the files in a Folder named
$1 inside the src/components folder. The templates are in `./component_templates` and can be modified as required.
