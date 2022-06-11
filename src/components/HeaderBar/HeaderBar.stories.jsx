import HeaderBar from "./HeaderBar";

export default {
	title: "Base/HeaderBar",
	component: HeaderBar,
};

const HeaderBarTemplate = (args) => <HeaderBar {...args}/>;

export const HeaderBarExample = HeaderBarTemplate.bind({});

HeaderBarExample.args = {};
