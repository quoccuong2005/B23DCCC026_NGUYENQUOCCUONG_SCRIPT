a=[1,2,3,4,5,6,7,9,8,10,11,12,13,14,15,16,17,18,19,20]
function songuyenlonnhat(a){
    let max=a[0]
    for(let i=1;i<a.length;i++){
        if(a[i]>max){
            max=a[i]
        }
    }
    return max
}
console.log(songuyenlonnhat(a))
function sochinhphuong(a){
    let arr=[]
    for(let i=0;i<a.length;i++){
        if(Math.sqrt(a[i])%1===0){
            arr.push(a[i])
        }
    }
    return arr
}
console.log(sochinhphuong(a))
function solonhontrungbinhcong(a){
    let sum=0
    for(let i=0;i<a.length;i++){
        sum+=a[i]
    }
    let avg=sum/a.length
    let arr=[]
    for(let i=0;i<a.length;i++){
        if(a[i]>avg){
            arr.push(a[i])
        }
    }
    return arr
}
console.log(solonhontrungbinhcong(a))
function trungbinhcongcasokhongam(a){
    let sum=0
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            sum+=a[i]
        }
    }
    return sum/a.length
}
console.log(trungbinhcongcasokhongam(a))

