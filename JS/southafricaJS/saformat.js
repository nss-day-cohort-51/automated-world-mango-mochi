export const city = (cityObj) => {
    return `
    <h3 class="city-name">${cityObj.cities}</h3>
    <ul>
    <li class="city-details">Population: ${cityObj.population} inches</li>
    <li class="city-details">Fact: ${cityObj.fact}</li>
    <li class="city-details">Learn More: ${cityObj.link}</li>
    </ul>
    `
}

export const lndMrk = (lnbdMrkObj) => {
    return `
    <h3 class="city-name">${lndMrkObj.name}</h3>
    <ul>
    <li class="landmark-details">Built: ${lndMrkObj.built} inches</li>
    <li class="landmark-details">Fact: ${lndMrkObj.fact}</li>
    <li class="landmark-details">Learn More: ${lndMrkObj.link}</li>
    </ul>
    `
}

export const people = (peopleObj) => {
    return `
    <h3 class="city-name">${peopleObj.people}</h3>
    <ul>
    <li class="people-details">Occupation: ${peopleObj.occupation} inches</li>
    <li class="people-details">Discription: ${peopleObj.discription}</li>
    <li class="people-details">Learn More: ${cityObj.link}</li>
    </ul>
    `
}
