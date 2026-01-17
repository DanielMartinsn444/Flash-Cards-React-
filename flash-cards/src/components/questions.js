export const questions = [
    {
        questionId: 1,
        questionText: "Quais as diferenças de escopo entre var, let e const?",
        correctAnswer: "var possui escopo de função e sofre hoisting total; let e const possuem escopo de bloco e residem na Temporal Dead Zone (TDZ) até a declaração."
    },
    {
        questionId: 2,
        questionText: "Explique a diferença entre igualdade abstrata (==) e estrita (===).",
        correctAnswer: "== realiza coerção de tipos antes da comparação; === verifica a identidade, exigindo que valor e tipo sejam estritamente iguais."
    },
    {
        questionId: 3,
        questionText: "Como funciona o Hoisting para funções e variáveis no motor JS?",
        correctAnswer: "É o levantamento em memória de declarações durante a fase de criação do contexto de execução, antes da execução real do código."
    },
    {
        questionId: 4,
        questionText: "Por que 'typeof null' retorna 'object'?",
        correctAnswer: "Trata-se de um bug legado da implementação original do JavaScript, onde null foi representado por um ponteiro nulo (0x00), confundido com o marcador de objetos."
    },
    {
        questionId: 5,
        questionText: "Qual a forma mais segura de validar se uma variável é um array?",
        correctAnswer: "Utilizando Array.isArray(), pois o operador typeof falha ao identificar arrays como 'object'."
    },
    {
        questionId: 6,
        questionText: "Qual a principal restrição léxica das Arrow Functions?",
        correctAnswer: "Elas não possuem seu próprio binding de 'this', 'arguments' ou 'super', herdando esses valores do escopo pai (lexical scoping)."
    },
    {
        questionId: 7,
        questionText: "Qual a característica fundamental do método .map() em termos de funcionalidade?",
        correctAnswer: "É um método imutável que retorna um novo array de mesma extensão, aplicando uma função de callback como transformação de cada elemento."
    },
    {
        questionId: 8,
        questionText: "Diferencie semanticamente null de undefined.",
        correctAnswer: "undefined indica que a variável foi declarada mas não inicializada; null representa a ausência intencional de qualquer valor de objeto."
    },
    {
        questionId: 9,
        questionText: "Defina tecnicamente o conceito de Closure.",
        correctAnswer: "É a persistência do escopo léxico de uma função mesmo após ela ter sido executada fora do seu escopo original de definição."
    },
    {
        questionId: 10,
        questionText: "O que ocorre nas operações '5' + 2 e '5' - 2?",
        correctAnswer: "Na adição ocorre concatenação por coerção para string ('52'); na subtração ocorre coerção numérica do operando ('5' vira 5), resultando em 3."
    },
    {
        questionId: 11,
        questionText: "Como o Event Loop gerencia a Call Stack e a Task Queue?",
        correctAnswer: "O Event Loop monitora a Call Stack; quando vazia, ele move callbacks da Microtask Queue (Promises) e Task Queue para execução."
    },
    {
        questionId: 12,
        questionText: "Qual o impacto do operador Spread (...) em objetos aninhados?",
        correctAnswer: "Ele realiza uma 'Shallow Copy' (cópia rasa), o que significa que referências de objetos internos ainda apontam para o mesmo endereço de memória."
    },
    {
        questionId: 13,
        questionText: "Por que a imutabilidade é crucial em frameworks como React?",
        correctAnswer: "Permite otimização via comparação por referência (Shallow Comparison) para detectar mudanças de estado e disparar re-renderizações eficientes."
    },
    {
        questionId: 14,
        questionText: "Quais são os três estados possíveis de uma Promise?",
        correctAnswer: "Pending (pendente), Fulfilled (resolvida com sucesso) ou Rejected (rejeitada com erro)."
    },
    {
        questionId: 15,
        questionText: "O que o 'Strict Mode' proíbe explicitamente no JavaScript?",
        correctAnswer: "Proíbe a criação acidental de variáveis globais, o uso de palavras reservadas futuras e falhas silenciosas de atribuição."
    },
    {
        questionId: 16,
        questionText: "Qual a vantagem do operador unário '+' sobre o parseInt()?",
        correctAnswer: "O operador unário é mais performático e restritivo, enquanto parseInt realiza parsing parcial de strings que começam com números."
    },
    {
        questionId: 17,
        questionText: "Qual a diferença entre os comandos 'break' e 'continue'?",
        correctAnswer: "break encerra o loop completamente; continue interrompe apenas a iteração atual e salta para a próxima."
    },
    {
        questionId: 18,
        questionText: "Como as Template Literals tratam quebras de linha e expressões?",
        correctAnswer: "Elas preservam espaços em branco/quebras de linha nativamente e utilizam interpolação via placeholders ${expression}."
    },
    {
        questionId: 19,
        questionText: "Em termos de retorno/função, qual a diferença entre .forEach() e .reduce()?",
        correctAnswer: ".forEach sempre retorna undefined; .reduce retorna um único valor acumulado resultante da redução do array."
    },
    {
        questionId: 20, 
        questionText: "O que caracteriza o DOM como uma interface agnóstica?",
        correctAnswer: "Ele é uma representação estruturada em árvore (Tree) que permite que linguagens de programação acessem e manipulem dinamicamente o conteúdo e estilo de documentos."
    }
]; 