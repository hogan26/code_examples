# Reto #0: EL FAMOSO "FIZZ BUZZ"
#### Dificultad: Fácil | Publicación: 26/12/22 | Corrección: 02/01/23

"""
Enunciado

 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".

"""

import numpy as np
from timeit import default_timer

# solución pusheada, tipo = por comprension

t_inicial = default_timer()

for numero in range(1,101):
    if numero%3==0 and numero%5==0:
        print('fizzbuzz')
    elif numero%3==0:
        print('fizz')
    elif numero%5==0:
        print('buzz')
    else:
        print(numero)

t_final = default_timer()
t_resultado1 = t_final - t_inicial

# solución 2, tipo = funcional

def fizzbuzz():
    for numero in np.arange(1,101):
        if numero%3==0 and numero%5==0:
            print('fizzbuzz')
        elif numero%3==0:
            print('fizz')
        elif numero%5==0:
            print('buzz')
        else:
            print(numero)

t_inicial = default_timer()
fizzbuzz()
t_final = default_timer()
t_resultado2 = t_final - t_inicial

print("\nTiempo solucion pusheada: {} \nTiempo solucion 2: {}".format(t_resultado1,t_resultado2))
