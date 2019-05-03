let object = {
    title: "CounterStrike",
    genre: "shooter",
    weapontypes: {
        knives: [],
        pistols: [],
        shotguns: [],
        Rocketlauncher: [],
        sniper: []
    }
}
let object1 = {
    title: "CoD",
    genre: "shooter",
    weapontypes: {
        Sniper: [],
        MG: [],
        Shotguns: [],
        Rifles: []
    }
}
let object2 = {
    title: "Overwatch",
    genre: "Team-based Shooter",
    Types: {
        Tank: [],
        Support: [],
        Damage: []
    }
}
let object3 = {
    title: "League of Legends",
    genre: "Taktisches Strategiespiel",
    Heroetypes: {
        Wizards: [],
        Healer: [],
        Assaults: [],
        Knights: [],
        Tanks: []
    }
}
let object4 = {
    title: "Pokemon Go",
    genre: "Outdoor Spiel",
    Teamtypes: {
        Team_Red: [],
        Team_Blue: [],
        Team_Yellow: []
    }
}
let object5 = {
    title: "Minecraft",
    genre: "Simulation Game",
    Weapontypes: {
        Sword: [],
        Pickaxe: [],
        Axe: [],
        Shovel: [],
        Helmet: [],
        Chestplate: [],
        Leggins: [],
        Shoes: []
    }
}
let object6 = {
    title: "Fortnite",
    genre: "Shooter",
    Weapons: {
        Tac_Shotgun: [],
        Heavy_Shotgun: [],
        Ak14: [],
        Assault_Rifle: [],
        Heavy_Sniper: [],
        Assault_Sniper: []
    }
}
let array = [object, object1, object2, object6]
array.forEach(Game=>{
    let object = document.createElement("div")
    object.innerText = Game.title
    document.getElementById("div11").appendChild(object)
})
let array1 = [object4]
let array2 = [object3, object5]
array1.forEach(Game=>{
    let object = document.createElement("div")
    object.innerText = Game.title
    document.getElementById("div22").appendChild(object)
})
array2.forEach(Game=>{
    let object = document.createElement("div")
    object.innerText = Game.title
    document.getElementById("div33").appendChild(object)
})
