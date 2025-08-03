const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/eevee.jpg") {
    myImage.setAttribute("src", "images/eevee-2.jpg");
  } else {
    myImage.setAttribute("src", "images/eevee.jpg");
  }
});

let userButton = document.querySelector("button");
let welcomeMessage = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      welcomeMessage.textContent = `Mozilla is cool, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    welcomeMessage.textContent = `Welcome to Eevee's Website, ${storedName}`;
  }

  userButton.addEventListener("click", () => {
    setUserName();
  });