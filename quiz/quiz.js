let windowX = 200;
let windowY = 300;
let smlOffsetX = 20;
let smlOffsetY = 100;
let bigRect, smlRect;

let seq = 0;
let isButtonThere = false;
let mouseIsPressed = false;
let Buttons,
  Buttons2,
  Buttons3,
  Buttons4,
  Buttons5,
  Buttons6,
  Buttons7,
  Buttons8,
  Buttons9,
  Buttons10,
  Buttons11,
  Buttons12,
  Buttons13,
  Buttons14,
  Buttons15,
  Buttons16,
  Buttons17,
  Buttons18;

function setup() {

  let canvas = createCanvas(600, 500);
  canvas.parent('p5container');
  
  background(50);
  Buttons = new Button(100, 150, 150, 150, "hehehe");
  Buttons2 = new Button(150, 350, 150, 150, "1. George Washington");
  Buttons3 = new Button(150, 375, 150, 150, "2. FedEx");
  Buttons4 = new Button(150, 400, 150, 150, "3. 2 minutes");
  Buttons5 = new Button(150, 425, 150, 150, "4. Bijective");

  Buttons6 = new Button(150, 350, 150, 150, "1. Metal");
  Buttons7 = new Button(150, 375, 150, 150, "2. 23.36664281909");
  Buttons8 = new Button(150, 400, 150, 150, "3. One unit tall");
  Buttons9 = new Button(150, 425, 150, 150, "4. Aubergine");

  Buttons10 = new Button(150, 350, 150, 150, "1. You slayed that and ate");
  Buttons11 = new Button(150, 375, 150, 150, "2. Failing is your fate");
  Buttons12 = new Button(150, 400, 150, 150, "3. Baby Shark døo doødødøødo");
  Buttons13 = new Button(150, 425, 150, 150, "4. Nine twelve ten zero seven");

  Buttons14 = new Button(150, 350, 150, 150, "293. ¶¢s˚∆√");
  Buttons15 = new Button(150, 375, 150, 150, "96. ˆˆˆˆˆˆˆ");
  Buttons16 = new Button(150, 400, 150, 150, "8181. 오빠사랑해ㅐㅐㅐㅐ");
  Buttons17 = new Button(150, 425, 150, 150, "37. 5");

  bigRect = new myRect(windowX, windowY, 250, 150);
  bigRect.updateText("GO BACK?");

  smlRect = new myRect(windowX + smlOffsetX, windowY + smlOffsetY, 50, 30);
  smlRect.updateText("YES");
}

function draw() {
  background(50);

  // draw scenes
  // we can use switch and cases to replace and organize the if statements.
  // it seems much organized, right? you don't have to worry about too many curly brakets.
  switch (seq) {
    case 0:
      drawIntro();
      break;
    case 1:
      drawScene1();
      break;
    case 2:
      drawScene2();
      break;
    case 3:
      drawScene3();
      break;
    case 4:
      drawScene4();
      break;
    case 5:
      drawScene5();
      break;
    case 6:
     Jumpy();
      break;
    default:
    //drawEnding();
    // break;
  }
  textFont("Courier New");
  textSize(20);
  // text("Question  " + seq, 10, 20);
  // text("Click to move to next phase.", 10, 50);
}

function keyPressed() {
  if (keyCode == ENTER) {
    proceedSequence();
  }

  let b = random(0, 0.1);
  if (b == 0.05) {
  }
}

function proceedSequence() {
  seq++;
  if (seq == 7) {
    // if sequence reached the last phase,
    // we reset the sequence.
    seq = 0;
  }
}

function drawIntro() {
  background(0);
  fill(255);
  mouseClicked();

  background(0);

  Buttons.display();

  push();
  fill(255);
  rectMode(CENTER);
  rect(300, 350, 200, 50, 5);
  pop();

  push();
  fill(255, 0, 0);
  textSize(30);
  textAlign(CENTER);
  textFont("Courier New");
  text("Quiz: worth 90% of", 300, 250);
  text("your grade!!!!", 300, 300);
  fill(0);
  text("BEGIN QUIZ", 300, 360);
  pop();
}

