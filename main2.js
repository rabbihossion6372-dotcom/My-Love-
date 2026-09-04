let images, absImg, mainImg;

document.addEventListener("DOMContentLoaded", function () {
  images = document.querySelectorAll(".image1");
  absImg = document.getElementById("absImg");
  mainImg = document.getElementById("mainImg");

  function setRandomPosition(element) {
    element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  }

  images.forEach(function (image) {
    setRandomPosition(image);
  });
});

function angry() {
  if (!absImg) {
    absImg = document.getElementById("absImg");
    mainImg = document.getElementById("mainImg");
    images = document.querySelectorAll(".image1");
  }
  mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  absImg.style.display = "flex";
  images.forEach(function (image) {
    image.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  });
}

function happy() {
  if (!absImg) {
    absImg = document.getElementById("absImg");
    mainImg = document.getElementById("mainImg");
    images = document.querySelectorAll(".image1");
  }
  absImg.style.display = "flex";
  mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
  images.forEach(function (image) {
    image.src = "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
  });
}

const sadCat = [
  "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif",
  "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  "https://media1.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif",
  "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
  "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
  "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif",
  "https://media.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif",
  "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif",
  "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif"
];

const blackmail = [
  "Please",
  "I'm begging you",
  "I'm crying",
  "I'm sad",
  "HUHUHUHU",
  "Please Say Yes",
  "I'm gonna cry",
];

function normal() {
  if (!absImg) {
    absImg = document.getElementById("absImg");
    mainImg = document.getElementById("mainImg");
  }
  absImg.style.display = "none";
  mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
}
  
let counter = 0;

function no() {
  counter++;
  let sadMusic = document.getElementById("sadMusic");
  let happyMusic = document.getElementById("happyMusic");
  if (happyMusic) happyMusic.pause();
  if (sadMusic) {
    sadMusic.currentTime = 0;
    sadMusic.play().catch(() => {});
  }
  let model = document.getElementById("model");
  if (model) {
    model.style.display = "none";
    setTimeout(() => {
      model.style.display = "flex";
      const modelImage = document.getElementById("modelImg");
      const modelText = document.getElementById("modelText");
      if (modelImage) modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
      if (modelText) modelText.innerText = blackmail[Math.floor(Math.random() * blackmail.length)];
    }, 100);
  }
}

function yes() {
  if (counter >= 3) {
    let model = document.getElementById("model2");
    let model2 = document.getElementById("model");
    let sadMusic = document.getElementById("sadMusic");
    if (sadMusic) sadMusic.pause();
    if (model2) model2.style.display = "none";
    let happyMusic = document.getElementById("happyMusic");
    if (happyMusic) {
      happyMusic.currentTime = 0;
      happyMusic.play().catch(() => {});
    }
    if (model) {
      model.style.display = "none";
      setTimeout(() => {
        model.style.display = "flex";
      }, 100);
    }
    const wedate = document.getElementById("wedate");
    const btns = document.getElementById("btns");
    if (btns) btns.style.display = "none";
    if (wedate) wedate.innerText = "We are each other's valentine now. I love you cutie. ❤️😘";
  } else {
    alert("Don't say yes right away, cutie. Play around a bit 😉😘");
  }
}

function ly2() {
  let model = document.getElementById("model2");
  if (model) model.style.display = "none";
  let model2 = document.getElementById("model");
  if (model2) model2.style.display = "none";
  window.location.href = "index1.html";
}
