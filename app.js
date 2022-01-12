require('colors');
const { requestName} = require('./helpers/getNombre');
const { viewMenu, viewName, gameModes, viewQuestions, viewOptions, viewResult } = require('./helpers/inquirer');


const main = async () => {

    let option = '';
    let nombre = '';
    let modo = '';
    let questions = [];
    let number = '';
    let count = 0;
    let resp = 0;
    
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

                        if(number){
                           
                            resp++;
                          
                        }
                          
                      } while (count != 4);

                      await viewResult(resp);
                      count = 0;
                      resp = 0;
                      break;
        
            default:
                break;
        }

        
    } while (option !== '0');

    


}

main();