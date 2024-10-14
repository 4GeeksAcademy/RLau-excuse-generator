/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = [" ate ", " peed ", " crushed ", " broke "];
  let what = [" my homework ", " my phone ", " the car "];
  let when = [
    " before the class ",
    " when I was sleeping ",
    " while I was exercising ",
    " during my lunch ",
    " while I was praying "
  ];

  let p1 = Math.floor(Math.random() * who.length);
  let p2 = Math.floor(Math.random() * action.length);
  let p3 = Math.floor(Math.random() * what.length);
  let p4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[p1] + " " + action[p2] + " " + what[p3] + " " + when[p4];
};

console.log(document);
