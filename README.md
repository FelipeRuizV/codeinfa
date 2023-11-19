# Código de Software para CODEINFA


# Tutorial para Base de Datos con Laragon.

### Paso a paso para instalación.

1. Entrar a https://laragon.org/download/index.html 
2. Elegir opción "Descargar Laragon - Full".
3. Ejecutar el archivo .exe
4. Aceptar y darle siguiente a todo hasta la opción instalar.
5. Luego de la instalación clickear la opción finalizar y correr Laragon.


### Paso a paso para agregar las tablas a la base de datos.

1. Ya en la aplicación darle click a "Iniciar Todo".
2. Luego dar click en Base de Datos.
3. En la pestaña siguiente dar click en "Abrir". (Debe estar seleccionada la base Laragon.MySQL)
4. Hacer click derecho en "Laragonj.MySQL".
5. Hacer click en la opción: "Crear nueva Base de Datos".
6. Darle como nombre a la base de datos: "usuarios_db".
7. Hacer click derecho en la base de datos creada (usuarios_db).
8. Hacer click en la opción: "Crear nueva Tabla".

### Paso a paso para rellenar las tablas. (IMPORTANTE: Abrir la aplicación en pantalla completa)
## Tabla 1: "anuncios"

1. La primera tabla debe tener el nombre: "anuncios"
2. Dentro de esta tabla en la sección inferior, debajo de la fila que dice: " # | Nombre | Tipo de Datos | Longitud/Conjuntos |.... | Virtualidad |.
3. Antes de continuar, Copiar este texto para rellenar la tabla: 

"
Name=id<|||>OldName=id<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=3<|||>DefaultText=AUTO_INCREMENT<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=nombre<|||>OldName=nombre<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf8mb4<|||>Collation=utf8mb4_0900_ai_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=asunto<|||>OldName=asunto<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf8mb4<|||>Collation=utf8mb4_0900_ai_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=fecha<|||>OldName=fecha<|||>DataType=16<|||>OldDataType=53<|||>LengthSet=<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=cuerpo<|||>OldName=cuerpo<|||>DataType=30<|||>OldDataType=53<|||>LengthSet=<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf8mb4<|||>Collation=utf8mb4_0900_ai_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=fecha_caducidad<|||>OldName=fecha_caducidad<|||>DataType=16<|||>OldDataType=53<|||>LengthSet=<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0

"
4. Hacer click en el Área explicada en el punto 2. y luego seleccionar "pegar columnas"
5. Para finalizar hacer click en el botón "Guardar" debajo del recuadro de las columnas

## Tabla 2: "anuncios"

