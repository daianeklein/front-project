function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0

while (contador < listaDeTeclas.lenght ) {
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador +1

}
