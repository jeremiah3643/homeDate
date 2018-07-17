const HomeInvetoryDatabase = {}
HomeInvetoryDatabase.furniture = []
HomeInvetoryDatabase.instruments = []
HomeInvetoryDatabase.electronics = []



const bass1 = {
    name: "Fender Precision Bass(Fretless)",
    location: "Instrument Rack",
    description: "My first Bass. Maroon with white pickguard. I messed up the truss rod in the neck so I changed the neck for a fretless neck."
}
const bass2 = {
    name: "Fender Jazz Bass",
    location: "Instrument Rack",
    description: "My favorite bass. White Body with white pickguard. Maple Neck"
}
const bass3 = {
    name: "Washburn Force-5 Bass (5-String)",
    location: "Instrument Rack",
    description: "5 String Bass. Not much of a fan. No top endin this bass."
}
const bass4 = {
    name: "ESP LTD B-206SM Bass (6-String)",
    location: "Instrument Rack",
    description: "Love this bass. It is a 6 string bass. Good midlevel bass, and the tone is pretty versatile. Beautiful Natural Satin Spalted Maple Body."
}
const guitar1 = {
    name:"Ibanez GIO",
    location:"Instrument Rack",
    description:"First Guitar I bought. Cheap but helped me learn. All white with maple neck."
}
const guitar2 = {
    name:"Ibanez RG470AHM",
    location:"Instrument Rack",
    description:"Good midlevel guitar. Bought it whence i started getting better at guitar. Awesome color on the body. Purplish blue burst Color."
}
const desk = {
    name: "Computer Desk",
    location: "Bedroom",
    description: "Regular Desk where most of my small objects are plus computer monitors."
}
const computer = {
    name:"My Computer",
    location:"Desk",
    description:"Built this computer myself. Great rig and can do just about do anything. Not really a dedicated gaming rig though, but handles the job pretty well."
}
const bassAmp = {
    name:"Ampeg PortaFlex Head 500W and Ampeg 410HE 500W Cab",
    location:"Bedroom",
    description:"My bass rig. 500W of power and gets the job done with 4 10' speakers."
}
const guitarAmp = {
    name:"Fender Mustang",
    location:"Bedroom",
    description:"My guitar amp. It is on the side of practice amps but this little amp is great. Sounds awesome and I can direct into my audio interface for recording."
}

function instrumentPush (item) {
    HomeInvetoryDatabase.instruments.push(item)
}
instrumentPush(bass1)
instrumentPush(bass2)
instrumentPush(bass3)
instrumentPush(bass4)
instrumentPush(guitar1)
instrumentPush(guitar2)

function furniturePush (item){
    HomeInvetoryDatabase.furniture.push(item)
}
furniturePush(desk)

function electronicPush (item){
    HomeInvetoryDatabase.electronics.push(item)
}
electronicPush(computer)
electronicPush(bassAmp)
electronicPush(guitarAmp)

const saveDatabase = function (databaseObject, localStoragekey){
const stringifiedDatabase = JSON.stringify(databaseObject)
localStorage.setItem(localStoragekey, stringifiedDatabase)
}

const loadDatabase = function (localStoragekey){
    const databaseString = localStorage.getItem(localStoragekey)
    return JSON.parse(databaseString)
}

saveDatabase(HomeInvetoryDatabase,"HomeInventory")