import { getIvoryCity } from "./ivdata.js";
import { getIvoryPeople } from "./ivdata.js";
import { getIvoryLndMrks } from "./ivdata.js";
import { ivyCity, ivyLndMrk } from "./ivformat.js";

export const ivListCities = () => {
    
    const contentElement = document.querySelector(".ivCities");
    const arrayOfCities = getIvoryCity();

	let countryHTMLRepresentation = "";

	for (const onecityObject of arrayOfCities) {
        
		countryHTMLRepresentation += ivyCity(onecityObject);
	}	
    contentElement.innerHTML += countryHTMLRepresentation
}

export const ivListLndMrks = () => {
    
    const contentElement = document.querySelector(".landmarks");
    const arrayOfLndMrk = getIvoryLndMrks();

	let countryHTMLRepresentation = "";

	for (const onelndMrkObject of arrayOfLndMrk) {
        
		countryHTMLRepresentation += ivyLndMrk(onelndMrkObject);
	}	
    contentElement.innerHTML += countryHTMLRepresentation
}

// add 2 more exports