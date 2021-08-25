export const saCity = (saCityObj) => {
    return `
    <article>
    <h3 class="city-name">${saCityObj.cities}</h3>
    <ul>
    <li class="city-details">Population: ${saCityObj.population}</li>
    <li class="city-details">Fact: ${saCityObj.fact}</li>
    <li class="city-details">Learn More: ${saCityObj.link}</li>
    </ul>
    </article>
    `
}

export const saLndMrk = (salndMrkObj) => {
    return `
    <article>
    <h3 class="city-name">${salndMrkObj.name}</h3>
    <ul>
    <li class="landmark-details">Built: ${salndMrkObj.built}</li>
    <li class="landmark-details">Fact: ${salndMrkObj.fact}</li>
    <li class="landmark-details">Learn More: ${salndMrkObj.link}</li>
    </ul>
    </article>
    `
}

export const saPeople = (saPeopleObj) => {
    return `
    <artilce>
    <h3 class="city-name">${saPeopleObj.people}</h3>
    <ul>
    <li class="people-details">Occupation: ${saPeopleObj.occupation}</li>
    <li class="people-details">Discription: ${saPeopleObj.discription}</li>
    <li class="people-details">Learn More: ${saPeopleObj.link}</li>
    </ul>
    </article>
    `
}
