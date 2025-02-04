let pizzaX = 300;
let pizzaY = 300;
let pizzaSize = 200;
let toppings = [];

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(220);
  
  // Draw pizza
  fill(255, 204, 0); // Yellow for crust
  ellipse(pizzaX, pizzaY, pizzaSize, pizzaSize);
  
  // Draw sauce (red)
  fill(255, 0, 0, 150); // Semi-transparent red
  ellipse(pizzaX, pizzaY, pizzaSize - 40, pizzaSize - 40);
  
  // Draw cheese (light yellow)
  fill(255, 255, 102);
  ellipse(pizzaX, pizzaY, pizzaSize - 60, pizzaSize - 60);
  
  // Draw toppings
  for (let topping of toppings) {
    fill(topping.color);
    ellipse(topping.x, topping.y, 20, 20);
  }
  
  // Check for key interactions
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      pizzaX -= 5;
    } else if (keyCode === RIGHT_ARROW) {
      pizzaX += 5;
    } else if (keyCode === UP_ARROW) {
      pizzaY -= 5;
    } else if (keyCode === DOWN_ARROW) {
      pizzaY += 5;
    }
  }
}

// Add toppings when mouse is clicked
function mousePressed() {
  let toppingColor = color(random(255), random(255), random(255));
  toppings.push({ x: mouseX, y: mouseY, color: toppingColor });
}

  
  