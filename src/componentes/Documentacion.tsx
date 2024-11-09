const Documentacion = () => {
  return (
    <div className="w-full bg-gradient-to-t from-slate-950 via-slate-800 to-slate-950 min-h-screen text-white p-14 space-y-5 text-start">
      <section className="text-balance scroll-mt-28 space-y-5" id="introduccion">
        <h1 className=" text-4xl">Introducción a Azumi</h1>
        <p className="text-sm">
          La librería Azumi es una implementación de un
          algoritmo genético, diseñada para optimizar soluciones en problemas
          donde se busca minimizar una función cuadrática. Este algoritmo
          permite encontrar valores óptimos a través de un proceso de selección,
          cruce y mutación.
        </p>
      </section>

      <section className="scroll-mt-24 space-y-5" id="instalacion">
        <h1 className="text-4xl">Instalación de Azumi</h1>
        <p>Para instalar Azumi, sigue los siguientes pasos:</p>
        <ol>
          <li>1. Crea un directorio para tu proyecto:</li>
          <div className="flex my-5">
          <pre className="text-start shadow-lg rounded-md bg-slate-500 p-3 w-48 ">
          <code className="">
          {`mkdir Azumi
cd Azumi`}
          </code>
          </pre>
          </div>
          <li>
            2. Agrega un archivo <code>setup.py</code> para la instalación de la
            librería:
          </li>
          <div className="flex my-5">
          <pre className="text-start shadow-lg rounded-md bg-slate-500 w-[38rem] p-3">
          <code className="">
            {
            `from setuptools import setup      
find_packages setup (
name='Azumi',
version='1.0.0',
packages=find_packages(),
install_requires=[],
author='Nombre de los autores',
author_email='El email de los creadores',
description='Librería de algoritmos genéticos para optimización',
keywords=['algoritmo genético', 'optimización']
)`
          }
          </code>
          </pre>
          </div>
          <li>
            3. Organiza el código en un archivo <code>Azumi.py</code> dentro de un
            directorio <code>Azumi/</code>.
          </li>
          <li>4. Instala la librería localmente:</li>
          <div className="flex my-5">
          <pre className="text-start shadow-lg rounded-md  bg-slate-500 w-48 p-3 ">
          <code className="">
            {
            `pip install -e`
            }
          </code>
          </pre>
          </div>
        </ol>
      </section>

      <section className="scroll-mt-24 space-y-5" id="explicacion">
        <h1 className="text-4xl">Explicación del Código</h1>
        <p className="text-sm">
          El código de Azumi implementa un <strong>algoritmo genético</strong>,
          una técnica inspirada en la evolución natural utilizada para resolver
          problemas de optimización. A continuación, se explica cada sección del
          código:
        </p>

        <h3 className="text-lg">Función de Fitness</h3>
        <div className="flex space-y-5">
        <pre className="text-start shadow-lg rounded-md  bg-slate-500 w-48 p-3 ">
        <code className="">
          {
          `def fitness(x): 
return x ** 2`
          }
        </code>
        </pre>
        </div>
        <p className="text-sm">
          La función de fitness mide la calidad de una solución en el contexto
          del problema. Aquí, es una función cuadrática que busca minimizar el
          valor más cercano a cero.
        </p>

        <h3 className="text-lg">Inicialización de la Población</h3>
        <div className="flex space-y-5">
        <pre className="text-start shadow-lg rounded-md  bg-slate-500 w-[38rem] p-3 ">
        <code className="">
        {
        `def inicializar_poblacion(tamano_poblacion, rango_min, rango_max):
return [random.uniform(rango_min, rango_max) for _ in
range(tamano_poblacion)]`
        }
        </code>
        </pre>
        </div>
        <p className="text-sm">
          Esta función crea la población inicial de individuos aleatorios en un
          rango específico, proporcionando puntos de partida para la
          optimización.
        </p>

        <h3 className="text-lg">Selección de Individuos</h3>
        <p className="text-sm">
          Las funciones de selección eligen individuos para la reproducción,
          permitiendo transmitir las mejores características a la siguiente
          generación.
        </p>

        <h3 className="text-lg">Selección por Torneo</h3>
        <div className="flex space-y-5">
        <pre className="text-start shadow-lg rounded-md  bg-slate-500 w-[38rem] p-3 ">
        <code className="">
        {
        `def seleccion_torneo(poblacion, fitness_poblacion): idx1, idx2 =
random.sample(range(len(poblacion)), 2) 
return poblacion[idx1] 
if fitness_poblacion[idx1] < fitness_poblacion[idx2] 
else
poblacion[idx2]`}
        </code>
        </pre>
        </div>
        <h3 className="text-lg">Selección por Ruleta</h3>
        <div className="flex space-y-5">
        <pre className="text-start shadow-lg rounded-md  bg-slate-500 w-[32rem] p-3 ">
        <code className="">
          {
          `def seleccion_ruleta(poblacion, fitness_poblacion): 
max_fitness = sum(fitness_poblacion) 
pick = random.uniform(0, max_fitness) 
current = 0 for i, fit in enumerate(fitness_poblacion): 
current += fit if
current > pick: return poblacion[i]`}
        </code>
        </pre>
        </div>
        <h3 className="text-lg">Cruce de Individuos</h3>
        <p className="text-sm">
          El cruce permite que dos individuos se combinen para crear nuevos
          individuos, introduciendo variabilidad genética.
        </p>

        <h3 className="text-lg">Cruce en Dos Puntos</h3>
        <div className="flex space-y-5">
        <pre className="text-start shadow-lg rounded-md  bg-slate-500 w-[36rem] p-3 ">
        <code className="">
          {`def cruce_dos_puntos(padre1, padre2, tasa_cruce): 
if random.random()" "
< tasa_cruce: 
punto1, punto2 =
sorted(random.sample(range(len(str(padre1))), 2)) 
hijo_str =(str(padre1)[:punto1] + str(padre2)[punto1:punto2] +
str(padre1)[punto2:]) 
return float(hijo_str) 
return padre1`}
        </code>
        </pre>
        </div>
        <h3 className="text-lg">Mutación</h3>
        <div className="flex space-y-5">
        <pre className="text-start shadow-lg rounded-md  bg-slate-500 w-[36rem] p-3 ">
        <code className="">
          {`def mutacion(individuo, tasa_mutacion, rango_min, rango_max): 
if random.random() < tasa_mutacion: 
return random.uniform(rango_min, rango_max) 
return individuo`}
        </code>
        </pre>
        </div>
        <p className="text-sm">
          La mutación introduce variaciones aleatorias en un individuo,
          previniendo que el algoritmo se estanque en óptimos locales.
        </p>

        <h3 className="text-lg">Algoritmo Genético Principal</h3>
        <div className="flex space-y-5">
        <pre className="text-start shadow-lg rounded-md  bg-slate-500 w-[40rem] p-3 ">
        <code className="">
          {`def algoritmo_genetico(tamano_poblacion, generaciones, tasa_cruce,
tasa_mutacion, metodo_seleccion="torneo", metodo_cruce="dos_puntos",
elitismo=False): ...`}
        </code>
        </pre>
        </div>
        <p className="text-sm">
          El algoritmo principal realiza la evolución en varias generaciones,
          manteniendo, cruzando, mutando y seleccionando individuos de la
          población para encontrar la mejor solución.
        </p>
      </section>
    </div>
  );
};

export default Documentacion;
