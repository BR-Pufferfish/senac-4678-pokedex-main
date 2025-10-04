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

async function getPokemons(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const pokemons = await response.json()
    const ul = document.querySelector("ul")
    pokemons.results.forEach(async(pokemon)=>{

        const li = document.createElement("li")
       
        const p = document.createElement("p")
        p.innerText = pokemon.name

        const response = await fetch(pokemon.url)
        const infos = await response.json()
        console.log(infos,"infos")
        li.classList.add(typesClasses[infos.types[0].type.name])
         li.addEventListener("click",()=>{
            localStorage.setItem("pokemon",JSON.stringify(infos))
            location.href = "/pokemon"
        })
        const img = document.createElement("img")
        img.src = infos.sprites.front_default
        
        li.append(img,p)
        ul.append(li)
    })
}
getPokemons()