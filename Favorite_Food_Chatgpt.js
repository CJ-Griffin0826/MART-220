function setup() {
    createCanvas(400, 400);
    noLoop(); // We don't need to continuously redraw
  }
  
  function draw() {
    background(220);
  
    // Draw the pizza slice (crust and base)
    fill(255, 204, 102); // Light yellowish base for the pizza
    triangle(200, 50, 100, 350, 300, 350); // Pizza slice shape
  
    // Draw the crust
    fill(210, 140, 80); // Golden-brown crust color
    arc(200, 50, 140, 80, PI, TWO_PI); // Crust on top
  
    // Add some tomato sauce (just below the crust)
    fill(255, 80, 80); // Red for tomato sauce
    triangle(200, 70, 120, 340, 280, 340); // Slightly smaller triangle
  
    // Add cheese (smaller triangle for melted cheese look)
    fill(255, 223, 89); // Yellowish cheese color
    triangle(200, 80, 130, 330, 270, 330);
  
    // Add toppings (pepperoni circles)
    fill(200, 50, 50); // Red for pepperoni
    ellipse(160, 200, 30); // Pepperoni 1
    ellipse(240, 230, 30); // Pepperoni 2
    ellipse(200, 280, 30); // Pepperoni 3
  }
  
  