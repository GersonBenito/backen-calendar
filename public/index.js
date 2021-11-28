let contenido = document.querySelector('.contenido');
const tecnologias = [
    {
        name: 'Node.js',
        description: 'Como un tiempo de ejecución de JavaScript asincrónico controlado por eventos, Node.js está diseñado para crear aplicaciones de red escalables.',
        img: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png',
        alt: 'node.js',
        url: 'https://nodejs.org/en/'
    },
    {
        name: 'Express.js',
        description: 'La filosofía de Express es proporcionar herramientas pequeñas y sólidas para servidores HTTP, lo que la convierte en una gran solución para aplicaciones de una sola página, sitios web, híbridos o API HTTP públicas. Express no le obliga a utilizar ningún ORM o motor de plantilla específico. Con soporte para más de 14 motores de plantilla a través de Consolidate.js , puede crear rápidamente su marco perfecto.',
        img: 'https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-Lgyno4NC7rhy49BAEjN%2F-Lh14lb3LH4C886qWxYA%2F-Lh1DZeIUQennGd9RiHe%2FScreen%20Shot%202019-06-10%20at%2011.30.20%20AM.png?alt=media&token=784b79f6-81b5-4308-97a2-155afb9d496f',
        alt: 'express.js',
        url: 'https://www.npmjs.com/package/express',
    },
    {
        name: 'Mongo',
        description: 'Trabajar con datos no tiene por qué ser complicado. Nuestro principio rector es ayudar a los desarrolladores a resolver sus desafíos de datos. Esto es lo que puede hacer con MongoDB.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png',
        alt: 'mongo db',
        url: 'https://www.mongodb.com/es',
    },
    {
        name: 'Mongoose.js',
        description:'Mongoose proporciona una solución sencilla basada en esquemas para modelar los datos de su aplicación. Incluye conversión de tipos incorporada, validación, creación de consultas, ganchos de lógica empresarial y más, listos para usar.',
        img: 'https://miro.medium.com/max/648/1*iDvsmUwzZQxJSKdL0xzwIA.png',
        alt: 'mongoose.js',
        url: 'https://mongoosejs.com/',
    },
    {
        name: 'Bootstrap',
        description: 'Diseñe y personalice rápidamente sitios receptivos para dispositivos móviles con Bootstrap, el kit de herramientas de código abierto de front-end más popular del mundo, que presenta variables y mixins de Sass, sistema de cuadrícula receptivo, amplios componentes prediseñados y potentes complementos de JavaScript.',
        img: 'https://www.4webs.es/blog/wp-content/uploads/2017/09/nueva-beta-de-bootstrap-4.jpg',
        alt: 'bootstrap',
        url: 'https://getbootstrap.com/'
    },
    {
        name: 'JWT',
        description: 'Los tokens web JSON son un método RFC 7519 estándar de la industria abierto  para representar reclamaciones de forma segura entre dos partes. JWT.IO le permite decodificar, verificar y generar JWT.',
        img: 'https://cdn.worldvectorlogo.com/logos/jwtio-json-web-token.svg',
        alt: 'jsonwebtoken',
        url: 'https://jwt.io/'
    }
];



tecnologias.forEach(tec =>{
    
    contenido.innerHTML += `
            <div class="card" style="width: 22rem;">
                <img src="${tec.img}" class="card-img-top" alt="node.js">
                <div class="card-body">
                    <h5 class="card-title">${tec.name}</h5>
                    <p class="card-text">${tec.description}</p>

                    <a href="${tec.url}" target="_blank">
                        <button class="btn btn-info btn-block">
                            Ir al sitio web de ${tec.name}
                        </button>
                    </a>
                </div>
            </div>
        `
})
