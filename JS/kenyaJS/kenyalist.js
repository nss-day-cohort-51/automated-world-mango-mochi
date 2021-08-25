import { getKenyaCity } from "./kenyadata.js";
import { getKenyaPeople } from "./kenyadata.js";
import { getKenyaLndMrk } from "./kenyadata.js";
import { City } from "./kenyaformat.js";
import { people } from "./kenyaformat.js";
import { lndMrk } from "./kenyaformat.js";

export const kenyaCityList = () => {
    
    const contentElement = document.querySelector(".kenyacities");
    const arrayOfCities = getKenyaCity();

	let countryHTMLRepresentation = "";

	for (const oneCityObject of arrayOfCities) {
        
		countryHTMLRepresentation += City(oneCityObject);
	}	
    contentElement.innerHTML += countryHTMLRepresentation
}
export const kenyaPeopleList = () => {
    
    const contentElement = document.querySelector(".kenyapeople");
    const arrayOfPeople = getKenyaPeople();

	let countryHTMLRepresentation = "";

	for (const onePeopleObject of arrayOfPeople) {
        
		countryHTMLRepresentation += people(onePeopleObject);
	}	
    contentElement.innerHTML += countryHTMLRepresentation
}
export const kenyaLandmarkList = () => {
    
    const contentElement = document.querySelector(".kenyalandmarks");
    const arrayOfLndMrk = getKenyaLndMrk();

	let countryHTMLRepresentation = "";

	for (const oneLndMrkObject of arrayOfLndMrk) {
        
		countryHTMLRepresentation += lndMrk(oneLndMrkObject);
	}	
    contentElement.innerHTML += countryHTMLRepresentation
}
