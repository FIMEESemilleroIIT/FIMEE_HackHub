# FIMEE HackHub - Transformagob 2026

Página de aterrizaje temporal para el Centro Federado FIMEE de la Universidad Nacional "San Luis Gonzaga", diseñada para centralizar la información y facilitar la formación de equipos para la Hackatón Transformagob 2026.

## 🚀 Despliegue Inmediato (GitHub Pages)

Dado que estamos a contrarreloj (6 de junio), la forma más rápida y gratuita de publicar esta página es usando GitHub Pages:

### Paso 1: Crear el repositorio
1. Entra a tu cuenta de [GitHub](https://github.com)
2. Crea un nuevo repositorio (por ejemplo llamado `fimee-hackhub`)
3. Haz que el repositorio sea **Público**

### Paso 2: Subir los archivos
Sube todos los archivos de esta carpeta al repositorio:
- `index.html`
- Carpeta `css/` con `styles.css`
- Carpeta `js/` con `app.js`

Puedes arrastrarlos directamente a la página web de GitHub o usar Git desde la terminal:
```bash
git init
git add .
git commit -m "Initial commit FIMEE HackHub"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/fimee-hackhub.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. Ve a la pestaña **Settings** de tu repositorio en GitHub
2. En el menú lateral izquierdo, haz clic en **Pages**
3. En la sección *Build and deployment*:
   - Source: `Deploy from a branch`
   - Branch: Selecciona `main` y la carpeta `/ (root)`
4. Haz clic en **Save**

¡Listo! En un par de minutos, tu página estará en vivo en `https://TU-USUARIO.github.io/fimee-hackhub/`. 
Copia esa URL y envíala a todos los estudiantes de la FIMEE.

## 🛠️ Tecnologías Usadas
- **HTML5 Semántico**: Para estructura y accesibilidad.
- **CSS Vanilla (Custom Properties)**: Para el sistema de diseño Dark Mode, "glassmorphism" y animaciones sin necesidad de librerías.
- **JavaScript Vanilla**: Para el buscador en tiempo real, el sistema de filtrado de los 18 retos y el temporizador. No usa frameworks pesados para garantizar una carga instantánea (SPA estática).
