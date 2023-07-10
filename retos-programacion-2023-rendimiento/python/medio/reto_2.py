"""
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
"""
from timeit import default_timer

#METODO 1 - SUBIDO AL REPOSITORIO
# t_inicial = default_timer()

# diccionario = {
#     0 : 'love',
#     1 : '15',
#     2 : '30',
#     3 : '40'
# }

# def match(secuencia):
#     p1,p2 = 0 , 0
#     for player in secuencia:
#         if player == 'P1': p1+= 1
#         else: p2+= 1        

#         if p1 == 3 and p2 == 3: print("Deuce")
#         elif p1 == 4 and p2 == 3: print("Ventaja P1")
#         elif p1 == 3 and p2 == 4: print("Ventaje P2")            
#         elif p1 == 4 and p2 == 4: 
#             p1-=1
#             p2-=1
#             print("Deuce")
#         elif p1 == 5:
#             print("Gana P1")
#             t_final = default_timer()
#             t_resultado1 = t_final - t_inicial
#             print(t_resultado1)
#             quit()
#         elif p2 == 5:
#             print("Gana P2")
#             t_final = default_timer()
#             t_resultado1 = t_final - t_inicial
#             print(t_resultado1)
#             quit()
#         else: print(diccionario[p1]+" - "+diccionario[p2])    


# match(['P1','P1','P2','P2','P1','P2','P1','P1'])

#METODO 2 - HECHO CON POO

t_inicial = default_timer()
class Jugador:
    def __init__(self) -> None:
        self.puntaje = 0
    
    def anotacion(self) -> None:
        self.puntaje += 1

    def obtener_puntaje(self):
        return self.puntaje

class PartidoTenis:
    definicion_puntajes = {0 : 'love',1 : '15',2 : '30',3 : '40'}

    def __init__(self,secuencia_anotaciones:list) -> None:        
        self.jugador1 = Jugador()
        self.jugador2 = Jugador()
        self.secuencia_anotaciones = secuencia_anotaciones
        self.diferencia = 0
        self.terminado = False

    def calcular_diferencia(self):
        puntaje_j1 = self.jugador1.obtener_puntaje()
        puntaje_j2 = self.jugador2.obtener_puntaje()
        return abs(puntaje_j1 - puntaje_j2)

    def anotacion(self,jugador):
        if jugador == 'P1': self.jugador1.anotacion()
        elif jugador == 'P2': self.jugador2.anotacion()
        else: print("Error")

    def imprimir_jugada(self):
        jugador1 = self.jugador1.obtener_puntaje()
        jugador2 = self.jugador2.obtener_puntaje()
        self.diferencia = self.calcular_diferencia()
        
        if jugador1 >=3 and jugador2 >=3 and self.diferencia == 0: print("Deuce")
        elif jugador1 >3 and jugador1>jugador2 and self.diferencia == 1: print("Ventaja Jugador 1")
        elif jugador2 >3 and jugador2>jugador1 and self.diferencia == 1: print("Ventaja Jugador 2")
        elif jugador1 >3 and jugador1>jugador2 and self.diferencia == 2:
            print("Gana Jugador 1")
            self.terminado = True
        elif jugador2 >=3 and jugador2>jugador1 and self.diferencia == 2: 
            print("Gana Jugador 2")
            self.terminado = True
        else: print(self.definicion_puntajes[jugador1]+" - "+self.definicion_puntajes[jugador2])        

    def proceso(self):
        for jugador in self.secuencia_anotaciones:
            self.anotacion(jugador)
            self.imprimir_jugada()
            if self.terminado: break
            
if __name__ == '__main__':
    secuencia_anotaciones = ['P1','P1','P2','P2','P1','P2','P1','P2','P2','P2']
    partido = PartidoTenis(secuencia_anotaciones)
    partido.proceso()
    t_final = default_timer()
    t_resultado1 = t_final - t_inicial
    print(t_resultado1)
    print("*** Fin ***")