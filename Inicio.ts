class Token{
    private _fila: number;
    public get fila(): number {
        return this._fila;
    }
    public set fila(value: number) {
        this._fila = value;
    }
    private _columna: number;
    public get columna(): number {
        return this._columna;
    }
    public set columna(value: number) {
        this._columna = value;
    }
    private _contador: number;
    public get contador(): number {
        return this._contador;
    }
    public set contador(value: number) {
        this._contador = value;
    }
    private _valor: string;
    
    public get valor(): string {
        return this._valor;
    }
    public set valor(value: string) {
        this._valor = value;
    }

    private _tipoTk: TipoToken;
    public get tipoTk(): TipoToken {
        return this._tipoTk;
    }
    public set tipoTk(value: TipoToken) {
        this._tipoTk = value;
    }

    public get tipoToken():String{
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
    }
  
   constructor(tipoTk:TipoToken,valor:string,fila:number,columna:number,contador:number){
        this._fila=fila;
        this._columna=columna;
        this._contador=contador;
        this._valor=valor;
        this._tipoTk=tipoTk
   }
}

enum TipoToken {
    PALABRA_RESERVADA,
            VARIABLE,
            CADENA,
            NUMERO_ENTERO,
            NUMERO_PD,
            DOS_PUNTOS,
            CARACTER,
            APOSTROFE,
            LLAVE_IZ,
            LLAVE_DE,
            PUNTO_Y_COMA,
            DESCONOCIDO,
            COMILLAS,
            PARENTISIS_IZ,
            PARENTISIS_DE,
            COMA,
            CORCHETE_IZ,
            CORCHETE_DE,
            IGUAL,
            PUNTO,
            COMENTARIO_LINEA,
            COMENTARIO_ABRE,
            COMENTARIO_CIERRA,
            SUMA,
            RESTA,
            DIVISION,
            MULTIPLICACION,
            DOBLE_IGUAL,
            MENOR_QUE,
            MAYOR_QUE,
            EXCLAMACION,
            Fin,
            INT,
            FLOAT,
            CHAR,
            STRING,
            BOOL,
            CLASS,
            STATIC,
            VOID,
            MAIN,
            ARGS,
            NEW,
            CONSOLE,
            WRITELINE,
            WRITE,
            GRAFICARVECTOR,
            IF,
            ELSE,
            SWITCH,
            CASE,
            BREAK,
            DEFAULT,
            FOR,
            WHILE,
            FALSE,
            TRUE,
  }

class ErrorA{
    private _valor: string;
    public get valor(): string {
        return this._valor;
    }
    public set valor(value: string) {
        this._valor = value;
    }
    private _contadorE: number;
    public get contadorE(): number {
        return this._contadorE;
    }
    public set contadorE(value: number) {
        this._contadorE = value;
    }
    private _fila: number;
    public get fila(): number {
        return this._fila;
    }
    public set fila(value: number) {
        this._fila = value;
    }
    private _columna: number;
    public get columna(): number {
        return this._columna;
    }
    public set columna(value: number) {
        this._columna = value;
    }
    private _descripcion: string;
    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }

    private _tipo: string;
    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }
    constructor(valor:string, contadorE:number, fila:number, columna:number,descripcion:string,tipo:string){
        this._valor=valor;
        this._contadorE=contadorE;
        this._fila=fila;
        this._columna=columna;
        this._descripcion=descripcion;
        this._tipo=tipo;
    }
}
var     listaToken:Array<Token> = new Array<Token>();
var     ListError:Array<ErrorA> = new Array<ErrorA>();
class AnalizadorLexico{
    constructor(){}
    listaToken = new Array<Token>();
    
