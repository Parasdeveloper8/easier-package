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
module.exports = {clog,cerr,sqr}