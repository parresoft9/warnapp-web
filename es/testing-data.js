// Datos completos del Testing Guide
const testData = {
    "🔐 1. AUTENTICACIÓN Y REGISTRO": {
        "1.1 Registro con Email": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "1.1.1", desc: "Abrir app por primera vez", obs: "¿Muestra tutorial?" },
                { id: "1.1.2", desc: "Tap en 'Continuar con correo electrónico'", obs: "" },
                { id: "1.1.3", desc: "Ingresar nombre válido", obs: "" },
                { id: "1.1.4", desc: "Ingresar apellidos válidos", obs: "" },
                { id: "1.1.5", desc: "Ingresar email válido", obs: "Validación en tiempo real" },
                { id: "1.1.6", desc: "Ingresar email inválido (sin @)", obs: "¿Muestra error?" },
                { id: "1.1.7", desc: "Ingresar contraseña válida (8+ caracteres, mayúscula, número)", obs: "Validación en tiempo real" },
                { id: "1.1.8", desc: "Ingresar contraseña débil", obs: "¿Muestra requisitos?" },
                { id: "1.1.9", desc: "Tap en 'Crear cuenta' con datos válidos", obs: "" },
                { id: "1.1.10", desc: "Verificar email enviado a correo", obs: "Revisar bandeja entrada" },
                { id: "1.1.11", desc: "Clic en enlace de verificación del email", obs: "" },
                { id: "1.1.12", desc: "Volver a la app e iniciar sesión", obs: "" },
                { id: "1.1.13", desc: "Pantalla de aceptación de políticas", obs: "" },
                { id: "1.1.14", desc: "Leer Términos de Servicio", obs: "¿Abre?" },
                { id: "1.1.15", desc: "Leer Política de Uso Aceptable", obs: "¿Abre?" },
                { id: "1.1.16", desc: "Leer Política de Privacidad", obs: "¿Abre?" },
                { id: "1.1.17", desc: "Marcar las 3 casillas de aceptación", obs: "" },
                { id: "1.1.18", desc: "Tap en 'Aceptar y Continuar'", obs: "" },
                { id: "1.1.19", desc: "Verificar navegación a pestaña Colabora", obs: "" }
            ]
        },
        "1.2 Login con Email": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "1.2.1", desc: "Tap en 'Iniciar sesión'", obs: "" },
                { id: "1.2.2", desc: "Ingresar email registrado", obs: "" },
                { id: "1.2.3", desc: "Ingresar contraseña correcta", obs: "" },
                { id: "1.2.4", desc: "Tap en 'Continuar'", obs: "" },
                { id: "1.2.5", desc: "Verificar inicio de sesión exitoso", obs: "" },
                { id: "1.2.6", desc: "Cerrar sesión", obs: "" },
                { id: "1.2.7", desc: "Intentar login con contraseña incorrecta", obs: "¿Muestra error?" },
                { id: "1.2.8", desc: "Intentar login con email no registrado", obs: "¿Muestra error?" }
            ]
        },
        "1.3 Login con Google": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "1.3.1", desc: "Tap en botón 'Continuar con Google'", obs: "" },
                { id: "1.3.2", desc: "Verificar apertura de pantalla de Google", obs: "" },
                { id: "1.3.3", desc: "Seleccionar cuenta de Google", obs: "" },
                { id: "1.3.4", desc: "Autorizar acceso", obs: "" },
                { id: "1.3.5", desc: "Verificar creación de cuenta o login", obs: "" },
                { id: "1.3.6", desc: "Si es primera vez: aceptar políticas", obs: "" },
                { id: "1.3.7", desc: "Verificar navegación a pestaña Colabora", obs: "" }
            ]
        },
        "1.4 Login con Apple (Solo iOS)": {
            build: "",
            ambiente: "iOS",
            tests: [
                { id: "1.4.1", desc: "Tap en botón 'Continuar con Apple'", obs: "" },
                { id: "1.4.2", desc: "Verificar apertura de pantalla de Apple ID", obs: "" },
                { id: "1.4.3", desc: "Autenticar con Face ID/Touch ID", obs: "" },
                { id: "1.4.4", desc: "Seleccionar 'Compartir mi email' o 'Ocultar mi email'", obs: "" },
                { id: "1.4.5", desc: "Verificar creación de cuenta o login", obs: "" },
                { id: "1.4.6", desc: "Si es primera vez: aceptar políticas", obs: "" },
                { id: "1.4.7", desc: "Verificar navegación a pestaña Colabora", obs: "" }
            ]
        },
        "1.5 Login con Twitter": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "1.5.1", desc: "Tap en botón 'Continuar con Twitter'", obs: "" },
                { id: "1.5.2", desc: "Verificar apertura de navegador/pantalla de Twitter", obs: "" },
                { id: "1.5.3", desc: "Ingresar credenciales de Twitter", obs: "" },
                { id: "1.5.4", desc: "Autorizar acceso a la app", obs: "" },
                { id: "1.5.5", desc: "Verificar creación de cuenta o login", obs: "" },
                { id: "1.5.6", desc: "Si es primera vez: aceptar políticas", obs: "" },
                { id: "1.5.7", desc: "Verificar navegación a pestaña Colabora", obs: "" }
            ]
        },
        "1.6 Recuperación de Contraseña": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "1.6.1", desc: "En pantalla de login con Email, tap '¿Has olvidado tu contraseña?'", obs: "" },
                { id: "1.6.2", desc: "Ingresar email registrado", obs: "" },
                { id: "1.6.3", desc: "Tap en 'Restablecer contraseña'", obs: "" },
                { id: "1.6.4", desc: "Verificar mensaje de confirmación", obs: "¿Te llega a Spam o Bandeja principal? - reporta el contenido por favor" },
                { id: "1.6.5", desc: "Revisar bandeja de correo", obs: "" },
                { id: "1.6.6", desc: "Clic en enlace de recuperación", obs: "" },
                { id: "1.6.7", desc: "Ingresar nueva contraseña", obs: "" },
                { id: "1.6.8", desc: "Confirmar cambio de contraseña", obs: "" },
                { id: "1.6.9", desc: "Iniciar sesión con nueva contraseña", obs: "" }
            ]
        }
    },
    "🚗 2. GESTIÓN DE VEHÍCULOS": {
        "2.1 Añadir Primer Vehículo": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "2.1.1", desc: "Navegar a pestaña 'Mis Vehículos'", obs: "" },
                { id: "2.1.2", desc: "Tap en botón '+' o 'Añadir vehículo'", obs: "" },
                { id: "2.1.3", desc: "Verificar apertura de modal", obs: "" },
                { id: "2.1.4", desc: "Verificar mensaje 'Plazas disponibles en tu garage: 1 de 1'", obs: "" },
                { id: "2.1.5", desc: "Ingresar matrícula válida (ej: ABC1234)", obs: "" },
                { id: "2.1.6", desc: "Seleccionar tipo de vehículo (Coche/Furgoneta/Moto/Camión)", obs: "" },
                { id: "2.1.7", desc: "Seleccionar uso (Personal/Empresa/Familiar/Alquiler)", obs: "" },
                { id: "2.1.8", desc: "(Opcional) Ingresar nombre personalizado", obs: "" },
                { id: "2.1.9", desc: "Tap en 'Añadir vehículo'", obs: "" },
                { id: "2.1.10", desc: "Verificar animación de confirmación (checkmark)", obs: "" },
                { id: "2.1.11", desc: "Verificar que el vehículo aparece en la lista", obs: "" },
                { id: "2.1.12", desc: "Verificar que muestra '0 slots disponibles'", obs: "Ya usó su slot gratuito" }
            ]
        },
        "2.2 Validaciones de Matrícula": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "2.2.1", desc: "Intentar añadir matrícula vacía", obs: "¿Botón deshabilitado?" },
                { id: "2.2.2", desc: "Intentar añadir matrícula muy corta (1-2 caracteres)", obs: "¿Muestra error?" },
                { id: "2.2.3", desc: "Intentar añadir matrícula muy larga (20+ caracteres)", obs: "¿Limita o rechaza?" },
                { id: "2.2.4", desc: "Intentar añadir matrícula con caracteres especiales", obs: "¿Acepta o rechaza?" },
                { id: "2.2.5", desc: "Intentar añadir matrícula duplicada", obs: "¿Muestra error?, para ello necesario comprar una plaza" }
            ]
        },
        "2.3 Eliminar Vehículo": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "2.3.1", desc: "Deslizar vehículo hacia la izquierda", obs: "" },
                { id: "2.3.2", desc: "Verificar diálogo de confirmación", obs: "¿Pide confirmación?" },
                { id: "2.3.3", desc: "Confirmar eliminación", obs: "" },
                { id: "2.3.4", desc: "Verificar que el vehículo desaparece de la lista", obs: "" },
                { id: "2.3.5", desc: "Verificar que la plaza se libera", obs: "De 0 a 1 disponible" }
            ]
        },
        "2.4 Ver Alertas de un Vehículo": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "2.4.1", desc: "Tap en un vehículo que tiene alertas", obs: "" },
                { id: "2.4.2", desc: "Verificar expansión mostrando lista de alertas", obs: "" },
                { id: "2.4.3", desc: "Verificar información visible (fecha, mensaje, ubicación)", obs: "" },
                { id: "2.4.4", desc: "Verificar badge de alertas no vistas", obs: "Punto rojo" },
                { id: "2.4.5", desc: "Tap en una alerta", obs: "" },
                { id: "2.4.6", desc: "Verificar navegación a pantalla de detalle con mapa", obs: "" }
            ]
        }
    },
    "📢 3. CREAR ALERTAS": {
        "3.1 Crear Alerta con Foto": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "3.1.1", desc: "Navegar a pestaña 'Colabora'", obs: "" },
                { id: "3.1.2", desc: "Verificar mapa visible", obs: "" },
                { id: "3.1.3", desc: "Verificar ubicación actual marcada", obs: "Punto azul" },
                { id: "3.1.4", desc: "Tap en 'AVISO' y verificar formulario de alerta visible", obs: "" },
                { id: "3.1.5", desc: "Ingresar matrícula (ej: XYZ5678)", obs: "" },
                { id: "3.1.6", desc: "Ingresar mensaje descriptivo", obs: "" },
                { id: "3.1.7", desc: "Tap en botón de cámara 📷", obs: "" },
                { id: "3.1.8", desc: "Verificar solicitud de permisos", obs: "" },
                { id: "3.1.9", desc: "Conceder permisos", obs: "" },
                { id: "3.1.10", desc: "Seleccionar 'Tomar foto'", obs: "" },
                { id: "3.1.11", desc: "Tomar foto", obs: "" },
                { id: "3.1.11", desc: "Verificar preview de foto añadida", obs: "" },
                { id: "3.1.13", desc: "Tap en ''Enviar'", obs: "" },
                { id: "3.1.14", desc: "Verificar diálogo de progreso de subida", obs: "Barra de progreso" },
                { id: "3.1.15", desc: "Verificar mensaje de éxito", obs: "" },
                { id: "3.1.15", desc: "Verificar que formulario se oculta y limpia", obs: "" }
            ]
        },
        "3.2 Crear Alerta con Video": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "3.2.1", desc: "Navegar a pestaña 'Colabora'", obs: "" },
                { id: "3.2.2", desc: "Ingresar matrícula y mensaje", obs: "" },
                { id: "3.2.3", desc: "Tap en botón de video(ROJO) 📷", obs: "" },
                { id: "3.2.4", desc: "Verificar solicitud de permisos", obs: "" },
                { id: "3.2.5", desc: "Conceder permisos", obs: "" },
                { id: "3.2.6", desc: "Seleccionar 'Grabar video'", obs: "" },
                { id: "3.2.7", desc: "Grabar video corto (10-15 segundos)", obs: "" },
                { id: "3.2.8", desc: "Confirmar video", obs: "" },
                { id: "3.2.9", desc: "Verificar preview de video añadido", obs: "Thumbnail" },
                { id: "3.2.10", desc: "Tap en 'Use Video'", obs: "" },
                { id: "3.2.11", desc: "Verificar progreso de subida", obs: "Tarda más que foto" },
                { id: "3.2.12", desc: "Verificar mensaje de éxito", obs: "" }
            ]
        },
        "3.3 Validaciones de Alerta": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "3.3.1", desc: "Intentar publicar sin matrícula", obs: "¿Botón deshabilitado?" },
                { id: "3.3.2", desc: "Intentar publicar sin mensaje", obs: "¿Permite o requiere?" },
                { id: "3.3.3", desc: "Intentar publicar sin fotos/videos", obs: "¿Permite?" },
                { id: "3.3.4", desc: "Verificar necesidad de matricula y (mensaje o multimedia)", obs: "¿Permite?" },
                { id: "3.3.5", desc: "Intentar añadir más de 5 archivos", obs: "¿Límite?" },
                { id: "3.3.6", desc: "Intentar publicar sin permisos de ubicación", obs: "¿Muestra error?" }
            ]
        }
    },
    "🗺️ 4. VER DETALLE DE ALERTAS": {
        "4.1 Abrir Detalle de Alerta": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "4.1.1", desc: "Ir a 'Mis Vehículos'", obs: "" },
                { id: "4.1.2", desc: "Expandir vehículo con alertas", obs: "" },
                { id: "4.1.3", desc: "Tap en una alerta", obs: "" },
                { id: "4.1.4", desc: "Verificar pantalla de detalle cargada", obs: "" },
                { id: "4.1.5", desc: "Verificar mapa visible con pin de ubicación", obs: "" },
                { id: "4.1.6", desc: "Verificar información visible (fecha, matrícula, mensaje)", obs: "" },
                { id: "4.1.7", desc: "Verificar fotos/videos visibles", obs: "" },
                { id: "4.1.8", desc: "Hacer zoom en el mapa", obs: "Pellizcar" },
                { id: "4.1.9", desc: "Mover el mapa", obs: "Arrastrar" }
            ]
        },
        "4.2 Ver Multimedia en Detalle": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "4.2.1", desc: "Abrir detalle de alerta con foto", obs: "" },
                { id: "4.2.2", desc: "Tap en foto para ampliar", obs: "" },
                { id: "4.2.3", desc: "Verificar foto en pantalla completa", obs: "" },
                { id: "4.2.4", desc: "Hacer zoom con pellizco", obs: "" },
                { id: "4.2.5", desc: "Cerrar vista ampliada", obs: "" },
                { id: "4.2.6", desc: "Abrir detalle de alerta con video", obs: "" },
                { id: "4.2.7", desc: "Tap en video para reproducir", obs: "" },
                { id: "4.2.8", desc: "Verificar reproducción correcta", obs: "Sonido incluido" },
                { id: "4.2.9", desc: "Pausar/reanudar video", obs: "" },
                { id: "4.2.10", desc: "Abrir video en pantalla completa", obs: "" },
                { id: "4.2.11", desc: "Verificar descarga fotos y guardado en album", obs: "" },
                { id: "4.2.12", desc: "Verificar descarga de videos y guardado en galeria/album", obs: "" }
            ]
        },
        "4.3 Descargar Multimedia (iOS)": {
            build: "",
            ambiente: "iOS",
            tests: [
                { id: "4.3.1", desc: "Abrir detalle de alerta con foto", obs: "" },
                { id: "4.3.2", desc: "Long press en foto", obs: "" },
                { id: "4.3.3", desc: "Verificar opción 'Guardar imagen'", obs: "" },
                { id: "4.3.4", desc: "Tap en 'Guardar imagen'", obs: "" },
                { id: "4.3.5", desc: "Abrir app Fotos de iOS", obs: "" },
                { id: "4.3.6", desc: "Verificar que la foto se guardó", obs: "" }
            ]
        },
        "4.4 Valorar Alerta": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "4.4.1", desc: "Abrir detalle de alerta NO valorada", obs: "" },
                { id: "4.4.2", desc: "Tap en estrella para valorar", obs: "" },
                { id: "4.4.3", desc: "Verificar estrellas visibles", obs: "" },
                { id: "4.4.4", desc: "Tap en 5 estrellas", obs: "" },
                { id: "4.4.5", desc: "Verificar mensaje de agradecimiento", obs: "Animación" },
                { id: "4.4.6", desc: "Cerrar y volver a abrir la alerta", obs: "" },
                { id: "4.4.7", desc: "Verificar que la valoración se mantiene", obs: "" },
                { id: "4.4.8", desc: "Verificar que no se puede volver a valorar", obs: "Estrellas deshabilitadas" }
            ]
        },
        "4.5 Reportar Alerta": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "4.5.1", desc: "Abrir detalle de alerta", obs: "" },
                { id: "4.5.2", desc: "Tap en botón 'Denunciar' o ⚠️", obs: "" },
                { id: "4.5.3", desc: "Verificar diálogo de motivos", obs: "" },
                { id: "4.5.4", desc: "Seleccionar 'Información falsa'", obs: "" },
                { id: "4.5.5", desc: "Ingresar comentario opcional", obs: "" },
                { id: "4.5.6", desc: "Tap en 'Enviar reporte'", obs: "" },
                { id: "4.5.7", desc: "Verificar mensaje de confirmación", obs: "" },
                { id: "4.5.8", desc: "Verificar animación DENUNCIADO en oblicuo", obs: "" }
            ]
        }
    },
    "⭐ 5. REPUTACIÓN": {
        "5.1 Ver Reputación Personal": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "5.1.1", desc: "Navegar a pestaña 'Reputación'", obs: "" },
                { id: "5.1.2", desc: "Verificar puntuación total visible", obs: "Número grande" },
                { id: "5.1.3", desc: "Verificar mensaje header and footer", obs: "Cuadro amarillo/Cuadro rojo" },
                { id: "5.1.4", desc: "Verificar estadísticas (alertas creadas/enviadas,, alertas vistas, valoración media)", obs: "" },
                { id: "5.1.6", desc: "Verificar lista de alertas propias", obs: "" }
            ]
        },
        "5.2 Ver Alertas Propias": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "5.2.1", desc: "En 'Reputación', scroll a lista de alertas", obs: "" },
                { id: "5.2.2", desc: "Verificar información visible (matrícula, fecha, valoración)", obs: "" },
                { id: "5.2.3", desc: "Verificar preview de fotos/videos", obs: "Grid de imágenes, no se pueden hacer zoom ni descargar" }
            ]
        },
        "5.3 Actualización de Reputación": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "5.3.1", desc: "Anotar puntuación actual", obs: "" },
                { id: "5.3.2", desc: "Crear una nueva alerta", obs: "" },
                { id: "5.3.3", desc: "Volver a 'Reputación'", obs: "" },
                { id: "5.3.4", desc: "Pull to refresh", obs: "Arrastrar hacia abajo" },
                { id: "5.3.5", desc: "Verificar que la puntuación aumentó", obs: "+puntos" },
                { id: "5.3.6", desc: "Verificar que la nueva alerta aparece en la lista", obs: "" }
            ]
        }
    },
    "👤 6. CUENTA DE USUARIO": {
        "6.1 Ver Perfil": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "6.1.1", desc: "Navegar a pestaña 'Cuenta'", obs: "" },
                { id: "6.1.2", desc: "Verificar nombre de usuario visible", obs: "" },
                { id: "6.1.3", desc: "Verificar email visible", obs: "" },
                { id: "6.1.4", desc: "Verificar foto de perfil (si existe)", obs: "" },
                { id: "6.1.5", desc: "Verificar Miembro desde", obs: "mes desde que el usuario se registra en el sistema" },
                { id: "6.1.6", desc: "Verificar sección de compras", obs: "Menu arriba izquierda, Comprar más" }
            ]
        },
        "6.2 Gestión de Idioma": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "6.2.1", desc: "En 'Menú de Cuenta', buscar Idioma y Región", obs: "" },
                { id: "6.2.2", desc: "Cambiar idioma a Español", obs: "" },
                { id: "6.2.3", desc: "Verificar que toda la UI cambia", obs: "" },
                { id: "6.2.4", desc: "Cambiar idioma a Inglés", obs: "" },
                { id: "6.2.5", desc: "Verificar cambio correcto", obs: "" },
                { id: "6.2.6", desc: "Cambiar idioma a Francés", obs: "" },
                { id: "6.2.7", desc: "Cambiar idioma a Alemán", obs: "" }
            ]
        },
        "6.3 Cerrar Sesión": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "6.3.1", desc: "En 'Cuenta', scroll hasta el final", obs: "" },
                { id: "6.3.2", desc: "Tap en 'Cerrar sesión'", obs: "" },
                { id: "6.3.3", desc: "Verificar diálogo de confirmación/animación", obs: "" },
                { id: "6.3.4", desc: "Verificar navegación a pantalla de login", obs: "" },
                { id: "6.3.5", desc: "Volver a iniciar sesión", obs: "" }
            ]
        }
    },
    "💰 7. COMPRAS IN-APP": {
        "7.1 Ver Productos Disponibles": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "7.1.1", desc: "Navegar a 'Mis Vehículos'", obs: "Si tienes todas las plazas ocupadas, aparece el botón 'Comprar'" },
                { id: "7.1.2", desc: "Tap en botón 'Comprar'", obs: "" },
                { id: "7.1.3", desc: "Verificar diálogo de productos", obs: "" },
                { id: "7.1.4", desc: "Verificar productos listados (1, 3 plazas)", obs: "2 tipos de productos" },
                { id: "7.1.5", desc: "Verificar precios en moneda local", obs: "" },
                { id: "7.1.6", desc: "Cerrar diálogo", obs: "" }
            ]
        },
        "7.2 Comprar Slots (iOS Sandbox)": {
            build: "",
            ambiente: "iOS",
            tests: [
                { id: "7.2.1", desc: "Abrir diálogo de productos", obs: "" },
                { id: "7.2.2", desc: "Tap en producto '1 plaza'", obs: "" },
                { id: "7.2.3", desc: "Verificar confirmación de App Store", obs: "" },
                { id: "7.2.4", desc: "Confirmar compra", obs: "" },
                { id: "7.2.5", desc: "Verificar diálogo 'Compra exitosa'", obs: "" },
                { id: "7.2.6", desc: "Verificar que las plazas aumentan", obs: "+1 plaza" },
                { id: "7.2.7", desc: "Verificar animación de confirmación", obs: "" }
            ]
        },
        "7.3 Comprar Slots (Android)": {
            build: "",
            ambiente: "Android",
            tests: [
                { id: "7.3.1", desc: "Abrir diálogo de productos", obs: "" },
                { id: "7.3.2", desc: "Tap en producto '3 plazas'", obs: "" },
                { id: "7.3.3", desc: "Verificar pantalla de Google Play", obs: "" },
                { id: "7.3.4", desc: "Confirmar compra", obs: "" },
                { id: "7.3.5", desc: "Verificar 'Compra exitosa'", obs: "" },
                { id: "7.3.6", desc: "Verificar que las plazas aumentan", obs: "+3 plazas" }
            ]
        }
    },
    "🔗 8. DEEP LINKS Y COMPARTIR": {
        "8.1 Deep Link desde Email": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "8.1.1", desc: "Revisar email de recordatorio de renovación", obs: "Necesario modificar fecha de alta de las plazas. No reproducible" },
                { id: "8.1.2", desc: "Verificar enlace en el email", obs: "" },
                { id: "8.1.3", desc: "Con la app CERRADA, tap en enlace del email", obs: "" },
                { id: "8.1.4", desc: "Verificar que la app se abre automáticamente", obs: "Universal Link" },
                { id: "8.1.5", desc: "Verificar navegación a 'Mis Vehículos'", obs: "" },
                { id: "8.1.6", desc: "Con la app ABIERTA, tap en enlace del email", obs: "" },
                { id: "8.1.7", desc: "Verificar navegación correcta", obs: "" }
            ]
        },
        "8.2 Botón Invitar Amigos": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "8.2.1", desc: "Ir a pantalla 'Cuenta'", obs: "" },
                { id: "8.2.2", desc: "Localizar botón 'Invitar amigos'", obs: "" },
                { id: "8.2.3", desc: "Tap en 'Invitar amigos'", obs: "" },
                { id: "8.2.4", desc: "Verificar share sheet nativo", obs: "" },
                { id: "8.2.5", desc: "Verificar contenido del mensaje", obs: "Texto + URL" },
                { id: "8.2.5", desc: "Compartir por WhatsApp", obs: "" },
                { id: "8.2.6", desc: "Verificar enlace compartido correctamente", obs: "" }
            ]
        }
    },
    "🔔 9. NOTIFICACIONES PUSH": {
        "9.1 Solicitar Permisos": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "9.1.1", desc: "Instalar app por primera vez", obs: "" },
                { id: "9.1.2", desc: "Completar registro/login", obs: "" },
                { id: "9.1.3", desc: "Verificar diálogo de permisos de notificaciones", obs: "" },
                { id: "9.1.4", desc: "Conceder permisos", obs: "" },
                { id: "9.1.5", desc: "Verificar confirmación", obs: "" }
            ]
        },
        "9.2 Notificación de Nueva Alerta": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "9.2.1", desc: "Tener app en segundo plano", obs: "" },
                { id: "9.2.2", desc: "Crear alerta desde otro dispositivo", obs: "" },
                { id: "9.2.3", desc: "Esperar 5-10 segundos", obs: "Puede tardar" },
                { id: "9.2.4", desc: "Verificar llegada de notificación push", obs: "" },
                { id: "9.2.5", desc: "Verificar título '🚨 Nueva alerta...'", obs: "" },
                { id: "9.2.6", desc: "Verificar cuerpo con matrícula y mensaje", obs: "" },
                { id: "9.2.7", desc: "Tap en la notificación", obs: "" },
                { id: "9.2.8", desc: "Verificar que la app se abre", obs: "" },
                { id: "9.2.9", desc: "Verificar navegación a la alerta", obs: "" }
            ]
        },
        "9.3 Notificación en Primer Plano": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "9.3.1", desc: "Tener app abierta en 'Mis Vehículos'", obs: "" },
                { id: "9.3.2", desc: "Crear alerta desde otro dispositivo", obs: "" },
                { id: "9.3.3", desc: "Esperar 5-10 segundos", obs: "" },
                { id: "9.3.4", desc: "Verificar banner in-app visible", obs: "Arriba de la pantalla" },
                { id: "9.3.5", desc: "Verificar animación/sonido", obs: "" },
                { id: "9.3.6", desc: "Tap en el banner", obs: "" },
                { id: "9.3.7", desc: "Verificar navegación a la alerta", obs: "" }
            ]
        }
    },
    "📍 10. PERMISOS Y UBICACIÓN": {
        "10.1 Permisos de Ubicación": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "10.1.1", desc: "Primera apertura de app, Verificar solicitud de permisos de ubicación después del tutorial", obs: "" },
                { id: "10.1.2", desc: "Seleccionar 'Permitir mientras uso la app'", obs: "" },
                { id: "10.1.3", desc: "Verificar que el mapa muestra ubicación actual", obs: "Punto azul" },
                { id: "10.1.4", desc: "Ir a Ajustes > WarnApp > Ubicación  Cambiar a 'Nunca' " , obs: "" },
                { id: "10.1.5", desc: "Volver a la app. Verificar pantalla Localizacion necesaria", obs: "" },
                { id: "10.1.6", desc: "No deja crear alerta", obs: "" }
            ]
        },
        "10.2 Permisos de Cámara": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "10.2.1", desc: "En 'Colaborar', tap en botón de cámara", obs: "" },
                { id: "10.2.2", desc: "Verificar solicitud de permisos", obs: "" },
                { id: "10.2.3", desc: "Conceder permiso", obs: "" },
                { id: "10.2.4", desc: "Verificar que la cámara se abre", obs: "" },
                { id: "10.2.5", desc: "Denegar permiso (reinstalar si es necesario)", obs: "" },
                { id: "10.2.6", desc: "Verificar mensaje de error", obs: "" }
            ]
        }
    },
    "🌐 11. CONECTIVIDAD": {
        "11.1 Sin Conexión a Internet": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "11.1.1", desc: "Abrir app con conexión activa", obs: "" },
                { id: "11.1.2", desc: "Activar modo avión", obs: "" },
                { id: "11.1.3", desc: "Intentar crear alerta", obs: "" },
                { id: "11.1.4", desc: "Verificar mensaje de error de red", obs: "" },
                { id: "11.1.5", desc: "Intentar añadir vehículo", obs: "" },
                { id: "11.1.6", desc: "Verificar mensaje de error", obs: "" },
                { id: "11.1.7", desc: "Desactivar modo avión", obs: "" },
                { id: "11.1.8", desc: "Pull to refresh", obs: "" },
                { id: "11.1.9", desc: "Verificar que los datos se cargan", obs: "" }
            ]
        },
        "11.2 Conexión Lenta": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "11.2.1", desc: "Simular red lenta", obs: "" },
                { id: "11.2.2", desc: "Crear alerta con fotos grandes", obs: "" },
                { id: "11.2.3", desc: "Verificar indicador de progreso visible", obs: "" },
                { id: "11.2.4", desc: "Verificar que la app no se congela", obs: "" },
                { id: "11.2.5", desc: "Abrir detalle de alerta con video", obs: "" },
                { id: "11.2.6", desc: "Verificar indicador de carga", obs: "" }
            ]
        }
    },
    "🔄 12. FLUJOS COMBINADOS": {
        "12.1 Ciclo Completo Usuario Nuevo": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "12.1.1", desc: "Instalar app fresca", obs: "" },
                { id: "12.1.2", desc: "Ver tutorial", obs: "" },
                { id: "12.1.3", desc: "Registrarse con email", obs: "" },
                { id: "12.1.4", desc: "Verificar email", obs: "" },
                { id: "12.1.5", desc: "Iniciar sesión", obs: "" },
                { id: "12.1.6", desc: "Aceptar políticas", obs: "" },
                { id: "12.1.7", desc: "Añadir primer vehículo", obs: "" },
                { id: "12.1.8", desc: "Crear primera alerta con foto", obs: "" },
                { id: "12.1.9", desc: "Ver reputación actualizada", obs: "" },
                { id: "12.1.10", desc: "Comprar 1 slot adicional", obs: "" },
                { id: "12.1.11", desc: "Añadir segundo vehículo", obs: "" },
                { id: "12.1.12", desc: "Cerrar sesión", obs: "" }
            ]
        },
        "12.2 Slots Agotados": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "12.2.1", desc: "Añadir vehículos hasta llenar todos los slots", obs: "" },
                { id: "12.2.2", desc: "Verificar mensaje '0 slots disponibles'", obs: "" },
                { id: "12.2.3", desc: "Intentar añadir otro vehículo", obs: "" },
                { id: "12.2.4", desc: "Verificar diálogo 'Sin slots' con opción de compra", obs: "" },
                { id: "12.2.5", desc: "Tap en 'Comprar slots'", obs: "" },
                { id: "12.2.6", desc: "Verificar navegación a pantalla de compras", obs: "" }
            ]
        },
        "12.3 Subida Interrumpida": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "12.3.1", desc: "Iniciar subida de alerta con video grande", obs: "" },
                { id: "12.3.2", desc: "Durante la subida, activar modo avión", obs: "" },
                { id: "12.3.3", desc: "Verificar mensaje de error", obs: "" },
                { id: "12.3.4", desc: "Desactivar modo avión", obs: "" },
                { id: "12.3.5", desc: "Verificar opción de reintentar", obs: "" },
                { id: "12.3.6", desc: "Reintentar subida", obs: "" },
                { id: "12.3.7", desc: "Verificar éxito", obs: "" }
            ]
        }
    },
    "🎨 13. UI/UX Y ACCESIBILIDAD": {
        "13.1 Modos de Apariencia (iOS)": {
            build: "",
            ambiente: "iOS",
            tests: [
                { id: "13.1.1", desc: "Configurar iPhone en modo claro", obs: "" },
                { id: "13.1.2", desc: "Abrir app", obs: "" },
                { id: "13.1.3", desc: "Verificar tema claro correcto", obs: "Colores, contrastes" },
                { id: "13.1.4", desc: "Navegar por todas las pantallas", obs: "" },
                { id: "13.1.5", desc: "Configurar iPhone en modo oscuro", obs: "" },
                { id: "13.1.6", desc: "Volver a la app", obs: "" },
                { id: "13.1.7", desc: "Verificar tema oscuro correcto", obs: "" },
                { id: "13.1.8", desc: "Navegar por todas las pantallas", obs: "" }
            ]
        },
        "13.2 Rotación de Pantalla": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "13.2.1", desc: "En 'Colaborar', rotar a horizontal", obs: "" },
                { id: "13.2.2", desc: "Verificar que el mapa se adapta", obs: "" },
                { id: "13.2.3", desc: "En 'Mis Vehículos', rotar", obs: "" },
                { id: "13.2.4", desc: "Verificar lista en horizontal", obs: "" },
                { id: "13.2.5", desc: "Abrir detalle de alerta y rotar", obs: "" },
                { id: "13.2.6", desc: "Verificar que todo es legible", obs: "" }
            ]
        }
    },
    "🚀 14. RENDIMIENTO": {
        "14.1 Tiempo de Carga": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "14.1.1", desc: "Medir tiempo de splash screen", obs: "< 3s" },
                { id: "14.1.2", desc: "Medir tiempo de login a home", obs: "< 2s" },
                { id: "14.1.3", desc: "Medir carga de lista de vehículos", obs: "< 1s" },
                { id: "14.1.4", desc: "Medir tiempo de apertura de mapa", obs: "< 2s" }
            ]
        },
        "14.2 Consumo de Batería": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "14.2.1", desc: "Uso continuo durante 30 minutos", obs: "< 10%" },
                { id: "14.2.2", desc: "App en segundo plano durante 1 hora", obs: "< 2%" }
            ]
        }
    },
    "🔒 15. SEGURIDAD": {
        "15.1 Datos Sensibles": {
            build: "",
            ambiente: "iOS / Android",
            tests: [
                { id: "15.1.1", desc: "Las contraseñas NO son visibles en logs", obs: "" },
                { id: "15.1.2", desc: "Los tokens NO son visibles en logs", obs: "" },
                { id: "15.1.3", desc: "La sesión expira tras inactividad", obs: "" },
                { id: "15.1.4", desc: "NO se guardan contraseñas en texto plano", obs: "" }
            ]
        }
    }
};
