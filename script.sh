#!/bin/bash

echo "Iniciando la configuración y ejecución de Notepad-App..."

# Instalación de Node.js y npm (si no están instalados)
if ! command -v node &> /dev/null || ! command -v npm &> /dev/null; then
    echo "Node.js y/o npm no están instalados. Instalando..."
    # Comando de instalación de Node.js y npm (ajústalo según tu entorno)
    # Por ejemplo, para macOS puedes usar Homebrew: brew install node
    # Para Linux puedes usar el administrador de paquetes de tu distribución.
fi

# Instalación de Java (si no está instalado)
if ! command -v java &> /dev/null || ! command -v javac &> /dev/null; then
    echo "Java no está instalado. Instalando..."
    # Comando de instalación de Java (ajústalo según tu entorno)
    # Por ejemplo, para macOS puedes usar Homebrew: brew install openjdk@17
    # Para Linux puedes usar el administrador de paquetes de tu distribución.
fi

# Instalación de MySQL Server (si no está instalado)
if ! command -v mysql &> /dev/null; then
    echo "MySQL Server no está instalado. Instalando..."
    # Comando de instalación de MySQL Server (ajústalo según tu entorno)
    # Por ejemplo, para macOS puedes usar Homebrew: brew install mysql
    # Para Linux puedes usar el administrador de paquetes de tu distribución.
fi

# Clonar el repositorio
echo "Clonando el repositorio..."
git clone https://github.com/DiegoIv88/notepad-app-frontend.git


# Configuración del frontend
echo "Configurando el frontend..."
cd ../frontend
npm install

# Configuración de la URL del backend en el servicio React
echo "Configurando la URL del backend en el servicio React..."
# (Añade aquí cualquier comando adicional necesario para configurar la URL del backend en el frontend)

# Ejecutar el frontend
echo "Iniciando el frontend..."
npm start

