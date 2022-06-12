import aplanar from '../ejercicios/aplanar';

let pastTest = 0;

describe('[RETO 1]: Algotimo aplanar', () => {
  afterAll(() => {
    if(pastTest === 4){
      console.log('[PERFECTO]: felicidades completaste el reto Nº1 porfavor coloca el siguiente codigo en ubits <<JSBIT3-740CB-AP>>')
    }
  })
  it('test 1: aplana dos nivel de arrays', () => {
    const entrada = [[1, 2, 3], [4, 5]];
    const salida = [1, 2, 3, 4, 5];
    try{
      pastTest = pastTest+1;
      expect(aplanar(entrada)).toStrictEqual(salida);
    }catch(e) {
      pastTest = 0;
      console.error('[FALLA]: revisa tu funcion el test 1 esta fallando :(')
    }
  })
  it('test 2: aplana tres nivel de arrays', () => {
    const entrada = [[[1, [1.1]], 2, 3], [4, 5]];
    const salida = [1, 1.1, 2, 3, 4, 5];
    try{
      pastTest = pastTest+1;
      expect(aplanar(entrada)).toStrictEqual(salida);
    }catch(e) {
      pastTest = 0;
      console.error('[FALLA]: revisa tu funcion el test 2 esta fallando :(')
    }
  })
  it('test 3: aplana cuatro nivel de arrays', () => {
    const entrada = [[1, 2, [3, [4,5], 6]], [7, 8]];
    const salida = [1, 2, 3, 4, 5, 6 , 7, 8];
    try{
      pastTest = pastTest+1;
      expect(aplanar(entrada)).toStrictEqual(salida);
    }catch(e) {
      pastTest = 0;
      console.error('[FALLA]: revisa tu funcion el test 3 esta fallando :(')
    }
  })
  it('test 4: aplana cinco nivel de arrays', () => {
    const entrada = [[1, 2, [3, [4, [5, 6], 7], 8]], [9, 0]];
    const salida = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 0];
    try{
      pastTest = pastTest+1;
      expect(aplanar(entrada)).toStrictEqual(salida);
    }catch(e) {
      pastTest = 0;
      console.error('[FALLA]: revisa tu funcion el test 4 esta fallando :(')
    }
  })
})