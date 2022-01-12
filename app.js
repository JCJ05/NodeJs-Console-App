require('colors');
const { listParticipants } = require('./helpers/crud');
const { requestName} = require('./helpers/getNombre');
const { leerDB, guardarDB } = require('./helpers/guardarParticipante');
const { viewMenu, viewName, gameModes, viewQuestions, viewOptions, viewResult, viewList } = require('./helpers/inquirer');
const Participante = require('./models/participante');


const main = async () => {

    let option = '';
    let nombre = '';
    let modo = '';
    let questions = [];
    let number = '';
    let count = 0;
    let resp = 0;
    let participantsDb = [];

      participantsDb = leerDB();

    if(!participantsDb){
     
       participantsDb = [];

    }
    
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
                      let participante = new Participante(nombre , 'Deportes' , resp);
                      participantsDb.push(participante)
                      guardarDB(participantsDb);
                      count = 0;
                      resp = 0;
                      break;

              case '2': await listParticipants(participantsDb);await viewList(); break;
        
            default:
                break;
        }

    
        
    } while (option !== '0');

    


}

main();