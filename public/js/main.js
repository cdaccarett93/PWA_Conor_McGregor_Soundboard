function clickSound(e) {
    var datakey = e.getAttribute("data-key");
    var audio = document.querySelector(`audio[data-key="${datakey}"]`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
}
