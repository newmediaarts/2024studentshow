// Modified from original repo os-in-browser by zisunal at https://github.com/zisunal/os-in-browser

//ELements
const apps = document.querySelector("#nma-os-apps")
var menu = document.querySelector("#os-ct-menu")
const os_window = document.querySelector(".nma-os-window")
const icon_window = document.querySelector(".icon")
const app_main = document.querySelector ("#app-main")
const maximise = document.querySelector("#maximise")
const shorter = document.querySelector("#shorter")
const cross = document.querySelector("#cross")
const nma_bottom_bar = document.querySelector ("#nma-bottom-bar")

/* Sound effects */
const click = new Audio("audio/click.wav")
const con = new Audio("audio/alert.wav")
const okay = new Audio("audio/positive.wav")
const no = new Audio("audio/negative.wav")

//Operations
/* Reseting window */
close(os_window)
/* Creating apps */
create_app("John Doe", 'img/icons/john-doe.png', "johndoe")
create_app("Sally Smith", 'img/icons/sally-smith.png', "sallysmith")

//Functions

function create_app (name, image, id) {
    let app = document.createElement("div")
    app.classList.add("app")
    app.id = id
    app.setAttribute("onclick", "window_open('" + id + "')")

    let img = document.createElement("img")
    img.src = image
    img. setAttribute("alt", name)
    let p = document.createElement("p")
    p.innerText = name
    app.appendChild (img)
    app.appendChild (p)
    apps.appendChild (app)
}

function openButton (tag) {
    tag.style.display = "inline-block"
}

function closeButton (tag) {
    tag.style.display = "none"
}

function open (tag) {
    tag.classList.remove('hidden-window');
    tag.classList.add('visible-window');
}

function close (tag) {
    tag.classList.remove('visible-window');
    tag.classList.add('hidden-window');
}

function window_open (id) {
    click.play()
    icon_window.innerHTML = ""
    app_main.innerHTML = ""
    init_window()

    let main = document.querySelector("#" + id)

    // let content = document.querySelector("#" + id + "-content")
    let content = document.createElement("div")
    content.classList.add('nma-content-box')
    let currentcontent = document.querySelector("#" + id + "-content")
    content.innerHTML = currentcontent.innerHTML

    let img = document.createElement("img")
    img.src = main.childNodes[0].src
    img.setAttribute("alt", main.childNodes[0].getAttribute("alt"))

    let p = document.createElement("p")
    p.innerText = main.childNodes[1].innerText
    icon_window.appendChild(img)
    icon_window.appendChild(p)
    console.log(content)
    app_main.appendChild(content)

    open(os_window)
}

function init_window() {
    closeButton(shorter)
    maximise.onclick = e => {
        click.play()
        maximise_window()
    }
    shorter.onclick = e => {
        click.play()
        shorter_window()
    }
    cross.onclick = e => {
        click.play()
        close(os_window)
        // os_window
    }
}

function maximise_window () {
    openButton(shorter)
    closeButton(maximise)
    window.restoreX = os_window.style.left
    window.restoreY = os_window.style.top
    os_window.style.top = 0
    os_window.style.left = 0
    os_window.style.width = "100%"
    os_window.style.height = "100svh"
}

function shorter_window () {
    openButton(maximise)
    closeButton(shorter)
    os_window.style.top = window.restoreY
    os_window.style.left = window.restoreX
    os_window.style.width = "60%"
    os_window.style.height = "60svh"
}


os_window.ondragend = e => {
    let go_top = e.pageY
    let go_left = e.pageX
    if(go_top < 0) {
        go_top= e
    }
    if(go_left < 0) {
        go_left = 0
    }
    os_window.style.top = go_top + "px"
    os_window.style.left = go_left + "px"
}