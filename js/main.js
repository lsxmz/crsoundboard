//Qué miras?
/*⠄⠄⠄⠄⠄⠄⢀⣠⣤⣶⣶⣶⣤⣄⠄⠄⢀⣠⣤⣤⣤⣤⣀⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⢠⣾⣿⣿⣿⣿⠿⠿⢿⣿⣿⡆⣿⣿⣿⣿⣿⣿⣿⣷⡄⠄⠄⠄⠄⠄
⠄⠄⠄⣴⣿⣿⡟⣩⣵⣶⣾⣿⣷⣶⣮⣅⢛⣫⣭⣭⣭⣭⣭⣭⣛⣂⠄⠄⠄⠄
⠄⠄⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣭⠛⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠄
⣠⡄⣿⣿⣿⣿⣿⣿⣿⠿⢟⣛⣫⣭⠉⠍⠉⣛⠿⡘⣿⠿⢟⣛⡛⠉⠙⠻⢿⡄
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣶⣶⣭⣍⠄⣡⣬⣭⣭⣅⣈⣀⣉⣁⠄
⣿⣿⣿⣿⣿⣿⣿⣿⣶⣭⣛⡻⠿⠿⢿⣿⡿⢛⣥⣾⣿⣿⣿⣿⣿⣿⣿⠿⠋⠄
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣩⣵⣾⣿⣿⣯⣙⠟⣋⣉⣩⣍⡁⠄⠄⠄
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣷⡄⠄⠄
⣿⣿⣿⣿⣿⣿⡿⢟⣛⣛⣛⣛⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⡀⠄
⣿⣿⣿⣿⣿⡟⢼⣿⣯⣭⣛⣛⣛⡻⠷⠶⢶⣬⣭⣭⣭⡭⠭⢉⡄⠶⠾⠟⠁⠄
⣿⣿⣿⣿⣟⠻⣦⣤⣭⣭⣭⣭⣛⣛⡻⠿⠷⠶⢶⣶⠞⣼⡟⡸⣸⡸⠿⠄⠄⠄
⣛⠿⢿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠷⡆⣾⠟⡴⣱⢏⡜⠆⠄⠄⠄
⣭⣙⡒⠦⠭⣭⣛⣛⣛⡻⠿⠿⠟⣛⣛⣛⣛⡋⣶⡜⣟⣸⣠⡿⣸⠇⣧⡀⠄⠄
⣿⣿⣿⣿⣷⣶⣦⣭⣭⣭⣭⣭⣭⣥⣶⣶⣶⡆⣿⣾⣿⣿⣿⣷⣿⣸⠉⣷⠄⠄*/

const boardContent = document.querySelector(".board-content")
const infoDisplay = document.querySelector(".info");
const modalInfo = document.querySelector(".modal-info")
const logoBt = document.querySelector(".logo-bt")
const load = document.querySelector(".load")
const heroEffect = document.querySelector("header")
let audioplay = null

//play audio,start and stop animation in hero header
function heroSound(data){
    isAudioPlaying()
    heroEffect.classList.remove("color-sounds")
    void heroEffect.offsetHeight
    heroEffect.classList.add("color-sounds")
    let soundPath=`${data[0].soundPath}`
    playSound(soundPath)

}


infoDisplay.addEventListener("mouseover",()=>{    
    modalInfo.classList.add("modal-show")
    infoDisplay.setAttribute("style","opacity:100%")
})
infoDisplay.addEventListener("mouseleave",()=>{
    modalInfo.classList.remove("modal-show")
    infoDisplay.setAttribute("style","opacity:25%")
})
modalInfo.addEventListener("mouseover",()=>{
    modalInfo.classList.add("modal-show")
    infoDisplay.setAttribute("style","opacity:100%")
})
modalInfo.addEventListener("mouseleave",()=>{
    modalInfo.classList.remove("modal-show")
    infoDisplay.setAttribute("style","opacity:25%")
})


fetch("./js/data.js")
.then(response=>{
    return response.json()
})
.then(data=>{
    createBoardContent(data.sounds)
    boardContent.addEventListener("click",function(e){EventButton(e,data.sounds)},false)
    logoBt.addEventListener("click",function(){heroSound(data.sounds)},false)
    load.style.display="none"
})

function createBoardContent(soundsData){
    for(let ind=0;ind<soundsData.length;ind++){
        if(soundsData[ind].id!="crsd-0"){
            boardContent.appendChild(createButton(soundsData[ind]))
        }
    }
}

function addLoading(){    
    let ploading=document.createElement("p")
    let textLoading=document.createTextNode("Cargando...")
    ploading.appendChild(textLoading)
    ploading.classList.
    divloading.appendChild("Carcan")
    mainDiv.createElement("p")
    mainDiv.appendChild("Cargando...")
}

function createButton(soundInfo){
    let divElement=document.createElement("div")
    let buttonElement=document.createElement("button")
    let buttonText=document.createTextNode(soundInfo.text)

    divElement.classList.add("bt-cont")
    buttonElement.classList.add("button-sound")
    buttonElement.appendChild(buttonText)
    buttonElement.setAttribute("id",`${soundInfo.id}`)
    buttonElement.type="button"
    divElement.appendChild(buttonElement)

    return divElement
}

function EventButton(event,soundsData){
    isAudioPlaying()

        let soundsFilter=soundsData.filter(sound=>sound.id==event.target.id)
        if(soundsFilter.length > 0){

            let soundPath=`${soundsFilter[0].soundPath}`
            playSound(soundPath)
        }
}

function isAudioPlaying(){
    if(audioplay){ //check if a sound is currently playing
        audioplay.pause()
        heroEffect.classList.remove("color-sounds")
    }
}

function playSound(soundPath){
    audioplay= new Audio(soundPath)    
    audioplay.play()
}

