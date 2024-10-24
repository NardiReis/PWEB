
function Retangulo(x, y) {
    this.base = x;
    this.altura = y;
    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

function calcularArea() {
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var retangulo = new Retangulo(base, altura);
    document.getElementById('resultado').innerText = 'Área: ' + retangulo.calcularArea();
}
