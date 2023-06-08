# Challenge Técnico Mercadolibre Front-End

_Este es un proyecto full-stack que consiste en replicar un sitio de compras, específicamente el de Mercado Libre. En este proyecto, se puede listar la información del usuario, visualizar sus compras y el detalle de cada una de ellas. Los datos provienen del mock entregado en el proyecto de referencia, que se consume a través del backend y se representa en el frontend. Además de cumplir con los requisitos básicos del challenge, también he integrado un sistema de autenticación basado en JWT, donde tanto las rutas del front-end como los endpoints del backend están protegidos._

## Comenzando 🚀

_El repositorio de este proyecto se encuentra alojado en GitHub. Puedes clonarlo en tu máquina local para propósitos de desarrollo y pruebas._

```
$ git clone https://github.com/camiloengineer/cx-challenge.git
```

### Pre-requisitos 📋

_Para ejecutar este proyecto en tu máquina local, necesitas tener instalado [Git](https://git-scm.com/), [Nodejs](https://nodejs.org/es/download/)_

### Frontend 🖥️

_El frontend está construido en Typescript con React, utiliza Tailwind y PostCSS. Incorpora Storybook para desarrollar componentes de UI de forma aislada, Redux para el manejo del estado, y un cliente Apollo para consumir APIs GraphQL. También cuenta con pruebas unitarias y una arquitectura hexagonal para separar las responsabilidades del código._

### Backend 🖥️

_El backend está hecho en NestJS con Typescript, utiliza JSON Web Tokens para la autenticación, GraphQL para las consultas de datos, Prettier y ESLint para el formateo del código, y guards para proteger los endpoints._

### Instalación y ejecución 🔧

**Backend**

```
cd server
yarn install
yarn start:dev
```

**Frontend**

```
cd client
yarn install
yarn run start
```

### Pruebas unitarias 🧪

```
yarn test
```

### Storybook 📕

```
yarn storybook
```

## Autores ✒️

* **Camilo González** - [Linkedin](https://www.linkedin.com/in/camiloengineer/)

## Expresiones de Gratitud 🎁

* Comparte este proyecto con colegas de Mercado Libre 📢
* Estoy abierto a nuevas oportunidades y proyectos, no dudes en contactarme 🤝🏽 

---
_Este proyecto se ha creado con el fin de ser evaluado para un challenge técnico de Mercado Libre, pero si estás interesado en su estructura y funcionalidad puedes usarlo como referencia._
