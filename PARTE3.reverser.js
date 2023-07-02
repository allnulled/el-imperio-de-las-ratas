const fs = require("fs");
const path = require("path");
const contenido1 = fs.readFileSync(__dirname + "/PARTE3.reverse.md").toString();
const separador_temporal = "[(Cronológicamente)](./PARTE3.cronologico.md) | [(Descarga)](./PARTE3.web.pdf) | [(Actualmente)](https://github.com/allnulled/democracia-2.0/commits/main)\n\n\n";
const contenido2 = "![Portada](./Cocora.png)\n\n\n" + contenido1.split("\n-----").reverse().join("\n-----");
fs.writeFileSync(__dirname + "/PARTE3.md", contenido2, "utf8");
const contenido3 = "![Portada](./Cocora.png)\n\n\n" + contenido1;
fs.writeFileSync(__dirname + "/PARTE3.cronologico.md", contenido3, "utf8");
