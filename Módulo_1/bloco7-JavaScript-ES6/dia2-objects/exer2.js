const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.


const atv = (lesson2) => lesson2.turno = "Manhã"
atv(lesson2)
// console.log(lesson2)


// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
// const atv2 = (obj) => Object.keys(obj)
// console.log(atv2(lesson3));

// Crie uma função para mostrar o tamanho de um objeto.
// const atv2 = (obj) => Object.keys(obj).length
// console.log(atv2(lesson3));


// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

// const atv4 = (obj) => Object.values(obj);
// console.log(atv4(lesson2));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const destino = {}
const atv5 = Object.assign((destino),{lesson1},{lesson2},{lesson3})
// console.log(destino);


// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

console.log(destino.lesson1.numeroEstudantes + destino.lesson2.numeroEstudantes + destino.lesson3.numeroEstudantes)