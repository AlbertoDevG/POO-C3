1- Creacion de un usuario con su respectivo paquete: 
POST /usuarios
{
  "nombre": "William Morales",
  "paquete": "paquete60"
}

2- Verificar que el usuario se haya creado con exito:
GET /usuarios

3- Ver los creditos de un usuario en especifico: Reemplazar "id" con el id del usuario.
GET /usuarios/id/credito  

4- Realizar un envio: Reemplazar "id" por el id del usuario
POST /envios
{
  "usuario_id": "id", 
  "nombre": "William Morales",
  "direccion": "San Miguel",
  "telefono": "7777-8888",
  "referencia": "Frente a Univo",
  "observacion": "Dejar en portón",
  "producto": {
    "descripcion": "Computadora",
    "peso": 9,
    "bultos": 1,
    "fecha_entrega": "2025-05-10"
  }
}

5- Ver los envios de un usuario en especifico: Reemplazar "usuario_id" por el id del usuario 
GET /envios/usuario_id 

6- Eliminar un envio: Reemplazar "id" por el id del envio que desee eliminar. 
DELETE /envios/id

NOTAS:
1- Al realizar un envio, la cantidad de creditos utilizada debe de ser descontada a los creditos del usuario.
2- Al eliminar un envio, la cantidad de creditos utilizada debe de ser devuelta al usuario.
3- No se puede eliminar un envio que no existe.
4- Si un usuario no tiene creditos, no puede realizar un envio nuevo. 
5- El paquete asignado debe de ser válido.
6- Los creditos de un envio son calculados mediante su peso.
