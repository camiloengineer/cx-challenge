# Challenge Técnico Mercadolibre Front-End

_Este es un proyecto Full-Stack que replica un sitio de compras, específicamente Mercado Libre. Permite listar la información del usuario, visualizar sus compras y los detalles de cada una. Los datos se consumen a través del backend desde el mock entregado en el proyecto de referencia y se representan en el frontend. Además, integra un sistema de autenticación, que pasa las credenciales internamente al levantar los proyectos, protegiendo tanto las rutas del front-end como los endpoints del backend._

## Comenzando 🚀

_Para probar este proyecto localmente, clona el repositorio alojado en GitHub._

```
git clone https://github.com/camiloengineer/cx-challenge.git
```

### Pre-requisitos 📋

_Para ejecutar este proyecto en tu máquina local, necesitas tener instalado [Git](https://git-scm.com/) y [Nodejs](https://nodejs.org/es/download/)_

### Frontend 🖥️

_El frontend está construido en Typescript con React y utiliza Tailwind y PostCSS, y sigue un enfoque mobile first y teniendo en cuenta UX/UI. La aplicación usa "Lazy Loading" para optimizar la carga, y admite modos claro y oscuro. Storybook para el desarrollo aislado de componentes UI, Redux para el manejo del estado, y un cliente Apollo para consumir APIs GraphQL. El proyecto cuenta con pruebas unitarias, una arquitectura hexagonal para separar las responsabilidades del código, y utiliza ESLint para la calidad del código._

### Backend 🖥️

_El backend está hecho en NestJS con Typescript y utiliza JSON Web Tokens para la autenticación y GraphQL para las consultas de datos. Los endpoints están protegidos con guards, y utiliza ESLint para la calidad del código._

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
