require('colors');
const { requestName} = require('./helpers/getNombre');
const { viewMenu, viewName, gameModes, viewQuestions, viewOptions } = require('./helpers/inquirer');


const main = async () => {

    let option = '';
    let nombre = '';
    let modo = '';
    let questions = [];
    let number = '';
    let count = 0;
    
    do {

        option = await viewMenu();
         
        switch (option) {

            case '1': nombre = await requestName();
                      await viewName(nombre);
                      modo = await gameModes();
                      questions = await viewQuestions(modo);
                     
                      do {
                        
                        count++;
                        number = await viewOptions(questions , count);
                          
                      } while (count != 4);

                    

                      break;
        
            default:
                break;
        }

        await viewName(nombre);
        
    } while (option !== '0');

    


}

main();