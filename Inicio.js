"use strict";
var Token = /** @class */ (function () {
    function Token(tipoTk, valor, fila, columna, contador) {
        this._fila = fila;
        this._columna = columna;
        this._contador = contador;
        this._valor = valor;
    }
    Object.defineProperty(Token.prototype, "fila", {
        get: function () {
            return this._fila;
        },
        set: function (value) {
            this._fila = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "columna", {
        get: function () {
            return this._columna;
        },
        set: function (value) {
            this._columna = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "contador", {
        get: function () {
            return this._contador;
        },
        set: function (value) {
            this._contador = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        set: function (value) {
            this._valor = value;
        },
        enumerable: true,
        configurable: true
    });
    return Token;
}());
var TipoToken;
(function (TipoToken) {
    TipoToken[TipoToken["PALABRA_RESERVADA"] = 0] = "PALABRA_RESERVADA";
    TipoToken[TipoToken["VARIABLE"] = 1] = "VARIABLE";
    TipoToken[TipoToken["CADENA"] = 2] = "CADENA";
    TipoToken[TipoToken["NUMERO_ENTERO"] = 3] = "NUMERO_ENTERO";
    TipoToken[TipoToken["NUMERO_PD"] = 4] = "NUMERO_PD";
    TipoToken[TipoToken["DOS_PUNTOS"] = 5] = "DOS_PUNTOS";
    TipoToken[TipoToken["CARACTER"] = 6] = "CARACTER";
    TipoToken[TipoToken["APOSTROFE"] = 7] = "APOSTROFE";
    TipoToken[TipoToken["LLAVE_IZ"] = 8] = "LLAVE_IZ";
    TipoToken[TipoToken["LLAVE_DE"] = 9] = "LLAVE_DE";
    TipoToken[TipoToken["PUNTO_Y_COMA"] = 10] = "PUNTO_Y_COMA";
    TipoToken[TipoToken["DESCONOCIDO"] = 11] = "DESCONOCIDO";
    TipoToken[TipoToken["COMILLAS"] = 12] = "COMILLAS";
    TipoToken[TipoToken["PARENTISIS_IZ"] = 13] = "PARENTISIS_IZ";
    TipoToken[TipoToken["PARENTISIS_DE"] = 14] = "PARENTISIS_DE";
    TipoToken[TipoToken["COMA"] = 15] = "COMA";
    TipoToken[TipoToken["CORCHETE_IZ"] = 16] = "CORCHETE_IZ";
    TipoToken[TipoToken["CORCHETE_DE"] = 17] = "CORCHETE_DE";
    TipoToken[TipoToken["IGUAL"] = 18] = "IGUAL";
    TipoToken[TipoToken["PUNTO"] = 19] = "PUNTO";
    TipoToken[TipoToken["COMENTARIO_LINEA"] = 20] = "COMENTARIO_LINEA";
    TipoToken[TipoToken["COMENTARIO_ABRE"] = 21] = "COMENTARIO_ABRE";
    TipoToken[TipoToken["COMENTARIO_CIERRA"] = 22] = "COMENTARIO_CIERRA";
    TipoToken[TipoToken["SUMA"] = 23] = "SUMA";
    TipoToken[TipoToken["RESTA"] = 24] = "RESTA";
    TipoToken[TipoToken["DIVISION"] = 25] = "DIVISION";
    TipoToken[TipoToken["MULTIPLICACION"] = 26] = "MULTIPLICACION";
    TipoToken[TipoToken["DOBLE_IGUAL"] = 27] = "DOBLE_IGUAL";
    TipoToken[TipoToken["MENOR_QUE"] = 28] = "MENOR_QUE";
    TipoToken[TipoToken["MAYOR_QUE"] = 29] = "MAYOR_QUE";
    TipoToken[TipoToken["EXCLAMACION"] = 30] = "EXCLAMACION";
    TipoToken[TipoToken["Fin"] = 31] = "Fin";
    TipoToken[TipoToken["INT"] = 32] = "INT";
    TipoToken[TipoToken["FLOAT"] = 33] = "FLOAT";
    TipoToken[TipoToken["CHAR"] = 34] = "CHAR";
    TipoToken[TipoToken["STRING"] = 35] = "STRING";
    TipoToken[TipoToken["BOOL"] = 36] = "BOOL";
    TipoToken[TipoToken["CLASS"] = 37] = "CLASS";
    TipoToken[TipoToken["STATIC"] = 38] = "STATIC";
    TipoToken[TipoToken["VOID"] = 39] = "VOID";
    TipoToken[TipoToken["MAIN"] = 40] = "MAIN";
    TipoToken[TipoToken["ARGS"] = 41] = "ARGS";
    TipoToken[TipoToken["NEW"] = 42] = "NEW";
    TipoToken[TipoToken["CONSOLE"] = 43] = "CONSOLE";
    TipoToken[TipoToken["WRITELINE"] = 44] = "WRITELINE";
    TipoToken[TipoToken["GRAFICARVECTOR"] = 45] = "GRAFICARVECTOR";
    TipoToken[TipoToken["IF"] = 46] = "IF";
    TipoToken[TipoToken["ELSE"] = 47] = "ELSE";
    TipoToken[TipoToken["SWITCH"] = 48] = "SWITCH";
    TipoToken[TipoToken["CASE"] = 49] = "CASE";
    TipoToken[TipoToken["BREAK"] = 50] = "BREAK";
    TipoToken[TipoToken["DEFAULT"] = 51] = "DEFAULT";
    TipoToken[TipoToken["FOR"] = 52] = "FOR";
    TipoToken[TipoToken["WHILE"] = 53] = "WHILE";
    TipoToken[TipoToken["FALSE"] = 54] = "FALSE";
    TipoToken[TipoToken["TRUE"] = 55] = "TRUE";
})(TipoToken || (TipoToken = {}));
var AnalizadorLexico = /** @class */ (function () {
    function AnalizadorLexico() {
        this.listaToken = new Array();
    }
    AnalizadorLexico.prototype.start = function (cadena) {
        this.listaToken.push(new Token(TipoToken.CLASS, "llega1", 1, 1, 1));
        this.listaToken.push(new Token(TipoToken.CLASS, "llega2", 1, 1, 2));
        this.listaToken.forEach(function (element) {
            console.log(element.valor);
        });
    };
    return AnalizadorLexico;
}());
var Inicio = /** @class */ (function () {
    function Inicio() {
    }
    Inicio.prototype.start = function () {
        console.log("Jala puto");
        var analizadorLexico = new AnalizadorLexico();
        var cadena = document.getElementById("txtA1").value;
        console.log(cadena);
        analizadorLexico.start(cadena);
    };
    return Inicio;
}());
