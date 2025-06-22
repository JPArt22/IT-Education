'''
Importamos la librería sqlite3 y de esta librería importamos el Error
'''
import sqlite3 # importar sqlite3
from sqlite3 import Error # importar el manejo de errores

'''
conexion_a_la_bd: Esta función nos permite establecer la conexión con la base datos, para ello 
utilizamos un try que nos permite establecer la conexión con la base de datos principal del programa y except 
que nos permite capturar errores en caso de que la conexión con la base de datos falle y si este es el caso, 
devolvemos un mensaje al usuario haciendo saber que la conexión falló.
'''
def conexion_a_la_bd():
    try:
        con = sqlite3.connect('MI_BDD.db') 
        return con 
    except Error:
        print('Error when you try to create a Data Base') 


# ------------------------------------ Modulo Materias con sus funciones -------------------------------------------

'''
crear_tabla_materias: Esta función nos permite crear la tabla materias dentro de la base de datos, dentro de ella
creamos el objeto cursor para poder manipular la base de datos (cursor_obj). Luego ejecutamos lo que vendría siendo
la creación de la tabla en caso de que no exista y asignamos los items de la tabla junto con el tipo de dato que 
le corresponde a cada uno; además también identificamos el código_materia como identificador único, para esto 
llamamos a PRIMARY KEY. Por último guardamos la información en el disco con con.commit para la persistencia de la 
información.
'''
def crear_tabla_materias(con): # función para la creación de la tabla materias
    cursor_obj = con.cursor() # creamos el objeto cursor para manipular la BDD
    cursor_obj.execute('CREATE TABLE IF NOT EXISTS materias(codigo_materia integer PRIMARY KEY,\
                        nombre text,\
                        facultad_dicta text,\
                        departamento_dicta text,\
                        creditos integer,\
                        idioma text)') # Creamos la tabla materias en la BDD con sus respectivas columnas y sus tipo de datos
    con.commit() # guardamos cambios en la BDD (datos permanentes)

'''
leer_info_materias: Esta función nos permite leer la información que utilizaremos más adelante en la función
insertar_materias. Básicamente lo que hacemos aquí es solicitar la información al usuario de los datos de la 
materia que necesitaremos almacenar al momento de insertar una nueva, tales como código, nombre, facultad que dicta,
departamento que dicta, créditos e idioma. Luego de esto guardamos toda la información en una tupla llamada materia
y devolvemos la tupla materias.
'''
def leer_info_materias(): # función para la captura de información 
    codigo_materia = input('codigo de la materia: ') # captura del codigo de la materia
    nombre = input('nombre de la materia: ') # captura del nombre de la materia
    facultad_dicta = input('facultad que dicta la materia: ') # captura de la facultad que dicta la materia
    departamento_dicta = input('departamento que dicta la materia: ') #  captura del departamento que dicta la materia
    while True:
        try:
            creditos = int(input('creditos de la materia: ')) # captura de los creditos de la materia
            break
        except ValueError:
            print('tipo de dato equivocado, coloca un tipo de dato valido')

    idioma = input('idioma en que se dicta la materia: ') # idioma de la materia
    materia = (codigo_materia, nombre, facultad_dicta, departamento_dicta, creditos, idioma) # tupla con las capturas de la materia
    return materia # retorno de los datos de la materia 

'''
isertar_materias: Esta función nos permite crear una materia e insertarla en la tabla materias dentro de la base de
datos. Para ello llamamos creamos el cursor_obj que nos permite manipular la base de datos, luego ejecutamos el
insert para insertar los datos; los espacios de código, nombre, facultad que dicta, departamento que dicta, 
créditos e idioma los dejamos vacíos para que sean rellenados con los datos que solicitamos en la función
leer_info_materias que aquí la llamamos con mi_mat. Por último guardamos la información en el disco con con.commit para la persistencia de la 
información.
'''
def insertar_materias(con, mi_mat): # función para inserción de la información capturada de la materia la la tabla materia en la BDD
    cursor_obj = con.cursor() # objeto cursor para manipular la BDD
    cursor_obj.execute("""INSERT INTO materias VALUES(?,?,?,?,?,?)""", mi_mat) # insertamos la captura de información en la tabla materias
    con.commit() # guardamos cambios en la BDD

'''
insertar_materias_2: Esta función nos permite insertar una materia en la tabla materias con datos por defecto, que 
en este caso son respectivamente programacion, ingenieria, S&I, 3 e inglés. Para ello llamamos creamos el cursor_obj 
que nos permite manipular la base de datosLo único que solicitamos es el código de la materia. Luego ejecutamos la 
insercción y le mostramos al usuario los datos que fueron insertados. Por último guardamos la información en el 
disco con con.commit para la persistencia de la información.
'''
def insertar_materias_2(con): # función para la inserción de datos sin captura de información en la tabla materias
    cursor_obj = con.cursor() # objeto cursor para manipular la BDD
    cod = input('ingrese el codigo de la materia: ') # creamos codigo materia como valor único
    sent = 'INSERT INTO materias VALUES ('+cod+',"programacion","ingenieria", "S&I", 3, "ingles")' #  creamos datos por defecto a insertar en la tabla materias
    cursor_obj.execute(sent) # ejecutamos la inserción de los datos por defecto en la tabla materias
    con.commit() # guardamos cambios en la BDD

