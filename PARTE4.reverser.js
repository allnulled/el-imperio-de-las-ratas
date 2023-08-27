const fs = require("fs");
const path = require("path");
const contenido1 = fs.readFileSync(__dirname + "/PARTE4.reverse.md").toString();
const separador_temporal = "[(Cronológicamente)](./PARTE4.cronologico.md) | [(Descarga)](./PARTE4.web.pdf) | [(Actualmente)](https://github.com/allnulled/democracia-2.0/commits/main)\n\n\n";
const contenido2 = "![Portada](./portada-lagrimas-de-fuego.png)\n\n\n" + contenido1.split("\n-----").reverse().join("\n-----");
fs.writeFileSync(__dirname + "/PARTE4.md", contenido2, "utf8");
const contenido3 = "![Portada](./portada-lagrimas-de-fuego.png)\n\n\n" + contenido1;
fs.writeFileSync(__dirname + "/PARTE4.cronologico.md", contenido3, "utf8");
