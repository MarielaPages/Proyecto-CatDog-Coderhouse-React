# Proyecto React: e-commerce
Soy Mariela Pagés. Este es mi proyecto final para el curso de ReactJS en [CoderHouse](https://plataforma.coderhouse.com/), cursado en Enero 2022.
La base del proyecto es un e-commerce hecho con React, implementado con herramientas tales como React Router DOM, React Hooks, Bootstrap para la definición de estilos homogéneos y Firebase como base de datos.

El proyecto busca mostrar un negocio de muebles y ropas para perros y gatos. En el mismo pueden encontrar:
- Una seccion principal de productos generales por las que se puede navegar y seleccionar la de interés.
- Una sección de productos solo para gatos con la misma interacción mencionada antes.
- Una seccioón de productos solo para perros con la misma interacción mencionada.
- Una sección que cuenta sobre el propocito de la marca y su misión.
- Una sección de preguntas frecuentes. 

Decidí hacer esta página con un aspecto minimalista de forma que navegar por ella y comprar sea sencillo y agradable. Por otro lado, la hice en inglés pensando en un percado más allá del país. 

# Inicializando el proyecto
Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Instalación 
Para instalar las dependencias requeridas, ejecutar `npm install`

## Uso
Para iniciar el servidor, ejecutar `npm start`. Para acceder a la App luego de inicializado el servidor, abrir http://localhost:3000 en el navegador.

# Librerias y dependencias utilizadas

## Bootstrap
Se utilizó Bootstrap como base para darle estilo de la página con el fin de mejorar en look & feel de la App web. Por otro lado, hacer uso del mismo me permitía concentrarme en la implementación de React, finalidad principal del curso, permitiendo una interfaz homogénea, simple y coherente.

## FontAwesome
Se utilizó FontAwesome con el fin de obtener los iconos necesarios para la App web.

## React-Router-DOM
Para brindarle enrutamiento a la página, utilicé la colección de componentes que nos brinda React Router Dom para las aplicaciones web. De esta forma, se otorgó navegabilidad a la app.

## Storage de imágenes/assets
Las imágenes se encuentran almacenadas en Storage de [Firebase](https://console.firebase.google.com/)

# Documentación 

## Convenciones
Los nombres de los componentes React por convención están escritos en Pascal Case. Las variables y funciones implementadas estan escritas en Camel Case. 

## Flujo de compra
El usuario ingresa a la web y se despliega en el Home un listado de los productos, de los cuales puede elegir y hacer click en cualquiera. A través del menú, puede seleccionar la categoría de interés, y navegar por un listado de productos filtrado para seleccionar el/los que desea. Cuando selecciona alguno de estos productos, se abre una vista de detalle con el producto y botones para elegir más o menos dentro del stock. Una vez que elige la cantidad y pone "add to cart"se agrega el producto al carrito. Se muestra en el toolbar el icono del carrito con la cantidad de items totales (siendo items totales la suma de las unidades de cada producto añadido). Una vez decidida la compra, en la sección Cart el usuario puede revisar y eliminar productos, confirmar la compra o seguir comprando. En caso de confirmar la compra, se monta el componente de checkout con los diferentes pasos a seguir para generar la orden de compra: un formulario que capta los datos personales del buyer (usuario) que persiste en firebase/firestore, junto con los datos de los items comprados, la fecha y el total. Al confirmar, se genera la orden de compra persistente en una colección de firestore, y el usuario observa un mensaje con el número de ID de su compra y el total.

## Estructura y componentenes
A nivel raiz de la app, en el componente App, se encuentran el Provider de context API (Products Provider) y el BrowserRouter. De esta forma, todos los componentes que estén incluídos en App van a poder consumir el contexto, tanto de los productos del carrito como de sus totales, y se puede hacer uso de las rutas de "React-Router-DOM" desde cada componente. Dentro de las rutas de navegación, se implementó la ruta 404, page not found. 
En App tambien se enuentran el NavBar y el footes, donde el primero contiene las diferentes rutas de navegación. 
El main de la página se encuentra en el Home Page. A partir de esta página, se despliega el patrón de Container, List and Detail, cuya lógica es la siguiente:
- El ItemListContainer contiene una presentación y al componente ItemList, dentro del cual se realiza el pedido a Firestore a tarves de un query que nos permite traer todos los productos de la colección correspondiente. Cada uno de los productos traídos es dibujado en el anterior componente, llamando al componente Item, que contiene la estructura para cada tarjeta producto. Es en estas tarjetas que, al hacer click, se llama a la vista Detail a través de un componente Link. Una vez dentro del detalle, a través de eventos se seleccionan los productos deseados y a partir de otro Link se puede ir al carrito. 

Como dijimos, en el navBar se encuentran las categorías de productos. Al ingresar en ellas, haciendo click, podemos ver la siguiente lógica:
- En el CategoryItemContainer se hace el pedido a Firestore y se dibujan las tarjetas llamando al componente Item. El resto del flujo es igual al mencionado en el item anterior.

En el componente Cart (el carrito) se encuentra la siguiente lógica:
- Se utiliza un condicional donde, de no haber productos, se muestra un cartel y a través de un Link devolvemos al usuario al Home, mientras que de haber productos, se pintan los mismos con sus cantidades, mostrando varios botones. Estos botones contienen eventos que permiten borrar un elemento o borrar todos los elementos. Por ultimo, hay un tercer botón que, con un Link, lleva al formulario de fin de compra. 

El formulario de compra tiene la siguiente lógica:
- Se trata de un formulario con 3 inputs (Nombre, Apellido y Calle). Por otro lado hay un boton que dispara el evento submit. El event handler del mismo nos permite guardar los datos mencionados, junto con la fecha de compra, los productos y el total. A su vez, este arroja un mensaje con el ID de compra. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