'''
consultar_info_materias: Esta función nos permite consultar la información de una materia específica que este dentro
de la tabla materias. Para ello llamamos creamos el cursor_obj que nos permite manipular la base de datos, luego 
solicitamos al usuario el código de la materia que desea consultar. Después de tenr el código de la materia a 
consultar procedemos a extraer toda la información que pertenezca al código de la materia de la tabla materias y 
ejecutamos la consulta. Luego le asignamos a la variable filas el metodo fetchall para obtener la tupla que 
corresponde a la información de la materia. Por último utilizamos un for para recorrer la tupla y devolver los 
valores correspondientes a cada item solicitado, es decir, para código llamamos la posición 0 dentro de la tupla, 
para nombre la posición 1, para facultad la posición 2, para departamento la posción 3, para créditos la posición y
para idioma la posición 5 dentro de la tupla y devolvemos toda esta información con un print al usuario.
'''
def consultar_info_materias(con): # consulta de información de una materia
    cursor_obj = con.cursor() # objeto cursor para manipular la BDD
    codigo_materia = input('Codigo de la materia a consultar: ')
    consulta = "SELECT * FROM materias WHERE codigo_materia = '"+codigo_materia+"'" # creamos la consulta a hacerse a la BDD
    cursor_obj.execute(consulta) # ejecutamos la consulta
    filas = cursor_obj.fetchall()
    for fila in filas:
        print(f'\nInformacion de materia:\n\
\nCodigo: {fila[0]}\n\
Nombre: {fila[1]}\n\
Facultad: {fila[2]}\n\
Departamento: {fila[3]}\n\
Creditos: {fila[4]}\n\
Idioma: {fila[5]}\n')

'''
actualizar_materia: Esta función nos permite actualizar el idioma en que se dicta una materia. Para ello llamamos 
creamos el cursor_obj que nos permite manipular la base de datos, luego solicitamos al usuario que digite el 
nuevo idioma en que se va a dictar la materia y también solicitamos el código de la materia antes de iniciar la
función. Una vez obtenido el nuevo idioma y el código de la materia, asignamos el update y actualizamos el idioma
y ejecutamos por medio del objeto cursor. Por último guardamos la información en el disco con con.commit para la 
persistencia de la información.
'''
def actualizar_materia(con, codigo_mat):# Actualización del idioma de una materia args = conexion, codigo_a_actualizar 
    cursor_obj = con.cursor() # objeto cursor para manipular la BDD
    nuevo_idioma = input('Actualice el idioma en que se dicta: ') # capturamos el idioma para remplazar 
    actualizar = 'UPDATE materias SET idioma = "'+nuevo_idioma+'" WHERE codigo_materia = "'+codigo_mat+'"' # creamos la petición de actualización del idioma
    cursor_obj.execute(actualizar) # ejecutamos la actualización del idioma
    print("El update que se ejecuta es: ", actualizar) # imprimimos el proceso realizado 
    con.commit()

'''
borrar_materia: Esta función nos permite borrar una materia en su totalidad, es decir todos los datos de la materia.
Para ello llamamos creamos el cursor_obj que nos permite manipular la base de datos, luego solicitamos el código de 
la materia que se desea borrar, luego creamos borrar mediante un delete que ejecutamos después con el objeto cursor.
Después de esto devolvemos al usuario el borrado a ejecutar. Por último guardamos la información en el disco con con.commit para la 
persistencia de la información.
'''
def borrar_materia(con): # funcion para borrar toda la infomracion de una materia a traves de su id registrada
    cursor_obj = con.cursor() 
    materia_borrar = input('Codigo de la materia a borrar: ') # camputura de teclado del id de la materia
    borrar = 'DELETE FROM materias WHERE codigo_materia = "'+materia_borrar+'"' # consulta para borrar fila de la materia que consida con el id capturado
    cursor_obj.execute(borrar)
    print("El delete que se ejecuta es: ", borrar) # impresion del proceso realizado
    con.commit() # guardado de cambios realizado en la BDD

'''
promedio_tabla_materias: Esta función nos permite conocer el promedio de los créditos de las materias existentes en 
la tabla materias. Para ello llamamos creamos el cursor_obj que nos permite manipular la base de datos, luego
procedemos a hallar la cantidad de materias con un count y la asignamos a la variable cantidad_materias y ejecutamos 
mediante el objeto cursor. Después obtenemos la tupla de la cantidad de materias que tenemos mediante el método 
fetchall e imprimimos la cantidad de materias. Después usamos un for para recorrer la tupla que acabamos de obtener 
(cant_materias) y determinamos la cantidad por la posición 0 de la tupla. Ahora para hallar la sumatoria de los 
créditos hacemos prácticamente lo mismo, la diferencia está en utilizar el sum en vez del count. Por último creamos 
la ecuación que nos permita conocer el promedio de los créditos, es decir, sumatoria de créditos sobre número de 
materias, y este valor se lo asignamos a promedio para finalmente imprimirlo para que el usuario pueda saber cuál es.
'''
def promedio_tabla_materias(con): # fucnion para promedio de creditos 
    cursor_obj = con.cursor()
    cantidad_materias = "SELECT count(*) FROM materias" # consulta de seleccion de conteo de infomacion en a la tabla materias
    cursor_obj.execute(cantidad_materias) # ejecucion de consulta
    cant_materias = cursor_obj.fetchall() # cambiando el objeto a lista para su iteracion
    print(cant_materias)
    for row in cant_materias: # iteracion del la cantidad total de las materias
        cantidad = row[0]
        print('la cantidad es: ', cantidad) # impresion del dato cantidad
    sumatoria_creditos = 'SELECT sum(creditos) FROM materias' # consulta sumatoria de los creditos registrado en la tabla materias
    cursor_obj.execute(sumatoria_creditos) # ejecucion de la consulta 
    sum_creditos = cursor_obj.fetchall() # convirti
    print(sum_creditos)
    for row in sum_creditos:
        sumatoria = row[0]
        print('la sumatoria es: ', sumatoria)
    promedio = sumatoria/cantidad 
    print(promedio)



