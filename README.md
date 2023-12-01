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
#### Tabla 1: "anuncios"

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

#### Tabla 2: "calendario"
1. La segunda tabla debe tener el nombre: "calendario"
2. Dentro de esta tabla localizar sección inferior, debajo de la fila que dice: " # | Nombre | Tipo de Datos | Longitud/Conjuntos |.... | Virtualidad |.
3. Antes de continuar, Copiar este texto para rellenar la tabla:

"
Name=id<|||>OldName=id<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=3<|||>DefaultText=AUTO_INCREMENT<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=titulo<|||>OldName=titulo<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=color<|||>OldName=color<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=7<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=fecha_inicio<|||>OldName=fecha_inicio<|||>DataType=19<|||>OldDataType=53<|||>LengthSet=<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=fecha_fin<|||>OldName=fecha_fin<|||>DataType=19<|||>OldDataType=53<|||>LengthSet=<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
"

4. Hacer click en el Área explicada en el punto 2. y luego seleccionar "pegar columnas"
5. Para finalizar hacer click en el botón "Guardar" debajo del recuadro de las columnas

   #### Tabla 3: "empleados"
1. La segunda tabla debe tener el nombre: "empleados"
2. Dentro de esta tabla localizar sección inferior, debajo de la fila que dice: " # | Nombre | Tipo de Datos | Longitud/Conjuntos |.... | Virtualidad |.
3. Antes de continuar, Copiar este texto para rellenar la tabla:

"
Name=id<|||>OldName=id<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=3<|||>DefaultText=AUTO_INCREMENT<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=nombre<|||>OldName=nombre<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=100<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=rut<|||>OldName=rut<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=telefono<|||>OldName=telefono<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=correo<|||>OldName=correo<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=100<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=direccion<|||>OldName=direccion<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=100<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=cargo<|||>OldName=cargo<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=100<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=contrasena<|||>OldName=contrasena<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=12<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf8mb4<|||>Collation=utf8mb4_0900_ai_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
"

4. Hacer click en el Área explicada en el punto 2. y luego seleccionar "pegar columnas"
5. Para finalizar hacer click en el botón "Guardar" debajo del recuadro de las columnas

#### Tabla 4: "notas"
1. La segunda tabla debe tener el nombre: "notas"
2. Dentro de esta tabla localizar sección inferior, debajo de la fila que dice: " # | Nombre | Tipo de Datos | Longitud/Conjuntos |.... | Virtualidad |.
3. Antes de continuar, Copiar este texto para rellenar la tabla:

"
Name=id<|||>OldName=id<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=3<|||>DefaultText=AUTO_INCREMENT<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=nombre<|||>OldName=nombre<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=descripcion<|||>OldName=descripcion<|||>DataType=32<|||>OldDataType=53<|||>LengthSet=<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=color<|||>OldName=color<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=nombre_empleado<|||>OldName=nombre_empleado<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf8mb4<|||>Collation=utf8mb4_0900_ai_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
"

4. Hacer click en el Área explicada en el punto 2. y luego seleccionar "pegar columnas"
5. Para finalizar hacer click en el botón "Guardar" debajo del recuadro de las columnas

#### Tabla 5: "riesgo"
1. La segunda tabla debe tener el nombre: "riesgo"
2. Dentro de esta tabla localizar sección inferior, debajo de la fila que dice: " # | Nombre | Tipo de Datos | Longitud/Conjuntos |.... | Virtualidad |.
3. Antes de continuar, Copiar este texto para rellenar la tabla:

"
Name=id<|||>OldName=id<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=3<|||>DefaultText=AUTO_INCREMENT<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=migrante<|||>OldName=migrante<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=barreralinguistica<|||>OldName=barreralinguistica<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=indocumentado<|||>OldName=indocumentado<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=sinredapoyo<|||>OldName=sinredapoyo<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=sinredamigues<|||>OldName=sinredamigues<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=novisibilidad<|||>OldName=novisibilidad<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=sintrabajo<|||>OldName=sintrabajo<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=viveconagresor<|||>OldName=viveconagresor<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=sindispositivos<|||>OldName=sindispositivos<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=aislamiento<|||>OldName=aislamiento<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=dependeeconomicamente<|||>OldName=dependeeconomicamente<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=nohogar<|||>OldName=nohogar<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=hijesencomun<|||>OldName=hijesencomun<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=niñesacargo<|||>OldName=niñesacargo<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=totalsocial<|||>OldName=totalsocial<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=enfermedadbase<|||>OldName=enfermedadbase<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
"

4. Hacer click en el Área explicada en el punto 2. y luego seleccionar "pegar columnas"
5. Para finalizar hacer click en el botón "Guardar" debajo del recuadro de las columnas

#### Tabla 6: "sesiones"
1. La segunda tabla debe tener el nombre: "sesiones"
2. Dentro de esta tabla localizar sección inferior, debajo de la fila que dice: " # | Nombre | Tipo de Datos | Longitud/Conjuntos |.... | Virtualidad |.
3. Antes de continuar, Copiar este texto para rellenar la tabla:

