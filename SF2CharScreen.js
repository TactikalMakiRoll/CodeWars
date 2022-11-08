function streetFighterSelection(fighters, position, moves){
    let result = [];

    for(let i=0;i<moves.length;i++){
        switch(moves[i]){
            case 'right': {
                position[1]+=1;
                if(position[1]>fighters[position[0]].length-1){
                    position[1] = 0;
                }
                break;
            }
            case 'left': {
                position[1]-=1;
                if(position[1]<0){
                    position[1] = fighters[position[0]].length-1;
                }
                break;
            }
            case 'up':{
                if(position[0]-1>=0){
                    position[0]-=1;
                }
                break;
            }
            case 'down':{
                if(position[0]+1<fighters.length){
                    position[0]+=1;
                }
                break;
            }
        }
        result.push(fighters[position[0]][position[1]]);
        
    }
    return result;
}

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
initial_position = [0,0];
moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right'];


console.log(streetFighterSelection(fighters,initial_position,moves),['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']);

// A much better solution from Solutions section
// const streetFighterSelection = (fighters, [i, j], moves) => {
//     return moves.map(move => {
//       if (move === 'up')    i = Math.max(i - 1, 0);
//       if (move === 'down')  i = Math.min(i + 1, 1);
//       if (move === 'left')  j = (j - 1 + 6) % 6;
//       if (move === 'right') j = (j + 1 + 6) % 6;
      
//       return fighters[i][j];
//     });
//   };