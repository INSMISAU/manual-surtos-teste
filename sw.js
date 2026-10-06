/* Service Worker — Manual de Surtos INS
   Mostra SEMPRE a versao mais recente com internet (acaba com os "varios refreshes")
   e funciona offline. Sobe CACHE_VERSION quando publicares (v5 -> v6). */
const CACHE_VERSION = "surtos-v93-tifoide-actividades-20261006";

const CORE = [
"./assets/ilustracoes/tifoide-risco-saneamento-agua.webp",
"./assets/ilustracoes/tifoide-risco-alimentos-agua.webp",
"./assets/ilustracoes/tifoide-risco-profissionais-actividades.webp",
"./assets/ilustracoes/rotavirus-risco-crianca-saneamento.webp",
"./assets/ilustracoes/rotavirus-suspeito-crianca.webp",
"./assets/ilustracoes/infeccoes-agua-sem-acesso.png",
"./assets/ilustracoes/cha-familiares.png",
"./assets/ilustracoes/cha-circulacao.png",
"./assets/ilustracoes/cha-saneamento.png",
"./assets/ilustracoes/cha-contacto.png",
"./assets/ilustracoes/cha-comunidade.png",
"./assets/ilustracoes/polio-criancas-vacinacao.png",
"./assets/ilustracoes/polio-comunidade-saneamento.png",
"./assets/ilustracoes/polio-provavel-horizontal.svg",
"./assets/ilustracoes/risco-imunocomprometidos.png",
"./assets/ilustracoes/rubeola-viagens-internacionais.png",
"./assets/ilustracoes/parotidite-escola-quartel.png",
"./assets/ilustracoes/mpox-contacto-escola-saude.png",
"./assets/fig/fig6.png",
"./assets/fig/fig5.png",
"./assets/fig/fig4.png",
"./assets/ilustracoes/mpox-provavel-validacao.png",
"./assets/ilustracoes/mpox-mapa-validacao.png",
"./assets/ilustracoes/colera-suspeito-deitado.webp",
"./assets/ilustracoes/acesso-saude.webp","./assets/ilustracoes/alimentos.webp","./assets/ilustracoes/animais-raiva.svg","./assets/ilustracoes/aves.svg","./assets/ilustracoes/bebe.svg","./assets/ilustracoes/carbunculo.webp","./assets/ilustracoes/carracas.svg","./assets/ilustracoes/creche.webp","./assets/ilustracoes/crianca-solo.svg","./assets/ilustracoes/cuidador.webp","./assets/ilustracoes/dengue-anterior.svg","./assets/ilustracoes/doencas-cronicas.svg","./assets/ilustracoes/escabiose.webp","./assets/ilustracoes/escola-quartel.webp","./assets/ilustracoes/febril.webp","./assets/ilustracoes/filariase.webp","./assets/ilustracoes/gado.webp","./assets/ilustracoes/grupo-vulneravel.svg","./assets/ilustracoes/idosos.svg","./assets/ilustracoes/imunidade.svg","./assets/ilustracoes/leite.svg","./assets/ilustracoes/lepra.webp","./assets/ilustracoes/leptospirose.webp","./assets/ilustracoes/meningite.webp","./assets/ilustracoes/mosquitos.svg","./assets/ilustracoes/mpox-regioes-africa.svg","./assets/ilustracoes/pertussis.webp","./assets/ilustracoes/pes-solo.svg","./assets/ilustracoes/peste.webp","./assets/ilustracoes/prevencao-limitada.svg","./assets/ilustracoes/produtos-animais.svg","./assets/ilustracoes/programa-saude.svg","./assets/ilustracoes/refugiados.webp","./assets/ilustracoes/respiratorio.webp","./assets/ilustracoes/resultado-inconclusivo.svg","./assets/ilustracoes/roedores-excrecoes.svg","./assets/ilustracoes/roedores.svg","./assets/ilustracoes/sarampo.webp","./assets/ilustracoes/sepultamento.webp","./assets/ilustracoes/syndrome-conjuntivite.svg","./assets/ilustracoes/syndrome-cutanea.svg","./assets/ilustracoes/syndrome-exantematica.svg","./assets/ilustracoes/syndrome-hemorragica.svg","./assets/ilustracoes/syndrome-icterica.svg","./assets/ilustracoes/syndrome-neurologica.svg","./assets/ilustracoes/syndrome-paralisia.svg","./assets/ilustracoes/syndrome-respiratoria.svg","./assets/ilustracoes/syndrome-zoonoses.svg","./assets/ilustracoes/tdr.svg","./assets/ilustracoes/trabalho-turismo.svg","./assets/ilustracoes/tratamento-incompleto.svg","./assets/ilustracoes/tratamento-recorrencia.svg","./assets/ilustracoes/tungiase.webp","./assets/ilustracoes/vacinacao-incompleta.svg","./assets/ilustracoes/veterinario.svg","./assets/ilustracoes/viagem-vacinacao.svg","./assets/ilustracoes/viagem.svg","./assets/ilustracoes/zika.webp",
"./assets/icones/febre-helder.png",
"./assets/ilustracoes/mpox-regioes-africa.svg","./assets/ilustracoes/colera-risco-inundacoes.png","./assets/ilustracoes/colera-risco-saneamento.png","./assets/ilustracoes/colera-risco-agua.png","./assets/ilustracoes/colera-suspeito-melhorado.png","./assets/ilustracoes/colera-mosca-domestica.png","./assets/ilustracoes/mpox-contacto.png","./assets/ilustracoes/mpox-viagem.png","./assets/ilustracoes/mpox-animais.png","./assets/ilustracoes/gripe-caso.jpg","./assets/ilustracoes/rotavirus-caso.jpg","./assets/ilustracoes/meningite-caso.jpg","./assets/ilustracoes/lassa-caso.jpg","./assets/ilustracoes/mpox-caso.jpg","./assets/ilustracoes/colera-contexto.jpg","./assets/ilustracoes/rift-vetor.jpg","./assets/ilustracoes/parotidite-anatomia.jpg","./assets/ilustracoes/raiva-vetor.jpg","./assets/ilustracoes/norovirus-caso.jpg","./assets/ilustracoes/dengue-vetor.jpg","./assets/ilustracoes/rubeola-caso.jpg","./assets/ilustracoes/escabiose-caso.jpg","./assets/ilustracoes/zika-vetor.jpg","./assets/ilustracoes/colera-provavel.jpg","./assets/ilustracoes/pertussis-caso.jpg","./assets/ilustracoes/tuberculose-caso.jpg","./assets/ilustracoes/conjuntivite-caso.jpg","./assets/ilustracoes/fhsr-caso.jpg","./assets/ilustracoes/dermatite-serpiginosa-caso.jpg","./assets/ilustracoes/febre-tifoide-caso.jpg","./assets/ilustracoes/covid-caso.jpg","./assets/ilustracoes/ebola-caso.jpg","./assets/ilustracoes/hepatite-caso.jpg","./assets/ilustracoes/mers-ilustracao.jpg","./assets/ilustracoes/sarampo-caso.jpg","./assets/ilustracoes/vsr-caso.jpg","./assets/ilustracoes/poliomielite-caso.jpg","./assets/ilustracoes/filariase-caso.jpg","./assets/ilustracoes/crimeia-congo-caso.jpg","./assets/ilustracoes/peste-vetor.jpg","./assets/ilustracoes/colera-suspeito.jpg","./assets/ilustracoes/lepra-caso.jpg","./assets/ilustracoes/parotidite-caso.jpg","./assets/ilustracoes/tungiase-caso.jpg","./assets/ilustracoes/varicela-caso.jpg","./assets/ilustracoes/febre-amarela-caso.jpg","./assets/ilustracoes/leptospirose-vetor.jpg","./assets/ilustracoes/marburg-vetor.jpg","./assets/ilustracoes/inf-bacterianas-caso.jpg","./assets/ilustracoes/colera-mosca.jpg","./assets/icones/comunidade-surto.svg","./assets/icones/agua-helder.png","./assets/icones/contacto-cha-helder.png","./assets/icones/residencia-surto-helder.png","./assets/icones/idoso-helder.png","./assets/icones/crianca-helder.png","./assets/icones/alimentos-helder.png","./assets/icones/profissional-saude-helder.png","./assets/icones/mal-estar-helder.png","./assets/icones/imunocomprometido-helder.png","./assets/icones/familia-helder.png","./assets/icones/viagem-helder.png","./assets/icones/infectados-helder.png",
  "./","./index.html","./doenca.html","./seccao.html","./sindrome.html",
  "./explorar-seccao.html","./explorar-sindrome.html","./explorar-abecedario.html",
  "./emendas.html","./glossario.html","./perfil.html","./pesquisa.html",
  "./content.js","./ddata.js","./cms_data.js","./fiche-assets.js","./app.js",
  "./assets/js/content.js","./assets/js/app.js","./assets/css/style.css",
  "./assets/ilustracoes/conjuntivite-caso.jpg",
  "./assets/icones/agregado-familiar.svg","./assets/icones/gravidez.svg","./assets/icones/populacoes.svg","./assets/icones/profissionais-saude.svg","./assets/icones/roedores.svg","./assets/ilustracoes/crimeia-congo-caso.jpg","./assets/ilustracoes/mpox-caso.jpg","./assets/ilustracoes/mpox-laboratorio.jpg","./assets/ilustracoes/parotidite-laboratorio.jpg","./assets/ilustracoes/peste-caso.jpg","./assets/ilustracoes/rubeola-transmissao.jpg","./assets/ilustracoes/sarampo-laboratorio.jpg","./assets/ilustracoes/sarampo-transmissao.jpg","./assets/ilustracoes/sindrome-respiratorias.jpg","./assets/ilustracoes/varicela-laboratorio.jpg","./assets/ilustracoes/rubeola-caso.jpg","./assets/ilustracoes/vsr-caso.jpg","./assets/ilustracoes/sarampo-caso.jpg","./assets/ilustracoes/varicela-caso.jpg","./assets/ilustracoes/parotidite-caso.jpg","./assets/ilustracoes/mers-ilustracao.jpg","./assets/ilustracoes/zika-vetor.jpg","./assets/ilustracoes/poliomielite-caso.jpg","./assets/ilustracoes/colera-contexto.jpg","./assets/ilustracoes/leptospirose-vetor.jpg","./assets/ilustracoes/dermatite-serpiginosa-caso.jpg","./assets/ilustracoes/gripe-caso.jpg","./assets/ilustracoes/covid-caso.jpg","./assets/ilustracoes/meningite-caso.jpg","./assets/ilustracoes/pertussis-caso.jpg","./assets/ilustracoes/tuberculose-caso.jpg","./assets/ilustracoes/escabiose-caso.jpg","./assets/ilustracoes/filariase-caso.jpg","./assets/ilustracoes/lepra-caso.jpg","./assets/ilustracoes/tungiase-caso.jpg","./assets/ilustracoes/inf-bacterianas-caso.jpg","./assets/ilustracoes/norovirus-caso.jpg","./assets/ilustracoes/rotavirus-caso.jpg","./assets/ilustracoes/febre-tifoide-caso.jpg","./assets/ilustracoes/ebola-caso.jpg","./assets/ilustracoes/lassa-caso.jpg","./assets/ilustracoes/fhsr-caso.jpg","./assets/ilustracoes/hepatite-caso.jpg","./assets/ilustracoes/febre-amarela-caso.jpg","./assets/ilustracoes/raiva-vetor.jpg","./assets/ilustracoes/peste-vetor.jpg","./assets/ilustracoes/dengue-vetor.jpg","./assets/ilustracoes/rift-vetor.jpg","./assets/ilustracoes/marburg-vetor.jpg"
];
const STATIC_RX = /\.(css|png|jpg|jpeg|gif|svg|webp|ico|woff2?|ttf|otf|pdf)$/i;
const DATA_RX = /(content|ddata|cms_data|fiche-assets|app)\.js$/i;

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then((c) => Promise.allSettled(CORE.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const isPage = req.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith("/");
  const isData = DATA_RX.test(url.pathname);
  const isStatic = STATIC_RX.test(url.pathname);
  if (isPage || (isData && !isStatic)) {
    e.respondWith(
      fetch(req).then((res) => {
        if (res && res.status === 200) { const copy = res.clone(); caches.open(CACHE_VERSION).then((c) => c.put(req, copy)); }
        return res;
      }).catch(() => caches.match(req).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.status === 200) { const copy = res.clone(); caches.open(CACHE_VERSION).then((c) => c.put(req, copy)); }
        return res;
      }).catch(() => null);
      return cached || network.then((res) => res || caches.match("./index.html"));
    })
  );
});









