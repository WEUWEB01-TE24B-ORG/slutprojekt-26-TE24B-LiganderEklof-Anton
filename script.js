var dark = true
function toggleDarkMode(){
    dark = !dark
    console.warn("test")
    document.documentElement.style.setProperty('--main', '#fff');
}