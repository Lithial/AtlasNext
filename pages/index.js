import {HeaderBar, ProfilePane} from "../src/components";
import dynamic from "next/dynamic";
import { useUser } from "@auth0/nextjs-auth0";
import {useState} from "react";

const MapWithNoSSR = dynamic(() => import("../src/components/MapRenderer"), {
    ssr: false
});

export default function Home() {
    const { user } = useUser();
    const [profileOpen, setProfileOpen] = useState(true);
    return (
      <div className={"home-page"}>
         <HeaderBar/>
         <MapWithNoSSR/>
          {
              user && profileOpen ? <ProfilePane/> : null
          }
      </div>
  )
}
