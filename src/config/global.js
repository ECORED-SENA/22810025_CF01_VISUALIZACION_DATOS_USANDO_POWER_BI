export default {
  global: {
    Name: 'Fundamentos de analítica de datos y modelado de información',
    Description:
      'En este componente formativo se desarrollan los fundamentos de la analítica de datos y <em>Business Intelligence</em>; se identifican y priorizan requerimientos de información; se reconocen las fuentes y el ecosistema de datos; y se define un modelo de datos coherente con las necesidades del cliente, que sirve como base para la construcción de soluciones de visualización de datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Introducción a la analítica de datos y <em>Business Intelligence</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'La importancia de los datos en los entornos actuales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Analítica de datos y <em>Business Intelligence</em> (BI)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de analítica de datos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: '<em>Business Intelligence</em> (BI): concepto y alcance',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Identificación y priorización de requerimientos del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'El rol de los requerimientos en los proyectos de analítica de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '¿Qué se entiende por requerimientos del cliente?',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Identificación de requerimientos de información',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Preguntas de negocio como base del análisis',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Priorización de requerimientos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Desglose práctico',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipos de fuentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de fuentes de datos en analítica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación de los datos según su estructura',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ecosistema de datos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Calidad de los datos y su impacto en el análisis',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Definición del modelo de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Modelo de datos: concepto y función en analítica',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Niveles de modelado: conceptual, lógico y físico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Modelos para analítica: enfoque dimensional',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Reglas básicas para definir un modelo de datos coherente',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Caso de uso: sector salud',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Fundamentos conceptuales del proceso ETL en soluciones de <em>Business Intelligence</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'El proceso ETL dentro de una solución de <em>Business Intelligence</em>',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Etapa de extracción: obtención de los datos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Etapa de carga: incorporación al modelo analítico',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Etapa de transformación: preparación y calidad de los datos',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
