# Challenge Técnico Mercadolibre Front-End

_Este es un proyecto full-stack que consiste en replicar un sitio de compras, específicamente el de Mercado Libre. En este proyecto, se puede listar la información del usuario, visualizar sus compras y el detalle de cada una de ellas. Los datos provienen del mock entregado en el proyecto de referencia, que se consume a través del backend y se representa en el frontend. Además de cumplir con los requisitos básicos del challenge, también he integrado un sistema de autenticación basado en JWT, donde tanto las rutas del front-end como los endpoints del backend están protegidos._

## Comenzando 🚀

_El repositorio de este proyecto se encuentra alojado en GitHub. Puedes clonarlo en tu máquina local para propósitos de desarrollo y pruebas._

```
$ git clone https://github.com/camiloengineer/cx-challenge.git
```

### Pre-requisitos 📋

_Para ejecutar este proyecto en tu máquina local, necesitas tener instalado [Git](https://git-scm.com/) y [Nodejs](https://nodejs.org/es/download/)_

### Frontend 🖥️

_El frontend está construido en Typescript con React, y utiliza Tailwind y PostCSS. El proyecto utiliza la técnica de "Lazy Loading" para una optimización de carga más eficiente. Incorpora Storybook para desarrollar componentes de UI de forma aislada, Redux para el manejo del estado, y un cliente Apollo para consumir APIs GraphQL. También cuenta con pruebas unitarias y una arquitectura hexagonal para separar las responsabilidades del código._

### Backend 🖥️

_El backend está hecho en NestJS con Typescript, utiliza JSON Web Tokens para la autenticación, GraphQL para las consultas de datos, Prettier y ESLint para el formateo del código, y guards para proteger los endpoints._

## Instalación y ejecución 🔧

_Sigue estos pasos para instalar y ejecutar el proyecto correctamente:_

**Paso 1: Backend**

_Levanta primero el servidor para asegurar que el front pueda consumir los datos correctamente._

```
cd server
yarn install
yarn start:dev
```

**Paso 2: Frontend**

_Ahora que el backend está funcionando, puedes iniciar el frontend._

```
cd client
yarn install
yarn run start
```

## Pruebas unitarias 🧪

_Puedes ejecutar las pruebas unitarias del proyecto, las cuales están en el directorio `client`, de la siguiente manera:_

```
cd client
yarn test
```

## Storybook 📕

_Puedes ejecutar Storybook, el cual está en el directorio `client`, de la siguiente manera:_

```
cd client
yarn storybook
```

## Directorio del Challenge

_La data del challenge está ubicada en el directorio `server/cx-frontend-challenge`._

## Uso de Postman

_Se ha incluido una colección Postman para facilitar las pruebas de los endpoints del API. Puedes encontrarlo en `server/postman_collection.json`._

## Autor ✒️

* **Camilo González** 
    * [Linkedin](https://www.linkedin.com/in/camiloengineer/)
    * [Website](https://www.camiloengineer.com/)
    * [Email](mailto:camilo@camiloengineer.com)

## Curriculum

_Mi currículum está incluido en la raíz del repositorio para cualquier referencia._

## Expresiones de Gratitud 🎁

* Comparte este proyecto con colegas de Mercado Libre 📢
* Estoy abierto a nuevas oportunidades y proyectos, no dudes en contactarme 🤝🏽 

---
_Este proyecto se ha creado con el fin de ser evaluado para un challenge técnico de Mercado Libre, pero si estás interesado en su estructura y funcionalidad puedes usarlo como referencia._
