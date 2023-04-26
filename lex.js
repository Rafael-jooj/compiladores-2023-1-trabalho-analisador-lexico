class Token{
    constructor(tipo, valor){
        this.tipo = tipo;
        this.valor = valor;
    }
}
var erro = '';
const reservedWords = ['int', 'char', 'long', 'short', 'float', 'double', 'void', 'if', 'else', 'for', 'while', 'do', 'break', 'continue', 'struct', 'switch', 'case', 'default'];
// const operators= ['=', '+', '-', '*', '/', '++', '--', '!', '&', '%', '->', '==', '!=', '||', '&&', '+=', '-=', '*=', '/=', '<', '>', '<=', '>='];
// const delimitadores = ['(', ')', '{', '}', '[', ']', ',', ';'];

function gerarToken(input){
    const tokens = [];  //Lista de todos os tokens ao final da execução
    var currentInput = 0; //contador
    erro = '';

    //Percorrendo caracter por caracter
    while(currentInput < input.length){
        let currentChar = input[currentInput]

        //desconsiderando comentários de linha
        if(currentChar === '/' && input[currentInput+1] === '/'){
            const endLine = input.indexOf("\n", currentInput);
            if(endLine === -1) break;
            currentInput = endLine;
        }

        //Desconsiderando comentários em bloco
        else if(currentChar === '/' && input[currentInput+1] === '*'){
            currentInput++;
            const endComent = input.indexOf("*/", currentInput + 2);
            currentInput = endComent +2;
            continue
        }

        //Desconsiderando espaços
        else if(/\s/.test(currentChar)){
            currentInput++
            continue;
        }

        //reconhecer números inteiros e floats
        else if(/\d/.test(currentChar)){
            let valueNumber = '';
            if(/[a-zA-Z]/.test(input[currentInput +1])){
                valueErro = currentChar + input[currentInput +1];
                console.log(`Erro léxico --> ${valueErro}`)
                erro += `Erro léxico --> ${valueErro}`
                break;
            }
            while(/[\d\.]/.test(currentChar)){
                valueNumber += currentChar;
                currentChar = input[++currentInput]
            }
            convertNumber = parseFloat(valueNumber);
            if(convertNumber % 1 === 0){
                tokens.push(new Token('constante numérica inteira', convertNumber));
            } else{
                tokens.push(new Token('constante numérica ponto flutuante', convertNumber));
            }
            continue;
        }

        //reconhecer identificadores e palavras reservadas
        else if (/[a-zA-Z0-9_]/.test(currentChar)){
            let valueId = '';
            while(/[a-zA-Z0-9_]/.test(currentChar)){
                valueId += currentChar;
                currentChar = input[++currentInput]
            }
            if(reservedWords.some((valor)=> valor == valueId)){
                tokens.push(new Token('palavra reservada', valueId));
            } else{
                tokens.push(new Token('identificador', valueId));
            }
            continue;
        }

        //reconhecer operadores
        else if (/[\=\+\-\*\/\!\&\%\>\<\|]/.test(currentChar)){
            let valueOp = '';
            valueOp += currentChar
            currentInput++
            currentChar = input[currentInput]
            if(/[\=\+\-\*\/\!\&\%\>\<\|]/.test(currentChar)){
                valueOp += currentChar;
                currentInput++;
            }
            tokens.push(new Token('operador', valueOp))
            continue;
        }

        //reconhecer delimitadores
        else if(/[\(\)\[\]\{\}\,\;\:]/.test(currentChar)){
            tokens.push(new Token('delimitador', currentChar))
            currentInput++;
            continue
        }

        //reconhecer constante textual
        else if(/['"]/.test(currentChar)){
            let valueContante = '';
            const aspas = currentChar;
            currentInput++;
            currentChar = input[currentInput]
            while(currentChar !== aspas){
                valueContante += currentChar;
                currentChar = input[++currentInput];
            }
            tokens.push(new Token('constante literal', valueContante));
        }

        //Erro por caractéres inválidos
        else{
            console.log(`Entrada inválida, Erro léxico --> ${currentChar}`)
            erro += `Entrada inválida, Erro léxico --> ${currentChar}`;
            break;
        }

        currentInput ++;
    }

    return tokens;
}

function gerarEvento(){
    const entrada3 = document.getElementById("input").value
    const tokens = gerarToken(entrada3);

    const lista = document.getElementById("terminal-ul");
    const erroLex = document.getElementById("erroLex");

    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }


    tokens.map((item)=>{
        const tok = document.createElement('li')
        tok.innerHTML = `< ${item.tipo}, ${item.valor} >`
        lista.appendChild(tok)
    });

    erroLex.innerHTML = `${erro}`;

}

