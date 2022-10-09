class TicTacToe{
  constructor(){
    this.field = [['o',0,'o'],
                  ['x','o',0],
                  ['o',0,'x']];
    this.symbol = 'x';
  }

  print(){
    let result = "";
    for(let i=0;i<this.field.length;i++){
      result += "[";
      for(let j=0;j<this.field[i].length;j++){
        result += this.field[i][j] + ',';
      }
      result = result.slice(0, result.length-1);
      result += "]\n";
    }
    console.log(result);
  }

  place(x_pos,y_pos){
    if(x_pos>this.field[0].length || x_pos<0){
      throw new ReferenceError("wrong x pos");
    }
    if(y_pos>this.length || y_pos<0){
      throw new ReferenceError("wrong y pos");
    }
    if(this.field[y_pos][x_pos] === 'o' || this.field[y_pos][x_pos] === 'x'){
      throw new ReferenceError("place is already taken")
    }

    this.field[y_pos][x_pos] = this.symbol;
    this.print();

    if(this.symbol === 'x'){
      this.symbol = 'o'
    }
    else if(this.symbol === 'o'){
      this.symbol = 'x';
    }
  }

  checkWin(){
    for(let i=0;i<this.field.length;i++){
      if(this.field[i].every(value=>value==='x')){
        return "Player 1 has won, the game is over";
      }
      if(this.field[i].every(value=>value==='o')){
        return "Player 2 has won, the game is over";
      }
    }

    for(let j=0;j<this.field[0].length;j++){
      let xwin = true;
      let owin = true;
      for(let i=0;i<this.field.length;i++){
        if(this.field[i][j] !== 'x'){
          xwin = false;
        }
        if(this.field[i][j] !== 'o'){
          owin = false;
        }
      }
      if(xwin===true){
        return "Player 1 has won, the game is over";
      }
     if(owin === true){
        return "Player 2 has won, the game is over";
      }
    }

    let xwin = true;
    let owin = true;
    for(let i=0;i<this.field.length;i++){
      if(this.field[i][i] !== 'x'){
        xwin = false;
      }
      if(this.field[i][i] !== 'o'){
        owin = false;
      }
    }
    if(xwin===true){
      return "Player 1 has won, the game is over";
    }
    if(owin === true){
      return "Player 2 has won, the game is over";
    }

    xwin = true;
    owin = true;
    for(let j=0,i=2;j<this.field[0].length;j++,i--){
      if(this.field[j][i] !== 'x'){
        xwin = false;
      }
      if(this.field[j][i] !== 'o'){
        owin = false;
      }
    }
    if(xwin===true){
      return "Player 1 has won, the game is over";
    }
    if(owin === true){
      return "Player 2 has won, the game is over";
    }
    return false;
  }
}
const readline = require('readline-sync');

let game = new TicTacToe();
game.print();

while(game.checkWin() === false){
  let x = readline.question("enter x ");
  let y = readline.question("enter y ");
  game.place(x,y);

}
console.log(game.checkWin());
