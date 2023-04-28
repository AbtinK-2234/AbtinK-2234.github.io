let button = document.getElementById("toggleButton");

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

}

button.onclick = toggleTheme;