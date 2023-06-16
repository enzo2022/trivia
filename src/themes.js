export const themes = [
    {
      name: 'React.js',
      questions: [
        {
            question: "¿Cuál de las siguientes bibliotecas o frameworks se utiliza para construir interfaces de usuario en React?",
            options: ["Angular", "Vue", "React", "Ember"],
            correctAnswer: "React"
          },
          {
            question: "¿Cuál es el ciclo de vida de un componente de React donde se deben realizar llamadas a una API o configurar suscripciones?",
            options: ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "componentWillUpdate"],
            correctAnswer: "componentDidMount"
          },
          {
            question: "¿Cuál es la función que se utiliza para renderizar un componente de React en el DOM?",
            options: ["renderComponent", "renderDOM", "renderElement", "ReactDOM.render"],
            correctAnswer: "ReactDOM.render"
          },
          {
            question: "¿Cuál es la forma correcta de pasar datos desde un componente padre a un componente hijo en React?",
            options: ["A través de props", "A través de state", "A través de context", "A través de Redux"],
            correctAnswer: "A través de props"
          },
          {
            question: "¿Cuál es el hook de React que se utiliza para manejar el estado en componentes funcionales?",
            options: ["useState", "useEffect", "useContext", "useMemo"],
            correctAnswer: "useState"
          },
          {
            question: "¿Cuál es la sintaxis correcta para importar un componente desde un archivo externo en React?",
            options: ["import { Componente } from './Archivo';", "import Componente from './Archivo';", "require('./Archivo');", "include Componente from './Archivo';"],
            correctAnswer: "import Componente from './Archivo';"
          },
          {
            question: "¿Cuál es la función que se utiliza para actualizar el estado en un componente de React?",
            options: ["setState", "updateState", "changeState", "modifyState"],
            correctAnswer: "setState"
          },
          {
            question: "¿Cuál es la herramienta que se utiliza para el enrutamiento en una aplicación de React?",
            options: ["React Router", "React Navigate", "React Route", "React Redirect"],
            correctAnswer: "React Router"
          },
          {
            question: "¿Cuál es la convención de nombres para los archivos de componentes en React?",
            options: ["CamelCase", "snake_case", "kebab-case", "PascalCase"],
            correctAnswer: "PascalCase"
          },
          {
            question: "¿Cuál es la forma recomendada de estilizar componentes en React?",
            options: ["CSS en línea", "CSS global", "CSS Modules", "Styled Components"],
            correctAnswer: "Styled Components"
          }
        
    ]
    },
    {
        name: 'JavaScript',
        questions: [
          {
            question: '¿Qué es JavaScript?',
            options: [
              'Un lenguaje de programación de alto nivel para el desarrollo web.',
              'Un tipo de café muy popular.',
              'Un programa para hacer gráficos en el navegador.',
              'Una herramienta de diseño de bases de datos.'
            ],
            correctAnswer: 'Un lenguaje de programación de alto nivel para el desarrollo web.'
          },
          {
            question: '¿Cuál es la forma correcta de declarar una variable en JavaScript?',
            options: [
              'variable = valor;',
              'var = variable;',
              'var variable = valor;',
              'variable == valor;'
            ],
            correctAnswer: 'var variable = valor;'
          },
          {
            question: '¿Cuál es el método utilizado para agregar un elemento al final de un arreglo en JavaScript?',
            options: [
              'array.push(elemento);',
              'array.add(elemento);',
              'array.append(elemento);',
              'array.insert(elemento);'
            ],
            correctAnswer: 'array.push(elemento);'
          },
          {
            question: '¿Qué método se utiliza para obtener la longitud de un arreglo en JavaScript?',
            options: [
              'length()',
              'size()',
              'count()',
              'array.length'
            ],
            correctAnswer: 'array.length'
          },
          {
            question: '¿Cuál es la forma correcta de comentar en JavaScript?',
            options: [
              '// Este es un comentario de una línea.',
              '/* Este es un comentario de una línea. */',
              '// Este es un comentario de múltiples líneas.',
              '/* Este es un comentario de múltiples líneas. */'
            ],
            correctAnswer: '// Este es un comentario de una línea.'
          },
          {
            question: '¿Cuál es el resultado de la expresión "2" + 2 en JavaScript?',
            options: [
              '22',
              '4',
              'Error',
              'NaN'
            ],
            correctAnswer: '22'
          },
          {
            question: '¿Cuál de los siguientes NO es un tipo de dato en JavaScript?',
            options: [
              'string',
              'boolean',
              'number',
              'array'
            ],
            correctAnswer: 'array'
          },
          {
            question: '¿Qué es el evento "click" en JavaScript?',
            options: [
              'Un evento que se dispara al hacer clic con el mouse.',
              'Un evento que se dispara al cargar la página.',
              'Un evento que se dispara al presionar una tecla.',
              'Un evento que se dispara al pasar el mouse sobre un elemento.'
            ],
            correctAnswer: 'Un evento que se dispara al hacer clic con el mouse.'
          },
          {
            question: '¿Cuál es la forma correcta de hacer un bucle "for" en JavaScript?',
            options: [
              'for (i = 0; i < 5; i++) {}',
              'for (i = 0; i < 5) {}',
              'for (i < 5; i++) {}',
              'for (i < 5) {}'
            ],
            correctAnswer: 'for (i = 0; i < 5; i++) {}'
          },
          {
            question: '¿Cuál es la diferencia entre let y var en JavaScript?',
            options: [
              'No hay diferencia, son sinónimos.',
              'let permite redeclarar variables, var no.',
              'var tiene un alcance de bloque, let tiene un alcance de función.',
              'let tiene un alcance de bloque, var tiene un alcance global.'
            ],
            correctAnswer: 'let tiene un alcance de bloque, var tiene un alcance de función.'
          }
        ]
      },
      {
        name: 'HTML',
        questions: [
          {
            question: '¿Qué significa HTML?',
            options: [
              'Hypertext Markup Language',
              'Hyperlinks and Text Markup Language',
              'Home Tool Markup Language',
              'Hypertext and Text Markup Language'
            ],
            correctAnswer: 'Hypertext Markup Language'
          },
          {
            question: '¿Cuál es la etiqueta principal utilizada para estructurar el contenido de una página HTML?',
            options: [
              '<body>',
              '<html>',
              '<head>',
              '<title>'
            ],
            correctAnswer: '<body>'
          },
          {
            question: '¿Cuál es la etiqueta utilizada para crear un enlace en HTML?',
            options: [
              '<link>',
              '<a>',
              '<href>',
              '<url>'
            ],
            correctAnswer: '<a>'
          },
          {
            question: '¿Cuál es la etiqueta utilizada para definir un encabezado en HTML?',
            options: [
              '<header>',
              '<h1>',
              '<heading>',
              '<head>'
            ],
            correctAnswer: '<h1>'
          },
          {
            question: '¿Cuál es la etiqueta utilizada para crear una lista desordenada en HTML?',
            options: [
              '<ul>',
              '<li>',
              '<ol>',
              '<list>'
            ],
            correctAnswer: '<ul>'
          },
          {
            question: '¿Cuál es la etiqueta utilizada para insertar una imagen en HTML?',
            options: [
              '<img>',
              '<picture>',
              '<src>',
              '<image>'
            ],
            correctAnswer: '<img>'
          },
          {
            question: '¿Cuál es la etiqueta utilizada para crear un formulario en HTML?',
            options: [
              '<form>',
              '<input>',
              '<button>',
              '<label>'
            ],
            correctAnswer: '<form>'
          },
          {
            question: '¿Cuál es la etiqueta utilizada para definir una tabla en HTML?',
            options: [
              '<table>',
              '<tr>',
              '<td>',
              '<th>'
            ],
            correctAnswer: '<table>'
          },
          {
            question: '¿Cuál es la etiqueta utilizada para resaltar texto en negrita en HTML?',
            options: [
              '<strong>',
              '<b>',
              '<bold>',
              '<em>'
            ],
            correctAnswer: '<strong>'
          },
          {
            question: '¿Cuál es la etiqueta utilizada para crear un salto de línea en HTML?',
            options: [
              '<break>',
              '<br>',
              '<nl>',
              '<line>'
            ],
            correctAnswer: '<br>'
          }
        ]
      },
      {
        name: 'CSS',
        questions: [
          {
            question: '¿Qué significa CSS?',
            options: [
              'Cascading Style Sheets',
              'Cascading Styling Sheets',
              'Cascading Script Sheets',
              'Cascading Script Styles'
            ],
            correctAnswer: 'Cascading Style Sheets'
          },
          {
            question: '¿Cuál es la propiedad CSS que se utiliza para cambiar el color de fondo de un elemento?',
            options: [
              'background-color',
              'color',
              'text-color',
              'background'
            ],
            correctAnswer: 'background-color'
          },
          {
            question: '¿Cuál es la propiedad CSS que se utiliza para cambiar el tamaño de la fuente?',
            options: [
              'font-size',
              'text-size',
              'font-style',
              'text-font'
            ],
            correctAnswer: 'font-size'
          },
          {
            question: '¿Cuál es la propiedad CSS que se utiliza para establecer el margen entre los elementos?',
            options: [
              'margin',
              'padding',
              'spacing',
              'border'
            ],
            correctAnswer: 'margin'
          },
          {
            question: '¿Cuál es la propiedad CSS que se utiliza para cambiar la posición de un elemento en la página?',
            options: [
              'position',
              'top',
              'left',
              'offset'
            ],
            correctAnswer: 'position'
          },
          {
            question: '¿Cuál es la propiedad CSS que se utiliza para aplicar un efecto de sombra a un elemento?',
            options: [
              'box-shadow',
              'text-shadow',
              'shadow',
              'element-shadow'
            ],
            correctAnswer: 'box-shadow'
          },
          {
            question: '¿Cuál es la propiedad CSS que se utiliza para cambiar el estilo de los bordes de un elemento?',
            options: [
              'border-style',
              'border-width',
              'border-color',
              'border'
            ],
            correctAnswer: 'border-style'
          },
          {
            question: '¿Cuál es la propiedad CSS que se utiliza para cambiar la orientación del texto en un elemento?',
            options: [
              'text-align',
              'text-orientation',
              'text-direction',
              'text-style'
            ],
            correctAnswer: 'text-align'
          },
          {
            question: '¿Cuál es la propiedad CSS que se utiliza para cambiar el espacio entre las letras en un texto?',
            options: [
              'letter-spacing',
              'word-spacing',
              'line-height',
              'text-spacing'
            ],
            correctAnswer: 'letter-spacing'
          },
          {
            question: '¿Cuál es la propiedad CSS que se utiliza para cambiar la visibilidad de un elemento?',
            options: [
              'visibility',
              'display',
              'opacity',
              'hidden'
            ],
            correctAnswer: 'visibility'
          }
        ]
      },
      {
        name: 'Bases de Datos',
        questions: [
          {
            question: '¿Qué es una base de datos?',
            options: [
              'Un conjunto de archivos en una computadora',
              'Un sistema para almacenar y organizar información',
              'Un programa para procesar datos',
              'Un lenguaje de programación'
            ],
            correctAnswer: 'Un sistema para almacenar y organizar información'
          },
          {
            question: '¿Cuál es el lenguaje estándar utilizado para interactuar con bases de datos relacionales?',
            options: [
              'SQL (Structured Query Language)',
              'HTML (Hypertext Markup Language)',
              'CSS (Cascading Style Sheets)',
              'JS (JavaScript)'
            ],
            correctAnswer: 'SQL (Structured Query Language)'
          },
          {
            question: '¿Qué es un índice en una base de datos?',
            options: [
              'Una lista de palabras clave',
              'Una estructura de datos que mejora la velocidad de búsqueda',
              'Una columna que identifica de forma única cada registro',
              'Una restricción que impone reglas sobre los datos'
            ],
            correctAnswer: 'Una estructura de datos que mejora la velocidad de búsqueda'
          },
          {
            question: '¿Cuál es el tipo de base de datos que utiliza tablas para almacenar datos y establece relaciones entre ellas?',
            options: [
              'Base de datos relacional',
              'Base de datos jerárquica',
              'Base de datos de red',
              'Base de datos distribuida'
            ],
            correctAnswer: 'Base de datos relacional'
          },
          {
            question: '¿Qué es una consulta en una base de datos?',
            options: [
              'Un conjunto de tablas',
              'Un conjunto de registros',
              'Una operación para recuperar datos',
              'Una estructura de control'
            ],
            correctAnswer: 'Una operación para recuperar datos'
          },
          {
            question: '¿Cuál es el término utilizado para describir la eliminación de datos duplicados en una base de datos?',
            options: [
              'Normalización',
              'Indexación',
              'Desnormalización',
              'Deduplicación'
            ],
            correctAnswer: 'Deduplicación'
          },
          {
            question: '¿Cuál es la operación utilizada para combinar registros de dos o más tablas en una base de datos relacional?',
            options: [
              'SELECT',
              'UPDATE',
              'INSERT',
              'JOIN'
            ],
            correctAnswer: 'JOIN'
          },
          {
            question: '¿Qué es un DBMS?',
            options: [
              'Base de datos móvil',
              'Sistema de gestión de bases de datos',
              'Lenguaje de consulta de bases de datos',
              'Conjunto de tablas'
            ],
            correctAnswer: 'Sistema de gestión de bases de datos'
          },
          {
            question: '¿Cuál es el tipo de base de datos que utiliza una estructura en forma de árbol para organizar los datos?',
            options: [
              'Base de datos jerárquica',
              'Base de datos relacional',
              'Base de datos de red',
              'Base de datos distribuida'
            ],
            correctAnswer: 'Base de datos jerárquica'
          },
          {
            question: '¿Qué es la integridad referencial en una base de datos?',
            options: [
              'La capacidad de recuperar datos de forma rápida',
              'Un conjunto de reglas que garantizan la consistencia de los datos',
              'La capacidad de realizar consultas complejas',
              'Un lenguaje utilizado para interactuar con la base de datos'
            ],
            correctAnswer: 'Un conjunto de reglas que garantizan la consistencia de los datos'
          }
        ]
      },
      {
        name: 'Node.js',
        questions: [
          {
            question: '¿Qué es Node.js?',
            options: [
              'Un framework de JavaScript',
              'Un servidor web',
              'Un lenguaje de programación',
              'Un entorno de ejecución para JavaScript'
            ],
            correctAnswer: 'Un entorno de ejecución para JavaScript'
          },
          {
            question: '¿Cuál es el gestor de paquetes utilizado en Node.js?',
            options: [
              'npm (Node Package Manager)',
              'yarn',
              'bower',
              'pip'
            ],
            correctAnswer: 'npm (Node Package Manager)'
          },
          {
            question: '¿Cuál es el archivo de configuración utilizado en Node.js para administrar las dependencias del proyecto?',
            options: [
              'package.json',
              'index.js',
              'node_modules',
              'webpack.config.js'
            ],
            correctAnswer: 'package.json'
          },
          {
            question: '¿Cuál es el módulo principal de Node.js utilizado para crear un servidor web?',
            options: [
              'http',
              'fs',
              'path',
              'express'
            ],
            correctAnswer: 'http'
          },
          {
            question: '¿Qué es Express.js?',
            options: [
              'Un lenguaje de programación',
              'Un motor de plantillas',
              'Un servidor web',
              'Un framework de Node.js'
            ],
            correctAnswer: 'Un framework de Node.js'
          },
          {
            question: '¿Cuál es la función utilizada para importar un módulo en Node.js?',
            options: [
              'require()',
              'import',
              'export',
              'include()'
            ],
            correctAnswer: 'require()'
          },
          {
            question: '¿Cuál es la extensión de archivo utilizada para los módulos de Node.js?',
            options: [
              '.js',
              '.node',
              '.module',
              '.npm'
            ],
            correctAnswer: '.js'
          },
          {
            question: '¿Cuál es el módulo utilizado en Node.js para interactuar con el sistema de archivos?',
            options: [
              'fs',
              'http',
              'path',
              'util'
            ],
            correctAnswer: 'fs'
          },
          {
            question: '¿Qué es NPM?',
            options: [
              'Node Package Manager',
              'Node Project Manager',
              'Node Package Module',
              'Node Program Manager'
            ],
            correctAnswer: 'Node Package Manager'
          },
          {
            question: '¿Cuál es el método utilizado para escribir en la consola en Node.js?',
            options: [
              'console.log()',
              'console.write()',
              'console.debug()',
              'console.info()'
            ],
            correctAnswer: 'console.log()'
          }
        ]
      },
]