# -*- coding: utf-8 -*-
"""
Atualiza o index.html do portfólio.

O index.html da raiz é um "pacote" gerado pelo Website Downloader: a página
real fica guardada dentro dele em base64. Para editar o site:

  1. Edite o arquivo  assets/futuristic-space-74.aura.build/index.html
  2. Rode:            python atualizar_site.py
  3. Abra o index.html da raiz no navegador.
"""
import base64
import os
import re

RAIZ = os.path.dirname(os.path.abspath(__file__))
FONTE = os.path.join(RAIZ, "assets", "futuristic-space-74.aura.build", "index.html")
PACOTE = os.path.join(RAIZ, "index.html")


def main():
    with open(FONTE, "rb") as f:
        pagina = f.read()
    with open(PACOTE, "r", encoding="utf-8", newline="") as f:
        pacote = f.read()

    b64 = base64.b64encode(pagina).decode("ascii")
    pacote, n = re.subn(
        r'(data-wd3-b="doc">)[^<]*(<)', lambda m: m.group(1) + b64 + m.group(2), pacote
    )
    if n != 1:
        raise SystemExit("Não encontrei o bloco da página dentro do index.html.")
    # Atualiza o tamanho registrado no manifesto
    pacote = re.sub(r'"size":\d+,"b":"doc"', '"size":%d,"b":"doc"' % len(pagina), pacote)

    with open(PACOTE, "w", encoding="utf-8", newline="") as f:
        f.write(pacote)
    print("index.html atualizado (%d bytes de página)." % len(pagina))


if __name__ == "__main__":
    main()
