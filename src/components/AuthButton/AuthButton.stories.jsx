import AuthButton from "./AuthButton";

export default {
	title: "AuthButton",
	component: AuthButton,
	parameters: {
		initialUser: {
			isLoading: false,
		}
	}
};

export const AuthButtonLoginExample = () => <div style={{
	background: "#2E3B55",
	height: "64px"
}}>
	<AuthButton/>
</div>;

export const AuthButtonLogoutExample = () => <div style={{
	background: "#2E3B55",
	height: "64px"
}}>
	<AuthButton/>
</div>;

export const AuthButtonErrorExample = () => <div style={{
	background: "#2E3B55",
	height: "64px"
}}>
	<AuthButton/>
</div>;

AuthButtonLoginExample.args = {

};
AuthButtonLogoutExample.parameters = {
	initialUser: {
		isLoading: false,
		user: {
			email: 'john@doe.com',
			email_verified: true,
			nickname: 'Joe',
			picture: 'https://picsum.photos/200',
			sub: 'mock:johndoe',
			updated_at: '2021-04-02T12:42:42.042Z',
		}
	}
}
AuthButtonErrorExample.parameters = {
	initialUser: {
		isLoading: false,
		error: 'Something went wrong'
	}
}

