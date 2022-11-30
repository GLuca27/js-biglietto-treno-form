"use strict";
//seleziono il bottone GENERA
const ticketForm = document.getElementById("ticket-form");
const btnReset = document.getElementById("reset");

ticketForm.addEventListener('submit', function(event){
    event.preventDefault();
    //1 leggere i valori del form
      const fullName = document.getElementById('name').value;
      const km = Number (document.getElementById('km').value);
      const age = document.getElementById('age').value;
    //2 calcolo il prezzo del biglietto
       //2a calcolo il prezzo base
       //2b vedo se si deve applicare uno sconto
       let price = km * 0.21;
       let offert = "Biglietto Standard"

       if ( age === 'underage' ){
        price = price * 0.8;
        offert = "Biglietto minorenni";
       } else if ( age === 'over' ){
        price = price * 0.6;
        offert = "Biglietto over 65";
       }
//console.log(`${price.toFixed(2)}€`)
    //3 mostrare il biglietto sullo schermo
    

    document.getElementById('ticket-person').innerHTML = person;
    document.getElementById('ticket-offert').innerHTML = offert;
    document.getElementById('ticket-carrozza').innerHTML = Math.floor(Math.random() * 10 + 1);
    document.getElementById('ticket-cp').innerHTML = Math.floor(Math.random() * 10000 + 1);
    document.getElementById('ticket-costo').innerHTML = `${price.toFixed(2)}€`;

    document.querySelector('ticket-container').classList.add("show");
})

btnReset.addEventListener('click', function(){
  document.querySelector('ticket-container').classList.remove("show")
})