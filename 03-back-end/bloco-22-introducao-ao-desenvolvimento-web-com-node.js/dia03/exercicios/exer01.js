
module.exports = function main(number) {
  if (typeof numero !== 'number') {
    return 'o parâmetro deve ser um número';
  }
  if(number > 0) return 'positivo';
  
  if(number < 0) return 'negativo';
  return 'neutro';
}