    fila=1; columna=0; estado = 0; contadorTK = 1; contadorE = 1; columnaiT = 0; comp=true; auxiliar:string=""; 
    start(cadena:String){
        ListError = new Array<ErrorA>();
         var c;

         for (let index = 0; index < cadena.length; index++) {
             c=cadena.charAt(index); //Contendra el caracter que va leyendo
             if (c == '\n') { this.fila++; this.columna = 0; } else { this.columna++; } //Va contar las filas y columnas
             if (c != '\n' && c!=' ' && this.comp) { this.columnaiT = this.columna; this.comp = false; }
             switch (this.estado) {
                 case 0:
                    if((c.charCodeAt(0) >= 65 && c.charCodeAt(0)<91) ||(c.charCodeAt(0) >= 97 && c.charCodeAt(0)<123)){ this.auxiliar+=c; this.estado=1;}                   
                    else if(c=='_'){this.auxiliar+=c; this.estado=2;} 
                    else if(c.charCodeAt(0)>47 && c.charCodeAt(0)<58){this.auxiliar+=c; this.estado=3;}
                    else if(c=='"'){this.auxiliar+=c; this.estado=6;}
                    else if(c=='\''){this.auxiliar+=c; this.estado=8;}
                    else if(c=='/'){this.auxiliar+=c; this.estado=11;}
                    else if (c=='{') { this.auxiliar += c; this.agregarTk(TipoToken.LLAVE_IZ); }
                    else if (c=='}') { this.auxiliar += c; this.agregarTk(TipoToken.LLAVE_DE); }
                    else if (c=='(') { this.auxiliar += c; this.agregarTk(TipoToken.PARENTISIS_IZ); }
                    else if (c==')') { this.auxiliar += c; this.agregarTk(TipoToken.PARENTISIS_DE); }
                    else if (c=='[') { this.auxiliar += c; this.agregarTk(TipoToken.CORCHETE_IZ); }
                    else if (c==']') { this.auxiliar += c; this.agregarTk(TipoToken.CORCHETE_DE); }
                    else if (c=='+') { this.auxiliar += c; this.agregarTk(TipoToken.SUMA); }
                    else if (c=='-') { this.auxiliar += c; this.agregarTk(TipoToken.RESTA); }
                    else if (c=='*') { this.auxiliar += c; this.agregarTk(TipoToken.MULTIPLICACION); }
                    else if (c=='=') { this.auxiliar += c; this.agregarTk(TipoToken.IGUAL); }
                    else if (c==':') { this.auxiliar += c; this.agregarTk(TipoToken.DOS_PUNTOS); }
                    else if (c==';') { this.auxiliar += c; this.agregarTk(TipoToken.PUNTO_Y_COMA); }
                    else if (c=='>') { this.auxiliar += c; this.agregarTk(TipoToken.MAYOR_QUE); }
                    else if (c=='<') { this.auxiliar += c; this.agregarTk(TipoToken.MENOR_QUE); }
                    else if (c=='!') { this.auxiliar += c; this.agregarTk(TipoToken.EXCLAMACION); }
                    else if (c==',') { this.auxiliar += c; this.agregarTk(TipoToken.COMA); }
                    else if (c=='.') { this.auxiliar += c; this.agregarTk(TipoToken.PUNTO); }
                    else{
                        if(c!='\n' && c.charCodeAt(0)!=32 && c.charCodeAt(0)!=9 && c.charCodeAt(0)!=13 ){
                            this.auxiliar+=c;
                            this.agregarErrores("El simbolo no es parte del sistema","Lexico");
                        }
                    }
                    break;
                 case 1:
                     if((c.charCodeAt(0) >= 65 && c.charCodeAt(0)<91) ||(c.charCodeAt(0) >= 97 && c.charCodeAt(0)<123)){this.auxiliar+=c; this.estado=1;}
                     else if (c=='_') { this.auxiliar+=c; this.estado=2; }
                     else if (c.charCodeAt(0)>47 && c.charCodeAt(0)<58){ this.auxiliar+=c; this.estado=2; }
                     else { this.verificarPR();index--;this.columna--;}
                     break;
                 case 2:
                    if((c.charCodeAt(0) >= 65 && c.charCodeAt(0)<91) ||(c.charCodeAt(0) >= 97 && c.charCodeAt(0)<123)){this.auxiliar+=c; this.estado=2;}
                    else if (c=='_') { this.auxiliar+=c; this.estado=2; }
                     else if (c.charCodeAt(0)>47 && c.charCodeAt(0)<58){ this.auxiliar+=c; this.estado=2; }
                     else { this.agregarTk(TipoToken.VARIABLE);index--;this.columna--;}
                    break;
                case 3:
                    if(c.charCodeAt(0)>47 && c.charCodeAt(0)<58){this.auxiliar+=c; this.estado=3;}
                    else if(c=='.'){this.auxiliar+=c; this.estado=4;}
                    else{this.agregarTk(TipoToken.NUMERO_ENTERO); index--; this.columna--;}
                    break;
                case 4:
                    if(c.charCodeAt(0)>47 && c.charCodeAt(0)<58){this.auxiliar+=c; this.estado=5;}
                    else{this.agregarErrores("Se esperaba un numero despues del punto no:"+c,"Tipo Sintactico");index--; this.columna--;}
                    break;
                case 5:
                    if(c.charCodeAt(0)>47 && c.charCodeAt(0)<58){this.auxiliar+=c; this.estado=5;}
                    else{this.agregarTk(TipoToken.NUMERO_PD);index--; this.columna--;}
                    break;
                case 6:
                    if(c=='"'){this.auxiliar+=c; this.agregarTk(TipoToken.CADENA);}
                    else if(c=='\\'){this.auxiliar+=c; this.estado=7}
                    else{this.auxiliar+=c;}
                    break;
                case 7:
                    this.auxiliar+=c; this.estado=6;
                    break;
                case 8:
                    if(c=='\\'){ this.auxiliar+=c; this.estado=9;}
                    else{this.auxiliar+=c; this.estado=10;}
                    break;
                case 9:
                    this.auxiliar+=c; this.estado=10;
                    break;
                case 10:
                    if(c=='\''){this.auxiliar+=c; this.agregarTk(TipoToken.CARACTER);}
                    else{this.agregarErrores("Se esperaba un ' no el caracter: "+c,"Sintactico");index--;this.columna--;}
                    break;
                case 11:
                    if(c=='/'){this.auxiliar+=c; this.agregarTk(TipoToken.COMENTARIO_LINEA); this.estado=12;}
                    else if(c=='*'){ this.auxiliar+=c; this.agregarTk(TipoToken.COMENTARIO_ABRE);this.estado=13;}
                    else{ this.agregarTk(TipoToken.DIVISION); index--; this.columna--; }
                    break;
                case 12:
                    if(c!='\n'){this.auxiliar+=c; this.estado=12;}
                    else{this.agregarTk(TipoToken.CADENA)}
                    break;
                case 13:
                    if(c=='*'){this.auxiliar+=c; this.estado=14;}
                    else{this.auxiliar+=c; this.estado=13;}
                    break;
                case 14:
                    if(c=='/'){this.agregarTk(TipoToken.CADENA); this.auxiliar+=c; this.agregarTk(TipoToken.COMENTARIO_CIERRA);}
                    else{this.auxiliar+=c; this.estado=13;}
                    break;
                 default:

                     break;
             }
         }

         
         if (ListError.length==0) {
            
            var table = document.getElementById('Table1') as HTMLTableElement;
            
            var i:number =1
            listaToken.forEach(element => {
                
                var newRow = table.insertRow(i);

                var cell1= newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var cell4 = newRow.insertCell(3);
                var cell5 = newRow.insertCell(4);
    
                cell1.innerHTML = element.contador+"";
                cell2.innerHTML = element.valor;
                cell3.innerHTML = element.tipoToken+"";
                cell4.innerHTML = element.fila+"";
                cell5.innerHTML = element.columna+"";
                i++;
            });

           let ns: AnalizadorSintactico  =new AnalizadorSintactico();
           ns.analisCompleto();
         }else{
            var table2 = document.getElementById('Table2') as HTMLTableElement;
            var k:number =1
                ListError.forEach(element => {
                    var newRow2 = table2.insertRow(k);

                    var cell11= newRow2.insertCell(0);
                    var cell21 = newRow2.insertCell(1);
                    var cell31 = newRow2.insertCell(2);
                    var cell41 = newRow2.insertCell(3);
                    var cell51 = newRow2.insertCell(4);
                    var cell61 = newRow2.insertCell(5);
        
                    cell11.innerHTML = element.contadorE+"";
                    cell21.innerHTML = element.valor;
                    cell31.innerHTML = element.descripcion+"";
                    cell41.innerHTML = element.tipo+"";
                    cell51.innerHTML = element.fila+"";
                    cell61.innerHTML = element.columna+"";
                k++;
                });
         }
         
    }

