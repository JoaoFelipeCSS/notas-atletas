console.log("JS carregou");
console.log("========== RESULTADOS ==========")

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

const container = document.getElementById("resultado");
console.log(container);

for (let i = 0; i < atletas.length; i++){

  let atleta = atletas[i];

  // ordenar notas
  atleta.notas.sort((a,b) => a - b);

  // pegar notas válidas
  let notasValidas = atleta.notas.slice(1,4);

  // calcular média
  let somaNotas = 0;
  notasValidas.forEach(nota => {
    somaNotas += nota;
  });

  let media = (somaNotas / notasValidas.length).toFixed(2);

  // criar card na tela
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h2>${atleta.nome}</h2>
    <p><strong>Notas:</strong> ${atleta.notas.join(", ")}</p>
    <p><strong>Média válida:</strong> ${media}</p>
  `;

  container.appendChild(card);
}