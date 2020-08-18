# Aplicación de lista de tareas.

Esta aplicación la hago de modo didáctico para aprender varias tecnologías que quiero aprender.

## Ejecutar la aplicación:

En este momento la aplicación solo está disponible en modo de desarrollo

    npm install
    npm run devServer # Usa webpack-dev-server para servir en localhost:8080

## Acerca de esta aplicación

Quiero que esta aplicación me sirva como base para aprender lo siguiente:

* [X] Redux y react-redux -> Esqueleto base de la aplicación
* [X] tailwindcss -> Estilos de la aplicaición
* [X] FontAwesome -> Símbolos
* [ ] firebase -> Autenticación y persistencia
* [ ] redux-saga -> Peticiones asíncronas
* [ ] jest -> Testing automático
* [ ] i18n -> Traducciones
* [ ] circleci -> Continuous Integration
* [ ] vercel -> Deployment

## Redux y react-redux

El esqueleto (por lo menos al princiipio) de esta aplicación se basa en el tutorial de Redux:

https://redux.js.org/basics/basic-tutorial

Con esto estoy aprendiendo bien como es que funciona redux y react-redux.

Le agregué la configuración de webpack para hacer el desarrollo más fluido

## Tailwindcss

No encontré un recurso paso a paso para integrar tailwind con webpack así que buscando en varios recursos encontré que tengo que instalar lo siguiente:

    npm i autoprefixer css-loader mini-css-extract-plugin postcss postcss-loader tailwindcss

Luego cree el archivo de inicialización

    npx tailwind init

Y empecé a darle estilos a mi apliación mediante tailwind

## FontAwesome

Haciendo este proyecto encontré que FontAwesome no funciona tan fácil con react. Intenté asignar las clases dinámicamente, pero cuando cambio las clases no se comporta como espero

Lo primero que intenté y no funcionó fue @fortawesome/fontawesome-free.

Indagando un poco encuentro este otro paquete https://github.com/FortAwesome/react-fontawesome


