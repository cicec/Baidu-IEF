// 创建新队列元素
function createQueueItem(num) {
    let item = document.createElement('div');
    item.setAttribute('class', 'queue-item');
    item.style.height = `${num * 2}px`;
    item.style.lineHeight = `${num * 2}px`;
    let textNode = document.createTextNode(num);
    item.appendChild(textNode);
    return item;
}

// 为队列中元素添加点击删除事件
function setItemRemoveEvent(item) {
    item.onclick = () => {
        let text = item.firstChild.nodeValue;
        item.remove();
        alert(text);
    };
}

// 验证输入值是否合法
function checkoutInput(text) {
    let reg = /^[0-9]*$/gi;
    if (reg.test(text)) {
        if (text >= 10 && text <= 100) return true;
    }
    return false;
}

// 快速排序
function quickSort(arr) {
    let i = 0;
    let j = arr.length - 1;
    let stand = arr[0];
    while (i < j) {
        for (; j > i; j--) {
            if (arr[j] < stand) {
                arr[i] = arr[j];
                break;
            }
        }
        for (; i < j; i++) {
            if (arr[i] > stand) {
                arr[j] = arr[i];
                break;
            }
        }
        if (i === j) {
            arr[i] = stand;
            break;
        }
    }
    if (arr.length <= 2) {
        return arr;
    } else {
        return quickSort(arr.slice(0, i)).concat([arr[i]]).concat(quickSort(arr.slice(i + 1, arr.length)));
    }
}

function main() {
    let queue = document.getElementById('queue');

    (function setLeftEnqueueBtn() {
        let btn = document.getElementById('enqueue-left');
        btn.onclick = () => {
            let num = document.getElementById('input').value;
            document.getElementById('input').value = '';
            if (!checkoutInput(num)) {
                alert('请输入10-100之间的数字！');
                return false;
            }
            let item = queue.insertBefore(createQueueItem(num), queue.firstChild);
            setItemRemoveEvent(item);
        };
    })();

    (function setRightEnqueueBtn() {
        let btn = document.getElementById('enqueue-right');
        btn.onclick = () => {
            let num = document.getElementById('input').value;
            document.getElementById('input').value = '';
            if (!checkoutInput(num)) {
                alert('请输入10-100之间的数字！');
                return false;
            }
            let item = queue.appendChild(createQueueItem(num));
            item.style.height = `${num * 2}px`;
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

    (function setSortBtn() {
        let btn = document.getElementById('sort');
        btn.onclick = () => {
            let queueItems = document.getElementsByClassName('queue-item');
            let arr = [];
            for (let i = 0; i < queueItems.length; i++) {
                arr.push(queueItems[i].firstChild.nodeValue);
            }
            let sortedArr = quickSort(arr);
            for (let i = 0; i < queueItems.length; i++) {
                queueItems[i].firstChild.nodeValue = sortedArr[i];
                queueItems[i].style.height = `${sortedArr[i] * 2}px`;
                queueItems[i].style.lineHeight = `${sortedArr[i] * 2}px`;
            }
        };
    })();
}

window.onload = main;