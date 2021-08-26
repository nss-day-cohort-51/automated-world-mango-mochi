export const saCity = (saCityObj) => {
    return `
    <article class="border">
    <h3 class="city-name">${saCityObj.cities}</h3>
    <ul>
    <li class="city-details">Population: ${saCityObj.population}</li>
    <li class="city-details">Fact: ${saCityObj.fact}</li>
    <li class="city-details"><a href = ${saCityObj.link}>Learn More</a></li>
    </ul>
    </article>
    `
}

export const saLndMrk = (salndMrkObj) => {
    return `
    <article class="border">
    <h3 class="city-name">${salndMrkObj.name}</h3>
    <ul>
    <li class="landmark-details">Built: ${salndMrkObj.built}</li>
    <li class="landmark-details">Fact: ${salndMrkObj.fact}</li>
    <li class="landmark-details"><a href = ${salndMrkObj.link}>Learn More</a></li>
    </ul>
    </article>
    `
}

export const saPeople = (saPeopleObj) => {
    return `
    <article class="border">
    <h3 class="city-name">${saPeopleObj.people}</h3>
    <ul>
    <li class="people-details">Occupation: ${saPeopleObj.occupation}</li>
    <li class="people-details">Discription: ${saPeopleObj.discription}</li>
    <li class="people-details"><a href ${saPeopleObj.link}>Learn More</a></li>
    </ul>
    </article>
    `
}
