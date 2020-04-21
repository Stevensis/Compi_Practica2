"use strict";
var Token = /** @class */ (function () {
    function Token(tipoTk, valor, fila, columna, contador) {
        this._fila = fila;
        this._columna = columna;
        this._contador = contador;
        this._valor = valor;
        this._tipoTk = tipoTk;
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
    Object.defineProperty(Token.prototype, "tipoTk", {
        get: function () {
            return this._tipoTk;
        },
        set: function (value) {
            this._tipoTk = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "tipoToken", {
        get: function () {
            switch (this.tipoTk) {
                case TipoToken.CADENA:
                    return "CADENA";
                case TipoToken.CARACTER:
                    return "CARACTER";
                case TipoToken.APOSTROFE:
                    return "APOSTROFE";
                case TipoToken.COMILLAS:
                    return "COMILLAS";
                case TipoToken.COMENTARIO_ABRE:
                    return "COMENTARIO_ABRE";
                case TipoToken.COMENTARIO_CIERRA:
                    return "COMENTARIO_CIERRA";
                case TipoToken.COMENTARIO_LINEA:
                    return "COMENTARIO_LINEA";
                case TipoToken.CORCHETE_DE:
                    return "CORCHETE_DERECHO";
                case TipoToken.CORCHETE_IZ:
                    return "CORCHETE_IZQUIERDO";
                case TipoToken.DOS_PUNTOS:
                    return "DOS_PUNTOS";
                case TipoToken.LLAVE_DE:
                    return "LLAVE_DERECHA";
                case TipoToken.LLAVE_IZ:
                    return "LLAVE_IZQUIERDA";
                case TipoToken.NUMERO_ENTERO:
                    return "NUMERO_ENTERO";
                case TipoToken.NUMERO_PD:
                    return "NUMERO_FLOAR";
                case TipoToken.PALABRA_RESERVADA:
                    return "PALABRA_RESERVADA";
                case TipoToken.PUNTO_Y_COMA:
                    return "PUNTO_Y_COMA";
                case TipoToken.VARIABLE:
                    return "VARIABLE";
                case TipoToken.IGUAL:
                    return "IGUAL";
                case TipoToken.EXCLAMACION:
                    return "EXCLAMACION";
                case TipoToken.SUMA:
                    return "SUMA";
                case TipoToken.RESTA:
                    return "RESTA";
                case TipoToken.MULTIPLICACION:
                    return "MULTIPLICACION";
                case TipoToken.DIVISION:
                    return "DIVISION";
                case TipoToken.MAYOR_QUE:
                    return "MAYOR_QUE";
                case TipoToken.MENOR_QUE:
                    return "MENOR_QUE";
                case TipoToken.DOBLE_IGUAL:
                    return "DOBLE_IGUAL";
                case TipoToken.PUNTO:
                    return "PUNTO";
                case TipoToken.COMA:
                    return "COMA";
                case TipoToken.PARENTISIS_DE:
                    return "PARENTESIS_DERECHO";
                case TipoToken.PARENTISIS_IZ:
                    return "PARENTESIS_IZQUIERDO";
                case TipoToken.Fin:
                    return "FIN_CADENA";
                case TipoToken.INT:
                    return "int";
                case TipoToken.FLOAT:
                    return "float";
                case TipoToken.CHAR:
                    return "char";
                case TipoToken.STRING:
                    return "string";
                case TipoToken.BOOL:
                    return "bool";
                case TipoToken.CLASS:
                    return "class";
                case TipoToken.STATIC:
                    return "static";
                case TipoToken.VOID:
                    return "void";
                case TipoToken.MAIN:
                    return "main";
                case TipoToken.ARGS:
                    return "args";
                case TipoToken.NEW:
                    return "new";
                case TipoToken.CONSOLE:
                    return "Console";
                case TipoToken.WRITELINE:
                    return "WriteLine";
                case TipoToken.GRAFICARVECTOR:
                    return "graficarVector";
                case TipoToken.IF:
                    return "if";
                case TipoToken.ELSE:
                    return "else";
                case TipoToken.SWITCH:
                    return "switch";
                case TipoToken.CASE:
                    return "case";
                case TipoToken.BREAK:
                    return "break";
                case TipoToken.DEFAULT:
                    return "default";
                case TipoToken.FOR:
                    return "for";
                case TipoToken.WHILE:
                    return "while";
                case TipoToken.FALSE:
                    return "false";
                case TipoToken.TRUE:
                    return "true";
                case TipoToken.WRITE:
                    return "Write";
                default:
                    return "";
            }
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
    TipoToken[TipoToken["WRITE"] = 45] = "WRITE";
    TipoToken[TipoToken["GRAFICARVECTOR"] = 46] = "GRAFICARVECTOR";
    TipoToken[TipoToken["IF"] = 47] = "IF";
    TipoToken[TipoToken["ELSE"] = 48] = "ELSE";
    TipoToken[TipoToken["SWITCH"] = 49] = "SWITCH";
    TipoToken[TipoToken["CASE"] = 50] = "CASE";
    TipoToken[TipoToken["BREAK"] = 51] = "BREAK";
    TipoToken[TipoToken["DEFAULT"] = 52] = "DEFAULT";
    TipoToken[TipoToken["FOR"] = 53] = "FOR";
    TipoToken[TipoToken["WHILE"] = 54] = "WHILE";
    TipoToken[TipoToken["FALSE"] = 55] = "FALSE";
    TipoToken[TipoToken["TRUE"] = 56] = "TRUE";
})(TipoToken || (TipoToken = {}));
var ErrorA = /** @class */ (function () {
    function ErrorA(valor, contadorE, fila, columna, descripcion, tipo) {
        this._valor = valor;
        this._contadorE = contadorE;
        this._fila = fila;
        this._columna = columna;
        this._descripcion = descripcion;
        this._tipo = tipo;
    }
    Object.defineProperty(ErrorA.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        set: function (value) {
            this._valor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorA.prototype, "contadorE", {
        get: function () {
            return this._contadorE;
        },
        set: function (value) {
            this._contadorE = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorA.prototype, "fila", {
        get: function () {
            return this._fila;
        },
        set: function (value) {
            this._fila = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorA.prototype, "columna", {
        get: function () {
            return this._columna;
        },
        set: function (value) {
            this._columna = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorA.prototype, "descripcion", {
        get: function () {
            return this._descripcion;
        },
        set: function (value) {
            this._descripcion = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorA.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: true,
        configurable: true
    });
    return ErrorA;
}());
var listaToken = new Array();
var ListError = new Array();
var AnalizadorLexico = /** @class */ (function () {
    function AnalizadorLexico() {
        this.listaToken = new Array();
        this.fila = 1;
        this.columna = 0;
        this.estado = 0;
        this.contadorTK = 1;
        this.contadorE = 1;
        this.columnaiT = 0;
        this.comp = true;
        this.auxiliar = "";
    }
    AnalizadorLexico.prototype.start = function (cadena) {
        ListError = new Array();
        var c;
        for (var index = 0; index < cadena.length; index++) {
            c = cadena.charAt(index); //Contendra el caracter que va leyendo
            if (c == '\n') {
                this.fila++;
                this.columna = 0;
            }
            else {
                this.columna++;
            } //Va contar las filas y columnas
            if (c != '\n' && c != ' ' && this.comp) {
                this.columnaiT = this.columna;
                this.comp = false;
            }
            switch (this.estado) {
                case 0:
                    if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) < 91) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) < 123)) {
                        this.auxiliar += c;
                        this.estado = 1;
                    }
                    else if (c == '_') {
                        this.auxiliar += c;
                        this.estado = 2;
                    }
                    else if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxiliar += c;
                        this.estado = 3;
                    }
                    else if (c == '"') {
                        this.auxiliar += c;
                        this.estado = 6;
                    }
                    else if (c == '\'') {
                        this.auxiliar += c;
                        this.estado = 8;
                    }
                    else if (c == '/') {
                        this.auxiliar += c;
                        this.estado = 11;
                    }
                    else if (c == '{') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.LLAVE_IZ);
                    }
                    else if (c == '}') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.LLAVE_DE);
                    }
                    else if (c == '(') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.PARENTISIS_IZ);
                    }
                    else if (c == ')') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.PARENTISIS_DE);
                    }
                    else if (c == '[') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.CORCHETE_IZ);
                    }
                    else if (c == ']') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.CORCHETE_DE);
                    }
                    else if (c == '+') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.SUMA);
                    }
                    else if (c == '-') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.RESTA);
                    }
                    else if (c == '*') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.MULTIPLICACION);
                    }
                    else if (c == '=') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.IGUAL);
                    }
                    else if (c == ':') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.DOS_PUNTOS);
                    }
                    else if (c == ';') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.PUNTO_Y_COMA);
                    }
                    else if (c == '>') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.MAYOR_QUE);
                    }
                    else if (c == '<') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.MENOR_QUE);
                    }
                    else if (c == '!') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.EXCLAMACION);
                    }
                    else if (c == ',') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.COMA);
                    }
                    else if (c == '.') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.PUNTO);
                    }
                    else {
                        if (c != '\n' && c.charCodeAt(0) != 32 && c.charCodeAt(0) != 9 && c.charCodeAt(0) != 13) {
                            this.auxiliar += c;
                            this.agregarErrores("El simbolo no es parte del sistema", "Lexico");
                        }
                    }
                    break;
                case 1:
                    if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) < 91) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) < 123)) {
                        this.auxiliar += c;
                        this.estado = 1;
                    }
                    else if (c == '_') {
                        this.auxiliar += c;
                        this.estado = 2;
                    }
                    else if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxiliar += c;
                        this.estado = 2;
                    }
                    else {
                        this.verificarPR();
                        index--;
                        this.columna--;
                    }
                    break;
                case 2:
                    if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) < 91) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) < 123)) {
                        this.auxiliar += c;
                        this.estado = 2;
                    }
                    else if (c == '_') {
                        this.auxiliar += c;
                        this.estado = 2;
                    }
                    else if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxiliar += c;
                        this.estado = 2;
                    }
                    else {
                        this.agregarTk(TipoToken.VARIABLE);
                        index--;
                        this.columna--;
                    }
                    break;
                case 3:
                    if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxiliar += c;
                        this.estado = 3;
                    }
                    else if (c == '.') {
                        this.auxiliar += c;
                        this.estado = 4;
                    }
                    else {
                        this.agregarTk(TipoToken.NUMERO_ENTERO);
                        index--;
                        this.columna--;
                    }
                    break;
                case 4:
                    if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxiliar += c;
                        this.estado = 5;
                    }
                    else {
                        this.agregarErrores("Se esperaba un numero despues del punto no:" + c, "Tipo Sintactico");
                        index--;
                        this.columna--;
                    }
                    break;
                case 5:
                    if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxiliar += c;
                        this.estado = 5;
                    }
                    else {
                        this.agregarTk(TipoToken.NUMERO_PD);
                        index--;
                        this.columna--;
                    }
                    break;
                case 6:
                    if (c == '"') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.CADENA);
                    }
                    else if (c == '\\') {
                        this.auxiliar += c;
                        this.estado = 7;
                    }
                    else {
                        this.auxiliar += c;
                    }
                    break;
                case 7:
                    this.auxiliar += c;
                    this.estado = 6;
                    break;
                case 8:
                    if (c == '\\') {
                        this.auxiliar += c;
                        this.estado = 9;
                    }
                    else {
                        this.auxiliar += c;
                        this.estado = 10;
                    }
                    break;
                case 9:
                    this.auxiliar += c;
                    this.estado = 10;
                    break;
                case 10:
                    if (c == '\'') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.CARACTER);
                    }
                    else {
                        this.agregarErrores("Se esperaba un ' no el caracter: " + c, "Sintactico");
                        index--;
                        this.columna--;
                    }
                    break;
                case 11:
                    if (c == '/') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.COMENTARIO_LINEA);
                        this.estado = 12;
                    }
                    else if (c == '*') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.COMENTARIO_ABRE);
                        this.estado = 13;
                    }
                    else {
                        this.agregarTk(TipoToken.DIVISION);
                        index--;
                        this.columna--;
                    }
                    break;
                case 12:
                    if (c != '\n') {
                        this.auxiliar += c;
                        this.estado = 12;
                    }
                    else {
                        this.agregarTk(TipoToken.CADENA);
                    }
                    break;
                case 13:
                    if (c == '*') {
                        this.auxiliar += c;
                        this.estado = 14;
                    }
                    else {
                        this.auxiliar += c;
                        this.estado = 13;
                    }
                    break;
                case 14:
                    if (c == '/') {
                        this.agregarTk(TipoToken.CADENA);
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.COMENTARIO_CIERRA);
                    }
                    else {
                        this.auxiliar += c;
                        this.estado = 13;
                    }
                    break;
                default:
                    break;
            }
        }
        if (ListError.length == 0) {
            var table = document.getElementById('Table1');
            var i = 1;
            listaToken.forEach(function (element) {
                var newRow = table.insertRow(i);
                var cell1 = newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var cell4 = newRow.insertCell(3);
                var cell5 = newRow.insertCell(4);
                cell1.innerHTML = element.contador + "";
                cell2.innerHTML = element.valor;
                cell3.innerHTML = element.tipoToken + "";
                cell4.innerHTML = element.fila + "";
                cell5.innerHTML = element.columna + "";
                i++;
            });
            var ns = new AnalizadorSintactico();
            ns.analisCompleto();
        }
        else {
            var table2 = document.getElementById('Table2');
            var k = 1;
            ListError.forEach(function (element) {
                var newRow2 = table2.insertRow(k);
                var cell11 = newRow2.insertCell(0);
                var cell21 = newRow2.insertCell(1);
                var cell31 = newRow2.insertCell(2);
                var cell41 = newRow2.insertCell(3);
                var cell51 = newRow2.insertCell(4);
                var cell61 = newRow2.insertCell(5);
                cell11.innerHTML = element.contadorE + "";
                cell21.innerHTML = element.valor;
                cell31.innerHTML = element.descripcion + "";
                cell41.innerHTML = element.tipo + "";
                cell51.innerHTML = element.fila + "";
                cell61.innerHTML = element.columna + "";
                k++;
            });
        }
    };
    AnalizadorLexico.prototype.verificarPR = function () {
        switch (this.auxiliar) {
            case "int":
                this.agregarTk(TipoToken.INT);
                break;
            case "float":
                this.agregarTk(TipoToken.FLOAT);
                break;
            case "char":
                this.agregarTk(TipoToken.CHAR);
                break;
            case "string":
                this.agregarTk(TipoToken.STRING);
                break;
            case "bool":
                this.agregarTk(TipoToken.BOOL);
                break;
            case "class":
                this.agregarTk(TipoToken.CLASS);
                break;
            case "static":
                this.agregarTk(TipoToken.STATIC);
                break;
            case "void":
                this.agregarTk(TipoToken.VOID);
                break;
            case "main":
                this.agregarTk(TipoToken.MAIN);
                break;
            case "args":
                this.agregarTk(TipoToken.ARGS);
                break;
            case "new":
                this.agregarTk(TipoToken.NEW);
                break;
            case "Console":
                this.agregarTk(TipoToken.CONSOLE);
                break;
            case "WriteLine":
                this.agregarTk(TipoToken.WRITELINE);
                break;
            case "if":
                this.agregarTk(TipoToken.IF);
                break;
            case "else":
                this.agregarTk(TipoToken.ELSE);
                break;
            case "switch":
                this.agregarTk(TipoToken.SWITCH);
                break;
            case "case":
                this.agregarTk(TipoToken.CASE);
                break;
            case "break":
                this.agregarTk(TipoToken.BREAK);
                break;
            case "default":
                this.agregarTk(TipoToken.DEFAULT);
                break;
            case "for":
                this.agregarTk(TipoToken.FOR);
                break;
            case "while":
                this.agregarTk(TipoToken.WHILE);
                break;
            case "false":
                this.agregarTk(TipoToken.FALSE);
                break;
            case "true":
                this.agregarTk(TipoToken.TRUE);
                break;
            case "Write":
                this.agregarTk(TipoToken.WRITE);
                break;
            default:
                this.agregarTk(TipoToken.VARIABLE);
                break;
        }
    };
    AnalizadorLexico.prototype.agregarTk = function (tipoTk) {
        listaToken.push(new Token(tipoTk, this.auxiliar, this.fila, this.columnaiT, this.contadorTK));
        this.auxiliar = "";
        this.contadorTK++;
        this.comp = true;
        this.estado = 0;
    };
    AnalizadorLexico.prototype.agregarErrores = function (descError, tipo) {
        ListError.push(new ErrorA(this.auxiliar, this.contadorE, this.fila, this.columna, descError, tipo));
        this.auxiliar = "";
        this.contadorE++;
        this.comp = true;
        this.estado = 0;
    };
    return AnalizadorLexico;
}());
var indice_token = 0;
var traduccion = "";
var AnalizadorSintactico = /** @class */ (function () {
    function AnalizadorSintactico() {
        this.contadorErrores = ListError.length;
        this.indice_token = 0;
        this.traduccion = "";
    }
    AnalizadorSintactico.prototype.analisCompleto = function () {
        while (indice_token < listaToken.length) {
            if (listaToken[indice_token].tipoTk == TipoToken.VOID) {
                indice_token++;
                if (listaToken[indice_token].tipoTk == TipoToken.MAIN) {
                    this.metodo_main();
                }
                else if (listaToken[indice_token].tipoTk == TipoToken.VARIABLE) {
                    this.metodoC();
                }
                else {
                    this.errror_sintactico("Se esperaba un Token void o un main");
                }
            }
        }
        if (ListError.length == 0) {
        }
        else {
            var table2 = document.getElementById('Table2');
            var k = 1;
            ListError.forEach(function (element) {
                var newRow2 = table2.insertRow(k);
                var cell11 = newRow2.insertCell(0);
                var cell21 = newRow2.insertCell(1);
                var cell31 = newRow2.insertCell(2);
                var cell41 = newRow2.insertCell(3);
                var cell51 = newRow2.insertCell(4);
                var cell61 = newRow2.insertCell(5);
                cell11.innerHTML = element.contadorE + "";
                cell21.innerHTML = element.valor;
                cell31.innerHTML = element.descripcion + "";
                cell41.innerHTML = element.tipo + "";
                cell51.innerHTML = element.fila + "";
                cell61.innerHTML = element.columna + "";
                k++;
            });
        }
    };
    AnalizadorSintactico.prototype.metodoC = function () {
        return 0;
    };
    AnalizadorSintactico.prototype.analisisMedio = function () {
        var resultado = 1;
        if (listaToken[indice_token].tipoTk == TipoToken.CONSOLE) {
            resultado = this.consoleWrite();
        }
        if (resultado == 1) {
            // si se consume el error  //if(indice_token>=listaToken.length){return 1;}
            while (listaToken[indice_token].tipoTk != TipoToken.PUNTO_Y_COMA && listaToken[indice_token].tipoTk != TipoToken.LLAVE_DE) {
                indice_token++;
            }
            if (listaToken[indice_token].tipoTk == TipoToken.PUNTO_Y_COMA || listaToken[indice_token].tipoTk == TipoToken.LLAVE_DE) {
                indice_token++;
            }
        }
        return resultado;
    };
    AnalizadorSintactico.prototype.metodo_main = function () {
        if (listaToken[indice_token].tipoTk == TipoToken.MAIN) {
            indice_token++;
        }
        else {
            this.errror_sintactico("Se esperaba un main, no un " + listaToken[indice_token].tipoToken);
            return 1;
        }
        if (listaToken[indice_token].tipoTk == TipoToken.PARENTISIS_IZ) {
            indice_token++;
        }
        else {
            this.errror_sintactico("Se esperaba un parentesis izquierdo, no un  " + listaToken[indice_token].tipoToken);
            return 1;
        }
        if (listaToken[indice_token].tipoTk == TipoToken.PARENTISIS_DE) {
            indice_token++;
        }
        else {
            this.errror_sintactico("Se esperaba un parentisis derecho, no un  " + listaToken[indice_token].tipoToken);
            return 1;
        }
        if (listaToken[indice_token].tipoTk == TipoToken.LLAVE_IZ) {
            indice_token++;
        }
        else {
            this.errror_sintactico("Se esperaba una llave izquierda, no un  " + listaToken[indice_token].tipoToken);
            return 1;
        }
        while (listaToken[indice_token].tipoTk != TipoToken.LLAVE_DE) {
            var resultado = this.analisisMedio();
            if (resultado == 1) {
                return 1;
            }
        }
        if (listaToken[indice_token].tipoTk == TipoToken.LLAVE_DE) {
            indice_token++;
        }
        else {
            this.errror_sintactico("Se esperaba una llave derecha, no un  " + listaToken[indice_token].tipoToken);
            return 1;
        }
        return 0;
    };
    AnalizadorSintactico.prototype.consoleWrite = function () {
        if (listaToken[indice_token].tipoTk == TipoToken.CONSOLE) {
            indice_token++;
        }
        else {
            this.errror_sintactico("Se esperaba un Console, no un  " + listaToken[indice_token].tipoToken);
            return 1;
        }
        if (listaToken[indice_token].tipoTk == TipoToken.PUNTO) {
            indice_token++;
        }
        else {
            this.errror_sintactico("Se esperaba un Punto, no un  " + listaToken[indice_token].tipoToken);
            return 1;
        }
        if (listaToken[indice_token].tipoTk == TipoToken.WRITE) {
            indice_token++;
        }
        else {
            this.errror_sintactico("Se esperaba un write, no un  " + listaToken[indice_token].tipoToken);
            return 1;
        }
        if (listaToken[indice_token].tipoTk == TipoToken.PARENTISIS_IZ) {
            indice_token++;
        }
        else {
            this.errror_sintactico("Se esperaba un parentsis izquierdo, no un  " + listaToken[indice_token].tipoToken);
            return 1;
        }
        while (listaToken[indice_token].tipoTk != TipoToken.PARENTISIS_DE) {
            //"", +,double,etc
            //Console.Write("");
            if (listaToken[indice_token].tipoTk == TipoToken.CADENA || listaToken[indice_token].tipoTk == TipoToken.VARIABLE
                || listaToken[indice_token].tipoTk == TipoToken.NUMERO_ENTERO) {
                indice_token++;
            }
            else {
                this.errror_sintactico("Se esperaba una cadena, o variable, entero " + listaToken[indice_token].tipoToken);
                return 1;
            }
            if (listaToken[indice_token].tipoTk == TipoToken.SUMA) {
                indice_token++;
            }
            else if (listaToken[indice_token].tipoTk != TipoToken.PARENTISIS_DE) {
                this.errror_sintactico("Se esperaba un parentesis derecho, no un  " + listaToken[indice_token].tipoToken);
                return 1;
            }
        }
        if (listaToken[indice_token].tipoTk == TipoToken.PARENTISIS_DE) {
            indice_token++;
        }
        else {
            this.errror_sintactico("Se esperaba un parentesis derecho, no un " + listaToken[indice_token].tipoToken);
            return 1;
        }
        if (listaToken[indice_token].tipoTk == TipoToken.PUNTO_Y_COMA) {
            indice_token++;
        }
        else {
            this.errror_sintactico("Se esperaba un punto y coma, no un  " + listaToken[indice_token].tipoToken);
            return 1;
        }
        return 0;
    };
    AnalizadorSintactico.prototype.errror_sintactico = function (desc) {
        this.contadorErrores++;
        ListError.push(new ErrorA(listaToken[indice_token].valor, this.contadorErrores, listaToken[indice_token].fila, listaToken[indice_token].columna, desc, "Sintactico"));
        // No se consume el error// indice_token++;
    };
    return AnalizadorSintactico;
}());
var Inicio = /** @class */ (function () {
    function Inicio() {
    }
    Inicio.prototype.start = function () {
        var analizadorLexico = new AnalizadorLexico();
        var cadena = document.getElementById("txtA1").value;
        analizadorLexico.start(cadena);
    };
    return Inicio;
}());
