// //object

// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2022,
//     features: ["AC", "Bluetooth", "Hybrid"],
//     start: function() {
//       console.log("Car Started");
//     }
//   };
  
//   console.log(car.features);
//   car.start();
   

// //json

// let carJson = {
//     "brand": "Toyota",
//     "model": "Corolla",
//     "year": 2022,
//     "features": ["AC", "Bluetooth", "Hybrid"],
//     "start": function() {
//       console.log("Car Started");
//     }
//   };
  
//   // Displaying the original object
//   console.log("JavaScript Object:", carJson);
  
//   // Converting object to JSON (functions will be excluded in JSON)
//   let carJsonString = JSON.stringify(carJson);
//   console.log("JSON Format:", carJsonString);
  
//   // Converting JSON back to a JavaScript object
//   let carObj = JSON.parse(carJsonString);
//   console.log("Converted JavaScript Object:", carObj);
  
//   // Accessing the method after JSON conversion
//   // Note: The "start" function is excluded during stringification, so it won't be present in `carObj`.


function showSum() {
  let num1 = document.getElementById('num1');
  let num2 = document.getElementById('num2');

  let num1Value = num1.value;
  let num2Value = num2.value;

  // Ensure numerical addition
  let sum = parseInt(num1Value) + parseInt(num2Value);
  document.getElementById('result').innerText=sum;
}

function addElement() {
  const todoItem = document.getElementById('todoitem');
  const newLi = document.createElement('li');
  newLi.classList.add('heading');
  newLi.textContent = todoItem.value;

  const todoListElement = document.getElementById('todolist');
  todoListElement.appendChild(newLi);

  todoItem.value = '';
}