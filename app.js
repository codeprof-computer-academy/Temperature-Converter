// DOM Document Object Model
// Event & Event Handlers
// Event e.g click, mouseover, mouseout, mouseenter, input, change, load,
// call back function

let left_input = document.querySelector('.left-input')
let right_input = document.querySelector('.right-input')
let left_select = document.querySelector('.left-select')
let right_select = document.querySelector('.right-select')
let formula_text = document.querySelector('.formula-text')

let myName  = "thompson"
// alert(myName + " is a software engineer/developer")

// template string
// alert(`${myName} is a software developer`)


function convert_from_left(){
 
     let left_select_value = left_select.value
     let right_select_value = right_select.value

     //celsius - celsius
     if(left_select_value === 'celsius' && right_select_value === 'celsius'){
          right_input.value = left_input.value
          formula_text.innerHTML = `${left_input.value}<b><sup>o</sup>C</b> = ${right_input.value}<b><sup>o</sup>C</b>`
          
     }
     // celsius to farenheit
     else if(left_select_value === 'celsius' && right_select_value === 'fahrenheit'){
          right_input.value = (Number(left_input.value) * (9/5)) + 32
            formula_text.innerHTML = `(${left_input.value})<b><sup>o</sup>C</b> x (9/5) + 32 = ${right_input.value}<b><sup>o</sup>F</b>`
     }
    
     //celsius to kelvin
     else if(left_select_value === 'celsius' && right_select_value === 'kelvin'){
          right_input.value = Number(left_input.value) + 273.15
          formula_text.innerHTML = `(${left_input.value})<b><sup>o</sup>C</b> + 273.15 = ${right_input.value}<b>K</b>`
     }
     
     // fahreinheit to celsius
     else if(left_select_value === 'fahrenheit' && right_select_value === 'celsius'){
          right_input.value = ((Number(left_input.value) - 32) * 5/9).toFixed(3)
           formula_text.innerHTML = `(${left_input.value})<b><sup>o</sup>F</b> - 32 x (5/9) = ${right_input.value}<b><sup>o</sup>C</b>`
     }
     
     // fahrenheit to fahrenheit
     else if(left_select_value === 'fahrenheit' && right_select_value === 'fahrenheit'){
          right_input.value = left_input.value
            formula_text.innerHTML = `(${left_input.value})<b><sup>o</sup>F</b> = ${right_input.value}<b><sup>o</sup>F</b>`
     }
     
     //fahrenheit to kelvin
     else if(left_select_value === 'fahrenheit' && right_select_value === 'kelvin'){
          right_input.value = ((Number(left_input.value) - 32) * (5/9) + 273.15).toFixed(3)
              formula_text.innerHTML = `(${left_input.value})<b><sup>o</sup>F</b> - 32 x (5/9) + 273.15  = ${right_input.value}<b>K</b>`
     }
     
     //kelvin to celsius
     else if(left_select_value === 'kelvin' && right_select_value === 'celsius'){
          right_input.value = (Number(left_input.value) - 273.15).toFixed(3) 
            formula_text.innerHTML = `(${left_input.value})<b>K</b> -  273.15  = ${right_input.value}<b><sup>o</sup>C</b>`
     }
     
     // kelvin to fahrenheit
     else if(left_select_value === 'kelvin' && right_select_value === 'fahrenheit'){
          right_input.value = ((Number(left_input.value) - 273.15) * (9/5) + 32).toFixed(3)
          
            formula_text.innerHTML = `(${left_input.value})<b>K</b> -  273.15 x (9/5) + 32 = ${right_input.value}<b><sup>o</sup>F</b>`
     }
     
     //kelvin to kelvins
     else if(left_select_value === 'kelvin' && right_select_value === 'kelvin'){
          right_input.value = left_input.value
           formula_text.innerHTML = `(${left_input.value})<b>K</b> = ${right_input.value}<b>K</b>`
     }     
}


function convert_from_right(){
 
     let left_select_value = left_select.value
     let right_select_value = right_select.value

     //celsius - celsius
     if(right_select_value === 'celsius' && left_select_value === 'celsius'){
          left_input.value = right_input.value
          formula_text.innerHTML = `${right_input.value}<b><sup>o</sup>C</b> = ${left_input.value}<b><sup>o</sup>C</b>`
          
     }
     // celsius to farenheit
     else if(right_select_value === 'celsius' && left_select_value === 'fahrenheit'){
          left_input.value = (Number(right_input.value) * (9/5)) + 32
            formula_text.innerHTML = `(${right_input.value})<b><sup>o</sup>C</b> x (9/5) + 32 = ${left_input.value}<b><sup>o</sup>F</b>`
     }
    
     //celsius to kelvin
     else if(right_select_value === 'celsius' && left_select_value === 'kelvin'){
          left_input.value = Number(right_input.value) + 273.15
          formula_text.innerHTML = `(${right_input.value})<b><sup>o</sup>C</b> + 273.15 = ${left_input.value}<b>K</b>`
     }
     
     // fahreinheit to celsius
     else if(right_select_value === 'fahrenheit' && left_select_value === 'celsius'){
          left_input.value = ((Number(right_input.value) - 32) * 5/9).toFixed(3)
           formula_text.innerHTML = `(${right_input.value})<b><sup>o</sup>F</b> - 32 x (5/9) = ${left_input.value}<b><sup>o</sup>C</b>`
     }
     
     // fahrenheit to fahrenheit
     else if(right_select_value === 'fahrenheit' && left_select_value === 'fahrenheit'){
          left_input.value = right_input.value
            formula_text.innerHTML = `(${right_input.value})<b><sup>o</sup>F</b> = ${left_input.value}<b><sup>o</sup>F</b>`
     }
     
     //fahrenheit to kelvin
     else if(right_select_value === 'fahrenheit' && left_select_value === 'kelvin'){
          left_input.value = ((Number(right_input.value) - 32) * (5/9) + 273.15).toFixed(3)
              formula_text.innerHTML = `(${right_input.value})<b><sup>o</sup>F</b> - 32 x (5/9) + 273.15  = ${left_input.value}<b>K</b>`
     }
     
     //kelvin to celsius
     else if(right_select_value === 'kelvin' && left_select_value === 'celsius'){
          left_input.value = (Number(right_input.value) - 273.15).toFixed(3) 
            formula_text.innerHTML = `(${right_input.value})<b>K</b> -  273.15  = ${left_input.value}<b><sup>o</sup>C</b>`
     }
     
     // kelvin to fahrenheit
     else if(right_select_value === 'kelvin' && left_select_value === 'fahrenheit'){
          left_input.value = ((Number(right_input.value) - 273.15) * (9/5) + 32).toFixed(3)
          
            formula_text.innerHTML = `(${right_input.value})<b>K</b> -  273.15 x (9/5) + 32 = ${left_input.value}<b><sup>o</sup>F</b>`
     }
     
     //kelvin to kelvins
     else if(right_select_value === 'kelvin' && left_select_value === 'kelvin'){
          left_input.value = right_input.value
           formula_text.innerHTML = `(${right_input.value})<b>K</b> = ${left_input.value}<b>K</b>`
     }     
}


left_input.addEventListener('input', convert_from_left)
left_select.addEventListener('input', convert_from_left)

right_input.addEventListener('input', convert_from_right)
right_select.addEventListener('input', convert_from_right)

