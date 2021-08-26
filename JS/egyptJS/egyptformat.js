export const egCity = (cityObj) => {
	return ` 
    <article class="border">
    <h3 class="city-name">${cityObj.cities}</h3>
    <ul>
        <li class="city-details">Poulation: ${cityObj.population}</li>
        <li class="city-details">Fact: ${cityObj.fact}</li>
        <li class="city-details"><a href = ${cityObj.link}>Learn More</a></li>
    </ul>
    </article>
    `
}

export const egLndMrk = (lndMrkObj) => {
    return `
    <article class="border">
    <h3 class="city-name">${lndMrkObj.name}</h3>
    <ul>
        <li class="landmark-details">Built: ${lndMrkObj.built}</li>
        <li class="landmark-details">Fact: ${lndMrkObj.fact}</li>
        <li class="landmark-details"><a href = ${lndMrkObj.link}>Learn More</a></li>
    </ul>
    </article>
    `
}

export const egPeople = (peopleObj) => {
    return `
    <article class="border">
    <h3 class="name">${peopleObj.people}</h3>
    <ul>
        <li class="people-details">Occupation: ${peopleObj.occupation}</li>
        <li class="people-details">Description: ${peopleObj.description}</li>
        <li class="people-details"><a href = ${peopleObj.link}>Learn More</a></li>
    </ul>
    </article>
    `
}