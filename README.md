# 🎉 Gestor de Eventos - Frontend

## 📚 Índice

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## 🌟 Descripción

Bienvenido al frontend de nuestra aplicación de Gestión de Eventos. Esta interfaz de usuario moderna y receptiva está diseñada para proporcionar una experiencia fluida en la gestión de eventos, desde la creación hasta el seguimiento y la eliminación.

## ✨ Características

- 📝 Registro e inicio de sesión de usuarios
- 📅 Creación y edición de eventos
- 🔍 Listado y filtrado de eventos
- 🗑️ Eliminación de eventos
- 📱 Diseño responsivo para dispositivos móviles y de escritorio

## 🛠 Tecnologías

- React.js
- Material-UI
- Tailwind CSS
- Axios para peticiones HTTP
- React Router para la navegación
- SweetAlert2 para notificaciones elegantes

## 🚀 Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/JACL613/gestor-eventos-front.git
   cd frontend
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y añade la URL de tu backend:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

## 🖥 Uso

Para iniciar el servidor de desarrollo:

```
npm start
```

La aplicación estará disponible en `http://localhost:3000`.

## 📁 Estructura del Proyecto

```
frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── EventForm.js
│   │   ├── EventList.js
│   │   ├── Login.js
│   │   ├── Navbar.js
│   │   └── Register.js
│   │
│   ├── App.js
│   └── index.js
│
├── .env
├── package.json
├── tailwind.config.js
└── README.md
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o realiza un pull request con tus sugerencias.


---

Hecho con ❤️ por el J.A.C.L