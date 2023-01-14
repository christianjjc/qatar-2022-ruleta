/** UTILIDADES */
/** funcion para ordenar el array de manera aleatoria*/
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = array[i];
        array[i] = array[j];
        array[j] = k;
    }
}

/* funcion para validar que el dato ingresado sea un número */
const validaDato = (numero) => {
    let valoresAceptados = /^[0-9]+$/;
    if (numero.toString().match(valoresAceptados)) {
        //alert ("Es numérico");
        return true
    } else {
        //alert ("No es numérico");
        return false
    }
}
/************************************************************************* */


/* Clase para los 16 Paises que participan desde los 8vos de final*/
class Pais {
    constructor(idPais, nombrePais, flagPais, puntosPais, posPais) {
        this.idPais = idPais;
        this.nombrePais = nombrePais;
        this.flagPais = flagPais;
        this.puntosPais = puntosPais;
        this.posPais = posPais;
    }
}

/* Clase para los partidos de futbol (Match) */
class Match {
    constructor(idMatch, fechaMatch, eliminMatch, idPaisa, idPaisb, winMatch, destino) {
        this.idMatch = idMatch;
        this.fechaMatch = fechaMatch;
        this.eliminMatch = eliminMatch;
        this.idPaisa = idPaisa;
        this.idPaisb = idPaisb;
        this.winMatch = winMatch;
        this.destino = destino;
    }
}

/* Creamos los Paises en la clase*/
let paises = [];

function creaPaises() {
    paises = [];
    paises.push(new Pais(1, `Paises Bajos`, `https://ssl.gstatic.com/onebox/media/sports/logos/8GEqzfLegwFFpe6X2BODTg_48x48.png`, 0, 0));
    paises.push(new Pais(2, `USA`, `https://ssl.gstatic.com/onebox/media/sports/logos/wj9uZvn_vZrelLFGH8fnPA_48x48.png`, 0, 0));
    paises.push(new Pais(3, `Argentina`, `https://ssl.gstatic.com/onebox/media/sports/logos/1xBWyjjkA6vEWopPK3lIPA_48x48.png`, 0, 0));
    paises.push(new Pais(4, `Australia`, `https://ssl.gstatic.com/onebox/media/sports/logos/jSgw5z0EPOLzdUi-Aomq7Q_48x48.png`, 0, 0));
    paises.push(new Pais(5, `Japón`, `https://ssl.gstatic.com/onebox/media/sports/logos/by4OltvtZz7taxuQtkiP3A_48x48.png`, 0, 0));
    paises.push(new Pais(6, `Croacia`, `https://ssl.gstatic.com/onebox/media/sports/logos/9toerdOg8xW4CRhDaZxsyw_48x48.png`, 0, 0));
    paises.push(new Pais(7, `Brasil`, `https://ssl.gstatic.com/onebox/media/sports/logos/zKLzoJVYz0bb6oAnPUdwWQ_48x48.png`, 0, 0));
    paises.push(new Pais(8, `Corea del Sur`, `https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png`, 0, 0));
    paises.push(new Pais(9, `Francia`, `https://ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_48x48.png`, 0, 0));
    paises.push(new Pais(10, `Polonia`, `https://ssl.gstatic.com/onebox/media/sports/logos/yTS_Piy3M1wUBnqU0n5aAw_48x48.png`, 0, 0));
    paises.push(new Pais(11, `Inglaterra`, `https://ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_48x48.png`, 0, 0));
    paises.push(new Pais(12, `Senegal`, `https://ssl.gstatic.com/onebox/media/sports/logos/zw3ac5sIbH4DS6zP5auOkQ_48x48.png`, 0, 0));
    paises.push(new Pais(13, `Marruecos`, `https://ssl.gstatic.com/onebox/media/sports/logos/I3gt2Ew39ux3GGdZ-4JE3g_48x48.png`, 0, 0));
    paises.push(new Pais(14, `España`, `https://ssl.gstatic.com/onebox/media/sports/logos/5hLkf7KFHhmpaiOJQv8LmA_48x48.png`, 0, 0));
    paises.push(new Pais(15, `Portugal`, `https://ssl.gstatic.com/onebox/media/sports/logos/HJ3_2c4w791nZJj7n-Lj3Q_48x48.png`, 0, 0));
    paises.push(new Pais(16, `Suiza`, `https://ssl.gstatic.com/onebox/media/sports/logos/1hy9ek4dOIffYULM6k1fqg_48x48.png`, 0, 0));

    localStorage.clear();
    localStorage.setItem("paises",JSON.stringify(paises));

}


