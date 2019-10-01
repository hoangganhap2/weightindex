let weight=parseFloat(prompt("nhap can nang"));
let height=parseFloat(prompt("nhap chieu cao"));
bmi = weight/(height*height);
if(bmi<18){
    document.write("Underweight");
}else if(bmi<25){
    document.write("Normal");
}else if(bmi<30){
    document.write("Overweight");
}else {
    document.write("Obese");
}