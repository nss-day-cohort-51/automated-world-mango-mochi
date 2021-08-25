import { getSaCities } from "./sadata";
import { getSaLndMrks } from "./sadata";
import { getSaPeople } from "./sadata";
import { city } from "./saformat";

export const saList = () => {
    const contentElement = document.querySelector(".cities");
    const arrayOfcities = getSaCities();

    let countryHTMLRepresentation = "";

    for (const onecityObject of arrayOfcities) {
        countryHTMLRepresentation += city(onecityObject);
    }
    contentElement.innerHTML += countryHTMLRepresentation
}