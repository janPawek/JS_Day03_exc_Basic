let martin = [76,64,81,57,94];

for(let val of martin){
    total = 0;
    total = total + val;
    // shorter way: total += val;
}
let avg = total / martin.length;



console.log(avg); 


if(avg < 60){
    console.log("F");
}else if (avg < 70){}