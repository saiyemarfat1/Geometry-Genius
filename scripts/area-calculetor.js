function culculateTriangleAria(){
    // base
    const baseField = document.getElementById('triangle-base');
    const baseFieldText = baseField.value;
    const base = parseFloat(baseFieldText)
    console.log(base);

    // height

    const heightField = document.getElementById('triangle-height')
    const heightFieldText = heightField.value
    const height = parseFloat(heightFieldText)
    
    const area = 0.5 * base * height;
    console.log(area);

    // show traiangel area
    const areaSpan = document.getElementById('triangle-area')
    areaSpan.innerText = area


   

}

function culculateRectengleeAria(){
    const widthField= document.getElementById('rectangle-width')
    const widthFieldText = widthField.value;
    const width = parseFloat(widthFieldText)
    console.log(width);


    const lengthField = document.getElementById('rectaingle-length')
    const lengthFieldText = lengthField.value;
    const length = parseFloat(lengthFieldText)
    console.log(length)

    const area = width *length

    const rectaingleAreaShow = document.getElementById('rectaingle-area')
    rectaingleAreaShow.innerText = area


}


// reusable function --> reduce duplicate code
function culculateParallelogramAria(){
    const base = getInputValue('parallelogram-base')
    console.log(base);

    const height = getInputValue('parallelogram-height')
    console.log(height);

    const area = base * height;
    setElementInnerText('parallelogram-area', area)
}

function culculateellipseAria(){
    const majorRadius = getInputValue('ellipse-major-radius')
    const minorRadius = getInputValue('ellipse-minor-radius')
    const area = 3.14 *majorRadius*minorRadius
    setElementInnerText('ellipse-area', area)
}




// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText)
    return value;

}

// reusable set span, or p, div, et, text

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area

    

}