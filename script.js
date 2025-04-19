let popup = document.getElementById("popup");;
let popupClose = document.getElementById("popup-close");
let popupOpen = document.getElementById("popup-open");


// Event Listeners
function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}
