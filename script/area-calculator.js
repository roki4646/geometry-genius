//reuseable function
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reuseable set area text
function setElementInnerText(calculateAreaId, area){
    const element = document.getElementById(calculateAreaId);
    element.innerText = area;  
}

//triangle
function calculateTriangleArea(){
    // get triangle base value
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
 // calculate area   
    const area = 0.5 * base * height;
    // show triangle area
 setElementInnerText('triangle-area', area)
 addToCalculationEntry('Triangle', area)
}

//rectangle
function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    if(isNaN(width) || isNaN(length)){
        alert('Number Please');
        return;
    }
    const area = width * length;
 setElementInnerText('rectangle-area', area)
 addToCalculationEntry('Rectangle', area);
}

//parallelogram
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('Only Number is Real');
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    addToCalculationEntry('Parallelogram', area)
}

function calculateEllipseArea(){
    const a = getInputValue('ellipse-a-radius');
    const b = getInputValue('ellipse-b-radius');
    const area = 3.14 * a * b;
    const areaToFixed = area.toFixed(2);
    setElementInnerText('ellipse-area', areaToFixed);
    addToCalculationEntry('Ellipse', areaToFixed);
}

function calculatePentagonArea(){
    const p = getInputValue('pentagon-p');
    const b = getInputValue('pentagon-b');
    const area = 0.5 * p * b;
    setElementInnerText('pentagon-area', area);
    //add to calculation entry
    addToCalculationEntry('Pentagon', area)

}
/**
 * 1. get the element where you want to add the dynamic html
 * 2. create an element you want
 * 3. add class if needed
 * 4. set inner HTML . it could be dynamic template string
 * 5. append the created element as a child of the parent
 */
//add to calculation entry
function addToCalculationEntry(areaType, area){
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');

    p.classList.add('my-4');
    p.innerHTML =`${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="float-right btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);

}