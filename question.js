// question.js

const questions = [
  {
    type: "single",
    question: "¿Cuál es una VENTAJA para un ERP?",
    options: [
      "Sólo personal capacitado debe utilizarlo.",
      "En la actualidad la instalación es asequible a cualquier empresa.",
      "Es un sistema en el que están integrados varias de las aplicaciones que usa la empresa.",
      "Son sistemas sencillos de manejar en el que el error de un usuario no afecta al resto."
    ],
    answer: 2
  },
  {
    type: "text",
    question: "Los ______ (siglas en inglés) son parte de los ERP.",
    answer: "CRM"
  },
  {
    type: "single",
    question: "Seleccione la afirmación CIERTA sobre los CRM.",
    options: [
      "Los CRM gestionan información orientada exclusivamente a nóminas.",
      "Los CRM gestionan información orientada exclusivamente a ventas.",
      "Los CRM gestionan información orientada exclusivamente a compras.",
      "Los CRM gestionan información orientada exclusivamente a pedidos."
    ],
    answer: 1
  },
  {
    type: "single",
    question: "La seguridad de los ERP y CRM NO se basa en uno de los siguientes aspectos:",
    options: [
      "El administrador del sistema ha de confirmar las operaciones que realizan los usuarios antes de que estas sean válidas.",
      "Utilizar el protocolo http seguro.",
      "Establecer distintos perfiles de usuario.",
      "Controlar cada una de las transacciones de datos."
    ],
    answer: 0
  },
  {
    type: "single",
    question: "Las consultorías realizan un estudio de las necesidades de la empresa y programan módulos a medida si es necesario.",
    options: ["Falso", "Verdadero"],
    answer: 1
  },
  {
    type: "single",
    question: "¿Cuál de los siguientes NO es un objetivo principal de los ERP?",
    options: [
      "Facilitar a los clientes de la empresa la información sobre sus negocios.",
      "Mejorar la productividad de la empresa.",
      "Mantener la información de la empresa de forma precisa.",
      "Eliminar operaciones innecesarias con la información."
    ],
    answer: 0
  },
  {
    type: "single",
    question: "Todos los CRM incorporan siempre un módulo de informes.",
    options: ["Verdadero", "Falso"],
    answer: 1
  },
  {
    type: "multiple",
    question: "¿Cuáles de los siguientes son actuaciones adecuadas para personalizar un ERP?",
    options: [
      "Instalar aquellos módulos preprogramados que ofrecen la funcionalidad deseada.",
      "Una vez instalado el ERP NO es posible personalizarlo.",
      "Encargar la personalización a una consultoría.",
      "Reinstalar el paquete básico con las modificaciones que se desean."
    ],
    answer: [0, 2]
  },
  {
    type: "single",
    question: "Marca cuál es una VENTAJA de un ERP:",
    options: [
      "Es un sistema en el que están integradas varias de las utilidades que usa la empresa.",
      "El ERP puede ser utilizado por personal sin especialización.",
      "Las modificaciones del ERP tienen un bajo coste una vez implantado.",
      "Son sistemas en el que el error de un departamento no afecta al resto."
    ],
    answer: 0
  },
  {
    type: "multiple",
    question: "Marca aquellas afirmaciones que sean CIERTAS para un ERP:",
    options: [
      "Es un sistema formado por varias aplicaciones que interactúan entre sí.",
      "Para implementar un ERP es necesario tener asociada una base de datos centralizada.",
      "Un ERP está formado por diversos módulos.",
      "La empresa ha de escoger, entre los diversos ERP que existen, aquel que se adapte a su modo de trabajo."
    ],
    answer: [1, 2]
  },
  {
    type: "single",
    question: "La posibilidad de exportar información desde un ERP usando aplicaciones ofimáticas facilita:",
    options: [
      "la edición masiva de datos internos",
      "la conexión con bases de datos externas",
      "la realización de documentos como presentaciones o correos electrónicos",
      "la generación automática de usuarios"
    ],
    answer: 2
  },
  {
    type: "multiple",
    question: "Escoge las afirmaciones CORRECTAS sobre la instalación de un ERP:",
    options: [
      "Al instalar un ERP siempre se instalan todos los módulos que hay disponibles.",
      "En la instalación hay que decidir los módulos, porque después NO se pueden modificar.",
      "Una empresa puede instalar módulos preprogramados y módulos hechos a medida.",
      "La integración de módulos puede hacerse en cualquier momento."
    ],
    answer: [2, 3]
  },
  {
    type: "text",
    question: "Los CRM gestionan información orientada a _____.",
    answer: "ventas"
  },
  {
    type: "single",
    question: "¿Es necesario un servidor web para instalar un ERP?",
    options: ["Falso", "Verdadero"],
    answer: 0
  },
  {
    type: "single",
    question: "Utilizar un ERP implica:",
    options: [
      "Utilizarlo a través de un navegador.",
      "Contratar una consultoría para ajustarlo a las necesidades.",
      "Tener instalado un servidor web.",
      "Tener una base de datos centralizada asociada a él."
    ],
    answer: 3
  },
  {
    type: "single",
    question: "Combinando tipos de usuarios con diferentes roles, se pueden crear niveles de seguridad distintos.",
    options: ["Falso", "Verdadero"],
    answer: 1
  },
  {
    type: "single",
    question: "¿Cuál de estas afirmaciones sobre roles en ERP es FALSA?",
    options: [
      "Un usuario con varios roles podrá acceder si uno de ellos lo permite.",
      "Un rol puede estar definido aunque no se asigne a nadie.",
      "Un rol no es válido hasta que se asigna a un usuario.",
      "Un rol es un conjunto de permisos determinado."
    ],
    answer: 0
  },
  {
    type: "single",
    question: "¿Es imprescindible conocer bash para el mantenimiento de un ERP?",
    options: ["Falso", "Verdadero"],
    answer: 0
  },
  {
    type: "multiple",
    question: "La mayoría de los ERP permiten:",
    options: [
      "Utilizarlo a través de un navegador.",
      "Trabajar sin base de datos centralizada.",
      "Ajustarlo a las necesidades de la empresa.",
      "Compartir información entre usuarios del sistema."
    ],
    answer: [0, 2, 3]
  },
  {
    type: "single",
    question: "¿Es necesario tener instalado un servidor web portable para cualquier ERP?",
    options: ["Verdadero", "Falso"],
    answer: 1
  },
  {
    type: "single",
    question: "El elemento XSLT que permite decidir entre dos formatos según una condición es:",
    options: [
      "<xsl:if>",
      "<xsl:choose>",
      "<xsl:when>",
      "<xsl:otherwise>"
    ],
    answer: 1
  },
  {
    type: "single",
    question: "¿Cuál de estos elementos de un documento XML NO puede ser un nodo?",
    options: [
      "Comentarios",
      "Texto",
      "Etiquetas",
      "Atributos"
    ],
    answer: 2
  },
  {
    type: "multiple",
    question: "¿Qué funciones NO devuelven valores booleanos en XPath?",
    options: [
      "last",
      "position",
      "not",
      "name"
    ],
    answer: [0, 1, 3]
  },
  {
    type: "single",
    question: "El elemento XSLT que permite aplicar una plantilla definida sobre unos datos XML es:",
    options: [
      "<xsl:template>",
      "<xsl:if>",
      "<xsl:apply-templates>",
      "<xsl:value-of>"
    ],
    answer: 2
  },
  {
    type: "single",
    question: "¿Qué función en XSLT aplica formatos según múltiples condiciones?",
    options: [
      "xsl:for-each",
      "xsl:choose",
      "xsl:output",
      "xsl:if"
    ],
    answer: 1
  },
  {
    type: "single",
    question: "¿Cuál de estos NO puede ser un nodo en XML?",
    options: [
      "Texto",
      "Atributos",
      "Elementos",
      "Números"
    ],
    answer: 3
  },
  {
    type: "multiple",
    question: "Relaciona cada lenguaje con su funcionalidad:",
    options: [
      "XSLT → Transformaciones",
      "XML → Estructura de documentos",
      "XPath → Acceso a datos",
      "XSL-FO → Formato"
    ],
    answer: [0, 1, 2, 3]
  },
  {
    type: "multiple",
    question: "¿Qué resultados puede devolver una expresión XPath?",
    options: [
      "Un valor lógico",
      "Un conjunto de números",
      "Un conjunto de nodos",
      "Un conjunto de cadenas"
    ],
    answer: [0, 2]
  },
  {
    type: "single",
    question: "XSL es un lenguaje XML.",
    options: ["Verdadero", "Falso"],
    answer: 0
  },
  {
    type: "single",
    question: "¿Cuál de estas afirmaciones es FALSA respecto a XML?",
    options: [
      "Elemento padre solo existe en elementos distintos del raíz.",
      "Todos los elementos de un fichero XML tienen elemento padre ya que el padre del elemento raíz es /.",
      "Los atributos son hijos del elemento al que están asociados."
    ],
    answer: 0
  },
  {
    type: "single",
    question: "La sentencia XPath //a1/a2[@a3] obtiene todos los valores de los atributos a3 de los elementos a2 que están dentro de a1.",
    options: ["Verdadero", "Falso"],
    answer: 1
  },
  {
    type: "single",
    question: "¿Qué devuelven las rutas de localización en XPath?",
    options: [
      "El primer nodo que cumple la condición.",
      "La rama completa que cumple la condición.",
      "El conjunto de nodos del árbol XML que cumplen una condición.",
      "El primer nodo que no sea atributo que cumple la condición."
    ],
    answer: 2
  },
  {
    type: "single",
    question: "Los depuradores XSLT permiten ver cómo se transforma cada parte del documento XML.",
    options: ["Verdadero", "Falso"],
    answer: 0
  },
  {
    type: "single",
    question: "XPath es un lenguaje XML.",
    options: ["Verdadero", "Falso"],
    answer: 1
  },
  {
    type: "multiple",
    question: "Asocia cada función de XSLT con su funcionalidad:",
    options: [
      "decimal-format → convierte datos numéricos en texto",
      "strip-space → elimina espacios en blanco",
      "value-of → resuelve una expresión XPath",
      "preserve-space → conserva espacios en blanco"
    ],
    answer: [0, 1, 2, 3]
  },
  {
    type: "single",
    question: "La sentencia XPath //a1/a2[@a3=\"4\"] devuelve todos los nodos a2 dentro de a1 cuyo atributo a3 vale 4.",
    options: ["Verdadero", "Falso"],
    answer: 0
  },
  {
    type: "multiple",
    question: "Asocia los siguientes ejes de XPath con sus símbolos equivalentes:",
    options: [
      "attribute:: → @",
      "child:: → /",
      "parent:: → ..",
      "descendant:: → //"
    ],
    answer: [0, 1, 2, 3]
  },
  {
    type: "single",
    question: "¿Qué elemento XSLT devuelve contenido mediante una expresión XPath?",
    options: [
      "<xsl:template>",
      "<xsl:apply-templates>",
      "<xsl:value-of>",
      "<xsl:for-each>"
    ],
    answer: 2
  },
  {
    type: "single",
    question: "En un esquema XML, un tipo de dato ID se corresponde con una:",
    options: [
      "clave externa",
      "clave duplicada",
      "clave primaria",
      "clave alternativa"
    ],
    answer: 2
  },
  {
    type: "multiple",
    question: "¿Qué NO son componentes del estándar de objetos?",
    options: [
      "ODL",
      "XQuery",
      "XQL",
      "Java"
    ],
    answer: [1, 2]
  },
  {
    type: "multiple",
    question: "Selecciona las características de las bases de datos nativas:",
    options: [
      "Disparadores",
      "Creación de índices",
      "Creación de identificadores únicos",
      "Consultas"
    ],
    answer: [1, 2, 3]
  },
  {
    type: "single",
    question: "¿El uso extendido de bases de datos relacionales es una razón para almacenar datos XML en ellas?",
    options: ["Verdadero", "Falso"],
    answer: 0
  },
  {
    type: "multiple",
    question: "¿Qué herramientas se relacionan directamente con XQuery?",
    options: [
      "MySQL",
      "Oracle",
      "Xquark-Brigde",
      "Saxon"
    ],
    answer: [2, 3]
  },
  {
    type: "single",
    question: "Un atributo no clave y no nulo en base de datos se convierte en un tipo de dato ______ en XML.",
    options: ["opcional", "clave", "atributo", "requerido"],
    answer: 3
  },
  {
    type: "single",
    question: "¿Cuál es una característica del modelo de datos en el que se basa XQuery?",
    options: [
      "El orden de los nodos no importa.",
      "Tiene un valor especial al evaluar una expresión errónea.",
      "Se basa en estructuras planas.",
      "Trabaja exclusivamente con XML Schema."
    ],
    answer: 1
  },
  {
    type: "single",
    question: "¿Es único el esquema XML que representa una base de datos relacional?",
    options: ["Verdadero", "Falso"],
    answer: 1
  },
  {
    type: "text",
    question: "Para la transferencia entre XML y bases relacionales existen numerosos ______.",
    answer: "middlewares"
  },
  {
    type: "multiple",
    question: "Relaciona cada función con el tipo de datos sobre el que se aplica:",
    options: [
      "max() → Numéricos",
      "startswith() → Cadenas de texto",
      "distinct-values() → Cualquiera"
    ],
    answer: [0, 1, 2]
  },
  {
    type: "single",
    question: "¿Toda sentencia XQuery es una sentencia XPath?",
    options: ["Verdadero", "Falso"],
    answer: 1
  },
  {
    type: "multiple",
    question: "Relaciona los pasos para transformar una BD relacional en XML:",
    options: [
      "Crear claves primarias → 2º",
      "Crear el esquema XML → 1º",
      "Establecer relaciones de clave migrada → 3º"
    ],
    answer: [0, 1, 2]
  },
  {
    type: "text",
    question: "Formar una base de datos con colecciones de documentos estructurados proporciona ______.",
    answer: "flexibilidad"
  },
  {
    type: "single",
    question: "¿Cuál es la cláusula XML encargada de filtrar tuplas en una consulta?",
    options: ["LET", "FOR", "RETURN", "WHERE", "ORDER BY"],
    answer: 3
  },
  {
    type: "text",
    question: "XQuery es a XML lo mismo que ______ es a bases de datos relacionales.",
    answer: "SQL"
  },
  {
    type: "single",
    question: "¿Toda sentencia XPath es una sentencia XQuery?",
    options: ["Verdadero", "Falso"],
    answer: 0
  },
  {
    type: "multiple",
    question: "Selecciona las afirmaciones correctas sobre la tecnología XML:",
    options: [
      "Hace que el compartir información sea más cómodo.",
      "Permite tratar ficheros como si fueran una base de datos.",
      "Facilita el desarrollo separando esquema y datos.",
      "Permite el acceso directo sin recorrer todo el archivo."
    ],
    answer: [0, 1, 2]
  },
  {
    type: "multiple",
    question: "Características de sistemas centrados en datos:",
    options: [
      "Contiene datos con estructura no definida.",
      "Contiene datos con estructura muy definida.",
      "Los datos pueden actualizarse.",
      "Es apropiado para publicidad."
    ],
    answer: [1, 2, 3]
  },
  {
    type: "multiple",
    question: "Sobre bases de datos XML, marca las correctas:",
    options: [
      "Garantiza la actualización eficiente.",
      "Se estructuran según esquemas definidos.",
      "Integran sistemas basados en documentos.",
      "Integran sistemas estructurados."
    ],
    answer: [1, 2, 3]
  },
  {
    type: "multiple",
    question: "Selecciona los que NO son componentes del estándar Orientación a Objetos:",
    options: [
      "XQL",
      "Java",
      "ODL",
      "XQuery"
    ],
    answer: [0, 3]
  },
  {
    type: "multiple",
    question: "La tecnología XML permite:",
    options: [
      "Tratar ficheros como bases de datos.",
      "Compartir información cómodamente.",
      "Separar esquema y datos.",
      "Codificar binarios de forma segura."
    ],
    answer: [0, 1, 2]
  },
  {
    type: "multiple",
    question: "Relaciona cada función con su descripción:",
    options: [
      "avg() → Valor medio",
      "count() → Número total",
      "sum() → Suma total"
    ],
    answer: [0, 1, 2]
  },
  {
    type: "multiple",
    question: "Afirmaciones ciertas sobre el lenguaje XQuery:",
    options: [
      "El resultado debe ser independiente del protocolo de acceso.",
      "Es un lenguaje declarativo, pero no funcional.",
      "Puede haber distintas sintaxis que devuelvan el mismo resultado.",
      "Siempre debe trabajar sobre documentos XML con esquema."
    ],
    answer: [0, 2]
  },
  {
    type: "single",
    question: "¿Cuál es la cláusula XML que filtra tuplas en una consulta?",
    options: ["LET", "RETURN", "FOR", "WHERE", "ORDER BY"],
    answer: 3
  },
  {
    type: "text",
    question: "Un dato que no es clave y no es nulo en una BD relacional se convierte en un tipo de dato ______ en XML.",
    answer: "requerido"
  },
  {
    type: "single",
    question: "¿Es único el esquema XML que representa una BD relacional?",
    options: ["Verdadero", "Falso"],
    answer: 1
  },
  {
    type: "single",
    question: "¿Cuál de los siguientes es un componente del estándar de objetos?",
    options: ["XQL", "OQL", "SQL", "XQuery"],
    answer: 1
  },
  {
    type: "multiple",
    question: "Orden correcto de los pasos para transformar una BD relacional a XML:",
    options: [
      "Crear el esquema XML → 2º",
      "Crear claves primarias → 3º",
      "Establecer relaciones de clave migrada → 1º"
    ],
    answer: [0, 1, 2]
  },
  {
    type: "text",
    question: "Una clave migrada en una BD se convierte en tipo de dato ______ en XML.",
    answer: "IDREF"
  },
  {
    type: "multiple",
    question: "¿Qué herramientas están relacionadas con XQuery?",
    options: [
      "Saxon",
      "MySQL",
      "Oracle",
      "Xquark-Brigde"
    ],
    answer: [0, 3]
  },
  {
    type: "single",
    question: "XQuery permite realizar consultas y transformaciones sobre documentos XML.",
    options: ["Verdadero", "Falso"],
    answer: 0
  },
  {
    type: "single",
    question: "¿Qué función XPath se usa para obtener el número de nodos de una colección?",
    options: [
      "sum()",
      "count()",
      "avg()",
      "last()"
    ],
    answer: 1
  }
  

];

// Mezcla aleatoria
function shuffleQuestions() {
  return questions
    .map(q => ({ q, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ q }) => q);
}
