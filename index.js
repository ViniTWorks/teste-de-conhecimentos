const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "var nome = 'João';",
        "nome = 'João';",
        "nome := 'João';",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão 2 + '3' em JavaScript?",
      respostas: [
        "5",
        "'23'",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre == e === em JavaScript?",
      respostas: [
        "== compara apenas os valores, enquanto === compara os valores e os tipos.",
        "== compara apenas os tipos, enquanto === compara os valores e os tipos.",
        "Não há diferença, ambos são operadores de igualdade.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra-chave usada para definir uma função em JavaScript?",
      respostas: [
        "function",
        "def",
        "func",
      ],
      correta: 0
    },
    {
      pergunta: "Como se escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// comentário",
        "# comentário",
        "<!-- comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "Como se cria um array em JavaScript?",
      respostas: [
        "var array = [1, 2, 3];",
        "var array = array(1, 2, 3);",
        "var array = new Array(1, 2, 3);",
      ],
      correta: 0
    },
    {
      pergunta: "Como se acessa o primeiro elemento de um array em JavaScript?",
      respostas: [
        "array[0]",
        "array[1]",
        "array.first",
      ],
      correta: 0
    },
    {
      pergunta: "Como se adiciona um elemento ao final de um array em JavaScript?",
      respostas: [
        "array.push(elemento);",
        "array.append(elemento);",
        "array.add(elemento);",
      ],
      correta: 0
    },
    {
      pergunta: "Como se remove o último elemento de um array em JavaScript?",
      respostas: [
        "array.pop();",
        "array.remove();",
        "array.delete();",
      ],
      correta: 0
    },
    {
      pergunta: "Como se faz um loop for em JavaScript?",
      respostas: [
        "for (var i = 0; i < array.length; i++) { ... }",
        "for i in range(0, array.length): { ... }",
        "for each i in array { ... }",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // Loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  };