class Matrix {
    //rows = linhas, coluns = colunas, elements= elementos

    constructor(rows, cols, elements) {
        this.rows = rows;
        this.cols = cols
        this.elements = elements
        this.matriz = 0;
    }

    criador() {
        var m = [];
        for (var i = 0; i < this.rows; i++) {
            m[i] = [];

            for (var j = 0; j < this.cols; j++) {
                m[i][j] = this.elements[i][j];
            }
        }
        return this.m = m;
    }
    get(i, j) {
        if (i > this.rows || j > this.cols) {
            return console.log("Parametro invalido")
        } else {
            return this.m[i][j];
        }

    }
    set(i, j, value) {
        if (i > this.rows || j > this.cols) {
            return console.log("Parametro invalido")
        } else {
            return this.m[i][j] = value;
        }
    }
}

class Vector {

    constructor(dim, elements) { //dim = dimensão do array | elements = elementos
        this.dim = dim
        this.elements = elements
    }

    criador() { //método que cria o vetor
        var v = []
        for (var i = 0; i < this.dim; i++) {
            v[i] = this.elements
        }
        return this.v = v;
    }

    get(i) { //método que pega o valor guardado no índice digitado
        if(i > this.dim){ //se indice digitado for maior que a dimensão do array
            return console.log("Parâmetro inválido")
        }else{
            return this.v[i]
        }
    }
    set(i, value) { //método que substitui no índice i o valor digitado
        if(i > this.dim){ //se o indice digitado for maior que a dimensão do array
            return console.log("Parâmetro inválido")
        } else {
            this.v[i] = value
        }
    }
}

class LinearAlgebra {
    constructor() {}

    sum(a, b) {}

    times(a, b) {}

    dot(a, b) {}

    gauss(a) {}

    solve(a) {}
}