function drawScene1() {
  background(0, 0, 0);
  fill(0, 255, 255);

  // isButtonThere = true;
  Buttons.updateShow(false);
  Buttons.disappear();

  //isButtonThere = false;
  Buttons2.display();
  Buttons3.display();
  Buttons4.display();
  Buttons5.display();

  push();
  fill(250);
  rectMode(CENTER);
  rect(300, 250, 500, 400, 5);
pop();
  //go back button
  push();
  stroke(100);
  strokeWeight(2);
  push();
  fill(200);
  rect(50, 20, 70, 20, 6);
  pop();
  fill(20);
  textSize(12);
  text("go back", 56, 33);
  pop();

  push();
  //question text
  fill(0);
  textSize(18);
  textAlign(CENTER);

  textFont("Courier New");
  push();
  textSize(25);
  text("Question 1:", 300, 80);
  pop();
  text("if Jupiter is a table and water is", 300, 120);
  text("flat, how colorful is air?", 300, 140);
  pop();
}

function drawScene2() {
  background(0, 0, 0);
push();
  fill(250);
  rectMode(CENTER);
  rect(300, 250, 500, 400, 5);
  pop();

  Buttons2.updateShow(false);
  Buttons2.disappear();
  Buttons3.updateShow(false);
  Buttons3.disappear();
  Buttons4.updateShow(false);
  Buttons4.disappear();
  Buttons5.updateShow(false);
  Buttons5.disappear();

  Buttons6.display();
  Buttons7.display();
  Buttons8.display();
  Buttons9.display();

  //go back button
  push();
  stroke(100);
  strokeWeight(2);
  push();
  fill(200);
  rect(50, 20, 70, 20, 6);
  pop();
  fill(20);
  textSize(12);
  text("go back", 56, 33);
  pop();

push();
  //question text
  fill(0);
  textSize(18);
  textAlign(CENTER);
  textFont("Courier New");
  push();
  textSize(25);
  text("Question 2:", 300, 80);
  pop();
  text("Given that Noah gave you a glass of", 300, 120);
  text("bookshelf juice, how old is Jungkook if", 300, 140);
  text("Robert is your mom?", 300, 160);
  pop();
}

function drawScene3() {
  background(0);
  push();
  fill(250);
  rectMode(CENTER);
  rect(300, 250, 500, 400, 5);
  pop();

  Buttons6.updateShow(false);
  Buttons6.disappear();
  Buttons7.updateShow(false);
  Buttons7.disappear();
  Buttons8.updateShow(false);
  Buttons8.disappear();
  Buttons9.updateShow(false);
  Buttons9.disappear();

  Buttons10.display();
  Buttons11.display();
  Buttons12.display();
  Buttons13.display();

  //go back button
  push();
  stroke(100);
  strokeWeight(2);
  push();
  fill(200);
  rect(50, 20, 70, 20, 6);
  pop();
  fill(20);
  textSize(12);
  text("go back", 56, 33);
  pop();

  push();
  //question text
  fill(0);
  textSize(18);
  textAlign(CENTER);
  textFont("Courier New");
  push();
  textSize(25);
  text("Question 3:", 300, 80);
  pop();
  text("Boba and chair, chair has flare.", 300, 120);
  text("Test is rest, the rest is tests.", 300, 140);
  text("One two three four eight, ________?", 300, 160);
  pop();
}

