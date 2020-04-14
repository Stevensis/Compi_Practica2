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
  
  
   constructor(tipoTk:TipoToken,valor:string,fila:number,columna:number,contador:number){
        this._fila=fila;
        this._columna=columna;
        this._contador=contador;
        this._valor=valor;
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

class AnalizadorLexico{
    constructor(){}
    listaToken:Array<Token> = new Array<Token>();
    start(cadena:String){
        this.listaToken.push(new Token(TipoToken.CLASS,"llega1",1,1,1));
         this.listaToken.push(new Token(TipoToken.CLASS,"llega2",1,1,2));

         this.listaToken.forEach(element => {
             console.log(element.valor);
         });
    }
}

class Inicio{

    start(){
        console.log("Jala puto");
        var analizadorLexico:AnalizadorLexico = new AnalizadorLexico();
        var cadena = (document.getElementById("txtA1") as HTMLInputElement).value;
        console.log(cadena);
        analizadorLexico.start(cadena);
    }
}