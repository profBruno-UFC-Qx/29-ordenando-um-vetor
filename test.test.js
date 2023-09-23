const ordenarTarefas = require('./src/main.js');

const ASC = "crescente";
const DESC = "decrescente"

const inicializarTarefas = () =>  {
  return [
    { titulo: "Estudar JavaScript", concluida: false, prioridade: 1, data: "2023-08-17" },
    { titulo: "Fazer compras", concluida: true, prioridade: 3, data: "2023-08-17" },
    { titulo: "Estudar CSS", concluida: false, prioridade: 2, data: "2023-08-15" },
  ]
}

test('A função ordenarTarefas existe', () => {
  expect(ordenarTarefas).toBeDefined()
  expect(typeof ordenarTarefas).toBe("function");
});

test('Ordenando um vetor vazio', () => {
  const tarefas = []
  const resultado = ordenarTarefas(tarefas, 'concluida', ASC)
  expect(resultado.length).toBe(0);
  expect(resultado).toEqual([]);
});

test("Tentando ordenar usando uma ordem inválida", () => {
  const tarefas = inicializarTarefas()
  expect(() => ordenarTarefas(tarefas, 'concluida', "dsdas")).toThrow()
})

test('Ordenando por conclusão', () => {
  let tarefas = inicializarTarefas()

  let resultado = ordenarTarefas([...tarefas], 'concluida', DESC)
  tarefas.sort( (a, b) => b["concluida"] - a["concluida"])
  expect(resultado).toEqual(tarefas);

  tarefas = inicializarTarefas()
  resultado = ordenarTarefas([...tarefas], 'concluida', ASC)
  tarefas.sort((a, b) => a["concluida"] - b["concluida"])
  expect(resultado).toEqual(tarefas);
});

test('Ordenando por prioridade', () => {
  let tarefas = inicializarTarefas()

  let resultado = ordenarTarefas([...tarefas], 'prioridade', DESC)
  tarefas.sort( (a, b) => b["prioridade"] - a["prioridade"])
  expect(resultado).toEqual(tarefas);

  tarefas = inicializarTarefas()
  resultado = ordenarTarefas([...tarefas], 'prioridade', ASC)
  tarefas.sort((a, b) => a["prioridade"] - b["prioridade"])
  expect(resultado).toEqual(tarefas);
});

test('Ordenando por data', () => {
  let tarefas = inicializarTarefas()

  let resultado = ordenarTarefas([...tarefas], 'data', DESC)
  tarefas.sort( (a, b) => b["data"] - a["data"])
  expect(resultado).toEqual(tarefas);

  tarefas = inicializarTarefas()
  resultado = ordenarTarefas([...tarefas], 'data', ASC)
  tarefas.sort((a, b) => a["data"] - b["data"])
  expect(resultado).toEqual(tarefas);
});

test('Ordenando por titulo', () => {
  let tarefas = inicializarTarefas()

  let resultado = ordenarTarefas([...tarefas], 'titulo', DESC)
  tarefas.sort( (a, b) => b["titulo"] - a["titulo"])
  expect(resultado).toEqual(tarefas);

  tarefas = inicializarTarefas()
  resultado = ordenarTarefas([...tarefas], 'titulo', ASC)
  tarefas.sort((a, b) => a["titulo"] - b["titulo"])
  expect(resultado).toEqual(tarefas);
});