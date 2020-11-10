//Logo Screen
class LogoOpen
{
    frameCounter = 0;

    frame(canvas, keys, isFirstFrame){  

        this.frameCounter++;
        
        if(this.frameCounter < 500){
            canvas.drawText('Coelhinho Studios apresenta', 'green', 1);
        }else if(this.frameCounter < 900){
            canvas.drawText('Death Intern', 'green', 2);
        }else{
            return true;
        }
    
        return false;
    }
}