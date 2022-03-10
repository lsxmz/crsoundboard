const boardContent= document.querySelector(".board-content")
let audioplay=null

fetch("./js/data.js")
.then(response=>{
    return response.json()
})
.then(data=>{
    createBoardContent(data.sounds)
    boardContent.addEventListener("click",function(e){EventButton(e,data.sounds)},false)
})

function createBoardContent(soundsData){
    for(let ind=0;ind<soundsData.length;ind++){
        let divElement=document.createElement("div")
        let buttonElement=document.createElement("button")
        let buttonText=document.createTextNode(soundsData[ind].text)

        divElement.classList.add("bt-cont")
        buttonElement.classList.add("button-sound")
        buttonElement.appendChild(buttonText)
        buttonElement.setAttribute("id",`${soundsData[ind].id}`)
        buttonElement.type="button"
        divElement.appendChild(buttonElement)
        boardContent.appendChild(divElement)
    }
}

function EventButton(event,soundsData){
        if(audioplay){ //check if sound is currently playing and stop it
            audioplay.pause()
        }

        let soundsFilter=soundsData.filter(sound=>sound.id==event.target.id)
        if(soundsFilter.length > 0){
            let soundPath=`${soundsFilter[0].soundPath}`
            audioplay= new Audio(soundPath)    
            audioplay.play()
        }
}

