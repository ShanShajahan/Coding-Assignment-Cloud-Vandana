const string1=prompt();
let string2="";
let startPoint=0;
const length =string1.length;
for(let i=0;i<=length;i++){
    if(string1.charAt(i)===" " || i===length ){
        for(let j=i-1;j>=startPoint;j--){
            string2 += string1.charAt(j);
        }
        startPoint=i+1;
        string2+=" "
    }
    
}
console.log(string2);