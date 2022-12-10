/** UTILIDADES */
/** Ordenamos el Array de manea aleatoria para que nos muestre distintos partidos*/
const shuffleArray = (array) => {
    for (let i = array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = array[i];
        array[i] = array[j];
        array[j] = k;
      }
}

/**
 * Devolverá el objeto que coincida con la llave-valor indicados como
 * argumentos de la función.
 */
/* * @param String column    El nombre de la columna o llave de referencia
 * @param Any value        El valor buscado sobre la columna indicada
 * @return [Object|Null]   Devolverá null en caso de no hallar coincidencia, en caso contrario devolverá el objeto coincidente
 */

// Método Find => Devuelve el primer objeto que coincida con la condición
//console.log(cursos.find(item => item.nombre === "React JS")); // Tendría que devolver un Object
//console.log(cursos.find(item => item.precio <= 21000)); // Tendría que devolver un Object
//console.log(cursos.find(item => (item.precio > 15000) && (item.precio <= 21000))); // Tendría que devolver un Object

/* Clase para los Paises */
class Pais {
    constructor(idPais, nombrePais, flagPais, puntosPais, posPais) {
        this.idPais = idPais;
        this.nombrePais = nombrePais;
        this.flagPais = flagPais;
        this.puntosPais = puntosPais;
        this.posPais = posPais;
    }
}

/* Clase para los partidos de futbol */
class Match {
    constructor(idMatch, fechaMatch, eliminMatch,idPaisa, idPaisb, winMatch, destino) {
        this.idMatch = idMatch;
        this.fechaMatch = fechaMatch;
        this.eliminMatch = eliminMatch;
        this.idPaisa = idPaisa;
        this.idPaisb = idPaisb;
        this.winMatch = winMatch;
        this.destino = destino;
    }
}

/* Creamos los Paiss en memoria*/
const paises = [];
paises.push(new Pais(1, `Paises Bajos`, `https://ssl.gstatic.com/onebox/media/sports/logos/8GEqzfLegwFFpe6X2BODTg_48x48.png`, 0, 0));
paises.push(new Pais(2, `Estados Unidos`, `https://ssl.gstatic.com/onebox/media/sports/logos/wj9uZvn_vZrelLFGH8fnPA_48x48.png`, 0, 0));
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

/* Creamos los Partidos de futbol a jugarse*/
const matches = [];
matches.push(new Match(1, `03/12/22`, `e1-1`, 0, 0, 0,`e2-1-1`));
matches.push(new Match(2, `03/12/22`, `e1-2`, 0, 0, 0,`e2-1-2`));
matches.push(new Match(3, `05/12/22`, `e1-3`, 0, 0, 0,`e2-2-1`));
matches.push(new Match(4, `05/12/22`, `e1-4`, 0, 0, 0,`e2-2-2`));
matches.push(new Match(5, `04/12/22`, `e1-5`, 0, 0, 0,`e2-3-1`));
matches.push(new Match(6, `04/12/22`, `e1-6`, 0, 0, 0,`e2-3-2`));
matches.push(new Match(7, `06/12/22`, `e1-7`, 0, 0, 0,`e2-4-1`));
matches.push(new Match(8, `06/12/22`, `e1-8`, 0, 0, 0,`e2-4-2`));
matches.push(new Match(9, `09/12/22`, `e2-1`, 0, 0, 0,`e3-1-1`));
matches.push(new Match(10, `09/12/22`, `e2-2`, 0, 0, 0,`e3-1-2`));
matches.push(new Match(11, `10/12/22`, `e2-3`, 0, 0, 0,`e3-2-1`));
matches.push(new Match(12, `10/12/22`, `e2-4`, 0, 0, 0,`e3-2-2`));
matches.push(new Match(13, `13/12/22`, `e3-1`, 0, 0, 0,`e4-1-1`));
matches.push(new Match(14, `14/12/22`, `e3-2`, 0, 0, 0,`e4-1-2`));
matches.push(new Match(15, `18/12/22`, `e4-1`, 0, 0, 0,`w-w-w`));


/** Funciones para aregar cada campo en cada partido (match) */
const agregaFecha = (elim, match, cont) => {
    let divFechaMatch = document.querySelector(`#fc__e${elim}-${match}`);
    divFechaMatch.className = `pt__fecha`;
    divFechaMatch.innerHTML = matches[cont].fechaMatch;
}

const agregaBandera = (elim, match, pais, cont) => {
    let divBandera = document.querySelector(`#flag__e${elim}-${match}-${pais}`);
    let imgBandera = document.createElement(`img`);
    imgBandera.id = `img__e1-${match}-${pais}`;
    imgBandera.className = `img__bandera`;
    imgBandera.src = paises[cont].flagPais;
    imgBandera.alt = paises[cont].nombrePais;
    divBandera.innerHTML = ``;
    divBandera.appendChild(imgBandera);
}

const agregaNombre = (elim, match, pais, cont) => {
    let divNombrePais = document.querySelector(`#nombEq__e${elim}-${match}-${pais}`);
    divNombrePais.innerHTML = paises[cont].nombrePais;
}

/* vamos a recorrer el objeto paises para colocarlos en el html */
const cargaPartidos = (elim, matches) => {
    let contador = 0;
    let contDate = 0;
    for (let i = 1; i <= matches; i++) {
        agregaFecha(elim, i,contDate);
        for (let x = 1; x <= 2; x++) {
            agregaBandera(elim, i, x,contador);
            agregaNombre(elim, i, x,contador);
            contador++;
        }
        contDate++;
    }
}

shuffleArray(paises);
cargaPartidos(1,8);

/* Agregamos eventos a los div contenedores de cada encuentro */
let divMatchs = document.getElementsByClassName(`flecha__match`);
for (let i = 0; i < divMatchs.length; i++) {
    divMatchs[i].addEventListener(`click`,()=>{
        console.log(divMatchs[i].id);
    })
}

const devuelveDestino = (idMatch) => {
    let matchDestino = matches.find((encuentro) => {
        return (encuentro.eliminMatch == idMatch);
    })
    return matchDestino.destino;
}

devuelveDestino(`e2-3`);


















