import { getIvoryCity } from "./ivdata.js";
import { getIvoryPeople } from "./ivdata.js";
import { getIvoryLndMrks } from "./ivdata.js";
import { city } from "./ivformat.js";

export const ivList = () => {
    
    const contentElement = document.querySelector(".ivCities");
    const arrayOfCities = getIvoryCity();

	let countryHTMLRepresentation = "";

	for (const onecityObject of arrayOfCities) {
        
		countryHTMLRepresentation += city(onecityObject);
	}	
    contentElement.innerHTML += countryHTMLRepresentation
}

// add 2 more exports