"
Name=id<|||>OldName=id<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=3<|||>DefaultText=AUTO_INCREMENT<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=fecha<|||>OldName=fecha<|||>DataType=16<|||>OldDataType=53<|||>LengthSet=<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=descripcion<|||>OldName=descripcion<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=2000<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf8mb4<|||>Collation=utf8mb4_0900_ai_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=rut_usuario<|||>OldName=rut_usuario<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf8mb4<|||>Collation=utf8mb4_0900_ai_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
"

4. Hacer click en el Área explicada en el punto 2. y luego seleccionar "pegar columnas"
5. Para finalizar hacer click en el botón "Guardar" debajo del recuadro de las columnas

#### Tabla 7: "usuarios"
1. La segunda tabla debe tener el nombre: "usuarios"
2. Dentro de esta tabla localizar sección inferior, debajo de la fila que dice: " # | Nombre | Tipo de Datos | Longitud/Conjuntos |.... | Virtualidad |.
3. Antes de continuar, Copiar este texto para rellenar la tabla:

"
Name=id<|||>OldName=id<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=3<|||>DefaultText=AUTO_INCREMENT<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=nombre<|||>OldName=nombre<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=100<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=rut<|||>OldName=rut<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=profesional<|||>OldName=profesional<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=100<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=prioridad<|||>OldName=prioridad<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=100<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=edad<|||>OldName=edad<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=nacionalidad<|||>OldName=nacionalidad<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=100<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=nacimiento<|||>OldName=nacimiento<|||>DataType=16<|||>OldDataType=53<|||>LengthSet=<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=civil<|||>OldName=civil<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=100<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=direccion<|||>OldName=direccion<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=100<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=educacion<|||>OldName=educacion<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=100<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=telefono<|||>OldName=telefono<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=correo<|||>OldName=correo<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=100<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=pareja<|||>OldName=pareja<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=1<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=vinculoagresor<|||>OldName=vinculoagresor<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=sistemasalud<|||>OldName=sistemasalud<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=sistemasaludDOS<|||>OldName=sistemasaludDOS<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=fisica<|||>OldName=fisica<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=saludmental<|||>OldName=saludmental<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=tratamiento<|||>OldName=tratamiento<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=farmaco<|||>OldName=farmaco<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=cualfarmaco<|||>OldName=cualfarmaco<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=drogas<|||>OldName=drogas<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=intentoS<|||>OldName=intentoS<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=ideasS<|||>OldName=ideasS<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=profesion<|||>OldName=profesion<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=remunerado<|||>OldName=remunerado<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=trabaja<|||>OldName=trabaja<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=dondetrabaja<|||>OldName=dondetrabaja<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=horarios<|||>OldName=horarios<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=ingresossalario<|||>OldName=ingresossalario<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=1<|||>DefaultText=0<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=ingresosjubilacion<|||>OldName=ingresosjubilacion<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=1<|||>DefaultText=0<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=ingresossubsidio<|||>OldName=ingresossubsidio<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=1<|||>DefaultText=0<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=ingresospension<|||>OldName=ingresospension<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=1<|||>DefaultText=0<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=ingresosotros<|||>OldName=ingresosotros<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=1<|||>DefaultText=0<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=dependeeco<|||>OldName=dependeeco<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=dependequien<|||>OldName=dependequien<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=dependedelagresor<|||>OldName=dependedelagresor<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=viffamilia<|||>OldName=viffamilia<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=vifniñez<|||>OldName=vifniñez<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=vifporotro<|||>OldName=vifporotro<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=otroquien<|||>OldName=otroquien<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=tipoviolencia<|||>OldName=tipoviolencia<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=primerviolencia<|||>OldName=primerviolencia<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=ultimoviolencia<|||>OldName=ultimoviolencia<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=personashogar<|||>OldName=personashogar<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=1<|||>DefaultText=0<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=canthijes<|||>OldName=canthijes<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=1<|||>DefaultText=0<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=hijesagresor<|||>OldName=hijesagresor<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=1<|||>DefaultText=0<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=cantnna<|||>OldName=cantnna<|||>DataType=3<|||>OldDataType=53<|||>LengthSet=10<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=1<|||>DefaultText=0<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=<|||>Collation=<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=vivienda<|||>OldName=vivienda<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=pertenecejunta<|||>OldName=pertenecejunta<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=perteneceadultomayor<|||>OldName=perteneceadultomayor<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=pertenecemujer<|||>OldName=pertenecemujer<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=pertenecereligion<|||>OldName=pertenecereligion<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=pertenecedeportiva<|||>OldName=pertenecedeportiva<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=pertenececultural<|||>OldName=pertenececultural<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=perteneceotra<|||>OldName=perteneceotra<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=psicologica<|||>OldName=psicologica<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=legal<|||>OldName=legal<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
Name=social<|||>OldName=social<|||>DataType=27<|||>OldDataType=53<|||>LengthSet=50<|||>Unsigned=0<|||>AllowNull=0<|||>ZeroFill=0<|||>LengthCustomized=0<|||>DefaultType=0<|||>DefaultText=<|||>OnUpdateType=0<|||>OnUpdateText=<|||>Comment=<|||>Charset=utf16<|||>Collation=utf16_general_ci<|||>GenerationExpression=<|||>Virtuality=<|||>Status=0
"

4. Hacer click en el Área explicada en el punto 2. y luego seleccionar "pegar columnas"
5. Para finalizar hacer click en el botón "Guardar" debajo del recuadro de las columnas
