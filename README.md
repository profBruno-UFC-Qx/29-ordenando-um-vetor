# Descrição

Neste exercício, você irá uma função que filtra um vetor com base em um critério qualquer de filtragem.

Objetivo desse exercício é praticar a ordenação de vetores em JavaScript.

**Todas as alterações devem ser feitas nos arquivos já existentes**

* src/main.js -> quando for necessário alterar JavaScript

## Instruções:

Considere que uma tarefa é representada por objeto que possui as seguintes propriedades como mostra o exemplo abaixo: título, concluida, prioridade e data.

```js
const tarefas = [
  { titulo: "Estudar JavaScript", concluida: false, prioridade: 2, data: "2023-08-15" };
  { titulo: "Estudar HTML e CSS", concluida: true, prioridade: 1, data: "2023-08-10" }
]
```

1. Crie uma função chamada ordenarTarefas que aceita dois argumentos: o array de tarefas e um critério de ordenação (por exemplo, "prioridade" ou "titulo") e ordem (crescente ou decrescente).
2. Implemente a lógica para ordenar o array de tarefas com base no critério fornecido.
  -  Se o critério for "prioridade", as tarefas devem ser ordenadas pela propriedade prioridade.
3. A função deve retornar o vetor ordenado.
4. Quando uma ordem ou uma propriedade inválida for informada, uma exceção deve ser lançada.

Exemplo:

```js
const tarefas = [
  { titulo: "Estudar JavaScript", data: "2023-08-15" },
  { titulo: "Fazer compras", data: "2023-08-10" },
  // ...
];

const tarefasOrdenadasPorData = ordenarTarefas(tarefas, "data", "crescente");
console.log(tarefasOrdenadasPorData);
```

