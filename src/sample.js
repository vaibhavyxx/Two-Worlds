//Not eveything should be a module in js -> helps you break down your code into separate files

function setup() {
  let cnv = createCanvas(400, 400);
  console.log("hello there!");
  let pos = cnv.position(50, 100);

  //save position as a variable - two acceptable ways of calling x
  console.log('x axis: ' + pos['x']);
  console.log('x axis: '+ pos.x);
}
function draw() {
  background(255);
}

