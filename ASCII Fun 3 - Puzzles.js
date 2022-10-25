function puzzleTiles(width, height){
	//have fun ^.^
    let result = "";
    result+= "   " + "_( )__ ".repeat(width);
    result = result.slice(0, result.length-1);
    result += "\n";
    for (let i = 0; i < height; i++) {
        if(i%2===0){
            result+= " _|"+"     _|".repeat(width) + "\n";
            result+= "(_"+"   _ (_".repeat(width) + "\n";
            result+=" |" + "__( )_|".repeat(width) + "\n";
        }
        else{
            result+= " |_"+"     |_".repeat(width) + "\n"; // |_     |_     |_     |_
            result+= "  _)"+" _   _)".repeat(width) + "\n"; //  _) _   _) _   _) _   _)
            result+=" |" + "__( )_|".repeat(width) + "\n";//

        }
    }
    result = result.slice(0, result.length-1);
    return result;
}

console.log(puzzleTiles(4,3));