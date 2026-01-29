let tabla = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let akt = "X";

function lepes(hova){
    let sor = parseInt(hova[0]);
    let oszlop = parseInt(hova[1]);

    if(tabla[sor][oszlop] == ""){

        tabla[sor][oszlop] = akt;
        document.getElementyByI("n" + hova).innerText = akt;
        
        if(akt == "X"){
            akt = "O";
        } else {
            akt = "X";
        }
    }
}