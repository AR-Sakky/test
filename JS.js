var correct;
var A1 = document.getElementById("Answer1");
var A2 = document.getElementById("Answer2");
var A3 = document.getElementById("Answer3");
var A4 = document.getElementById("Answer4");
var Result = document.getElementById("ResultDIV");
var Send = document.getElementById("send");
var Answer = document.getElementById("Answer");
var Question = document.getElementById("Question");
var x = document.getElementById("AnswerDIV");
var s = document.getElementById("StartDIV");

function Start() {
  Result.style.display = "none";
  Send.textContent = "";
  Question.textContent = "Inside which HTML element do we put the JavaScript?";
  correct = 2;
  A1.disabled = false;
  A2.disabled = false;
  A3.disabled = false;
  A4.disabled = false;
  A1.textContent="<scripting>";
  A2.textContent="<script>";
  A3.textContent="<js>";
  A4.textContent="<javascript>";
  if (x.style.display === "none") {
    x.style.display = "block";
    s.style.display = "none";
  } else {
    x.style.display = "none";
    s.style.display = "block";
  }
}

function Ans1() {
    A1.disabled = true;
    A2.disabled = true;
    A3.disabled = true;
    A4.disabled = true;
    if (correct == 1) {
    Result.style.display = "block";
    Answer.style.color = "Green";
    Answer.textContent="Correct!";
    setTimeout(myCorrect, 5000);
  } else {
    Result.style.display = "block";
    Answer.style.color = "Red";
    Answer.textContent="Incorrect!";
    setTimeout(myReset, 5000);
  }
}

function Ans2() {
  A1.disabled = true;
  A2.disabled = true;
  A3.disabled = true;
  A4.disabled = true;
  if (correct == 2) {
    Result.style.display = "block";
    Answer.style.color = "Green";
    Answer.textContent="Correct!";
    setTimeout(myCorrect, 5000);
  } else {
    Result.style.display = "block";
    Answer.style.color = "Red";
    Answer.textContent="Incorrect!";
    setTimeout(myReset, 5000);
  }
}

function Ans3() {
    A1.disabled = true;
    A2.disabled = true;
    A3.disabled = true;
    A4.disabled = true;
    if (correct == 3) {
    Result.style.display = "block";
    Answer.style.color = "Green";
    Answer.textContent="Correct!";
    setTimeout(myCorrect, 5000);
  } else {
    Result.style.display = "block";
    Answer.style.color = "Red";
    Answer.textContent="Incorrect!";
    setTimeout(myReset, 5000);
  }
}

function Ans4() {
    A1.disabled = true;
    A2.disabled = true;
    A3.disabled = true;
    A4.disabled = true;
    if (correct == 4) {
    Result.style.display = "block";
    Answer.style.color = "Green";
    Answer.textContent="Correct!";
    setTimeout(myCorrect, 5000);
  } else {
    Result.style.display = "block";
    Answer.style.color = "Red";
    Answer.textContent="Incorrect!";
    setTimeout(myReset, 5000);
  }
}

function myCorrect() {
  if (correct == 1) {
    Question.textContent = "Which operator is used to assign a value to a variable?";
    Answer.textContent="";
    correct = 4;
    A1.textContent="*";
    A2.textContent="-";
    A3.textContent="x";
    A4.textContent="=";
    A1.disabled = false;
    A2.disabled = false;
    A3.disabled = false;
    A4.disabled = false;
  } 
  else if (correct == 2) {
    correct = 1;
    Question.textContent = "Which event occurs when the user clicks on an HTML element?";
    Answer.textContent="";
    A1.textContent="onclick";
    A2.textContent="onmouseclick";
    A3.textContent="onchange";
    A4.textContent="onmouseover";
    A1.disabled = false;
    A2.disabled = false;
    A3.disabled = false;
    A4.disabled = false;
  } else if (correct == 3) {
    Answer.style.color = "Green";
    x.style.display = "none";
    Answer.textContent = "You Win!!";
    Send.textContent = "You did it!";
    setTimeout(myReset, 10000);
  } else if (correct == 4) {
    correct = 3;
    Question.textContent = "How to write an IF statement in JavaScript?";
    Answer.textContent="";
    A1.textContent="if i == 5 then";
    A2.textContent="if i = 5";
    A3.textContent="if (i == 5)";
    A4.textContent="if i = 5 then";
    A1.disabled = false;
    A2.disabled = false;
    A3.disabled = false;
    A4.disabled = false;
  }
}

function myReset() {
  
}