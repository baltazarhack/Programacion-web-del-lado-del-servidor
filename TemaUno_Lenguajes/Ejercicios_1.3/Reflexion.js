
/* 1.¿Cuál es la diferencia fundamental entre un módulo nativo (como'fs')
 y un módulo de NPM (como 'sillyname') en cuanto a su origen einstalación?

por que un modulo, ya viene incluido y no se necesita instalacion, mientras 
que un modulo npm es exyterno y se debe de instalar previamnete 


2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require'
(CommonJS) y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.

carga los módulos dinámicamente en tiempo de ejecución, mientras que 
import los carga de forma estática antes de que el código comience a ejecutarse


3. Sobre el archivo 'package. json':
a) ¿Por qué es vital compartir este archivo pero NO la carpeta
'node_modules' al subir a un repositorio?

Se comparte package.json porque contiene las dependencias necesarias para 
reconstruir el proyecto, mientras que node_modules no se sube porque es pesada
 y puede regenerarse fácilmente con npm install



b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo
tiene el package.json?

Si ejecutas npm install en una carpeta que solo tiene el package.json, 
NPM descarga solamente todas las dependencias automáticamente



/**/
