import data from "./data.js"

const accessOrInteract = () => Math.round(Math.random()) === 0 ? 'Acessar' : 'Interagir'
const buildHeader = () => `
    <div class="headerwrapper">
        <header>
            <h1>
                <i class="fa fa-dropbox"></i>
                <span>Dropbox</span>
            </h1>
            <button class="openmenu">${accessOrInteract()}</button>
        </header>
    </div>
`
const buildSection = (props) => `
    <section class="${props.variant}">
        ${buildHeader()}
        <div class="content">
            <h2>${props.title}</h2>
            <p>${props.description}</p>
        </div>
    </section>
`

const sections = data.map(buildSection).join('')

document.querySelector('#sections').innerHTML = sections

// Side menu
const sidemenu = document.querySelector('#sidemenu')

// update on scroll
window.addEventListener('scroll', onScroll)

function onScroll() {
    // console.log(window.scrollY)
    updateScrollY()
}

function updateScrollY() {
    sidemenu.classList.remove('open')
    sidemenu.classList.add('scrollOpen')
 
    if (window.scrollY > 300) {
        sidemenu.classList.remove('scrollOpen')
    }
}
updateScrollY()

// add/remove active class to menu
function updateActive() {
    console.log('updating active')
    sidemenu.classList.remove('scrollOpen')
    sidemenu.classList.toggle('open')
}
updateActive()

document.querySelector('#close')
.addEventListener('click', updateActive)

// open/close menu with header click
document.querySelectorAll('button.openmenu')
.forEach( button => button.addEventListener('click', updateActive))