########################### Módulo Estudiante ####################################
def crearTablaEstudiante(con): # creación de la tabla estudiante
    cursorObj = con.cursor()
    cursorObj.execute("CREATE TABLE IF NOT EXISTS Estudiante(Identificacion integer PRIMARY KEY,\
                    Nombre text, Apellido text,\
                    Carrera text, FechaNacimiento integer,\
                    FechaIngreso integer, Procedencia text,\
                    CorreoElectrónico text,\
                    CantidadMatrículas integer, Fotografia text)") #Se crea la tabla de estudiantes con las columnas especificas 
    con.commit()

def leerInfoEstudiante(): # Se toman los datos necesarios para la creación de un nuevo estudiante
    codigo = input("Identificación del estudiante: ")  # Se ingresa la identificación unica del estudiante
    nombre = input("Nombre del estudiante: ")  # Se ingresa el nombre 
    apellido = input("Apellido del estudiante: ") # Se ingresa el apellido
    carrera = input("Carrera que estudia: ") # Se ingresa la carrera que cursa el estudiante

    while True:
        fechaNacimiento = input('Fecha de nacimiento(dia/mes/año) de la forma **/**/**** : ').strip()

        if len (fechaNacimiento) == 10:
            break
        else:
            print('MENSAJE: Debe ingresar la fecha de nacimiento de la forma mencionada.')

        print()
    
    while True:
        fechaIngreso = input('Fecha de ingreso(dia/mes/año) de la forma **/**/**** : ').strip()

        if len (fechaIngreso) == 10:
            break
        else:
            print('MENSAJE: Debe ingresar la fecha de nacimiento de la forma mencionada.')

        print()
         
    procedencia = input("Procedencia del estudiante: ") # Se ingresa la ciudad de origen
    correo = input("Correo institucional: ") # Se ingresa el correo institucional
    while True:
        try:
            cantidadMatriculas = int(input("Cantidad de matrículas: ")) # La cantidad de matrículas realizadas
            break
        except ValueError:
            print('tipo de dato equivocado, coloca un tipo de dato valido')
        
    fotografia = input("Fotografía del estudiante: ")
    estudiante = (codigo, nombre, apellido, carrera, fechaNacimiento, fechaIngreso, procedencia, correo, cantidadMatriculas, fotografia) # Tupla que captura la información
    return estudiante

def crearEstudiante(con, miEstudiante): # creacion del estudiante
    cursorObj = con.cursor()
    cursorObj.execute('''INSERT INTO Estudiante VALUES(?,?,?,?,?,?,?,?,?,?)''', miEstudiante) # Se inserta la información recibida en la tabla de estudiantes
    print("El estudiante es: ", miEstudiante)
    con.commit()

def consultarInformacionEstudiantes(con): #consulta en la tabla estudiantes
    cursorObj = con.cursor()
    identificacion_estudiante = input('identificación del estudiante: ') # Se solicita al usuario que digite la identificación del estudiante
    consulta = 'SELECT * FROM Estudiante WHERE Identificacion = "'+identificacion_estudiante+'"' # Selecionamos todos los datos del estudiante con el id a buscar
    cursorObj.execute(consulta) #Ejecutamos la consulta en la base de datos
    filas = cursorObj.fetchall() #
    for fila in filas: #Mediante un ciclo for buscamos y navegamos en las listas
        print(f'\nInformacion de materia:\n\
\nId: {fila[0]}\n\
Nombre: {fila[1]}\n\
Apellido: {fila[2]}\n\
Carrera: {fila[3]}\n\
Fecha de nacimiento: {fila[4]}\n\
Fecha de ingreso: {fila[5]}\n\
Procedencia: {fila[6]}\n\
Email: {fila[7]}\n\
Cantidad de Matriculas: {fila[8]}\n\
Fotografía: {fila[9]}\n') # Se presenta la información del estudiante que fue consultado mediante la biúsqueda dentro de las listas 

def actualizarEstudiante(con,codest): #actualización de la tabla estudiante
    cursorObj = con.cursor()
    nuevaMatricula = input("Actualice el número de matrículas efectuadas: ") # Se solicita la identificación del estudiante a actualizar
    actualizar = 'UPDATE Estudiante SET CantidadMatrículas= "'+nuevaMatricula+'" WHERE Identificacion="'+codest+'"' 
    cursorObj.execute(actualizar) # Se actualiza la información de matrícula del estudiante específico
    print("La sentencia que se ejecuta es: ", actualizar)
    con.commit()        




# ------------------------------------------ Modulo Historia Académica ----------------------------------------------

