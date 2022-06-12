import tictactoe from '../ejercicios/tictactoe';

let pastTest = 0;

describe('[RETO 3]: Algotimo tictactoe', () => {
  afterAll(() => {
    if(pastTest === 4){
      console.log('[PERFECTO]: felicidades completaste el reto Nº1 porfavor coloca el siguiente codigo en ubits <<JSBIT3-858JM-TT>>')
    }
  })
  it('test 1: tictactoe', () => {
    const entrada = [
      ['X', '', 'O'],
      ['', 'X', 'O'],
      ['O', '', 'X']
    ];
    const salida = true;
    try{
      pastTest = pastTest+1;
      expect(tictactoe(entrada)).toStrictEqual(salida);
    }catch(e) {
      pastTest = 0;
      console.error('[FALLA]: revisa tu funcion el test 1 esta fallando :(')
    }
  })
  it('test 2: tictactoe', () => {
    const entrada = [
      ['X', '', 'O'],
      ['', 'O', 'X'],
      ['O', '', 'X']
    ];
    const salida = true;
    try{
      pastTest = pastTest+1;
      expect(tictactoe(entrada)).toStrictEqual(salida);
    }catch(e) {
      pastTest = 0;
      console.error('[FALLA]: revisa tu funcion el test 2 esta fallando :(')
    }
  })
  it('test 3: tictactoe', () => {
    const entrada = [
      ['X', 'O', 'O'],
      ['X', '', ''],
      ['O', 'O', 'X']
    ];
    const salida = false;
    try{
      pastTest = pastTest+1;
      expect(tictactoe(entrada)).toStrictEqual(salida);
    }catch(e) {
      pastTest = 0;
      console.error('[FALLA]: revisa tu funcion el test 3 esta fallando :(')
    }
  })
  it('test 4: tictactoe', () => {
    const entrada = [
      ['X', 'O', 'X'],
      ['X', 'O', 'O'],
      ['O', 'X', 'O']
    ];
    const salida = false;
    try{
      pastTest = pastTest+1;
      expect(tictactoe(entrada)).toStrictEqual(salida);
    }catch(e) {
      pastTest = 0;
      console.error('[FALLA]: revisa tu funcion el test 4 esta fallando :(')
    }
  })
})