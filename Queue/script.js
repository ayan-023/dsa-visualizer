let queue = [];
let justEnqueued = false;
let leavingIndex = null;

function Render() {
    const container = document.getElementById('queue-container');
    container.innerHTML = '';

    queue.forEach((value, index) => {
        const box = document.createElement('div');
        box.className = 'queue-box';
        box.textContent = value;

        if (justEnqueued && index === queue.length - 1) {
            box.classList.add('enter');
        }
        if (leavingIndex !== null && index === leavingIndex) {
            box.classList.add('exit');
        }
        if (index === queue.length - 1 && index === 0) {
            box.classList.add('head-tail');
        } else if (index === 0) {
            box.classList.add('head');
        } else if (index === queue.length - 1) {
            box.classList.add('tail');
        }

        container.appendChild(box);
    });

    document.getElementById('sizeLabel').textContent = `size: ${queue.length}`;
    justEnqueued = false;
}

function enqueueValue() {
    const input = document.getElementById('valueInput');
    if (input.value === '') return;
    if (leavingIndex !== null) return;

    queue.push(Number(input.value));
    input.value = '';
    justEnqueued = true;
    Render();
}

function dequeueValue() {
    if (queue.length === 0 || leavingIndex !== null) return;

    leavingIndex = 0;
    Render();

    setTimeout(() => {
        queue.shift();
        leavingIndex = null;
        Render();
    }, 300);
}

Render();