'''
crearTablaHistoriaAcademica: Esta función nos permite crear la tabla correspondiente a Historia académica dentro
de la base de datos. Dentro de ella creamos el objeto cursor para poder manipular la base de datos (cursor_obj). 
Luego ejecutamos lo que vendría siendo la creación de la tabla en caso de que no exista y asignamos los items de 
la tabla junto con el tipo de dato que le corresponde a cada uno; además identificamos al código de la materia y 
a la idenfificación como identificadores únicos mediante PRIMARY KEY. Por último guardamos la información en el 
disco con con.commit para la persistencia de la información.
'''
def crearTablaHistoriaAcademica (con): #Creación de la tabla historia académica
    cursorObj = con.cursor()
    cursorObj.execute("CREATE TABLE IF NOT EXISTS HistoriaAcademica(codigo integer,\
                        identificacion integer,\
                        NotaFinal float,\
                        CreditosCursados integer, PRIMARY KEY (codigo,identificacion))")
    con.commit() # Guardar la información en el disco (persistencia de la información)

'''
leerInfoHistoriaAcademica: Esta función nos permite leer la información necesaria para crear una nueva historia 
académica que más adelante utilizamos en la función CrearNuevaHistoriaAcademica. Para ello llamamos creamos el 
cursor_obj que nos permite manipular la base de datos. luego solicitamos el código de la materia que debe ser un
valor que esté en la tabla materias. Luego de tener nuestro código, lo consultamos en la tabla materias y obtenemos
la información en una tupla mediante el método fetchall. Luego creamos un bucle while para verificar que el código 
ingresado corresponda a una materia existente dentro de la tabla materias, en caso de que no se solicitará un 
código válido y repetimos el proceso de la obtención de la información. Luego de esto solicitamos el id del 
estudiante que también debe ser un dato que se encuentre existente en la tabla estudiantes y volvemos a obtener
la información del estudiante en una tupla mediante el método fetchall. Nuevamente creamos un bucle while para
verificar que el id del estudiante sea válido y en caso de que no solicitamos uno nuevo que sea correcto para 
obtener la información. Luego solicitamos la nota final de la materia del estudiante como uno de los datos nuevos. 
Y traemos la información necesaria de las otras tablas, como los créditos de la materia y por último los créditos 
cursados. Una vez obtenidos los datos correspondientes a cod_materia, id_estudiante, NotaFinal y Creditos_Cursados
los asignamos a una tupla llamada HistoriaAcademica. Por último imprimimos la información efectuada del proceso y 
devolvemos HistoriaAcademica.
'''
def leerInfoHistoriaAcademica(con): # captura de informacion para la historia academica
    cursorObj = con.cursor()
    cod_materia = input("Código de la materia: ") # captura de codigo de la materia (tiene que ser un valor registrado en tabla materias)

    consulta_materia = 'SELECT codigo_materia FROM materias WHERE codigo_materia = "'+cod_materia+'"' # consulta para verificacion
    cursorObj.execute(consulta_materia)
    verificador_materia = cursorObj.fetchall()
    
    while len(verificador_materia) == 0: # logica para el proceso de validacion de los datos de la materia
        
        print('el codigo de la materia no existe, ingresa una id valida') # alerta de no autenticacion
        cod_materia = input("Código de la materia: ") # opcion para ingresar materias validad o registradas previamente
        
        consulta_materia = 'SELECT codigo_materia FROM materias WHERE codigo_materia = "'+cod_materia+'"' # consulta para validacion
        cursorObj.execute(consulta_materia)
        verificador_materia = cursorObj.fetchall()

    id_estudiante = input("Identificación del estudiante: ") # captura de la identificacion del estudiante
    
    consulta_estudiante = 'SELECT Identificacion FROM Estudiante WHERE Identificacion = "'+id_estudiante+'"' # consulta estudiante para validar informacion
    cursorObj.execute(consulta_estudiante)
    verificador_id = cursorObj.fetchall()
     
    while len(verificador_id) == 0: # verifica que la identificacion del estudianate sea valida. --- si la lista esta vacia no hay id valido 
        
        print('la id del estudiante no existe, ingresa una id valida') # alerta de error
        id_estudiante = input("Identificación del estudiante: ") # opcion para autenticar un valor verdadero
        
        consulta_estudiante = 'SELECT Identificacion FROM Estudiante WHERE Identificacion = "'+id_estudiante+'"' # validacion de la identificacion del estudiante
        cursorObj.execute(consulta_estudiante) # ejecucion de la captura de infomacion para realizar validacion de registros
        verificador_id = cursorObj.fetchall() # re asignando registro para validacion 
    
    while True:
        try:
            NotaFinal = float(input("Nota final de la materia: ")) # captura de informacion por teclado sobre la calificacion de la materia
            break
        except ValueError:
            print('tipo de dato equivocado, coloca un tipo de dato valido')
        
    cred_consulta_materia = 'SELECT creditos FROM materias WHERE codigo_materia = "'+cod_materia+'"'
    cursorObj.execute(cred_consulta_materia)
    Creditos_Cursados = int(cursorObj.fetchall()[0][0]) # caputura de informacion para la asignacion automantica de los creditos de la materia
    HistoriaAcademica = (cod_materia, id_estudiante, NotaFinal, Creditos_Cursados) #Guardamos la información en la tupla Historia Académica
    print("La materia es:", HistoriaAcademica) #Devolvemos la información
    return HistoriaAcademica 