function drawScene4() {
  background(0);
  push();
  fill(250);
  rectMode(CENTER);
  rect(300, 250, 500, 400, 5);
  pop();

  Buttons10.updateShow(false);
  Buttons10.disappear();
  Buttons11.updateShow(false);
  Buttons11.disappear();
  Buttons12.updateShow(false);
  Buttons12.disappear();
  Buttons13.updateShow(false);
  Buttons13.disappear();

  Buttons14.display();
  Buttons15.display();
  Buttons16.display();
  Buttons17.display();

  //go back button
  push();
  stroke(100);
  strokeWeight(2);
  push();
  fill(200);
  rect(50, 20, 70, 20, 6);
  pop();
  fill(20);
  textSize(12);
  text("go back", 56, 33);
  pop();

  push();
  //question text
  fill(0);
  textSize(18);
  textAlign(CENTER);
  textFont("Courier New");
  push();
  textSize(25);
  text("Bonus:", 300, 80);
  pop();
  text("nuwrbw0oiwnd. Woif2?aosirh woierh9e.", 300, 120);
  text("jo∑´ƒˆø∫˙w ifwiw ¬…º¡™£•÷≥-≤,,???", 300, 140);
  //text("One two three four eight, ________?", 300, 160)
  pop();
}

function drawScene5() {
  background(0);
  push();
  fill(250);
  rectMode(CENTER);
  rect(300, 250, 500, 400, 5);
  pop();

  //go back button
  push();
  stroke(100);
  strokeWeight(2);
  push();
  fill(200);
  rect(50, 20, 70, 20, 6);
  pop();
  fill(20);
  textSize(12);
  text("go back", 56, 33);
  pop();
  
  push()
  fill(0);
  textSize(18);
  textAlign(CENTER);
  textFont("Courier New");
  push();
  textSize(25);
  text("GRADES", 300, 80);
  pop();
  text("ngl not the best??", 300, 120);
  push();
  textSize(30);
  text("Q 1: A-", 300, 250);
  text("Q 2: C+", 300, 280);
  text("Q 3: G+", 300, 310);
  text("Q 4: E", 300, 340);
  pop();

  pop();

  Buttons14.updateShow(false);
  Buttons14.disappear();
  Buttons15.updateShow(false);
  Buttons15.disappear();
  Buttons16.updateShow(false);
  Buttons16.disappear();
  Buttons17.updateShow(false);
  Buttons17.disappear();

}

function mouseClicked() {
  //test if it works for now, this is the running button scene---how to make separate scene
  if(mouseX >= 50 && mouseX<= 90 && mouseY >=10 && mouseY <=40)
seq = 6
}

function Jumpy() {
  Update();
  background(0);
  bigRect.updateColor(color("orange"));
  bigRect.display();
  smlRect.updateColor(color("blue"));
  smlRect.display();
}

function Update(){
  
  Buttons2.updateShow(false);
  Buttons2.disappear();
  Buttons3.updateShow(false);
  Buttons3.disappear();
  Buttons4.updateShow(false);
  Buttons4.disappear();
  Buttons5.updateShow(false);
  Buttons5.disappear();
  
  Buttons6.updateShow(false);
  Buttons6.disappear();
  Buttons7.updateShow(false);
  Buttons7.disappear();
  Buttons8.updateShow(false);
  Buttons8.disappear();
  Buttons9.updateShow(false);
  Buttons9.disappear();
  
  Buttons10.updateShow(false);
  Buttons10.disappear();
  Buttons11.updateShow(false);
  Buttons11.disappear();
  Buttons12.updateShow(false);
  Buttons12.disappear();
  Buttons13.updateShow(false);
  Buttons13.disappear();
  
  Buttons14.updateShow(false);
  Buttons14.disappear();
  Buttons15.updateShow(false);
  Buttons15.disappear();
  Buttons16.updateShow(false);
  Buttons16.disappear();
  Buttons17.updateShow(false);
  Buttons17.disappear();
  if (
      mouseX > smlRect.x &&
      mouseY > smlRect.y &&
      mouseX < smlRect.x + smlRect.w &&
      mouseY < smlRect.y + smlRect.h
    ) {
      bigRect.randomPos(300, 300);
      smlRect.updatePos(bigRect.x + smlOffsetX, bigRect.y + smlOffsetY);
    }
}
