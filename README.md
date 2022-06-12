# BIT 3 - Funciones de JavaScript

Bienvenido a tu primer reto practico de Javascribt con Ubits el objetivo es que puedas
resolver los siguientes ejercicios de algoritmia usando los conocimientos
aprendidos en los primeros 3 bits del programa de JavaScript.

Para esto debes clonar este repositorio localmente en tu computador:

## Descarga el Retositorio

utiliza de las dos siguientes lineas de comandos para clonar el projecto,
recuerda ahcer esto en una ubicacion conocida (ejemplo: Documents).

#### clonar con llave SSH

```bash
  git clone git@github.com:Ubits-JavaScript/BIT3FuncionesAlgoritmia.git
```

#### clonar con protocolo HTTPS

```bash
  git clone https://github.com/Ubits-JavaScript/BIT3FuncionesAlgoritmia.git
```

## Setup del Repositorio

una ves clonado el repositorio, desde la consola ve a la ruta donde clonaste
el repositorio podria ser algo como:

```bash
  cd Documents/BIT3FuncionesAlgoritmia
```

### instala las librerias del repositorio

ahora se deben instalar las librerias con las cuales vamos a desarrollar los retos
no te preocupes no necesitas conocer el detalle detras de estas librerias solo
tienes que saber que esta librerias se usaran para comprobar que tu reto
se desarrollo exitosamente.

para esto, desde la consola ejecuta:

```bash
  npm install
```

con esto sera suficiente para iniciar el reto ¡¡

## Reto 1

Ve al archivo llamado `aplanar.js` dentro de la carpeta `ejercicios` y escribe una función
llamada `aplanar` que reciba una matriz de matrices y devuelva una matriz aplanada.

#### ejemplo 1:

```javascript
  const entrada = [[1, 2, 3], [4, 5]];
  console.log(aplanar(entrada));
  salida esperada: [1, 2, 3, 4, 5]
```

#### ejemplo 2:

```javascript
  const entrada = [[[1, [1.1]], 2, 3], [4, 5]];
  console.log(aplanar(entrada));
  salida esperada: [1, 1.1, 2, 3, 4, 5]
```

### Resultado

para saber si completaste exitosamente el reto desde la consola corre el comando:

```bash
  npm run test-aplanar
```

si todos los test pasan veras un mensaje similar a:

```bash
  [PERFECTO]: felicidades completaste el reto Nº1 porfavor coloca el siguiente codigo en ubits <<CODIGO-EXITOSO>>
```

luego en nuestra plataforma de UBITS selecciona el mismo codigo dentro de las opciones
multiples para pasar el reto ¡

si alguno de los test falla veras un mensaje en consola como:

```bash
  [FALLA]: revisa tu funcion el test 1 esta fallando :(
```

lo que implica que tienes que algo esta fallando y tienes que seguir trabajando en tu funcion.

## Reto 2

Ve al archivo llamado `anagrama.js` dentro de la carpeta `ejercicios` y escribe una función
llamada `anagrama` que reciba dos cadenas y devuelva verdadero si las cadenas son anagramas,
falso en caso contrario. Dos palabras son anagramas si una de ellas tiene exactamente los
mismos caracteres que la otra palabra

#### ejemplo 1:

```javascript
  const entrada1 = "cornisa";
  const entrada2 = "narciso";
  console.log(anagrama(entrada1, entrada2));
  salida esperada: true
```

#### ejemplo 2:

```javascript
  const entrada1 = "hola";
  const entrada2 = "mundo";
  console.log(anagrama(entrada1, entrada2));
  salida esperada: false
```

### Resultado

para saber si completaste exitosamente el reto desde la consola corre el comando:

```bash
  npm run test-anagrama
```

si todos los test pasan veras un mensaje similar a:

```bash
  [PERFECTO]: felicidades completaste el reto Nº1 porfavor coloca el siguiente codigo en ubits <<CODIGO-EXITOSO>>
```

luego en nuestra plataforma de UBITS selecciona el mismo codigo dentro de las opciones
multiples para pasar el reto ¡

si alguno de los test falla veras un mensaje en consola como:

```bash
  [FALLA]: revisa tu funcion el test 1 esta fallando :(
```

lo que implica que tienes que algo esta fallando y tienes que seguir trabajando en tu funcion.

## Reto 3

Ve al archivo llamado `tictactoe.js` dentro de la carpeta `ejercicios` y escribe una función
llamada `tictactoe` que reciba una matriz y devuelva verdadero si está ganando para 'X' u 'O'
y falso si ninguno de los dos esta ganando.

#### ejemplo 1:

```javascript
  const entrada = [
    ['X', '', 'O'],
    ['', 'X', 'O'],
    ['O', '', 'X']
    ];
  console.log(tictactoe(entrada));
  salida esperada: true
```

#### ejemplo 2:

```javascript
    const entrada = [
    ['X', '', 'X'],
    ['', 'O', 'O'],
    ['O', '', 'X']
    ];
  console.log(tictactoe(entrada));
  salida esperada: false
```

### Resultado

para saber si completaste exitosamente el reto desde la consola corre el comando:

```bash
  npm run test-tictactoe
```

si todos los test pasan veras un mensaje similar a:

```bash
  [PERFECTO]: felicidades completaste el reto Nº1 porfavor coloca el siguiente codigo en ubits <<CODIGO-EXITOSO>>
```

luego en nuestra plataforma de UBITS selecciona el mismo codigo dentro de las opciones
multiples para pasar el reto ¡

si alguno de los test falla veras un mensaje en consola como:

```bash
  [FALLA]: revisa tu funcion el test 1 esta fallando :(
```

lo que implica que tienes que algo esta fallando y tienes que seguir trabajando en tu funcion.
