function superStreetFighterSelection(fighters, position, moves){
    let result = [];
    let posX = position[1];
    let posY = position[0];

    for(let i=0;i<moves.length;i++){
        switch(moves[i]){
            case 'right': {
                posX = (posX + 1 + fighters[0].length) % fighters[0].length;
                while(fighters[posY][posX]===''){
                    posX =(posX + 1 + fighters[0].length) % fighters[0].length;
                }
                break;
            }
            case 'left': {
                posX = (posX - 1 + fighters[0].length) % fighters[0].length;
                while(fighters[posY][posX]===''){
                   posX = (posX - 1 + fighters[0].length) % fighters[0].length;
                }
                break;
            }
            case 'up':{
                if(posY-1>=0 && fighters[posY-1][posX]!==''){
                    posY-=1;
                }
                break;
            }
            case 'down':{
                if(posY+1<fighters.length && fighters[posY+1][posX]!==''){
                    posY+=1;
                }
                break;
            }
        }
        result.push(fighters[posY][posX]);
        
    }
    return result;
}

const fighters = [
	[       "",    "Ryu",  "E.Honda",  "Blanka",   "Guile", ""       ],
	[ "Balrog",    "Ken",  "Chun Li", "Zangief", "Dhalsim", "Sagat"  ],
	[   "Vega", "T.Hawk", "Fei Long",  "Deejay",   "Cammy", "M.Bison"]
];
const position = [1,3];

const moves = ["left","left","left","left","left","left","left","left"];

console.log(superStreetFighterSelection(fighters,position,moves));
