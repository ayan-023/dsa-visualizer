let arr = [];

function loadArray() {
  const input = document.getElementById('inputValue');
  text = input.value;
  arr = text.split(',').map(item => Number(item.trim()));
  console.log(arr);
  render();
}


function render(comparing = [], swapped = [], sorted = [] ) {
  const container = document.getElementById('barscontainer');
  container.innerHTML = '';
  const maxValue = Math.max(...arr);
  arr.forEach((value, index) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    const height = (value / maxValue) * 100;
    bar.style.height = `${height}%`;
    bar.textContent = value;


    if (index === comparing[0]) {
      bar.classList.add("comparing-left");
    } else if (index === comparing[1]) {
      bar.classList.add("comparing-right");
    }

    if (swapped.includes(index)) {
      bar.classList.add("swapped");
    }
        if (sorted.includes(index)) {
        bar.classList.add("sorted");
    }
    container.appendChild(bar);
  });
  document.getElementById('sizeLabel').textContent = `size: ${arr.length}`;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    swapped = false;
    for (let j = 0; j < (n - i - 1); j++) {
      render([j, j + 1]);
      await sleep(300);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        render([], [j, j + 1]);
        await sleep(300);
      }
    }
  }
  render();
}

function resetInput() {
  arr=[];

  document.getElementById("inputValue").value='';
  document.getElementById("barscontainer").innerHTML='';
  render();
}