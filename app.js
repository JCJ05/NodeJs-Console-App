require('colors');
const { requestName} = require('./helpers/getNombre');
const { viewMenu, viewName } = require('./helpers/inquirer');


const main = async () => {

    let option = '';
    let nombre = '';
    
    do {

        option = await viewMenu();
         
        switch (option) {

            case '1': nombre = await requestName();
                      await viewName(nombre);    
                      break;
        
            default:
                break;
        }
        
    } while (option !== '0');

    


}

main();