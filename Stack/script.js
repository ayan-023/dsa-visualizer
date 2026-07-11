let stack = [];

function render() {
  const container = document.getElementById('stackContainer');
  container.innerHTML = '';

  stack.forEach((value, index) => {
    const box = document.createElement('div');
    box.className = 'stack-box';
    box.textContent = value;

    if (index === stack.length - 1) {
      box.classList.add('top');
    }

    container.appendChild(box);
  });

  document.getElementById('sizeLabel').textContent = `size: ${stack.length}`;
}

function pushValue() {
  const input = document.getElementById('valueInput');
  if (input.value === '') return;

  stack.push(Number(input.value));
  input.value = '';
  render();
}

function popValue() {
  if (stack.length === 0) return;

  stack.pop();
  render();
}

function resetInput() {
  stack = [];

  document.getElementById("valueInput").value = '';
  document.getElementById('stackContainer').innerHTML = '';
  render();
}

render();