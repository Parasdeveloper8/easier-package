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
    // Ensure binary is a string
    if (typeof binary !== 'string') {
        binary = String(binary);
    }

    // Now you can safely use .split()
    const binaryArray = binary.split(' ');
    
    // Process the binaryArray to get characters
    let result = '';
    binaryArray.forEach(bin => {
        result += String.fromCharCode(parseInt(bin, 2));
    });
    
    return result;
}
function stringToBinary(str) {
    let binaryString = '';

    for (let char of str) {
        // Get ASCII value of character and convert to binary
        const binary = char.charCodeAt(0).toString(2);
        // Pad with leading zeros to make it 8 bits (if necessary)
        const paddedBinary = binary.padStart(8, '0');
        // Append to the result
        binaryString += paddedBinary + ' '; // Adding space for separation (optional)
    }

    return binaryString.trim(); // Remove trailing space
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
function docid(vari) {
    if (typeof vari === 'number') {
        console.error("Argument should not be a number");
        return null; // Return null to indicate an invalid argument
    }
    return document.getElementById(vari);
}
function doclass(vari) {
    if (typeof vari === 'number') {
        console.error("Argument should not be a number");
        return null; // Return null to indicate an invalid argument
    }
    return document.getElementsByClassName(vari);
}

module.exports = {clog,cerr,sqr,cwarn,cinfo,cbug,ctrace,ctbl,cclr,hlf,binarytochar,raise,rpm,cpm,scpm,table,tpm,mult,docid,doclass}