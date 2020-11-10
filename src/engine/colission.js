class Colission{
    // https://stackoverflow.com/questions/35784242/how-to-make-collision-in-html5-canvas
    //i know the math but sucks checking and writing this @todo understand for real
    checkCollision_Rec(x1,w1,y1,h1,x2,w2,y2,h2){
        //x1, x2           = Left
        //x1 + w1, x2 + w2 = Right
        //y1, y2           = Bottom
        //y1 - h1, y2 - h2 = Top
        const colideCalc = (y1 < y2) || ((y1 - h1) > y2) || (x1 > (x2 + w2)) || ((x1 + w1) < x2);
        
        if(colideCalc){
            return false;
        }
        else{
            return true;
        }
    }
}