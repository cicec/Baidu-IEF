function setClick() {
    let text = document.getElementById('input-text');
    let btn = document.getElementById('input-btn');
    let show = document.getElementById('input-show');
    btn.onclick = function() {
        let val = text.value;
        show.firstChild.nodeValue = val;
        text.value = '';
    };
}
window.onload = setClick;