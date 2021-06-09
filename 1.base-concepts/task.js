"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b,2)-4*a*c;
  if(D < 0) {
    return arr;
  }
  if (D === 0) {
    let x1 = (-b+Math.sqrt(D))/(2*a);
    arr.push(x1);
    return arr;
  } 
  if (D > 0) {
    let x2 = (-b-Math.sqrt(D))/(2*a);
    arr.push(x1, x2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}