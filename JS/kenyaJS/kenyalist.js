import { getKenyaCity } from "./kenyadata.js";
import { getKenyaPeople } from "./kenyadata.js";
import { getKenyaLndMrks } from "./kenyadata.js";
import { city, people } from "./kenyaformat.js";

export const kenyaList = () => {
    
    const contentElement = document.querySelector(".cities");
    const arrayOfcities = getKenyaCity();

	let countryHTMLRepresentation = "";

	for (const onecityObject of arrayOfcities) {
        
		countryHTMLRepresentation += city(onecityObject);
	}	
    contentElement.innerHTML += countryHTMLRepresentation
}
export const kenyaList = () => {
    
    const contentElement = document.querySelector(".cities");
    const arrayOfPeople = getKenyaPeople();

	let countryHTMLRepresentation = "";

	for (const onePeopleObject of arrayOfPeople) {
        
		countryHTMLRepresentation += people(onePeopleObject);
	}	
    contentElement.innerHTML += countryHTMLRepresentation
}
export const kenyaList = () => {
    
    const contentElement = document.querySelector(".cities");
    const arrayOfLndMrks = getKenyaLndMrks();

	let countryHTMLRepresentation = "";

	for (const oneLndMrksObject of arrayOfLndMrks) {
        
		countryHTMLRepresentation += LndMrks(oneLndMrksObject);
	}	
    contentElement.innerHTML += countryHTMLRepresentation
}
