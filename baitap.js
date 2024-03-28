// Sử dụng vòng lặp for
result='Sinh viên UDU';
for(i=1;i<=10;i++){
    console.log(result)
}
// Sử dụng vòng lặp while
result='Sinh viên UDU';
i=1;
while(i<=10){
    console.log(result);
    i++;
}
// Sử dụng vòng lặp do while
result='Sinh viên UDU';
i=1;
do{
    console.log(result);
    i++;
}while(i<=10);
// Sử dụng for tính tổng
var sum=0;
for(i=1;i<=10;i++){
    sum+=i;
}
console.log(sum);
// Sử dụng while tính tổng
var sum=0;
i=1;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);
// Sử dụng do while tính tổng
var sum=0;
i=1;
do{
    sum+=i;
    i++;}while(i<=10);
console.log(sum);
// sủ dụng for tính tổng số chẵn
var sum=0;
for(i=1;i<=10;i++){
    if(i%2==0){
        sum+=i;
    }
}
console.log(sum);
// sủ dụng while tính tổng số chẵn
var sum=0;
i=1;
while(i<=10){
    if(i%2==0){
        sum+=i;
    }
    i++;
}
console.log(sum);
// sủ dụng do while tính tổng số chẵn
var sum=0;
i=1;
do{
    if(i%2==0){
        sum+=i;
    }
    i++;}
while(i<=10);
console.log(sum);
// tính tổng số nguyên dường từ 1 đến n đến khi tổng >=100 thì dừng lại
var sum=0;
for(i=1;i<=100;i++){
    sum+=i;
    if(sum>=100){
        break;
    }
}