'''
CrearNuevaHistoriaAcademica: Esta función nos permite crear una historia académica e insertarla en la tabla 
Historia académica dentro de la base de datos. Para ello llamamos creamos el cursor_obj que nos permite manipular 
la base de datos, luego ejecutamos el insert para insertar los datos donde dejaremos los datos de cod_materia, 
id_estudiante, NotaFinal y Creditos_Cursados vacíos y llamamos asignamos nuestra función anterior a miHistoria para
de esta forma obtener los datos necesarios. Por último guardamos la información en el disco con con.commit para 
la persistencia de la información.
'''
def CrearNuevaHistoriaAcademica(con, miHistoria): 
    cursorObj = con.cursor()
    cursorObj.execute('''INSERT INTO HistoriaAcademica VALUES(?,?,?,?)''', miHistoria) #Ejecutamos el insert para agregar la nueva historia académica a la base de datos.
    con.commit() # Guardar la información en el disco 

'''
consultarInformacion: Esta función nos permite consultar la información de la historia académica de un estudiante en
específico. Para ello llamamos creamos el cursor_obj que nos permite manipular la base de datos, luego solicitamos 
al usuario la id del estudiante que desea consultar la información. Una vez obtenido el id del estudiante, 
seleccionamos todo de la tabla HistoriaAcademica donde el id del estudiante corresponda. Luego hallamos el nombre y
apellido del estudiante de la tabla estudiantes y guardamos la información en la tupla estudiante. Después imprimimos
el nombre del estudiante. Seguidamente ejecutamos la consulta de la información mediante el cursor objeto y guardamos
la información en una tupla nombrada filas. Para recorrer esta tupla utilizamos un for y extraemos la información
ordenadamente, correspondiente al codigo, la nota final y los créditos cursados. Por último imprimimos los resultados
de la búsqueda de la información correspondiente al id específico.
'''
def consultarInformacion(con): #Creamos la función para consultar información de la tabla historia académica
    cursorObj = con.cursor() #Creamos el cursor de la base de datos para poder controlarla
    id_estudiante = input('coloque el id del estudiante para consultar sus notas: ')  #Solicitamos el id del estudiante del que se desea obtener la información
    consulta = 'SELECT * FROM HistoriaAcademica WHERE identificacion = "'+id_estudiante+'"' # Seleccionamos todos los datos de la tabla (* --> Trae todos los campos)
    consulta_nombre_estudiante = 'SELECT Nombre, Apellido FROM Estudiante WHERE Identificacion = "'+id_estudiante+'"' #Creamos variable para obtener el nombre y apellido del estudiante
    cursorObj.execute(consulta_nombre_estudiante) #Ejecutamos la varable para obtener el nombre y apellido del estudiante en cuestión
    estudiante = cursorObj.fetchall()
    try:
        print(f'\n Historia Academica de: {estudiante[0][0]} {estudiante[0][1]}') # Imprimimos el nombre del estudiante que lo traemos de la variable estudiante que a su vez proviene de la base de datos.
    except IndexError:
        print('El estudiante no existe')
    cursorObj.execute(consulta) #Ejecutamos la variable consulta en la base de datos
    filas = cursorObj.fetchall()
    for i in filas:
        codigo = i[0] #código es la columna 1, por eso colocamos el número 0
        NotaFinal = i[2] #NotaFinal es la columna 3, por eso colocamos el número 2
        CreditosCursados = i[3] #CreditosCursados es la columna 4, por eso colocamos el número 3
        print(f'Codigo de la materia: {codigo}\nNota final: {NotaFinal}\nCreditos Cursados: {CreditosCursados}\n') #Devolvemos la información

'''

'''
def BorrarMateria(con, materiaBorrar, idBorrar): # Borrado de información de la tabla materias
    cursorObj = con.cursor()
    borrar = 'DELETE FROM HistoriaAcademica WHERE codigo = "'+materiaBorrar+'" and identificacion = "'+idBorrar+'"' # Creamos la variable borrar y borramos la materia del estudiante que queremos borrar.
    cursorObj.execute(borrar) #EJecutamos el borrado dentro de la base de datos
    print("El delete que se ejecuta es: ", borrar) #Llamamos el borrado
    con.commit() #Guardar la información en el disco --> Mantener persistencia

def actualizarNota(con, materiaAct, idActualizar):
    cursorObj = con.cursor() #Creamos el cursor de la base de datos para poder controlarla
    nuevaNota = input("Actualicemos la nota de la materia: ") # Solicitamos la nueva nota para actualizarla
    actualizar = 'UPDATE HistoriaAcademica SET NotaFinal = "'+nuevaNota+'" WHERE codigo = "'+materiaAct+'" and identificacion = "'+idActualizar+'"' #Traemos el código que solicitamos antes para actualizar la nota de esa materia y utilizamos el update para actualizar la nota en la base de datos
    cursorObj.execute(actualizar) #Ejecutamos la actualización en la base de datos
    print("El update que se ejecuta es: ", actualizar) #Devolvemos la información
    con.commit() #Guardar la información en el disco --> Mantener persistencia



######################## Modulo Clasificación #####################################
def crear_tabla_clasificacion(con): # creación de la tabla clasificación
    """función crear tabla clasificacion con sus respectivos campos
    Argumentos:
        con (clase): conexión a la base de datos (sqlite3.connection)
    retorno:
        comando de ejecución para la creación de la tabla clasificacion con sus respectivos campos
    """
    cursorObj = con.cursor()
    cursorObj.execute("CREATE TABLE IF NOT EXISTS clasificacion(identificacion text,\
                    nombre text, apellido text,\
                    cantidad_materias text, creditos_acumulados  integer,\
                    Promedio_estudiante integer, PRIMARY KEY (identificacion))") # Creación de tabla con sus respectivos items
    con.commit()