    verificarPR(){
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
    }

    agregarTk(tipoTk:TipoToken){
       listaToken.push(new Token(tipoTk,this.auxiliar,this.fila,this.columnaiT,this.contadorTK));
        this.auxiliar="";
        this.contadorTK++;
        this.comp=true;
        this.estado=0;
    }

    agregarErrores(descError:string, tipo:string) {
        ListError.push(new ErrorA(this.auxiliar, this.contadorE, this.fila, this.columna,descError,tipo));
        this.auxiliar = "";
        this.contadorE++;
        this.comp = true;
        this.estado = 0;
    }
}

var indice_token = 0;
var traduccion:string="";
class AnalizadorSintactico{
    contadorErrores=ListError.length;
    indice_token=0;
    traduccion="";
    analisCompleto(){
        while(indice_token < listaToken.length){
            if(listaToken[indice_token].tipoTk==TipoToken.VOID){
                indice_token++;
                if(listaToken[indice_token].tipoTk==TipoToken.MAIN){
                  this.metodo_main();  
                }else if(listaToken[indice_token].tipoTk==TipoToken.VARIABLE){
                  this.metodoC();
                }else{
                    this.errror_sintactico("Se esperaba un Token void o un main");
                }
            }
        }
        if (ListError.length==0) {
            
         }else{
            var table2 = document.getElementById('Table2') as HTMLTableElement;
            var k:number =1
                ListError.forEach(element => {
                    var newRow2 = table2.insertRow(k);

                    var cell11= newRow2.insertCell(0);
                    var cell21 = newRow2.insertCell(1);
                    var cell31 = newRow2.insertCell(2);
                    var cell41 = newRow2.insertCell(3);
                    var cell51 = newRow2.insertCell(4);
                    var cell61 = newRow2.insertCell(5);
        
                    cell11.innerHTML = element.contadorE+"";
                    cell21.innerHTML = element.valor;
                    cell31.innerHTML = element.descripcion+"";
                    cell41.innerHTML = element.tipo+"";
                    cell51.innerHTML = element.fila+"";
                    cell61.innerHTML = element.columna+"";
                k++;
                });
         }
    }

