export const ivyCity = (ivyCityObj) => {
	return ` 
    <article>
    <h3 class="city-name">${ivyCityObj.cities}</h3>
    <ul>
        <li class="city-details">Poulation: ${ivyCityObj.population} </li>
        <li class="city-details">Fact: ${ivyCityObj.fact}</li>
        <li class="city-details"><a href= ${ivyCityObj.link}> Learn More</a>
    </ul>
    </article>
    
    `
}

export const ivyLndMrk = (ivLndMrkObj) => {
    return `
    <article>
    <h3 class="city-name">${ivLndMrkObj.name}</h3>
    <ul>
        <li class="landmark-details">Built: ${ivLndMrkObj.built} </li>
        <li class="landmark-details">Fact: ${ivLndMrkObj.fact}</li>
        <li class="landmark-details"><a href= ${ivLndMrkObj.link}> Learn More</a>
    </ul>
    </article>
   
    `
}

export const ivyPeople = (ivPeopleObj) => {
    return `
    <article>
    <h3 class="name">${ivPeopleObj.people}</h3>
    <ul>
        <li class="people-details">Occupation: ${ivPeopleObj.occupation} </li>
        <li class="people-details">Fact: ${ivPeopleObj.fact}</li>
        <li class="people-details"><a href= ${ivPeopleObj.link}> Learn More</a> </li>
    </ul>
    </article>
    

    `
}