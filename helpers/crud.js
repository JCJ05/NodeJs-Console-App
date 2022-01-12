

 const listParticipants = async (participants = []) => {
  
     
     participants.forEach((participant , i) => {
   
        const {nombre , modo , puntuacion} = participant;
        i++
        console.log(`${i.toString().green} ${nombre} ${modo} ${puntuacion}`);

     })


 }

 module.exports = {

    listParticipants
 }