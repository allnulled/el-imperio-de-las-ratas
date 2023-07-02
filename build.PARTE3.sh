#!/usr/bin/bash

# La reversa:
node PARTE3.reverser.js

# El HTML:
markdown PARTE3.cronologico.md > PARTE3.web.html

# El HTML completo:
node wrap_readme_html.PARTE3.js

# El PDF:
wkhtmltopdf PARTE3.web.html --encoding 'utf-8' PARTE3.web.pdf

# El README principal:

cp PARTE3.cronologico.md README.PARTE3.md