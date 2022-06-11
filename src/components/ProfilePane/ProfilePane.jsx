import {useUser} from "@auth0/nextjs-auth0";
import {useEffect} from "react";

const ProfilePane = () => {
	const { user } = useUser();
	useEffect(() => {
		console.log({user})
	},[user])

	return <div className={"profile-pane"}>
		<p>Name: {user.name}</p>
		<p>Nickname: {user.nickname}</p>
		<p>Email: {user.email}</p>
	</div>;
};

export default ProfilePane;

ProfilePane.propTypes = {};
ProfilePane.defaultProps = {};
