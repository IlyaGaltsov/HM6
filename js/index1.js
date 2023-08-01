let start = 20;
let end = 30;
let step = 0.5;
let str = '';

for(let i = start; i <= end; i += step){
    if(i === end){
        str += `${i}.`
    }else{
        str += `${i},`
    };
};

console.log(str)