    metodoC():number{
        return 0;
    }

    analisisMedio():number{

        let resultado = 1;
        if(listaToken[indice_token].tipoTk == TipoToken.CONSOLE){
            resultado = this.consoleWrite();
        }

        if(resultado == 1){
          // si se consume el error  //if(indice_token>=listaToken.length){return 1;}
            while(listaToken[indice_token].tipoTk != TipoToken.PUNTO_Y_COMA && listaToken[indice_token].tipoTk != TipoToken.LLAVE_DE){
                indice_token++;
            }
            if(listaToken[indice_token].tipoTk == TipoToken.PUNTO_Y_COMA || listaToken[indice_token].tipoTk == TipoToken.LLAVE_DE){
                indice_token++;
            }
        }
        return resultado;
        
    }
    metodo_main():number{
        if(listaToken[indice_token].tipoTk == TipoToken.MAIN){
            indice_token++;
        }else{
            this.errror_sintactico("Se esperaba un main, no un "+listaToken[indice_token].tipoToken);
            return 1;
        }
        if(listaToken[indice_token].tipoTk == TipoToken.PARENTISIS_IZ){
            indice_token++;
        }else{
            this.errror_sintactico("Se esperaba un parentesis izquierdo, no un  "+listaToken[indice_token].tipoToken);
            return 1;
        }
        if(listaToken[indice_token].tipoTk == TipoToken.PARENTISIS_DE){
            indice_token++;
        }else{
            this.errror_sintactico("Se esperaba un parentisis derecho, no un  "+listaToken[indice_token].tipoToken);
            return 1;
        }
        if(listaToken[indice_token].tipoTk == TipoToken.LLAVE_IZ){
            indice_token++;
        }else{
            this.errror_sintactico("Se esperaba una llave izquierda, no un  "+listaToken[indice_token].tipoToken);
            return 1;
        }
        while(listaToken[indice_token].tipoTk != TipoToken.LLAVE_DE){
            let resultado = this.analisisMedio();
            if(resultado == 1){
                return 1;
            }
        }
        if(listaToken[indice_token].tipoTk == TipoToken.LLAVE_DE){
            indice_token++;
        }else{
            this.errror_sintactico("Se esperaba una llave derecha, no un  "+listaToken[indice_token].tipoToken);
            return 1;
        }

        return 0;

    }
    consoleWrite():number{
        if(listaToken[indice_token].tipoTk ==TipoToken.CONSOLE){
            indice_token++;
        }else{
            this.errror_sintactico("Se esperaba un Console, no un  "+listaToken[indice_token].tipoToken);
            return 1;
        }
        if(listaToken[indice_token].tipoTk == TipoToken.PUNTO){
            indice_token++;
        }else{
            this.errror_sintactico("Se esperaba un Punto, no un  "+listaToken[indice_token].tipoToken);
            return 1;
        }
        if(listaToken[indice_token].tipoTk == TipoToken.WRITE){
            indice_token++;
        }else{
            this.errror_sintactico("Se esperaba un write, no un  "+listaToken[indice_token].tipoToken);
            return 1;
        }
        if(listaToken[indice_token].tipoTk == TipoToken.PARENTISIS_IZ){
            indice_token++;
        }else{
            this.errror_sintactico("Se esperaba un parentsis izquierdo, no un  "+listaToken[indice_token].tipoToken);
            return 1;
        }
        while(listaToken[indice_token].tipoTk != TipoToken.PARENTISIS_DE){
            //"", +,double,etc
            //Console.Write("");
            if(listaToken[indice_token].tipoTk == TipoToken.CADENA ||listaToken[indice_token].tipoTk == TipoToken.VARIABLE
                || listaToken[indice_token].tipoTk == TipoToken.NUMERO_ENTERO){
                    indice_token++;
            }else{
                this.errror_sintactico("Se esperaba una cadena, o variable, entero "+listaToken[indice_token].tipoToken);
                return 1;
            }
            if(listaToken[indice_token].tipoTk == TipoToken.SUMA){
                indice_token++;
            }else if(listaToken[indice_token].tipoTk != TipoToken.PARENTISIS_DE){
                 this.errror_sintactico("Se esperaba un parentesis derecho, no un  "+listaToken[indice_token].tipoToken);
                 return 1;   
            }

        }
        if(listaToken[indice_token].tipoTk == TipoToken.PARENTISIS_DE){
            indice_token++;
        }else{
            this.errror_sintactico("Se esperaba un parentesis derecho, no un "+listaToken[indice_token].tipoToken);
            return 1;
        }
        if(listaToken[indice_token].tipoTk == TipoToken.PUNTO_Y_COMA){
            indice_token++;
        }else{
            this.errror_sintactico("Se esperaba un punto y coma, no un  "+listaToken[indice_token].tipoToken);
            return 1;
        }
        return 0;
    }
    errror_sintactico(desc:string){
        this.contadorErrores++;
        ListError.push(new ErrorA(listaToken[indice_token].valor, this.contadorErrores,listaToken[indice_token].fila , listaToken[indice_token].columna,desc,"Sintactico"));
       // No se consume el error// indice_token++;
    }
}

class Inicio{
    start(){
        var analizadorLexico:AnalizadorLexico = new AnalizadorLexico();
        var cadena = (document.getElementById("txtA1") as HTMLInputElement).value;
        analizadorLexico.start(cadena);
    }
}