
class Button {
  constructor(x, y, w, h, txt) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.col = color(255);
    this.text = txt;
    this.btn = createButton(this.text);
    this.bShow = true;
  }

  updatePos(x, y) {
    this.x = x;
    this.y = y;
  }

  updateText(txt) {
    this.text = txt;
  }

  display() {
    // isButtonThere = true;
    this.btn.position(this.x, this.y);
    this.btn.style('width',this.w);
    
    this.btn.mousePressed(() => {
      seq++;
    });
  }

  updateShow(bShow){
    this.bShow= bShow;
  }
  
  disappear() {
    if (!this.bShow) {
      this.btn.hide();
    }
    // fill(0, 0, 0, 0)
    // rect(10, 10, 10, 10)
  }
  check() {
    if (isButtonThere == true) {
      isButtonThere = false;
    }
  }
}