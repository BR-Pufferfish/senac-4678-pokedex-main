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

    const p = document.createElement("p")
    p.innerText = `${infos.id} - ${infos.name}`
    p.classList.add("name")

    const img = document.createElement("img")
    img.src = infos.sprites.front_default

    div.append(img,p)

}
getPokemon()



function getInfos(){
    const infos = JSON.parse(localStorage.getItem("pokemon"))
    console.log(infos, "pokemon")

    const divGeral = document.createElement("div")
    divGeral.classList.add("geral")
    divGeral.classList.add(typesClasses[infos.types[0].type.name])

    const experience = document.createElement("p")
    experience.innerText =`Exp. Base: ${infos.base_experience}`

    const abilities = document.createElement("div")
    const abilityTitle = document.createElement("p")
    abilityTitle.innerText = "Habilidades:"
    abilities.append(abilityTitle)
    infos.abilities.forEach((item)=>{
        const ability = document.createElement("p")
        ability.innerText = item.ability.name
        const span = document.createElement("span")
        span.append(ability)
        abilities.append(span)
    })

    const type = document.createElement("p")
    type.innerText = `Tipo: ${infos.types[0].type.name} ${infos.types[1] ? " / "+infos.types[1].type.name : ""}`

    divGeral.append(experience,type,abilities)
    document.body.append(divGeral)

}
getInfos()



function getMoves(){

    const button = document.createElement("button")
    button.innerText = "Ver Movimentos"
    button.classList.add("btn-moves")
    document.body.append(button)
    button.addEventListener("click", ()=>{

        button.style.display = "none"
        const infos = JSON.parse(localStorage.getItem("pokemon"))
        const divMoves = document.createElement("div")
        divMoves.classList.add("moves")
        divMoves.classList.add(typesClasses[infos.types[0].type.name])
        const movesTitle = document.createElement("p")
        movesTitle.innerText = "Movimentos: "
        divMoves.append(movesTitle)
        let count = 0;
        infos.moves.forEach((item)=>{
            count++
            const move = document.createElement("p")
            move.innerText = `${count} - ${item.move.name}`
            const span = document.createElement("span")
            span.append(move)
            divMoves.append(span)
        })
        document.body.append(divMoves)

    })

    const buttonHide = document.createElement("button")
    buttonHide.innerText = "Ocultar Movimentos"
    buttonHide.classList.add("btn-moves")
    document.body.append(buttonHide)

    buttonHide.addEventListener("click", ()=>{
        button.style.display = "block"
        const divMoves = document.querySelector(".moves")
        divMoves.remove()
    })


}
getMoves()


function getStats(){
    const infos = JSON.parse(localStorage.getItem("pokemon"))
    const divStats = document.createElement("div")
    divStats.classList.add("stats")
    divStats.classList.add(typesClasses[infos.types[0].type.name])
    const statsTitle = document.createElement("p")
    statsTitle.innerText = "Status: "
    divStats.append(statsTitle)
    infos.stats.forEach((item)=>{
        const stat = document.createElement("p")
        stat.innerText = `${item.stat.name}: ${item.base_stat}`
        const span = document.createElement("span")
        span.append(stat)
        divStats.append(span)
    })
    document.body.append(divStats)
}
getStats()