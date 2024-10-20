export function clog(any){
    console.log(any);
}
export function cerr(eny){
    console.error(eny);
}
export function sqr(num) {
    if (typeof num !== 'number') {
        cerr('Input must be a number');
        return null;
    }
    return Math.sqrt(num);
}
export function cwarn(txt){
    console.warn(txt);
}
export function cinfo(txt){
    console.info(txt);
}
export function cbug(txt){
    console.debug(txt);
}
export function ctrace(txt){
    console.trace(txt);
}
export function ctbl(arr){
    console.table(arr);
}
export function cclr(){
    console.clear();
}
export function hlf(numb){
    return numb/2;
}
export function binarytochar(binary) {
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
export function stringToBinary(str) {
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
export function raise(base,exponent){
     return Math.pow(base,exponent);
}
export function mult(a,b){
     return a*b;
}
export function tpm(a,b,c){
    return a + b + c;
}
export function rpm(a,b,c,d){
    return a + b + c + d;
}
export function cpm(radius){
    return 2*Math.PI*radius;
}
export function scpm(radius){
    return Math.PI*radius**2;
}
export function table(num){
    return [num*1,num*2,num*3,num*4,num*5,num*6,num*7,num*8,num*9,num*10,];
}
export function docid(vari) {
    if (typeof vari === 'number') {
        console.error("Argument should not be a number");
        return null; // Return null to indicate an invalid argument
    }
    return document.getElementById(vari);
}
export function doclass(vari) {
    if (typeof vari === 'number') {
        console.error("Argument should not be a number");
        return null; // Return null to indicate an invalid argument
    }
    return document.getElementsByClassName(vari);
}
export function statement (condition,ifoutput,elseoutput){
       if(condition){
           console.log(ifoutput);
       }
       else{
           console.log(elseoutput);
       }
}
export function cuboidTsa(length, breadth, height) {
    return 2 * (length * breadth + breadth * height + height * length);
}

export function cuboidLsa(length, breadth, height) {
    return 2 * (length + breadth) * height;
}

export function cuboidVolume(length, breadth, height) {
    return length * breadth * height;
}

export function cuboidDiagonal(length, breadth, height) {
    return Math.sqrt(length ** 2 + breadth ** 2 + height ** 2);
}

export const jsonfy = (obj)=> JSON.stringify(obj);

export const listenevnt =(event,dom,cb) => dom.addEventListener(event,cb);

