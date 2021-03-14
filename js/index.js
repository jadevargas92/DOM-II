// #'s 1 and #2 - Top Image Mouse Hover Blur (Event Listners are Mouse Over and Mouse Leave)
let imageh2Show = () => {
    imageh2.textContent = 'Hope you have a great time at the Fun Bus!'
    imageh2.style.position = 'absolute'
    imageh2.style.top = '30%'
    imageh2.style.left = '50%'
    imageh2.style.transform = 'translate(-50%, -50%)'
    imageh2.style.fontSize = '4.5rem'
    imageh2.style.visibility = 'visible'
    imageh2.style.filter = 'blur(0px)'
    headerImage.style.filter = 'blur(3px)'
}

let toggleBlurOn = (event) => {
    event.target.style.filter = 'blur(3px)';
    imageh2Show()
    imageh2.addEventListener('mouseover', toggleBlurOn)
}

let toggleBlurOff = (event) => {
    event.target.style.filter = 'blur(0px)';
    imageh2.style.visibility = 'hidden'
}

let headerImage = document.querySelector('header img')

headerImage.addEventListener('mouseover', toggleBlurOn)
headerImage.addEventListener('mouseleave', toggleBlurOff)

// #3 Bottom Image Double Click Event to Change Picture (Event Listner is dblclick)
let imageTextDiv = document.createElement('div');
imageTextDiv.style.position ='relative'
imageTextDiv.style.textAlign ='center'
console.log(imageTextDiv)

headerImage.parentNode.insertBefore(imageTextDiv, headerImage);
imageTextDiv.appendChild(headerImage);

let imageh2 = document.createElement('h2');
imageTextDiv.appendChild(imageh2)

let destinationImage = document.querySelector('.content-destination img')
console.log(destinationImage);
destinationImage.addEventListener('dblclick', event => {
    destinationImage.setAttribute('src', 'http://placeimg.com/640/480/nature')
})


// #4 Dark Mode Toggle Creation (Event Listener is 'Change')
let navBar = document.querySelector('nav');
console.log(navBar)
let darkModeToggle = document.createElement('input')
darkModeToggle.setAttribute('type', 'checkbox')
darkModeToggle.setAttribute('id', 'darkMode')
darkModeToggle.setAttribute('name', 'darkMode')
let darkModeToggleLabel = document.createElement('label');
darkModeToggleLabel.setAttribute('for', 'darkMode')
darkModeToggleLabel.textContent = 'Toggle for Dark Mode'
navBar.appendChild(darkModeToggle)
navBar.appendChild(darkModeToggleLabel)
console.log(darkModeToggleLabel)
let header = document.querySelector('header')
let allAnchors = document.querySelectorAll('a');
let allAnchorsArray = Array.from(allAnchors);
console.log(allAnchorsArray)
let footer = document.querySelector('footer');
let footerPara = document.querySelector('footer p')

darkModeToggle.addEventListener('change', event => {
    if (darkModeToggle.checked === true) {
        document.body.style.background = '#121212'
        document.body.style.color = '#eee'
        header.style.background = '#121212'
        header.style.color = '#eee'
        footer.style.background = '#121212'
        footer.style.color = '#eee'
        imageh2.style.color = '#222'
        footerPara.style.color = '#eee'
        footerPara.style.background = '#121212'
        allAnchorsArray.forEach(anchor => {
            anchor.style.color = '#eee'
        })
    } else {
        document.body.style.color = '#222';
        document.body.style.background = '#FFFFFF'
        header.style.background = '#FFFFFF'
        header.style.color = "#222"
        footer.style.background = '#FFFFFF'
        footer.style.color = '#222'
        footerPara.style.color = '#222'
        footerPara.style.background = '#FFEBCD'
        allAnchorsArray.forEach(anchor => {
            anchor.style.color = '#222'
        })
    }
})

// #5 Simple Load Event using Load Event Listner 

window.addEventListener('load', event => {
    alert('Welcome to the Fun Bus! Jade is testing out different events. I hope you are excited to enter!')
})


//#6 Content Section Images event listener 'wheel' to zoom in and out
let contentSectionImages = document.querySelectorAll('.content-section img')
console.log(contentSectionImages)

let scale = 1;
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    this.style.transform = `scale(${scale})`;
  }
  
contentSectionImages.forEach(img => {
    img.addEventListener('wheel', zoom)
})

//#7s and #8s Pointer Enter and Pointer Leave 

let allPara = document.querySelectorAll('p');
allPara.forEach(p => {
    p.addEventListener('pointerenter', event => {
       p.style.fontSize = '2.5rem'
    })
    p.addEventListener("pointerleave", event => {
        p.style.fontSize = '1.6rem'
    })
})

//#9 Scroll changes h2

function randomNumberForColor() {
    return Math.floor(Math.random() * 256)
}

let h2List = document.querySelectorAll('h2');
h2List.forEach(h2 => {
    document.addEventListener('scroll', event => {
        h2.style.color = `rgb(${randomNumberForColor()},${randomNumberForColor()},${randomNumberForColor()})`
    })
})

// #10 Click Event and stop propogation
let button = document.querySelector('.btn');
let h4 = document.querySelector('.destination h4')
button.addEventListener('click', event => {
    document.querySelector('.destination').style.background = 'orange'
    event.stopImmediatePropagation();
})

button.addEventListener('click', event => {
    h4.style.fontSize = '4rem'
})

// Prevent Default on Nav Items

allAnchorsArray.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();
    })
})