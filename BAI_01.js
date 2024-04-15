a=[3,2,4,5,6,1,7,4,3,2,1]
function sort(a){
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]>a[j]){
                let temp=a[i]
                a[i]=a[j]
                a[j]=temp
                }
            }
        }
        return a
    }
    console.log(sort(a))
function loai(a){
    let arr=[]
    for(let i=0;i<a.length;i++){
        if(arr.indexOf(a[i])===-1){
            arr.push(a[i])
        }
    }
    return arr
}
console.log(loai(a))