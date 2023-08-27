#!/usr/bin/bash

# La reversa:
node PARTE4.reverser.js

# El HTML:
markdown PARTE4.cronologico.md > PARTE4.web.html

# El HTML completo:
node wrap_readme_html.PARTE4.js

# El PDF:
wkhtmltopdf PARTE4.web.html --encoding 'utf-8' PARTE4.web.pdf

# El README principal:

cp PARTE4.cronologico.md README.PARTE4.md