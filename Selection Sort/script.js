let arr = [];

function loadArray() {
    input = document.getElementById('inputValue');
    text = input.value
    arr = text.split(',').map(item => Number(item.trim()));
    console.log(arr);
    render();
}


function render(comparing = [], swapped = [], sorted = []) {
    const container = document.getElementById('barscontainer');
    container.innerHTML = '';
    const maxValue = Math.max(...arr)

    arr.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        height = (value / maxValue) * 100;
        bar.style.height = `${height}%`;
        bar.textContent = value;

        if (index === comparing[0]) {
            bar.classList.add('comparing-left')
        }
        else if (index === comparing[1]) {
            bar.classList.add('comparing-right')
        }

        if (swapped.includes(index)) {
            bar.classList.add('swapped')
        }

        if (sorted.includes(index)) {
            bar.classList.add('swapped')
        }
        container.appendChild(bar);
    });
    document.getElementById('sizeLabel').textContent = `size: ${arr.length}`;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function selectionSort() {
    let n = arr.length

    for (let i = 0; i < n; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            render([i, j])
            await sleep(300);
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
        console.log(arr[i],arr[min_idx],temp);
        render([], [i, temp])
        await sleep(300);

        console.log(arr);

    }
    render()
}