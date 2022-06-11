import Image from "next/image";
import Link from "next/link";
import AuthButton from "../AuthButton/AuthButton";

const HeaderBar = () => {
	return <div className={"header-bar"}>
		<div className={"header-bar__home-button"} tabIndex={0}>
			<Link href="/">
				<Image className={"header-bar__logo"} src={"/images/globe-logo.svg"} width={32} height={32} alt={"Atlas Logo of a globe"}/>
			</Link>
		</div>
		<p className={"header-bar__text"}>Atlas</p>
		<AuthButton/>
	</div>;
};

export default HeaderBar;

HeaderBar.propTypes = {};
HeaderBar.defaultProps = {};
