const inquirer = require('inquirer');
const { quizzQuestions } = require('../data/questions');
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

const modes = [
  
    {
    
        type: 'list',
        name: 'mode',
        message: 'Elige el modo de cuestionario que quieras realizar',
        choices: [
         
            {
            
                value: '1',
                name: `${'1'.red} Deportes`

            },

            {
              
                value: '2',
                name: `${'2'.yellow} Historia`

            },

            {

                value: '3',
                name: `${'3'.green} Computacion`

            },

            {

                value: '4',
                name: `${'4'.grey} Ciencia`

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
  
    const {mode} = await inquirer.prompt(modes);
    console.log(mode);
    return mode;

}

const viewQuestions = async (id = '') => {
   
   const {questions} = quizzQuestions.find(question => question.id == id);
   
   return questions;

}

const viewOptions = async (ques = [] , id) => {

      const {question , answer , options} = ques.find(value => value.id == id);
      let quizz = [
          
        {
            type: 'list',
            name: 'option',
            message: question,
            choices: options

        }

      ]

      const {option} = await inquirer.prompt(quizz);
      return option;

}

module.exports = {

    viewMenu,
    viewName,
    gameModes,
    viewQuestions,
    viewOptions
}
