#!/usr/bin/env node
/**
 * Suspende ou reativa TODAS as landing pages da cliente Bea K9 de uma vez.
 *
 * A suspensão injeta um bloco `redirects` no vercel.json de cada projeto,
 * mandando todo o tráfego para /suspenso.html. A reativação remove esse bloco,
 * preservando o restante da configuração (headers, cleanUrls, build, etc.).
 *
 * Uso:
 *   node suspender.mjs on      # tira os sites do ar
 *   node suspender.mjs off     # devolve os sites ao ar
 *   node suspender.mjs status  # mostra o estado atual de cada projeto
 *
 * Depois de rodar `on`/`off`, faça commit e push. A Vercel rebuilda cada
 * projeto cujo vercel.json mudou.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));

// Projetos da cliente (cada um é um projeto separado na Vercel).
const PROJETOS = [
  "B.MATTO-SHEFORCEK9",
  "B.MATTOS-IMERSAO",
  "B.MATTOS-LINKS",
  "B.MATTOS-MENTORIA",
];

// Bloco de suspensão inserido logo após a "{" de abertura do vercel.json.
// Tudo cai em /suspenso.html, exceto a própria página e seus assets (evita
// loop). permanent:false => HTTP 307, não fica cacheado pelo navegador.
//
// É JSON puro (sem comentários, que a Vercel rejeitaria) e inserido/removido
// por manipulação TEXTUAL — não re-serializa o arquivo, então a formatação da
// config existente de cada projeto fica intacta. O bloco é uma string literal
// fixa: a remoção casa exatamente esse mesmo texto.
const BLOCO =
  `  "redirects": [
    {
      "source": "/((?!suspenso(\\.html)?/?|logo-suspenso\\.svg|favicon\\.svg).*)",
      "destination": "/suspenso.html",
      "permanent": false
    }
  ],
`;

function lerTexto(file) {
  return readFileSync(file, "utf8").replace(/\r\n/g, "\n");
}

// Detecta o estado pelo JSON parseado (robusto a variações de formatação).
function estaSuspenso(txt) {
  let cfg;
  try {
    cfg = JSON.parse(txt);
  } catch {
    return false;
  }
  return (cfg.redirects || []).some((r) => r && r.destination === "/suspenso.html");
}

function suspender(txt) {
  if (estaSuspenso(txt)) return txt;
  const abre = txt.indexOf("{");
  if (abre === -1) throw new Error("vercel.json sem objeto JSON valido");
  // Insere o BLOCO logo após o "\n" que segue a "{", virando a primeira
  // propriedade. Reusa a quebra de linha original como separador (sem linha
  // em branco extra). O restante do arquivo não é tocado, então reativar()
  // devolve exatamente o conteúdo de antes.
  const nl = txt.indexOf("\n", abre);
  const pos = nl === -1 ? abre + 1 : nl + 1;
  return txt.slice(0, pos) + BLOCO + txt.slice(pos);
}

function reativar(txt) {
  if (!estaSuspenso(txt)) return txt;
  // Remove o bloco literal exato que suspender() inseriu.
  return txt.replace(BLOCO, "");
}

const acao = (process.argv[2] || "").toLowerCase();

if (!["on", "off", "status"].includes(acao)) {
  console.error("Uso: node suspender.mjs <on|off|status>");
  process.exit(1);
}

let mudou = false;

for (const proj of PROJETOS) {
  const file = join(ROOT, proj, "vercel.json");
  if (!existsSync(file)) {
    console.warn(`!  ${proj}: vercel.json nao encontrado, pulando`);
    continue;
  }
  const txt = lerTexto(file);

  if (acao === "status") {
    console.log(`${estaSuspenso(txt) ? "SUSPENSO " : "no ar    "} ${proj}`);
    continue;
  }

  const antes = estaSuspenso(txt);
  const novo = acao === "on" ? suspender(txt) : reativar(txt);
  const depois = estaSuspenso(novo);

  if (antes === depois) {
    console.log(`=  ${proj}: ja estava ${depois ? "SUSPENSO" : "no ar"}`);
  } else {
    writeFileSync(file, novo);
    mudou = true;
    console.log(`OK ${proj}: ${depois ? "SUSPENSO" : "reativado"}`);
  }
}

if (acao !== "status" && mudou) {
  console.log("\nAgora faca commit e push para a Vercel aplicar:");
  console.log("  git add -A && git commit -m \"" +
    (acao === "on" ? "Suspende sites Bea K9 (inadimplencia)" : "Reativa sites Bea K9") +
    "\" && git push");
}
