function createQueueItem(text) {
    let div = document.createElement('div');
    div.setAttribute('class', 'queue-item');
    let textNode = document.createTextNode(text);
    div.appendChild(textNode);
    return div;
}

function setItemRemoveEvent(item) {
    item.onclick = () => {
        let text = item.firstChild.nodeValue;
        item.remove();
        alert(text);
    };
}

function main() {
    let queue = document.getElementById('queue');

    (function () {
        let queueItems = document.getElementsByClassName('queue-item');
        for (let i = 0; i < queueItems.length; i++) {
            setItemRemoveEvent(queueItems[i]);
        }
    })();

    (function setLeftEnqueueBtn() {
        let btn = document.getElementById('enqueue-left');
        btn.onclick = () => {
            let inputText = document.getElementById('input').value;
            document.getElementById('input').value = '';
            let item = queue.insertBefore(createQueueItem(inputText), queue.firstChild);
            setItemRemoveEvent(item);
        };
    })();

    (function setRightEnqueueBtn() {
        let btn = document.getElementById('enqueue-right');
        btn.onclick = () => {
            let inputText = document.getElementById('input').value;
            document.getElementById('input').value = '';
            let item = queue.appendChild(createQueueItem(inputText));
            setItemRemoveEvent(item);
        };
    })();

    (function setLeftDequeueBtn() {
        let btn = document.getElementById('dequeue-left');
        btn.onclick = () => {
            let queueItems = document.getElementsByClassName('queue-item');
            let text = queueItems[0].firstChild.nodeValue;
            queueItems[0].remove();
            alert(text);
        };
    })();

    (function setRightDequeueBtn() {
        let btn = document.getElementById('dequeue-right');
        btn.onclick = () => {
            let queueItems = document.getElementsByClassName('queue-item');
            let text = queueItems[queueItems.length - 1].firstChild.nodeValue;
            queueItems[queueItems.length - 1].remove();
            alert(text);
        };
    })();
}

window.onload = main;