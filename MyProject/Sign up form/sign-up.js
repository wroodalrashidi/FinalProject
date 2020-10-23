// Form
function validateForm() {
    var name = document.forms["myForm"]["fname"].value;
    var last = document.forms["myForm"]["lname"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;

   
   
    if (name == "") {
      alert("First Name must be filled out");
      return false;
    
    } else if (last == "") {
        alert("Last Name must be filled out");
        return false;
    
    } else if (email == "") {
        alert("Email must be filled out");
        return false;
    
    } else if (password == "") {
        alert("Password must be filled out");
        return false;
    
    } else{
        alert("Error");  
    }

}
// Password
function password() {
    var x = document.getElementById("pass-input");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

// background

// Some random colors
const colors = ["d00000", "#00b4d8", "#6930c3", "#ffd166", "#ff006e"];

const numBalls = 300;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});