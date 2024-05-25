<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
npm install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la Base de datos
```
docker-compose up -d
```
5. Clonar el archivo __.env.template__ y Renombrar
a __.env__
6. Llenar las variables de entorno en el __.env__
7. Ejecutar la aplicacion en dev: 
```
npm run start:dev
```
8. Recargar la bd SEED
```
Ejecutar solo en desarrollo 
http://localhost:3000/api/pokemon
```
## Stack
* mongoDB
* Nest