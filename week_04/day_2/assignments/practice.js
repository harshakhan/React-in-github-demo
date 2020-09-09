

function countLetters(str){
    let temparr=str.split('');
    let letters=[];
    let count =1;

    for (let i=0;i<temparr.length;i++){
        if(temparr[i]===temparr[i+1]){
            count++;

        }else{
            let value = `${temparr[i]}${count}`;
            letters =[...letters,value];
            count =1;
        }
    }
    return letters.join('');
}
// console.log(letters)
console.log(countLetters('aaaabbbbbbbcc'));