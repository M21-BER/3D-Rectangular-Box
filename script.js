const buttons = document.querySelectorAll(".click");
const Box = document.querySelector("#cube");
const content = document.querySelector(".content");
const year = document.querySelector(".year");
const para_content = [
  '"Beautiful Forest made with Unity"',
  '"Menelik monument found in ethiopia around piassa which is monument built for the famous leader of menelik II"',
  '"Unity park found in ethiopia around 4 kilo"',
  '"Lalibela one of the ancient church found in ethiopia which is one of the 7 wonders"',
  '"Inside the deep ocean pleasant view"',
  '"House model taken from game footage"',
];
window.onload = content.innerHTML = para_content[0];
window.onload = year.innerHTML = new Date().getFullYear();
for (let btn = 0; btn < buttons.length; btn++) {
  buttons[btn].addEventListener("click", () => {
    // console.log("clicked btn" + btn);
    if (btn === 4 || btn === 5 || btn === 2) {
      transformer(btn, "Y");
    } else {
      transformer(btn, "X");
    }
  });
}

const transformer = (btn, dir) => {
  for (let i = 0; i < Box.classList.length; i++) {
    Box.classList.remove(Box.classList[i]);
  }
  Box.classList.add("change" + dir + (btn + 1));
  content_changer("change" + dir + (btn + 1));
};

const content_changer = (getClass) => {
  switch (getClass) {
    case "changeX1":
      content.innerHTML = para_content[0];
      break;
    case "changeX2":
      content.innerHTML = para_content[1];
      break;
    case "changeY3":
      content.innerHTML = para_content[2];
      break;
    case "changeX4":
      content.innerHTML = para_content[3];
      break;
    case "changeY5":
      content.innerHTML = para_content[4];
      break;
    case "changeY6":
      content.innerHTML = para_content[5];
      break;
    default:
      content.innerHTML = para_content[0];
      break;
  }
};
