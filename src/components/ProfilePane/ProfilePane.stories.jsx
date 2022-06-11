import ProfilePane from "./ProfilePane";

export default {
	title: "ProfilePane",
	component: ProfilePane,
};

const ProfilePaneTemplate = (args) => <div style={{
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "100vw",
	height: "100vh"
}}>
	<ProfilePane {...args}/>
</div>;

export const ProfilePaneExample = ProfilePaneTemplate.bind({});

ProfilePaneExample.args = {};
