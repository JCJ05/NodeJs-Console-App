const inquirer = require('inquirer');
require('colors');

const questions = [
  
    {
    
        type: 'list',
        name: 'opcion',
        message: '¿Que deseas realizar?',
        choices: [
    
            {
               value: '1',
               name: `${'1'.red} Jugar`

            },

            {
              
                value: '2',
                name: `${'2'.yellow} Ver Mis Resultados`

            },

            {

                value: '3',
                name: `${'3'.green} Ayuda`

            },

            {

                value: '4',
                name: `${'4'.grey} Creditos`

            },

            {

                value: '0',
                name: `${'0'.magenta} Salir`

            }


        ]

    }

]


const viewMenu = async () => {

    console.clear();
    console.log('***   ======================================   ***'.blue);
    console.log('         *******  QUIZ - APP  *******             '.yellow);
    console.log('***   ======================================   ***'.blue);

    const {opcion} = await inquirer.prompt(questions);
    return opcion;

}

const viewName = async (nombre = '') => {
   
    const quizzName = {

        type: 'input',
        name: 'enter',
        message: `\n Bienvenido Usuario: ${nombre.red} Presione ${'ENTER'.green} para comenzar a jugar \n`
    }

    await inquirer.prompt(quizzName);

}

const gameModes = async () => {
  
    

}

module.exports = {

    viewMenu,
    viewName
}
