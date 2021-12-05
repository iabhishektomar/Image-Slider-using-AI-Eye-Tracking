window.saveDataAcrossSessions = true;

const Look_Delay = 1000   // 1000 milli second = 1 second
const Left_Cutoff = window.innerWidth / 4
const Right_Cutoff = window.innerWidth - window.innerWidth / 4
 
let startLookTime = Number.POSITIVE_INFINITY
let imageElement = getNewImage()
let nextimageElement = getNewImage(true)

webgazer.setGazeListener((data, timestamp) => {

    console.log(data, timestamp)
}).begin;

function getNewImage(next = false) {
    const img = document.createElement("img")                  //imageElement
    img.src = "https://picsum.photos/1000?" + Math.random()
    if (next) img.classList.add("next")                       //nextImageElement
    document.body.append(img)
    return img
}