# SocketIo-php-nodeJs

### Descripcion del proyecto

El mini proyecto se compone de dos carpetas:
- `CHAT (Server Node - Express)`
- `datos-php (Cliente)`

El cliente basado en php se comunica directamente con la ruta del servidor la cual seria ![](http://localhost:3000/) enviandole un dato y el servidor recepciona ese dato
con la libreria socket.io mostrando asi la informacion del cliente en la venta del chat del servidor.

### Instalacion
Para poder probar el proyecto 
- `abrir Visual Studio Code`
- `abrir la terminal que use git bash`
- escrbir el comando `git clone` y pegar la url que proporciona este repositorio para tener la copia del proyecto y poder probarlo de manera local

### Ejecución

### PHP

- Para poder abrir el cliente PHP se tiene que tener instalado xampp o wammp server para poder ejecutarlo
- activar solo apache y podra correr el cliente.

### Node JS + Express

- Para el caso de node es importante tener instalado `NodeJs`, puedes descargarlo ![Aquí](https://nodejs.org/es), ya que esto nos servira para trabajar en el entorno de node
- Luego una vez que tengamos todo listo, en git bash ejecutamos el comando `node index.js` para levantar el servidor que en su defecto sera el puerto 3000, te dejo la ruta para el acceso ![Aqui](http://localhost:3000/)

  ### Notas Finales
  Al abrir el cliente php este enviara informacion al chat del servidor nodeJs

  ### Importante
  una vez abirto la url cliente en `localhost`, recargar la ventana del Servidor para apreciar el mensaje enviado, o por su defecto digitar cualquier letra del input para su visualizacion, a un no se puedo resolver ese pequeño bug.
