
const requestName = () => {
   
    return new Promise(resolve => {

        const readline = require('readline').createInterface({
       
            input: process.stdin,
            output: process.stdout
    
        });

        readline.question('Ingrese su nombre para continuar: ' , (answer) => {
    
            readline.close();
            resolve(answer);
    
        });

    });

}

module.exports = {

    requestName

}