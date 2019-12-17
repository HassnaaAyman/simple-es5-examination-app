
var firstName = document.getElementById("name1");
var lastName = document.getElementById("name2");
var mail = document.getElementById("email");
var pass = document.getElementById("passward");
var confirmPass = document.getElementById("seconedpassward");
var submit = document.querySelector(".send-data");
var form = document.querySelector(".section-form");
var exame = document.querySelector("#exam");
var rightArrow = document.querySelector(".next");
var leftArrow = document.querySelector(".prev");
var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var flag;



function validateForm() {

  // console.log(validateForm)
  flag = true;
  if (firstName.value.length < 3 || firstName.value === "") {
    document.querySelector("#name1 + span").classList.remove("hidden");
    flag = false;
  }


  if (lastName.value.length < 3 || lastName.value === "") {
    document.querySelector("#name2 + span").classList.remove("hidden");
    flag = false;
  }


  if (!re.test(mail.value)) {
    document.querySelector("#email + span").classList.remove("hidden");
    flag = false;
  }


  if (pass.value < 8 || pass.value === "") {
    document.querySelector("#passward + span").classList.remove("hidden");
    flag = false;
  }


  if (confirmPass.value != pass.value || confirmPass.value === "") {
    document.querySelector("#seconedpassward + span").classList.remove("hidden");
    flag = false;
  }

  if (flag) {
    form.style.display = "none";
    exame.style.display = "block";
    rightArrow.style.display="block"
    leftArrow.style.display="block"
  }

}

submit.addEventListener("click", validateForm);

function Question(q, a, b, c, d, e) {
  this.q = q;
  this.choise1 = a;
  this.choise2 = b;
  this.choise3 = c;
  this.choise3 = c;
  this.choise4 = d;
  this.correctChoice = e;
}
var arr = [];
arr.push(new Question("what's the capital of italy", "rome", "cairo", "tornto", "usa", "rome"));
arr.push(new Question("what's the movies of Alpachino", "3iditos", "me before you", "thegodfather", "pk", "thegodfather"));
arr.push(new Question("what's the number countries in the world", 50, 195, 200, 100, 195));
arr.push(new Question("what's your favorite animation", "cocco", "molan", "robonzle", "baz", "cocco"));
arr.push(new Question("whats your activites ", "social", "economic", "sortive", "technical", "social"));
arr.push(new Question("what's the native languge of turkey", "turkish", "arabic", "english", "spanich", "turkish"));
arr.push(new Question("what's the number of alahly players", 20, 25, 30, 11, 11));
arr.push(new Question("what's the favorite food ", "pasta", "chicken", "steak", "shawrma", "pasta"));
arr.push(new Question("what's the favorite sport ", "vollyball", "football", "bing", "basket", "bing"));
arr.push(new Question("what's the last name ", "ahmed", "mahmoud", "ali", "mohamed", "ahmed"));


var randomArr = [];




var current = 0;
rightArrow.addEventListener("click", function () {

  if (current < 4) {

    document.getElementById("q" + current).classList.remove("crr");
    current++;
    document.getElementById("q" + current).classList.add("crr");
  }
});




function generateQues() {

  do {
    var random = Math.floor(Math.random() * arr.length);
    var ques = arr[random];
    var flag = false;
    randomArr.forEach(function (el) {
      if (el === ques) {
        flag = true;
      }
    });

    if (!flag) {
      randomArr.push(ques);
    }
  } while (flag);
}


for (var i = 0; i < 5; i++) {
  generateQues();
}
for (var i = 0; i < 5; i++) {
  document.getElementById("exam").innerHTML += '<div class="q" id="q' + i + '"><h3>' + randomArr[i].q + '</h3><input type="radio" name="a' + i + '">' + randomArr[i].choise1 + '<br><input type="radio" name="a' + i + '">' + randomArr[i].choise2 + '<br><input type="radio" name="a' + i + '">' + randomArr[i].choise3 + '<br><input type="radio" name="a' + i + '">' + randomArr[i].choise4 + '</div>';
}

document.getElementById("q0").classList.add("crr");
/*
// var hold = document.getElementById("btn-hold");
// var draft = document.getElementById("slider__draft");
// hold.addEventListener("click", function () {
//   draft.innerHTML += `<a id="skiped-${current}" onclick="goQuestion(${current})" >Skipped ${current}</a>`;
// });

// function goQuestion(val){
//   current=val;
  // randomArr[current] <<= print
    //go to question
    /*
      for i=val i<5 ; ++i
      
    }
     */