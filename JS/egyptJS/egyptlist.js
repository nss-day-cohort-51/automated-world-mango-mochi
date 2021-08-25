import { getEgyptCity } from "./egyptdata.js";
import { getEgyptPeople } from "./egyptdata.js";
import { getEgyptLndMrk } from "./egyptdata.js";
import { egCity } from "./egyptformat.js";
import { egPeople } from "./egyptformat.js";
import { egLndMrk } from "./egyptformat.js";

export const egyptList = () => {
    
    const contentElement = document.querySelector(".cities");
    const arrayOfcities = getEgyptCity();

	let countryHTMLRepresentation = "";

	for (const onecityObject of arrayOfcities) {
        
		countryHTMLRepresentation += egCity(onecityObject);
	}	
    contentElement.innerHTML += countryHTMLRepresentation
}
export const egyptPeopleList = () => {
    
    const contentElement = document.querySelector(".people");
    const arrayOfPeople = getEgyptPeople();

	let countryHTMLRepresentation = "";

	for (const onePeopleObject of arrayOfPeople) {
        
		countryHTMLRepresentation += egPeople(onePeopleObject);
	}	
    contentElement.innerHTML += countryHTMLRepresentation
}
export const egyptLndMrkList = () => {
    
    const contentElement = document.querySelector(".landmarks");
    const arrayOfLndMrk = getEgyptLndMrk();

	let countryHTMLRepresentation = "";

	for (const oneLndMrkObject of arrayOfLndMrk) {
        
		countryHTMLRepresentation += egLndMrk(oneLndMrkObject);
	}	
    contentElement.innerHTML += countryHTMLRepresentation
}

// add 2 more exports