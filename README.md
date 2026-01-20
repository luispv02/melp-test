# Prueba Melp - Busqueda de Restaurantes

Página web para mostrar restaurantes con la posibilidad de ordenar alfabéticamente o por rating.

## Tecnologias utilizadas

- **ReactJs** - Biblioteca de JavaScript para crear la interfaces.
- **Tailwind CSS** - Framework de CSS para estilos.
- **TanStack Query** - Biblioteca para manejar el estado del servidor.
- **React Icons** - Iconos para React
- **react-share** - Botones para compartir en Redes sociales
- **Mapbox GL** - Mostrar mapas con Markers.

## Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd melp-test
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

## Datos
Los datos utilizados fueron obtenidos desde un endpoint GET público, sin embargo el endpoint no permite solicitudes desde el navegador debido a restricciones de CORS.

Por este motivo se optó por guardar los datos de la respuesta localmente en un archivo JSON.