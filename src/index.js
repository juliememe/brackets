module.exports = function check(str, bracketsConfig) {
 while(str){
     let counter=0;
for (const j of bracketsConfig) {
    
    let newConfig = j[0] + j[1];

if(str.includes(newConfig)){
    str= str.replace(newConfig, '');
    counter++;
}
}
if(counter == 0)
    break;

 }
return str == '' ? true : false;

}
