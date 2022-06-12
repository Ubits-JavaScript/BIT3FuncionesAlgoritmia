import anagrama from '../ejercicios/anagrama';

let pastTest = 0;

describe('[RETO 2]: Algotimo anagrama', () => {
  afterAll(() => {
    if(pastTest === 4){
      console.log('[PERFECTO]: felicidades completaste el reto Nº1 porfavor coloca el siguiente codigo en ubits <<JSBIT3-832JB-AG>>')
    }
  })
  it('test 1: anagrama cornisa narciso', () => {
    const entrada1 = "cornisa";
    const entrada2 = "narciso";
    const salida = true;
    try{
      pastTest = pastTest+1;
      expect(anagrama(entrada1, entrada2)).toStrictEqual(salida);
    }catch(e) {
      pastTest = 0;
      console.error('[FALLA]: revisa tu funcion el test 1 esta fallando :(')
    }
  })
  it('test 2: anagrama acuerdo ecuador', () => {
    const entrada1 = "acuerdo";
    const entrada2 = "ecuador";
    const salida = true;
    try{
      pastTest = pastTest+1;
      expect(anagrama(entrada1, entrada2)).toStrictEqual(salida);
    }catch(e) {
      pastTest = 0;
      console.error('[FALLA]: revisa tu funcion el test 2 esta fallando :(')
    }
  })
  it('test 3: anagrama hello word', () => {
    const entrada1 = "hello";
    const entrada2 = "word";
    const salida = false;
    try{
      pastTest = pastTest+1;
      expect(anagrama(entrada1, entrada2)).toStrictEqual(salida);
    }catch(e) {
      pastTest = 0;
      console.error('[FALLA]: revisa tu funcion el test 3 esta fallando :(')
    }
  })
  it('test 4: anagrama testing functions', () => {
    const entrada1 = "testing";
    const entrada2 = "functions";
    const salida = false;
    try{
      pastTest = pastTest+1;
      expect(anagrama(entrada1, entrada2)).toStrictEqual(salida);
    }catch(e) {
      pastTest = 0;
      console.error('[FALLA]: revisa tu funcion el test 4 esta fallando :(')
    }
  })
})