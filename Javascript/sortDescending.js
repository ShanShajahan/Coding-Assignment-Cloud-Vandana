let arr =[5,7,2,4,1];
let n=arr.length-1
for(let i=0;i<n;i++){
    for(let j=0;j<n-i;j++){
        if(arr[j]<arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr)