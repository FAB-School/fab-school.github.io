function onMouseMove(event) {
    document.querySelector(".gradient").style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, #E4E5E600 0, #00416A 70%)';
}
document.addEventListener("mousemove", onMouseMove);