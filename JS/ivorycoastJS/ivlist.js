import { getIvoryCity } from "./ivdata.js";
import { getIvoryPeople } from "./ivdata.js";
import { getIvoryLndMrks } from "./ivdata.js";
import { city } from "./ivformat.js";

export const ivList = () => {
    
    const contentElement = document.querySelector(".cities");
    const arrayOfcities = getIvoryCity();

	let countryHTMLRepresentation = "";

	for (const onecityObject of arrayOfcities) {
        
		countryHTMLRepresentation += city(onecityObject);
	}	
    contentElement.innerHTML += countryHTMLRepresentation
}

// add 2 more exports