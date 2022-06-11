import {useEffect, useMemo, useRef, useState} from 'react';
// import dynamic from "next/dynamic";
// import "leaflet/dist/leaflet.css";
// import MarkerCluster from "../MarkerCluster";
// import MarkerClusterGroup from "react-leaflet-markercluster";
import { Map, Marker } from "pigeon-maps";
import { osm } from 'pigeon-maps/providers'
import useGeolocationData from "../../hooks/useGeolocationData/useGeolocationData";
import useSupercluster from "use-supercluster";

const MapRenderer = () => {
	const [zoom, setZoom] = useState(3);
	const [centrePosition, setCentrePosition] = useState([5, 176])
	const [iconList, setIconList] = useState([]);

	const {
		location,
		timezone,
		error,
		getLocationFromBrowser,
		getTimezoneFromBrowser
	} = useGeolocationData();

	useEffect(() => {
		getTimezoneFromBrowser();
		getLocationFromBrowser();
	},[])
	const bounds = [
		[-80, 200],
		[90, -170],
	]
	const coordinates = [
		[-50,80],
		[-50,82],
		[-50,84]
	]
	const { clusters, supercluster } = useSupercluster({
		points: coordinates,
		bounds,
		zoom,
		options: { radius: 75, maxZoom: 20 }
	})
	const mapProvider = useMemo(() =>(x,y,z,dpr) => {
		const api_key = `?api_key=${process.env.STADIA_API_KEY}`;
		return `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png${process.env.DEVELOPMENT_MODE ? "" :api_key}`
		// return `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{${z}}/{${x}}/{${y}}{${r}}.png?api_key=24595e55-8bde-499c-bac5-d5d3fe79a833`
	},[])
	return (
		<div className={"map-container"}>
			<Map
				maxBoundsViscosity={1.0}
				maxBounds={bounds}
				center={centrePosition}
				zoom={zoom}
				maxZoom={20}
				minZoom={3}
				defaultZoom={3}
				scrollWheelZoom={true}
				dprs={[]}
				provider={osm}
				boxClassname={"map-box-container"}
			>
				{/*<Marker*/}
				{/*// key={`${location?.latitude.toString()}${location?.longitude.toString()}`}*/}
				{/*	key={`UserPin`}*/}
				{/*	width={50}*/}
				{/*	anchor={[location?.latitude, location?.longitude]}*/}
				{/*	color={"#ACACAC"}*/}
				{/*		// onClick={() => setHue(hue + 20)}*/}
				{/*	/>*/}
				<Marker
					// key={`${location?.latitude.toString()}${location?.longitude.toString()}`}
					key={`UserPin`}
					width={50}
					anchor={[-40,177]}
					color={"#ACACAC"}
					// onClick={() => setHue(hue + 20)}
				/>
			</Map>
		</div>
	)
}


export default MapRenderer;

MapRenderer.propTypes = {};
MapRenderer.defaultProps = {};
