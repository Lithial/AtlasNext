import {useEffect, useState} from "react";

const useGeolocationData = () => {
	const [location, setLocation] = useState({});
	const [timezone, setTimezone] = useState({});
	const [error,setError] = useState({});

	const getTimezoneFromBrowser = () => {
		const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		const offset = new Date().getTimezoneOffset() / 60;

		if (!timezone) {
			setError("Timezone could not be set");
		}
		if (!offset) {
			setError("Offset could not be set");
		}
		if (timezone && offset){
			setTimezone({
				timezone,
				offset
			})
		}
	}
	const getLocationFromBrowser = () => {
		//https://maps.googleapis.com/maps/api/geocode/json?latlng=-39.6337083,176.8604849&key=AIzaSyDBNmEO5OU4k7T1qr0glpuDoUb1RhDPHAI
		const successCallback = (response) => {
			setLocation(response.coords);
		}

		const errorCallback = (response) => {
			setError(response)
		}

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
		}
		else {
			setError({error: "Geolocation not available"})
		}
	}
	return {
		location,
		timezone,
		error,
		getLocationFromBrowser,
		getTimezoneFromBrowser
	}
};

export default useGeolocationData;
