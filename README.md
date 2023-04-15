Desarrollar el maquetado de una pagina de detalle de un producto para un sitio de ecommerce, se deberán visualizar los siguientes datos:

Nombre
Descripción
Precio
SKU
Cantidad disponible
Realizar un maquetado con los datos, desarrollado con componentes.

Agregar al mismo un botón "Comprar".

Al hacer clic en dicho botón se deberá mostrar debajo del mismo un mensaje al usuario que diga:

"Gracias por su compra".

Resolverlo utilizando manejo de estados.


## agregado:
Trabajo de Api reset donde se muestra el id, title, description, precio, una imagen y categorias todo realizado desde un FETCH a una API externa de ejemplo


Realizar una consulta a una api rest, para mostrar una pagina de home con un listado de productos.

Se debe visualizar:

Nombre
Precio
Botón "Ver Detalle"
El mismo no debe realizar ninguna acción
Mantener el/los componentes desarrollados hasta el momento. 

Realizar una consulta a una api rest, para mostrar una pagina de home con un listado de productos.

Se debe visualizar:

Nombre
Precio
Botón "Ver Detalle"
El mismo no debe realizar ninguna acción
Mantener el/los componentes desarrollados hasta el momento. 

## como se hizo:
 En este ejemplo usé la API rest de pruebas y gratuita llamada fakestoreapi y guarde todos los datos de la api rest en variables que use dentro de los divs

lo bueno de esta api que es parecida al trabajo anterior y pude usar id, titulo, precio, descriopcion y categoria. Le agregue imagens y el botton de detalle que solamente muestra un texto (al igua
  que el que hicmos en comprar) Use fetch para traer los datos de la API, tambien THEN y catch por las dudas si surge un error

  Tambien realize el trabajo de un poco de CSS responsive (se que se puede mejorar pero es mas que nada para que se vea limpio el resultado)