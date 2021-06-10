"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b,2)-4*a*c;
  let x1 = (-b+Math.sqrt(D))/(2*a);
  let x2 = (-b-Math.sqrt(D))/(2*a);
  if(D < 0) {
  }
  if (D === 0) {
    arr.push(x1);
  } 
  if (D > 0) {
    arr.push(x1, x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}