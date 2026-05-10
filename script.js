const lightColors = {
    '--main': '#f4f4f4',
    '--secondary': '#f5f5f5a7',
    '--detail': '#1f1c1c',
    '--text': '#000000',
}
const darkColors = {
    '--main': '#23242a',
    '--secondary': '#1e1e21dc',
    '--detail': '#e9e9e9',
    '--text': '#fff',
}

function applyColors(dict) {
    Object.keys(dict).forEach(function (key) {
        document.documentElement.style.setProperty(key, dict[key])
    })
}
function applyCurrentTheme(){
    if (localStorage.getItem("theme") == "light") {
        applyColors(darkColors)
        document.body.style.backgroundImage = 'url(./bilder/elden-ring-cover.avif)'
    }
    else if ((localStorage.getItem("theme") == "dark")){
        applyColors(lightColors)
        document.body.style.backgroundImage = 'url(./bilder/Gate_of_Divinity_Shadow_of_the_Erdtree.webp)'
    }
    else{
        localStorage.setItem("theme", "dark")
        applyCurrentTheme()
    }
}
function toggleDarkMode() {
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark")
        applyCurrentTheme()
    }
    else{
        localStorage.setItem("theme", "light")
        applyCurrentTheme()
    }
}

applyCurrentTheme()