def leer_info_clasificacion(con):
    """función leer información de las demás tablas para incluir en tabla clasificacion
    Argumentos:
        con (clase): conexión a la base de datos (sqlite3.connection)
    retorno:
        Informacion completa en la tabla clasificacion con Informacion preestablecida en otras tablas y con la operación Promedio 
    """
    cursorObj = con.cursor()
    cursorObj.execute('DELETE FROM clasificacion') # vaciamos tabla para actualizar toda la Informacion
    con.commit() # guardamos cambios de la tabla vacía
    
    consulta_estudiante = 'SELECT Identificacion, Nombre, Apellido FROM Estudiante' # consulta para captura de Informacion de los datos del estudiante
    cursorObj.execute(consulta_estudiante) # ejecución de la consulta
    data_estudiante = cursorObj.fetchall() # obtenemos los datos del estudiante en una lista compuesta por tuplas con la cual vamos a realizar la clasificación
    
    for item in range(len(data_estudiante)): # iteramos la lista para la captura de cada estudiante registrado
        
        consulta_cantidad_materias = 'SELECT codigo FROM HistoriaAcademica WHERE identificacion = "'+str(data_estudiante[item][0])+'"' # consultamos la cantidad de materias desde HistoriaAcademica
        cursorObj.execute(consulta_cantidad_materias) 
        data_Cantidad_materias = len(cursorObj.fetchall()) #contamos las materias capturadas por cada estudiante
        
        consulta_cred_acumulados = 'SELECT CreditosCursados FROM HistoriaAcademica WHERE identificacion = "'+str(data_estudiante[item][0])+'"' # consultamos la cantidad de creditos para relizar la sumatoria de ello
        cursorObj.execute(consulta_cred_acumulados) 
        data_creditos = cursorObj.fetchall() # creamos variable para recorrer y contar el total de creditos
        suma_creditos = 0

        for tup in data_creditos: # relizamos la sumatoria de los creditos
            for i in tup:
                suma_creditos += i
        
        consulta_cred_y_nota = 'SELECT CreditosCursados, NotaFinal FROM HistoriaAcademica WHERE identificacion = "'+str(data_estudiante[item][0])+'"' # consulta creditos y notas
        cursorObj.execute(consulta_cred_y_nota) # consultamos creditos y notas desde HistoriaAcademica para realizar nuestro promedio
        data_cred_nota = cursorObj.fetchall()
        numerador = 0 # variable numerador para operar la ecuación del promedio académico
        denominador = 0 # variable denominador perteneciente a la ecuación 
        try:
            for value in data_cred_nota: # operación para sacar el promedio académico, a traves de la sumatoria, multiplicación y division de item de la lista recorrida
                numerador = value[0]*value[1] + numerador # sumatoria del (CreditoN*NotaN)+(CreditoN+1*NotaN+1)
                denominador = value[0] + denominador # sumatoria de los creditos para dividir por el numerador
            promedio = numerador/denominador # resultado de la operación 
            
            clasificacion_item = (data_estudiante[item][0],\
                                data_estudiante[item][1],\
                                data_estudiante[item][2],\
                                data_Cantidad_materias,\
                                suma_creditos,\
                                promedio) # tupla para almacenar todos los datos a plasmar en la tabla de clasificacion

            cursorObj.execute('''INSERT INTO clasificacion VALUES(?,?,?,?,?,?)''', clasificacion_item) # ingreso de datos en la tabla clasificacion
            con.commit() # Guardar la información en el disco
        except ZeroDivisionError:
            continue
        

def consultar_clasificacion(con): # función consulta para traer todos los promedios de los estudiantes con historia Academica
    """función presentacion de la información perteneciente a la tabla de clasificacion de forma listado interactivo
    Argumentos:
        con (clase): conexión a la base de datos (sqlite3.connection)
    retorno:
        comando de ejecución para la creación de la tabla clasificacion con sus respectivos campos
    """
    cursorObj = con.cursor() # nueva variable cursor
    consulta = 'SELECT * FROM clasificacion' # consulta para traer todos los datos de la tabla
    cursorObj.execute(consulta) # ejecución de la consulta 
    clasificacion = cursorObj.fetchall() # almacenamiento de los datos de la tabla para muestra de la consulta
    for i in clasificacion: # iteración de los datos para mostrar datos de cualquier tamaño
        print(f'Id: {i[0]}\n\
Nombre: {i[1]}\n\
Apellido: {i[2]}\n\
Cantidad de materias: {i[3]}\n\
Creditos acumulados: {i[4]}\n\
Promedio académico: {i[5]:.1f}\n') # presentación de los promedios académicos de los estudiantes con historia Academica

       
    
###################################################################################



