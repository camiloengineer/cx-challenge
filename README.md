# Challenge Técnico MercadoLibre Front-End

_Este es un proyecto Full-Stack que replica la funcionalidad de un sitio de compras, similar a Mercado Libre. Permite mostrar información del usuario, visualizar las compras realizadas y acceder a los detalles de cada una. Los datos se consumen a través del backend desde un mock proporcionado en el proyecto de referencia y se representan en el frontend. El frontend cuenta con credenciales internas para un inicio rápido de sesión y una experiencia de usuario fluida, evitando la necesidad de realizar un proceso de inicio de sesión completo._

## Comenzando 🚀

_Para probar este proyecto localmente, clona el repositorio alojado en GitHub._

```
git clone https://github.com/camiloengineer/cx-challenge.git
```

### Pre-requisitos 📋

_Para ejecutar este proyecto en tu máquina local, necesitarás tener instalado [Git](https://git-scm.com/) y [Nodejs](https://nodejs.org/es/download/). El proyecto ha sido probado con la última versión estable de Node.js (v18.16.0)._

### Frontend 🖥️

_El frontend se construye en Typescript y React, utilizando Tailwind y PostCSS. Se enfoca en mobile first y se presta especial atención a UX/UI. La aplicación emplea "Lazy Loading" para una carga optimizada y ofrece modos claro y oscuro. Se utiliza Storybook para el desarrollo de componentes UI, Redux para el manejo del estado y Apollo Client para consumir APIs GraphQL. El proyecto incluye pruebas unitarias y sigue una arquitectura hexagonal para una mejor organización del código. Además, se aplica ESLint para garantizar la calidad del código._

### Backend 🖥️

_El backend se desarrolla en NestJS utilizando Typescript y emplea JSON Web Tokens (JWT) para la autenticación. Se utiliza GraphQL para las consultas de datos, y los endpoints se protegen mediante guards. Además, se utiliza ESLint para garantizar la calidad del código. La estructura del proyecto está diseñada de manera escalable y flexible, con una gestión de credenciales que incluye la comparación de contraseñas encriptadas y la emisión de tokens de acceso (bearer tokens) para consultas futuras. También se tiene en cuenta la gestión de claves para distintos entornos de despliegue y se aplica una expiración del token._

## Instalación y ejecución 🔧

_igue los siguientes pasos para instalar y ejecutar el proyecto correctamente:_

**Paso 1: Server**

_Levanta primero el servidor para asegurar que el front pueda consumir los datos correctamente._

```
cd server
yarn install
yarn start:dev
```

**Paso 2: Client**

_Ahora que el backend está funcionando, puedes iniciar el frontend._

```
cd client
yarn install
yarn run start:dev
```

## Pruebas unitarias 🧪

_Puedes ejecutar las pruebas unitarias del proyecto de la siguiente manera:_

```
cd client
yarn test --watchAll
```

## Storybook 📕

_Puedes ejecutar Storybook de la siguiente manera:_

```
cd client
yarn storybook
```

## ESLint  ✔️

_Puedes ejecutar Storybook de la siguiente manera:_

```
cd client
yarn lint
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
