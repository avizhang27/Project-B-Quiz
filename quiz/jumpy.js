
class myRect{
  constructor(x, y, w ,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.col = color(255);
    this.text = ' ';
  }
  
  randomPos(x,y){
    this.x  = random(0,x);
    this.y = random (0,y);
  }
  
  updatePos(x,y){
    this.x  = x;
    this.y = y;
  }
  
  updateColor(col){
    this.col = col;
  }
  
  updateText(txt){
    this.text = txt;
  }
  
  display(){
    fill(this.col);
    rect(this.x,this.y,this.w,this.h);
    fill(255);
    text(this.text, this.x + 10, this.y + 20);
  }
}