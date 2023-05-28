// pegar todas as teclas
const keys = document.querySelectorAll(".key")

// tocar notas
function playNote(event) {

    let audiokeyCode = getKeyCode(event);

    // tecla digitada ou pressionada
    const key = document.querySelector(`.key[data-key="${audiokeyCode}"]`)

    // se a tecla existe dentro do mapeamento de teclas
    const cantFoundAnyKey = !key

    if(cantFoundAnyKey) {
        return;
    }

    addPlayingClass(key)
    playAudio(audiokeyCode)
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === "keydown" // verdadeiro ou falso
    if(isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    
    return keyCode
}

function playAudio(audiokeyCode) {
    const audio = document.querySelector(`audio[data-key="${audiokeyCode}"]`)
    audio.currentTime = 0;
    audio.play()   
}

function removePlayingClass(event) {
    event.target.classList.remove("playing")
}

function registerEvents() {
    // clicar com o mouse
    keys.forEach( function(key) {
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayingClass)
    })
    
    // digitar no teclado
    window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)