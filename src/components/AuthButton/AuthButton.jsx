import { useRef } from "react";
import { useUser } from "@auth0/nextjs-auth0";

const AuthButton = () => {
	const authMenu = useRef(null);
	const { user, error, isLoading } = useUser();
	const toggleMenu = () => {
		authMenu.current.classList.toggle("header-bar__auth-menu--visible")
	}

	//TODO menuized spinner
	if (isLoading) return <div>Loading...</div>;

	//TODO menuized error icon with message
	if (error) return <div>{error.message}</div>;

	//login button
	if (!user) {
		return (
			<div className={"header-bar__auth"}>
				<a className={"header-bar__auth-button"} href="/api/auth/login">Login</a>
			</div>
		)
	}
	//default is the menuized profile icon with function list menu
	return <div className={"header-bar__auth"}>
		<button onClick={() => toggleMenu()} className={"header-bar__auth-button"}>
			{<img src={user.picture} className={"header-bar__login-picture"}></img>}
		</button>
		<div ref={authMenu} className={"header-bar__auth-menu"}>
			<button className={"header-bar__auth-menu-button"} onClick={() => console.log("Map")}>Map</button>
			<button className={"header-bar__auth-menu-button"} onClick={() => console.log("Profile")}>Profile</button>
			<a className={"header-bar__auth-menu-button"} href="/api/auth/logout">Logout</a>
		</div>
	</div>
};

export default AuthButton;

AuthButton.propTypes = {};
AuthButton.defaultProps = {};
