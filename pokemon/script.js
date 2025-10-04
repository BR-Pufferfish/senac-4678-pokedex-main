const typesClasses = {
    normal: "normal",
    fire: "fire",
    water: "water",
    grass: "grass",
    electric: "electric",
    ice: "ice",
    fighting: "fighting",
    poison: "poison",
    ground: "ground",
    flying: "flying",
    psychic: "psychic",
    bug: "bug",
    rock: "rock",
    ghost: "ghost",
    dragon: "dragon",
    dark: "dark",
    steel: "steel",
    fairy: "fairy"
};

function getPokemon(){
    const infos = JSON.parse(localStorage.getItem("pokemon"))
    const div = document.querySelector("div")
    div.classList.add("card")
    div.classList.add(typesClasses[infos.types[0].type.name])

    //name
    const p = document.createElement("p")
    p.innerText = `${infos.id} - ${infos.name}`
    p.classList.add("name")

    //image
    const img = document.createElement("img")
    img.src = infos.sprites.front_default
    
    // //experience
    // const experience = document.createElement("p")
    // experience.innerText =`Exp. Base: ${infos.base_experience}`

    // //abilities
    // const abilities = document.createElement("div")
    // const abilityTitle = document.createElement("p")
    // abilityTitle.innerText = "Habilidades:"
    // abilities.append(abilityTitle)
    // infos.abilities.forEach((item)=>{
    //     const ability = document.createElement("p")
    //     ability.innerText = item.ability.name
    //     abilities.append(ability)
    // })

    // //type
    // const type = document.createElement("p")
    // type.innerText = `Tipo: ${infos.types[0].type.name} ${infos.types[1] ? " / "+infos.types[1].type.name : ""}`

    div.append(img,p)

}
getPokemon()

function getInfos(){
    const infos = JSON.parse(localStorage.getItem("pokemon"))
    console.log(infos, "pokemon")

    const divGeral = document.createElement("div")
    divGeral.classList.add("geral")
    divGeral.classList.add(typesClasses[infos.types[0].type.name])

    //experience
    const experience = document.createElement("p")
    experience.innerText =`Exp. Base: ${infos.base_experience}`

    //abilities
    const abilities = document.createElement("div")
    const abilityTitle = document.createElement("p")
    abilityTitle.innerText = "Habilidades:"
    abilities.append(abilityTitle)
    infos.abilities.forEach((item)=>{
        const ability = document.createElement("p")
        ability.innerText = item.ability.name
        abilities.append(ability)
    })

    //type
    const type = document.createElement("p")
    type.innerText = `Tipo: ${infos.types[0].type.name} ${infos.types[1] ? " / "+infos.types[1].type.name : ""}`

    divGeral.append(experience,type,abilities)
    document.body.append(divGeral)



}
getInfos()