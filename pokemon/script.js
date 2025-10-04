
function getPokemon(){
    const infos = JSON.parse(localStorage.getItem("pokemon"))
    console.log(infos, "pokemon")
    const div = document.querySelector("div")
    div.classList.add("card")
    

    //name
    const p = document.createElement("p")
    p.innerText = infos.name
    p.classList.add("name")

    //image
    const img = document.createElement("img")
    img.src = infos.sprites.front_default
    
    //expeirence
    const experience = document.createElement("p")
    experience.innerText ="Base experience: " + infos.base_experience

    //abilities
    const abilities = document.createElement("div")
    const abilityTitle = document.createElement("p")
    abilityTitle.innerText = "Abilities"
    abilities.append(abilityTitle)
    infos.abilities.forEach((item)=>{
        const ability = document.createElement("p")
        ability.innerText = item.ability.name
        abilities.append(ability)
    })

    //type
    const type = document.createElement("p")
    type.innerText = "Type: " + infos.types[0].type.name

    div.append(img,p,type,experience,abilities)

}
getPokemon()