import { getSaCities } from "./sadata.js";
import { saCity } from "./saformat.js";
import { getSaLndMrks } from "./sadata.js";
import { saLndMrk } from "./saformat.js";
import { getSaPeople } from "./sadata.js";
import { saPeople } from "./saformat.js";

export const saList = () => {
    const contentElement = document.querySelector(".saCities");
    const arrayOfcities = getSaCities();

    let countryHTMLRepresentation = "";

    for (const onecityObject of arrayOfcities) {
        countryHTMLRepresentation += saCity(onecityObject);
    }
    contentElement.innerHTML += countryHTMLRepresentation
}

export const saListLndMrks = () => {
    const contentElement = document.querySelector(".saLndMrk");
    const arrayOfcities = getSaLndMrks();

    let countryHTMLRepresentation = "";

    for (const onecityObject of arrayOfcities) {
        countryHTMLRepresentation += saLndMrk(onecityObject);
    }
    contentElement.innerHTML += countryHTMLRepresentation
}

export const saListPeople = () => {
    const contentElement = document.querySelector(".saPeople");
    const arrayOfcities = getSaPeople();

    let countryHTMLRepresentation = "";

    for (const onecityObject of arrayOfcities) {
        countryHTMLRepresentation += saPeople(onecityObject);
    }
    contentElement.innerHTML += countryHTMLRepresentation
}