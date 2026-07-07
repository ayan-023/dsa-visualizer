let stack = []

function render() {
    const container = document.getElementById('stackContainer');
    container.innerHtml='';
    
    stack.forEach((value, index)=>{
        const box= document.createElement('div');
        box.className='stack-box';
        box.textContent=value;

        if (index === stack.length -1){
            box.classList.add('top')
        }
        container.appendChiled(box);
    });
}

function pushValue() {
    const input = document.getElementById('valueInput');
    if(input.value === '') return;

    stack.push(Number(input.value));
    input.value='';
    render();
}

function popValue() {
    if(stack.length === 0) return;
    stack.pop();
    render();
}

render();
