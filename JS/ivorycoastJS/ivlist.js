import { getIvoryCity } from "./ivdata.js";
import { getIvoryPeople } from "./ivdata.js";
import { getIvoryLndMrks } from "./ivdata.js";
import { ivyCity, ivyLndMrk, ivyPeople } from "./ivformat.js";

export const ivListCities = () => {
    
    const contentElement = document.querySelector(".cities");
    const arrayOfcities = getIvoryCity();

	let countryHTMLRepresentation = "";

	for (const onecityObject of arrayOfcities) {
        
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

export const ivListpeople = () => {
    
    const contentElement = document.querySelector(".people");
    const arrayOfPeople = getIvoryPeople();

	let countryHTMLRepresentation = "";

	for (const onePeopleObject of arrayOfPeople) {
        
		countryHTMLRepresentation += ivyPeople(onePeopleObject);
	}	
    contentElement.innerHTML += countryHTMLRepresentation
}
// add 2 more exports