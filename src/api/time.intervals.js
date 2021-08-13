export const timeIntervalsArr = () => {
    let intervalArr = []
    for(let x=8; x<16; x++){
        for(let y = 0; y <= 60; y = y+15){
        let formatedX = x/10 < 1 ? `0${x}` : x;
        let formatedY = y;
        if(y === 0) formatedY = `0${y}`;
        if(y === 60) {
        formatedX = x+1;
        formatedX = formatedX/10 < 1 ? `0${formatedX}` : formatedX;
        formatedY = `00`;
        }
            intervalArr.push(`${formatedX}:${formatedY}`)
        }
    }
   return [...new Set(intervalArr)]; 
}