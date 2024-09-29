function clog(any){
    console.log(any);
}
function cerr(eny){
    console.error(eny);
}
function sqr(num) {
    if (typeof num !== 'number') {
        cerr('Input must be a number');
        return null;
    }
    return Math.sqrt(num);
}
function cwarn(txt){
    console.warn(txt);
}
function cinfo(txt){
    console.info(txt);
}
function cbug(txt){
    console.debug(txt);
}
function ctrace(txt){
    console.trace(txt);
}
function ctbl(arr){
    console.table(arr);
}
function cclr(){
    console.clear();
}
function hlf(numb){
    return numb/2;
}
function binarytochar(binary) {
    return binary.split(' ')
        .map(b => String.fromCharCode(parseInt(b, 2)))
        .join('');
}

function raise(base,exponent){
     return Math.pow(base,exponent);
}
function mult(a,b){
     return a*b;
}
function tpm(a,b,c){
    return a + b + c;
}
function rpm(a,b,c,d){
    return a + b + c + d;
}
function cpm(radius){
    return 2*Math.PI*radius;
}
function scpm(radius){
    return Math.PI*radius**2;
}
function table(num){
    return [num*1,num*2,num*3,num*4,num*5,num*6,num*7,num*8,num*9,num*10,];
}
module.exports = {clog,cerr,sqr,cwarn,cinfo,cbug,ctrace,ctbl,cclr,hlf,binarytochar,raise,rpm,cpm,scpm,table,tpm,mult}