############################### Menú Principal ####################################
def menu(con): # Creamos una función menú para que el usuario navegue y sea entendible
    """función presentar menú interactivo para la utilización de las distintas funcionalidades de control académico
    Argumentos:
        con (clase): conexión a la base de datos (sqlite3.connection)
    retorno:
        menu interactivo para el control de flujo de los distintos módulos de las funcionalidades del programa
    """
    salir_principal = False #Asignamos false a salir_principal para después poder cerrar el bucle principal
    while not salir_principal: 
        opc_principal = input('''
                             Menu Principal 
                             
                             1. Materias
                             2. Estudiantes
                             3. Historia Académica
                             4. Clasificación
                             5. Salir
''') #Creamos la interfaz del menú principal
        if opc_principal == '1': #Creamos un condicional para poder acceder a las diferentes opciones según los requerimientos del usuario en el menú principal
            salir_materias = False #Asignamos false a salir materias para después poder cerrar el bucle materias
            while not salir_materias:
                opc_materias = input('''
                                    Menu Materias
                                1. Insertar Materia leyendo info
                                2. Insertar materia sin leer info
                                3. Consultar materia
                                4. Actualizar materia
                                5. Borrar información materia
                                6. Calcular promedio de créditos
                                7. Salir
''') #Creamos la interfaz del menú materias
                if opc_materias == '1': #Creamos un condicional para poder acceder a las diferentes opciones según los requerimientos del usuario en el menú materias
                    crear_tabla_materias(con)
                    try: # control de errores, intenta crear el registro en la tabla del modulo
                        mi_mat = leer_info_materias()
                        insertar_materias(con, mi_mat)
                    except Error: # presentación de error en caso que el intento de registro falle
                        error_rep_id('materia')
                elif opc_materias == '2':
                    try: # control de errores, intenta crear el registro en la tabla del modulo
                        crear_tabla_materias(con)
                        insertar_materias_2(con)
                    except Error: # presentación de error en caso que el intento de registro falle
                        error_rep_id('materia')
                elif opc_materias == '3':
                    try: # control de errores, intenta ejecutar la consulta en la tabla del modulo
                        consultar_info_materias(con)
                    except Error: # presentación de error en caso que la consulta falle
                        error_tabla(1,'consulta informacion de la materia') # mensaje de error
                elif opc_materias == '4':
                    try: # control de errores, intenta ejecutar la actualización en la tabla del modulo
                        codigo_materia_act = input('Codigo de la materia a actualizar: ')
                        actualizar_materia(con, codigo_materia_act)
                    except Error: # presentación de error en caso que la actualización falle
                        error_tabla(1,'actualizar informacion de la materia')
                elif opc_materias == '5':
                    try: # control de errores, intenta ejecutar el borrado en la tabla del modulo
                        borrar_materia(con)
                    except Error: # presentación de error en caso que que la ejecución del borrado falle
                        error_tabla(1,'borrar materia')
                elif opc_materias == '6': #Llamamos las funciones determinadas según lo solicitado por el usuario y la opción seleccionada
                    try: # control de errores, intente presentar la operación del promedio 
                        promedio_tabla_materias(con)
                    except Error: # presentación de error en caso que la operación del promedio falle
                        error_tabla(1, 'promedio creditos de materias')
                elif opc_materias == '7':
                    salir_materias = True #Asignamos true en salir materias para romper el bucle con la opción 7 y regresar al menú principal
                   
        elif opc_principal == '2': #Creamos un condicional para poder acceder a las diferentes opciones según los requerimientos del usuario en el menú estudiantes
            salir_estudiantes = False #Asignamos false a salir estudiantes para después poder cerrar el bucle estudiantes
            while not salir_estudiantes:
                opc_estudiantes = input('''
                                    Menu Estudiante
                                1. Insertar estudiante
                                2. Actualizar estudiante
                                3. Consultar estudiante
                                4. Salir
''') #Creamos la interfaz del menú estudiantes
                if opc_estudiantes == '1': #Creamos un condicional para poder acceder a las diferentes opciones según los requirimientos del usuario en el menú materias
                    crearTablaEstudiante(con)
                    try: # control de errores, intenta crear el registro en la tabla del modulo
                        miEst = leerInfoEstudiante()
                        crearEstudiante(con, miEst) 
                    except Error: # presentación de error en caso que el intento de registro falle
                        error_rep_id('estudiante')
                elif opc_estudiantes == '2':
                    try: # control de errores, intenta ejecutar la actualización en la tabla del modulo
                        codestact = input("Identificación del estudiante a actualizar: ")
                        actualizarEstudiante(con,codestact)
                    except Error: # presentación de error en caso que la actualización falle
                        error_tabla(2, 'actualizar informacion del estudiante')
                        
                elif opc_estudiantes == '3':
                    try: # control de errores, intenta ejecutar la consulta en la tabla del modulo
                        consultarInformacionEstudiantes(con) #Llamamos las funciones determinadas según lo solicitado por el usuario y la opción seleccionada
                    except Error: # presentación de error en caso que la consulta falle
                        error_tabla(2,'consultar informacion del estudiante')
                elif opc_estudiantes == '4':
                    salir_estudiantes = True #Asignamos true en salir estudiantes para romper el bucle con la opción 4 y regresar al menú principal
                
        elif opc_principal == '3': #Creamos un condicional para poder acceder a las diferentes opciones según los requirimientos del usuario en el menú historia académica
            salir_historia_academica = False #Asignamos false a salir historia académica para después poder cerrar el bucle historia académica
            while not salir_historia_academica:
                opc_historia_academica = input('''
                                    Menu Historia Academica
                                1. Crear historia académica
                                2. Consultar información academica 
                                3. borrar materia del historial académico
                                4. Actualizar nota del historial académico
                                5. Salir
''') #Creamos la interfaz del menú historia académica
                if opc_historia_academica == '1': #Creamos un condicional para poder acceder a las diferentes opciones según los requirimientos del usuario en el menú historia académica
                    try: # control de errores, intenta crear la tabla de historia academica
                        crearTablaHistoriaAcademica(con)
                        MiHistoriaAcademica = leerInfoHistoriaAcademica(con)
                        CrearNuevaHistoriaAcademica(con, MiHistoriaAcademica)
                    except Error: # presentación de error en caso que que la creación falle por inexistencia de las demás tablas 
                        error_tabla(3, 'creacion de historia academica')
                elif opc_historia_academica == '2':
                    try: # control de errores, intenta consultar la información de la tabla del modulo
                        consultarInformacion(con)
                    except Error: # presentación de error en caso que la consulta falle
                        error_tabla(4, 'consulta de informacion de historia academica')
                elif opc_historia_academica == '3':
                    try: # control de errores, intenta ejecutar el borrado en la tabla del modulo
                        idBorrar = input("Identificación del estudiante: ")
                        materiaBorrar = input("Codigo de la materia a borrar: ")
                        BorrarMateria(con, materiaBorrar, idBorrar)
                    except Error: # presentación de error en caso que la ejecución del borrado falle
                        error_tabla(4, 'borrar materia de historia academica')
                elif opc_historia_academica == '4':
                    try: # control de errores, intenta ejecutar la actualización en la tabla del modulo
                        idActualizar = input("Identificación del estudiante: ")
                        materiaAct = input("Codigo de la materia a actualizar: ")
                        actualizarNota(con, materiaAct, idActualizar)  #Llamamos las funciones determinadas según lo solicitado por el usuario y la opción seleccionada y creamos la variables necesarias.
                    except Error: # presentación de error en caso que la actualización falle
                        error_tabla(4, 'actualizar de historia academica')
                elif opc_historia_academica == '5':
                    salir_historia_academica = True #Asignamos true en salir historia académica para romper el bucle con la opción 5 y regresar al menú principal

        elif opc_principal == '4': # opción menu clasificacion
            salir_clasificacion = False # condición menu clasificacion 
            while not salir_clasificacion: # declaración de condición para la ejecución del modulo
                opc_clasificacion = input('''
                                    Menu clasificación
                                1. Consultar clasificación
                                2. Salir
''') # opciones de menu clasificación 
                if opc_clasificacion == '1': # opción para la ejecución de consulta de clasificacion
                    try: # control de errores, intenta la creación de la tabla clasificacion, la lectura de informacion a los demás módulos y su consulta a si misma
                        crear_tabla_clasificacion(con) # función para la creación de la tabla clasificacion
                        leer_info_clasificacion(con) # función para la captura de informacion para insertar en la tabla clasificacion y ejecución de la consulta insersion
                        consultar_clasificacion(con) # # función para la presentación de la informacion almacenada en tabla clasificacion
                    except Error:
                        error_tabla(5,'consultar clasificacion')    
                elif opc_clasificacion == '2':
                    salir_clasificacion = True  #Asignamos true en salir estudiantes para romper el bucle con la opción 2 y regresar al menú principal


        elif opc_principal == '5':
            salir_principal = True #Asignamos true en salir principal para romper el bucle con la opción 5 y cerrar el programa

    print('''Programa finalizado. Gracias por utilizar la aplicación''')
