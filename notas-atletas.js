console.log("========== RESULTADOS ========== ")
//matriz de objetos e implementando
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
//percorrer a matriz de objetos usando o for
for (let i = 0; i < atletas.length;i++){
  //exibe nome de cada atleta
  console.log(`Atleta ${i+1}: ${atletas[i].nome}`);
  //ordenar as notas de cada atleta de forma crescente
    atletas[i].notas.sort(function(a,b){
    return a-b
  });
    console.log(`Notas obtidas:${atletas[i].notas}`);
    let notasValidas = atletas[i].notas.slice(1,4);
    //console.log(notasValidas);
    //console.log(notasValidas.length);
  //somando as notas da matriz só com as três notas  válidas
  let somaNotas = 0;
  notasValidas.forEach(function(nota){
    somaNotas = somaNotas + nota;
  });
  let mediaNotas = somaNotas / notasValidas.length;
  let mediaExibida = mediaNotas.toFixed(2);
  console.log(`Média válida: ${mediaExibida}`);
  
}
