### NASA Api challenge
## Tecnologias utilizadas
- NextJs
- Typescript
- Chakra-ui
- Axios
- React-Hook-Form

## Comenzando
# Clonando el repositorio 
```bash

git clone <url de repositorio/>

```

# Instalacion de las dependencias necesarias para que funcione la aplicacion:
```bash

npm install

```
# Agregar variable de entorno y api-key 
En este paso se debe crear un archivo .env en el root del proyecto.
Luego crear dentro una variable -> NEXT_PUBLIC_NASA_API_KEY=<'api-key dada por la api de la NASA'>
Dejo una api generada para que puedan utilizar -> xaUnVd3aBFHiUZsjwW6rWI9HKe1BBQlJ6puxWagQ
En caso de estar vencida pueden generar una facilmente en su web https://api.nasa.gov/

# Levantar entorno de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
## Oportunidad de mejoras
Al realizar el guardado de las busquedas se utilizo localStorage, en el desarrollo de esta funcionalidad se encuentra un error del lado del servidor, ya que localStorage funciona del lado del cliente, si bien el codigo es funcional, con mas tiempo se podria encontrar una solucion a este bug. Se deja el error a continuacion.
// error context\SearchContext.tsx (23:19) @ localStorage
- error ReferenceError: localStorage is not defined
    at getLocalStorageData (./context/SearchContext.tsx:18:24)
    at SearchProvider (./context/SearchContext.tsx:24:95)
|
|   const getLocalStorageData = (): SearchValuesType[] => {
|     const search = localStorage.getItem('Search');
|                   ^
|     if (search) {
|       return JSON.parse(search);
|     }
//
Otro punto de mejora es realizar mobile el responsive de la aplicacion.


## Conclusion

El desarrollo del proyecto comenzo con la idea de realizarlo con reactjs + vite, pero luego se opto por realizarlo con NextJs v13, uno de los desafios fue la utilizacion de componentes del lado del servidor y componentes del lado del cliente, ya que es un punto fundamental que nos brinda Next, encuentro provechoso continuar con el estudio sobre la hidratacion y la gerarquia de componentes dentro de nextJs. A su vez el sistema de ruteo que brinda con app router es muy versatil. Por otro lado, hubo un punto bloqueante:  al momento de hacer la configuracion con la Api, se podria haber establecido un manejador de rutas, creando un fichero Api y dentro una ruta para hacer la conexion con la Api, pero considere que al ser una aplicacion que no va escalar en ese sentido hacer uso de un custom hook y que este maneje la peticion.
