for (i=0; i<5; i++){

    function userPlay(){
        const datoUser = prompt('ingrese su seleccion "Rock, Scissors or Paper');
        const entrada = datoUser.trim(); 
        const dato = entrada.charAt(0).toUpperCase() + entrada.slice(1).toLowerCase(); 
        return dato
    }

    function computerPlay(){
        const game = ['Rock','Paper','Scissors']
        let seleccion = game[Math.floor(Math.random() * game.length)];
        return seleccion
    }

    const userP = userPlay();
    const compP = computerPlay();

    function round1(){
        const A = 'Scissors beats Paper';
        const B = 'Paper beats Rock';
        const C = 'Rock beats Scissors';
        const D = 'It\'s a tie';
        const E = 'You win!';
        const F = 'You lose!';
        const G = 'Incorrect Entry';

        switch (true){
            case userP === 'Scissors':
                if (compP  === 'Scissors'){
                    return(D);
                }else if (compP  === 'Rock'){
                    return (`${F} ${C}`);
                }else if (compP === 'Paper'){
                    return (`${E} ${A}`)
                }
                break;
            case userP === 'Paper': 
                if (compP  === 'Scissors'){
                    return (`${F} ${A}`);
                }else if (compP  === 'Rock'){
                    return (`${E} ${B}`)
                }else if (compP  === 'Paper'){
                    return(D);
                }
                break;
            case userP === 'Rock': 
                if (compP  === 'Scissors'){
                    return (`${E} ${C}`);
                }else if (compP  === 'Rock'){
                    return(D);
                }else if (compP === 'Paper'){
                    return (`${F} ${B}`);
                }
                break;
            default:
                return(G);    
        }
    }


    console.log(`Computer selected ${compP}`);
    console.log(`User selected ${userP}`);
    console.log (round1());
    console.log('');
}



















