/* Creamos los Partidos de futbol (Match) a jugarse */
let matches = [];
function creaMatches() {
    matches = [];
    matches.push(new Match(1, `03/12/22`, `e1-1`, 0, 0, 0, `e2-1-1`));
    matches.push(new Match(2, `03/12/22`, `e1-2`, 0, 0, 0, `e2-1-2`));
    matches.push(new Match(3, `05/12/22`, `e1-3`, 0, 0, 0, `e2-2-1`));
    matches.push(new Match(4, `05/12/22`, `e1-4`, 0, 0, 0, `e2-2-2`));
    matches.push(new Match(5, `04/12/22`, `e1-5`, 0, 0, 0, `e2-3-1`));
    matches.push(new Match(6, `04/12/22`, `e1-6`, 0, 0, 0, `e2-3-2`));
    matches.push(new Match(7, `06/12/22`, `e1-7`, 0, 0, 0, `e2-4-1`));
    matches.push(new Match(8, `06/12/22`, `e1-8`, 0, 0, 0, `e2-4-2`));
    matches.push(new Match(9, `09/12/22`, `e2-1`, 0, 0, 0, `e3-1-1`));
    matches.push(new Match(10, `09/12/22`, `e2-2`, 0, 0, 0, `e3-1-2`));
    matches.push(new Match(11, `10/12/22`, `e2-3`, 0, 0, 0, `e3-2-1`));
    matches.push(new Match(12, `10/12/22`, `e2-4`, 0, 0, 0, `e3-2-2`));
    matches.push(new Match(13, `13/12/22`, `e3-1`, 0, 0, 0, `e4-1-1`));
    matches.push(new Match(14, `14/12/22`, `e3-2`, 0, 0, 0, `e4-1-2`));
    matches.push(new Match(15, `18/12/22`, `e4-1`, 0, 0, 0, `w-w-w`));
}


/** Funcion para aregar la fecha al div contenedor de cada partido (match) */
const agregaFechas = (elim, match, cont) => {
    let divFechaMatch = document.querySelector(`#fc__e${elim}-${match}`);
    divFechaMatch.className = `pt__fecha`;
    divFechaMatch.innerHTML = matches[cont].fechaMatch;
}





/** Funcion para bandera y nombre de equipo al div contenedor de cada partido (match) */
const agregaEquipo = (elim, match, posicion, pais) => {
    //Agregamos bandera ****************************
    let divBandera = document.querySelector(`#flag__e${elim}-${match}-${posicion}`);
    let imgBandera = document.createElement(`img`);
    imgBandera.id = `img__e1-${match}-${posicion}`;
    imgBandera.className = `img__bandera`;
    imgBandera.src = paises[pais].flagPais;
    imgBandera.alt = paises[pais].nombrePais;
    divBandera.innerHTML = ``;
    divBandera.appendChild(imgBandera);
    //Agregamos nombre Pais ****************************
    let divNombrePais = document.querySelector(`#nombEq__e${elim}-${match}-${posicion}`);
    divNombrePais.innerHTML = paises[pais].nombrePais;
    //actualizamos el arreglo matches (encuentros)  ****************************
    let i = 0;
    if (parseInt(elim) == 1) {
        i = parseInt(match) - 1;
        if ((posicion % 2) != 0) {
            matches[i].idPaisa = paises[pais].idPais;
        } else {
            matches[i].idPaisb = paises[pais].idPais;
        }
    } else if (parseInt(elim) == 2) {
        i = parseInt(match) + parseInt(elim) + 4;
        if ((posicion % 2) != 0) {
            matches[i + 1].idPaisa = paises[pais].idPais;
        } else {
            matches[i + 1].idPaisb = paises[pais].idPais;
        }
    } else if (parseInt(elim) == 3) {
        i = parseInt(match) + parseInt(elim) + 4;
        if ((posicion % 2) != 0) {
            matches[i + 4].idPaisa = paises[pais].idPais;
        } else {
            matches[i + 4].idPaisb = paises[pais].idPais;
        }
    } else if (parseInt(elim) == 4) {
        if ((posicion % 2) != 0) {
            matches[14].idPaisa = paises[pais].idPais;
        } else {
            matches[14].idPaisb = paises[pais].idPais;
        }
    }
    //colocamos el id del pais en la propiedad alt del txt ****************************
    let txtMarcador = document.querySelector((`#txtMarcador_e${elim}-${match}-${posicion}`));
    txtMarcador.alt = pais;
    txtMarcador.value = 0;
}

