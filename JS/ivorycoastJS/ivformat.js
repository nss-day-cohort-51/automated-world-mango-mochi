export const ivyCity = (ivyCityObj) => {
	return ` 
    <article>
    <h3 class="city-name">${ivyCityObj.cities}</h3>
    <ul>
        <li class="city-details">Poulation: ${ivyCityObj.population} </li>
        <li class="city-details">Fact: ${ivyCityObj.fact}</li>
        <li class="city-details">Learn More: ${ivyCityObj.link}</li>
    </ul>
    </article>
    
    `
}

export const ivyLndMrk = (ivLndMrkObj) => {
    return `
    <article>
    <h3 class="city-name">${ivLndMrkObj.name}</h3>
    <ul>
        <li class="landmark-details">Built: ${ivLndMrkObj.built} inches</li>
        <li class="landmark-details">Fact: ${ivLndMrkObj.fact}</li>
        <li class="landmark-details">Learn More: ${ivLndMrkObj.link}</li>
    </ul>
    </article>
   
    `
}

export const ivyPeople = (ivPeopleObj) => {
    return `
    <article>
    <h3 class="name">${ivPeopleObj.people}</h3>
    <ul>
        <li class="people-details">Occupation: ${ivPeopleObj.occupation} inches</li>
        <li class="people-details">Fact: ${ivPeopleObj.fact}</li>
        <li class="people-details">Learn More: ${ivPeopleObj.link}</li>
    </ul>
    </article>
    

    `
}