function createQueueItem(text) {
    const div = document.createElement('div');
    div.setAttribute('class', 'queue-item');
    const textNode = document.createTextNode(text);
    div.appendChild(textNode);
    return div;
}

function setItemRemoveEvent(item) {
    item.onclick = () => {
        const text = item.firstChild.nodeValue;
        item.remove();
        alert(text);
    };
}

function main() {
    const queue = document.getElementById('queue');
    const queueItems = document.getElementsByClassName('queue-item');

    for (let i = 0; i < queueItems.length; i += 1) {
        setItemRemoveEvent(queueItems[i]);
    }

    (function setLeftEnqueueBtn() {
        const btn = document.getElementById('enqueue-left');
        btn.onclick = () => {
            const inputText = document.getElementById('input').value;
            document.getElementById('input').value = '';
            const reg = /\n|\t|\s|,/;
            const inputArr = inputText.split(reg);
            inputArr.forEach((val) => {
                const item = queue.insertBefore(createQueueItem(val), queue.firstChild);
                setItemRemoveEvent(item);
            });
        };
    }());

    (function setRightEnqueueBtn() {
        const btn = document.getElementById('enqueue-right');
        btn.onclick = () => {
            const inputText = document.getElementById('input').value;
            document.getElementById('input').value = '';
            const reg = /\n|\t|\s|,/;
            const inputArr = inputText.split(reg);
            inputArr.forEach((val) => {
                const item = queue.appendChild(createQueueItem(val), queue.firstChild);
                setItemRemoveEvent(item);
            });
        };
    }());

    (function setLeftDequeueBtn() {
        const btn = document.getElementById('dequeue-left');
        btn.onclick = () => {
            const text = queueItems[0].firstChild.nodeValue;
            queueItems[0].remove();
            alert(text);
        };
    }());

    (function setRightDequeueBtn() {
        const btn = document.getElementById('dequeue-right');
        btn.onclick = () => {
            const text = queueItems[queueItems.length - 1].firstChild.nodeValue;
            queueItems[queueItems.length - 1].remove();
            alert(text);
        };
    }());

    (function setQueryBtn() {
        const btn = document.getElementById('btn-query');
        btn.onclick = () => {
            const keyword = document.getElementById('input-query').value;
            for (let i = 0; i < queueItems.length; i += 1) {
                queueItems[i].classList.remove('item-queried');
                if (queueItems[i].firstChild.nodeValue.indexOf(keyword) !== -1) {
                    queueItems[i].classList.add('item-queried');
                }
            }
        };
    }());
}

window.onload = main;