const cargaFechas = () => {
    let contDate = 0;
    for (let i = 1; i <= 8; i++) {
        agregaFechas(1, i, contDate);
        contDate++;
    }
    for (let i = 1; i <= 4; i++) {
        agregaFechas(2, i, contDate);
        contDate++;
    }
    for (let i = 1; i <= 2; i++) {
        agregaFechas(3, i, contDate);
        contDate++;
    }
    agregaFechas(4, 1, contDate);
}

/** Recorremos los primeros 8 encuentros
 * y colocamos los datos del objeto paises en el html
 * */
const cargaPartidos = (elim, matches) => {
    let contador = 0;
    for (let i = 1; i <= matches; i++) {
        for (let x = 1; x <= 2; x++) {
            agregaEquipo(elim, i, x, contador);
            contador++;
        }
    }
}

/** Funcion para obtener el siguiente encuentro para el ganador del match
 * y para colocarlo en el lugar que corresponde dentro del html
 */
const obtenGanadorYcolocalo = (encuentroOrigen, encuentroDestino) => {
    /* encontando al Ganador del encuentro */
    let txtUno = document.querySelector(`#txtMarcador_${encuentroOrigen}-1`);
    let txtDos = document.querySelector(`#txtMarcador_${encuentroOrigen}-2`);
    if (txtUno.alt == "" || txtDos.alt == "") {
        alert("Para poder pasar de fase, antes deben estar ambos equipos listos.");
        return;
    }
    let paisGanador = ``;
    if (validaDato(txtUno.value) == false) {
        alert("El marcador del equipo 1 debe ser un número ENTERO y mayor o igual a CERO.");
        return;
    }
    if (validaDato(txtDos.value) == false) {
        alert("El marcador del equipo 2 debe ser un número ENTERO y mayor o igual a CERO.");
        return;
    }
    if (parseInt(txtUno.value) > parseInt(txtDos.value)) {
        paisGanador = txtUno.alt
    } else if (parseInt(txtUno.value) < parseInt(txtDos.value)) {
        paisGanador = txtDos.alt
    } else {
        alert("Debe existir un ganador para poder pasar a la siguiente fase.");
        return;
    }
    // Ubicamos el encuentro destino del ganador *********************
    let idMatch = encuentroDestino.slice(1);
    let eliminatoria = idMatch.slice(0, 1);
    let encuentro = idMatch.slice(2, 3);
    let posicion = idMatch.slice(4, 5);
    /** - - - - - - - - - - - - - - - - */
    agregaEquipo(eliminatoria, encuentro, posicion, paisGanador);
}

/* Obtiene la ubicacion para el siguiente encuentro del ganador */
const siguienteMatch = (idMatch) => {
    let encuentraDestino = matches.find(match => match.eliminMatch == idMatch.slice(5));
    obtenGanadorYcolocalo(encuentraDestino.eliminMatch, encuentraDestino.destino);
}

/* Agregamos eventos a las FLECHAS de cada encuentro */
function eventoFlechas(){
    let divFlecha = document.getElementsByClassName(`flecha__match`);
    for (let i = 0; i < divFlecha.length; i++) {
        divFlecha[i].addEventListener(`click`, () => {
            siguienteMatch(divFlecha[i].id);
        })
    }
}



creaPaises();
creaMatches();




