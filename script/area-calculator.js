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
}

//rectangle
function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
   const area = width * length;
 setElementInnerText('rectangle-area', area)
}

//parallelogram
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
}


function calculateEllipseArea(){
    const a = getInputValue('ellipse-a-radius');
    const b = getInputValue('ellipse-b-radius');
    const area = 3.1416 * a * b;
    setElementInnerText('ellipse-area', area);
}

function calculatePentagonArea(){
    const p = getInputValue('pentagon-p');
    const b = getInputValue('pentagon-b');
    const area = 0.5 * p * b;
    setElementInnerText('pentagon-area', area);
}
