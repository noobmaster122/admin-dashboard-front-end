export const timeIntervalsArr = () => {
    let intervalArr = []
    for(let x=8; x<16; x++){
        for(let y = 0; y <= 45; y = y+30){
            let formatedX = x/10 < 1 ? `0${x}` : x;
            intervalArr.push(`${formatedX}:${y/10 < 1 ? `0${y}` : y}-${formatedX}:${y+15}`)
        }
    }
   return intervalArr;
}