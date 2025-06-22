import sqlite3

# Clase de conexión a la base de datos
class DataBaseConnection:
    """
    Esta clase se encarga de gestionar la conexión con la base de datos SQLite
    y crear las tablas necesarias si no existen.
    """
    def __init__(self, db_name="historia_academica.db"):
        self.db_name = db_name
        self.conn = sqlite3.connect(self.db_name)
        self.cursor = self.conn.cursor()
        self.create_tables()  # Al iniciar, crea las tablas automáticamente

    def create_tables(self):
        # Crear tabla de materias
        self.cursor.execute("""
            CREATE TABLE IF NOT EXISTS materias (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT UNIQUE NOT NULL
            )
        """)
        # Crear tabla de estudiantes
        self.cursor.execute("""
            CREATE TABLE IF NOT EXISTS estudiantes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                codigo TEXT UNIQUE NOT NULL
            )
        """)
        # Crear tabla de historia académica
        self.cursor.execute("""
            CREATE TABLE IF NOT EXISTS historia_academica (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_estudiante INTEGER,
                id_materia INTEGER,
                nota REAL,
                FOREIGN KEY (id_estudiante) REFERENCES estudiantes(id),
                FOREIGN KEY (id_materia) REFERENCES materias(id)
            )
        """)
        self.conn.commit()

    def close(self):
        # Cerrar la conexión con la base de datos
        self.conn.close()

# Clase Materia
class Materia:
    """
    Esta clase maneja todo lo relacionado con las materias: agregar y listar.
    """
    def __init__(self, db):
        self.db = db

    def agregar(self, nombre):
        try:
            self.db.cursor.execute("INSERT INTO materias (nombre) VALUES (?)", (nombre,))
            self.db.conn.commit()
            print("Materia agregada correctamente.")
        except sqlite3.IntegrityError:
            print("La materia ya existe.")

    def listar(self):
        self.db.cursor.execute("SELECT * FROM materias")
        materias = self.db.cursor.fetchall()
        for m in materias:
            print(f"{m[0]} - {m[1]}")

# Clase Estudiante
class Estudiante:
    """
    Esta clase gestiona los estudiantes: agregar y listar estudiantes.
    """
    def __init__(self, db):
        self.db = db

    def agregar(self, nombre, codigo):
        try:
            self.db.cursor.execute("INSERT INTO estudiantes (nombre, codigo) VALUES (?, ?)", (nombre, codigo))
            self.db.conn.commit()
            print("Estudiante agregado correctamente.")
        except sqlite3.IntegrityError:
            print("El código de estudiante ya existe.")

    def listar(self):
        self.db.cursor.execute("SELECT * FROM estudiantes")
        estudiantes = self.db.cursor.fetchall()
        for e in estudiantes:
            print(f"{e[0]} - {e[1]} - Código: {e[2]}")

# Clase Historia Académica
class HistoriaAcademica:
    """
    Esta clase permite agregar registros de notas por estudiante y listar el historial completo.
    """
    def __init__(self, db):
        self.db = db

    def agregar(self, codigo_estudiante, id_materia, nota):
        # Buscar ID del estudiante por su código
        self.db.cursor.execute("SELECT id FROM estudiantes WHERE codigo = ?", (codigo_estudiante,))
        estudiante = self.db.cursor.fetchone()
        if estudiante:
            id_estudiante = estudiante[0]
            self.db.cursor.execute("INSERT INTO historia_academica (id_estudiante, id_materia, nota) VALUES (?, ?, ?)",
                                   (id_estudiante, id_materia, nota))
            self.db.conn.commit()
            print("Nota registrada correctamente.")
        else:
            print("El código de estudiante no existe.")

    def listar(self):
        # Consultar y mostrar el historial completo
        self.db.cursor.execute("""
            SELECT e.nombre, e.codigo, m.nombre, h.nota
            FROM historia_academica h
            JOIN estudiantes e ON h.id_estudiante = e.id
            JOIN materias m ON h.id_materia = m.id
        """)
        registros = self.db.cursor.fetchall()
        for r in registros:
            print(f"Estudiante: {r[0]} (Código: {r[1]}), Materia: {r[2]}, Nota: {r[3]}")

# Clase Clasificación
class Clasificacion:
    """
    Calcula y muestra el promedio de los estudiantes ordenado de mayor a menor.
    """
    def __init__(self, db):
        self.db = db

    def mostrar(self):
        self.db.cursor.execute("""
            SELECT e.nombre, AVG(h.nota) as promedio
            FROM historia_academica h
            JOIN estudiantes e ON h.id_estudiante = e.id
            GROUP BY e.id
            ORDER BY promedio DESC
        """)
        clasificacion = self.db.cursor.fetchall()
        for i, c in enumerate(clasificacion, 1):
            print(f"{i}. {c[0]} - Promedio: {round(c[1],2)}")

# Clase Menu principal que conecta todo
class Menu:
    """
    Esta clase es el controlador general del sistema, gestiona el flujo completo del programa.
    """
    def __init__(self):
        self.db = DataBaseConnection()
        self.materia = Materia(self.db)
        self.estudiante = Estudiante(self.db)
        self.historia = HistoriaAcademica(self.db)
        self.clasificacion = Clasificacion(self.db)

    def mostrar_menu(self):
        while True:
            print("\n--- Menú Principal ---")
            print("1. Gestionar Materias")
            print("2. Gestionar Estudiantes")
            print("3. Registrar Historia Académica")
            print("4. Ver Clasificación de Estudiantes")
            print("5. Salir")
            opcion = input("Seleccione una opción: ")

            if opcion == "1":
                self.menu_materias()
            elif opcion == "2":
                self.menu_estudiantes()
            elif opcion == "3":
                self.menu_historia()
            elif opcion == "4":
                self.clasificacion.mostrar()
            elif opcion == "5":
                self.db.close()
                print("Programa finalizado.")
                break
            else:
                print("Opción no válida.")

    def menu_materias(self):
        print("\n--- Materias ---")
        print("1. Agregar Materia")
        print("2. Listar Materias")
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            nombre = input("Ingrese el nombre de la materia: ")
            self.materia.agregar(nombre)
        elif opcion == "2":
            self.materia.listar()
        else:
            print("Opción no válida.")

    def menu_estudiantes(self):
        print("\n--- Estudiantes ---")
        print("1. Agregar Estudiante")
        print("2. Listar Estudiantes")
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            nombre = input("Ingrese el nombre del estudiante: ")
            codigo = input("Ingrese el código del estudiante: ")
            self.estudiante.agregar(nombre, codigo)
        elif opcion == "2":
            self.estudiante.listar()
        else:
            print("Opción no válida.")

    def menu_historia(self):
        print("\n--- Historia Académica ---")
        print("1. Registrar Nota")
        print("2. Listar Historia Académica")
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            codigo = input("Ingrese el código del estudiante: ")
            self.materia.listar()
            id_materia = int(input("Ingrese el ID de la materia: "))
            nota = float(input("Ingrese la nota: "))
            self.historia.agregar(codigo, id_materia, nota)
        elif opcion == "2":
            self.historia.listar()
        else:
            print("Opción no válida.")

# Punto de entrada del programa
if __name__ == "__main__":
    menu = Menu()
    menu.mostrar_menu()
