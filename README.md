# Notepad-App

Esta es una aplicación simple de gestión de notas desarrollada con React y Spring Boot.

## Requisitos del sistema

Asegúrate de tener las siguientes herramientas y tecnologías instaladas antes de ejecutar la aplicación:

- Node.js v21.5.0
- npm 10.2.4
- Java openjdk 17.0.9 2023-10-17
- MySQL Server (o cualquier otro sistema de gestión de bases de datos relacional)
- IDE para desarrollo (recomendado: Apache NetBeans IDE oIntelliJ IDEA )

## Configuración del backend (Spring Boot)

1. Clona el repositorio: `git clone https://github.com/Diegoiv88/notepad-app.git`
2. Abre el proyecto backend en tu IDE.
3. Configura la base de datos en `application.properties` con tu URL, usuario y contraseña de MySQL.
4. Ejecuta la aplicación Spring Boot.

## Configuración del frontend (React)

1. Navega al directorio `frontend` en tu terminal: `cd frontend`
2. Instala las dependencias: `npm install`
3. Configura la URL del backend en `src/services/noteService.js`.
4. Inicia la aplicación React: `npm start`

## Uso de la aplicación

- Accede a la aplicación en tu navegador: `http://localhost:3000`
- Crea, edita, y elimina notas según sea necesario.
- Cambia entre notas activas y archivadas.

## Contribuyendo

Si deseas contribuir al desarrollo de esta aplicación, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva característica o corrección de errores: `git checkout -b nueva-caracteristica`
3. Realiza tus cambios y haz commit: `git commit -m "Añade nueva característica"`
4. Haz push a tu rama: `git push origin nueva-caracteristica`
5. Abre un pull request en GitHub.

## Problemas conocidos

- La aplicación puede no funcionar correctamente si las dependencias no están instaladas o si la configuración de la base de datos es incorrecta.

