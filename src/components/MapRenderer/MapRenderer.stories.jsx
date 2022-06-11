import MapRenderer from "./MapRenderer";

export default {
	title: "MapRenderer",
	component: MapRenderer,
};

const MapRendererTemplate = (args) => <MapRenderer {...args}/>;

export const MapRendererExample = MapRendererTemplate.bind({});

MapRendererExample.args = {};