##############################################################################

######################### FUNCIONES DE CONTROL DE ERRORES ####################################################3
def error_tabla(num, modulo_a_usar):
    """funcion para presentar el error de tabla no existente 

    Args:
        num (integer): numero para identificar el mensaje ideal para usar en la presentación del error 
        modulo_a_usar (string): cadena de texto para completar el mensaje de presentación del error con el modulo en que se aplica dicho mensaje
    return:
        retorna un impresión en pantalla con el mensaje de error y con la recomendación para que no se repita el error
    """    
    if num == 1:
        print(f'No se puede realizar la operacion {modulo_a_usar}, no existen valores. Crea una materia!')
    if num == 2:
        print(f'No se puede realizar la operacion {modulo_a_usar}, no existen valores. Crea un estudiante!')
    if num == 3:
        print(f'No se puede realizar la operacion {modulo_a_usar}, no existen valores. crea una materia y un estudiante!')
    if num == 4:
        print(f'No se puede realizar la operacion {modulo_a_usar}, no existen valores. Crea una historia academica!')
    if num == 5:
        print(f'No se puede realizar la operacion {modulo_a_usar}, no existen valores. Crea un estudiante con su historia academica!')    

def error_rep_id(modulo):
    """función para presentación del error de repetición de identificador único en la BDD o registro con incorrecto tipo de dato

    Args:
        modulo (string): cadena de texto con el modulo en donde ocurre el error de identificador único o registro con incorrecto tipo de dato
    return:
        impresión en pantalla con el error junto con (modulo asociado al error)
    """    
    print(f'El identificador no es NUMERO ENTERO o ya existe un identificador de {modulo}')

# Función para cerrar la BDD 
def cerrar_BD(con): # arg = conexion 
    con.close() # cierre de conexion

# función raíz para la ejecución del programa 
def main():
    mi_con = conexion_a_la_bd() # creamos la variable que crea la conexion 
    menu(mi_con) # ejecutamos el menú principal para entrar al programa
    cerrar_BD(mi_con) # cerramos base de datos para finalizar conexion 
main()
