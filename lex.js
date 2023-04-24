class Token{
    constructor(tipo, valor){
        this.tipo = tipo;
        this.valor = valor
    }
}

const reservedWords = ['int', 'char', 'long', 'short', 'float', 'double', 'void', 'if', 'else', 'for', 'while', 'do', 'break', 'continue', 'struct', 'switch', 'case', 'default'];
// const operators= ['=', '+', '-', '*', '/', '++', '--', '!', '&', '%', '->', '==', '!=', '||', '&&', '+=', '-=', '*=', '/=', '<', '>', '<=', '>='];
// const delimitadores = ['(', ')', '{', '}', '[', ']', ',', ';'];

function gerarToken(input){
    const tokens = [];  //Lista de todos os tokens ao final da execução
    var currentInput = 0; //contador

    //Percorrendo caracter por caracter
    while(currentInput < input.length){
        let currentChar = input[currentInput]

        //reconhecer números inteiros e floats
        if(/\d/.test(currentChar)){
            let valueNumber = '';
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
        if (/[a-zA-Z0-9]/.test(currentChar)){
            let valueId = '';
            while(/[a-zA-Z0-9]/.test(currentChar)){
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
        if (/[\=\+\-\*\/\!\&\%\>\<\|]/.test(currentChar)){
            let valueOp = '';
            valueOp += currentChar
            currentInput++
            currentChar = input[currentInput]
            if(/[\=\+\-\*\/\!\&\%\>\<\|]/.test(currentChar)){
                valueOp += currentChar;
            }
            tokens.push(new Token('operador', valueOp))
            currentInput ++;
            continue;
        }

        //reconhecer delimitadores
        if(/[\(\)\[\]\{\}\,\;]/.test(currentChar)){
            tokens.push(new Token('delimitador', currentChar))
            currentInput++;
            continue
        }

        //reconhecer constante textual
        if(/['"]/.test(currentChar)){
            let valueContante = '';
            const aspas = currentChar;
            currentInput++;
            currentChar = input[currentInput]
            while(currentChar !== aspas){
                valueContante += currentChar;
                currentChar = input[++currentInput];
            }
            tokens.push(new Token('constante literal', valueContante));
            currentInput++;
        }

        currentInput ++;
    }

    return tokens;
}


// const entrada = 'let x = 123 + 456;\nif (x > 500) {\n  console.log("x é maior que 500");\n} else {\n  console.log("x é menor ou igual a 500");\n}';
// const entrada2 = 'int main() {int ata, b, c, d; if(z || c) {return 3.14;}}'

function gerarEvento(){
    const entrada3 = document.getElementById("input").value
    const tokens = gerarToken(entrada3);
    console.log(tokens);
    console.log(entrada3);
}

