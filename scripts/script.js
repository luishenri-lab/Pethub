
// ── DATA ──
const ANIMALS = {
  thor:  { name:'Thor', breed:'Labrador Retriador', tipo:'cachorro', emoji:'🐕', city:'Presidente Dutra, MA', age:'1 ano', sex:'Macho', size:'Grande', weight:'10 kg', desc:'Thor é um Labrador cheio de energia e amor para dar. Foi resgatado da Avenida com sinais de maus-tratos, mas se recuperou completamente. Adora crianças, se dá bem com outros cães e ama brincar de buscar. Ideal para famílias ativas.', tags:['Vacinado','Castrado','Vermifugado','Amigável'], ong:'focinhos' },
  mimi:  { name:'Mimi', breed:'SRD (Sem Raça Definida)', tipo:'gato', emoji:'🐈', city:'Presidente Dutra, MA', age:'1 ano', sex:'Fêmea', size:'Pequeno', weight:'3,5 kg', desc:'Mimi foi encontrada dentro de uma caixa num bairro do Centro de Pres. Dutra. É extremamente dócil e carinhosa — fica horas no colo. Se adapta bem a apartamentos e convive bem com outros gatos.', tags:['Vacinada','Vermifugada','Dócil','Apto apto'], ong:'gatoslivres' },
  bolt:  { name:'Bolt', breed:'vira lata', tipo:'cachorro', emoji:'🐩', city:'Presidente Dutra, MA', age:'5 meses', sex:'Macho', size:'Pequeno', weight:'4 kg', desc:'Bolt chegou à ONG após ser abandonado por seus tutores durante uma mudança. É inteligente, aprende truques facilmente e adora atenção. Ideal para quem mora em apartamento.', tags:['Vacinado','Castrado','Adestrado','Hipoalergênico'], ong:'focinhos' },
  nala:  { name:'Nala', breed:'Persa', tipo:'gato', emoji:'🐱', city:'Presidente Dutra, MA', age:'2 anos', sex:'Fêmea', size:'Médio', weight:'4,2 kg', desc:'Nala é uma persa majestosa que precisa de atenção com a pelagem, mas recompensa com afeto infinito. Tranquila, adora janelas e lugares altos. Convive bem com outros gatos.', tags:['Vacinada','Castrada','Carinhosa','Pelagem longa'], ong:'patinhas' },
  rex:   { name:'Rex', breed:'Vira-lata caramelo', tipo:'cachorro', emoji:'🐶', city:'Presidente Dutra, MA', age:'5 meses', sex:'Macho', size:'Médio', weight:'4 kg', desc:'Rex é o típico vira-lata caramelo brasileiro: leal, protetor e muito inteligente. Foi resgatado de situação de rua e já está totalmente socializado. Adora caminhadas e é ótimo companheiro.', tags:['Vacinado','Castrado','Leal','Ativo'], ong:'patinhas' },
  luna:  { name:'Luna', breed:'SRD (filhote)', tipo:'gato', emoji:'😸', city:'Presidente Dutra, MA', age:'1 ano', sex:'Fêmea', size:'Pequeno', weight:'1,8 kg', desc:'Luna é uma filhote cheia de energia e personalidade. Brinca sem parar, explora tudo e vai trazer muita alegria para sua casa. Ainda está em fase de socialização mas já adora colo.', tags:['Vacinada','Filhote','Brincalhona','Curiosa'], ong:'gatoslivres' },
};
const ONGS = {

  focinhos: {
    name: 'Lar dos Focinhos',
    emoji: '🐕',
    city: 'PRESIDENTE DUTRA, MA',
    addr: 'Ruas do centro de PRESIDENTE DUTRA, MA',
    badges: ['Fundada em 2026','CNPJ 00.000.000/0001-00','Certificada pelo Conselho Municipal de Meio Ambiente'],
    stats: [{ num:'80', label:'animais abrigados' },{ num:'1.284', label:'adoções realizadas' },{ num:'R$4.200', label:'arrecadados/mês' },{ num:'98%', label:'taxa de adoção' }],
    sobre: 'O Lar dos Focinhos nasceu em 2025 quando um grupo de estudantes se uniu para salvar cães e gatos das ruas de Pres. Dutra. Hoje somos uma ONG formalizada com mais de 30 voluntários fixos, parceria com clínicas veterinárias e um espaço físico capaz de abrigar até 100 animais simultaneamente. Já realizamos mais de 1.200 adoções responsáveis e somos referência na região.',
    meta: 6000, arrecadado: 4200,
    animals: ['thor','bolt'],
    contact: { whatsapp:'(11) 99123-4567', email:'contato@larfocinhos.org.br', insta:'@larfocinhos' },
  },
  gatoslivres: {
    name: 'Gatos Livres MA',
    emoji: '🐱',
    city: 'PRESIDENTE DUTRA, MA',
    addr: 'avenida trancredo neves, PRESIDENTE DUTRA, MA',
    badges: ['Fundada em 2020','Especialista em felinos','Programa TNR'],
    stats: [{ num:'120', label:'gatos castrados' },{ num:'340', label:'adoções realizadas' },{ num:'R$2.800', label:'arrecadados/mês' },{ num:'100%', label:'foco em gatos' }],
    sobre: 'Nascemos da necessidade de dar atenção especial aos gatos de rua de PRESIDENTE DUTRA.Nosso programa TNR (Trap-Neuter-Return) já castrou mais de 1.500 gatos em 4 anos, reduzindo drasticamente a superpopulação felina em bairros da cidade. Além disso, acolhemos animais feridos, doentes ou em situação de risco para reabilitação e adoção.',
    meta: 5000, arrecadado: 2800,
    animals: ['mimi','luna'],
    contact: { whatsapp:'(00) 00000-0000', email:'adocao@gatoslivresma.com', insta:'@gatoslivresma' },
  },
  patinhas: {
    name: 'Patinhas MA',
    emoji: '🐾',
    city: 'PRESIDENTE DUTRA, MA',
    addr: 'avenida trancredo neves, PRESIDENTE DUTRA, MA',
    badges: ['Fundada em 2026','5 cidades atendidas',''],
    stats: [{ num:'45', label:'animais abrigados' },{ num:'870', label:'adoções realizadas' },{ num:'R$1.950', label:'arrecadados/mês' },{ num:'5', label:'cidades atendidas' }],
    sobre: 'A Patinhas MA é uma das ONGs mais dedicadas ao resgate e adoção de animais. Em quase uma década de trabalho, construímos uma rede de voluntários em 5 cidades e realizamos quase 900 adoções responsáveis. oferecemos atendimento gratuito para os animais abrigados.',
    meta: 5000, arrecadado: 1950,
    animals: ['nala','rex'],
    contact: { whatsapp:'(00) 00000-0000', email:'contato@patinhasma.org', insta:'@patinhasma' },
  },
};

// ── NAVIGATION ──
function goHome() {
  document.getElementById('homeView').classList.add('active');
  document.getElementById('ongView').classList.remove('active');
  window.scrollTo({ top: 0 });
}

function scrollTo(id) {
  setTimeout(() => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 50);
}

// ── MODAL ──
function openAnimalModal(id) {
  const a = ANIMALS[id];
  const o = ONGS[a.ong];
  // thumb
  const thumb = document.getElementById('modalThumb');
  thumb.textContent = a.emoji;
  thumb.className = 'modal-gallery-main ' + a.tipo;
  // thumbs row
  const emojis = a.tipo === 'cachorro' ? ['🐕','🐾','🏠'] : ['🐈','🐾','🏠'];
  document.getElementById('modalThumbs').innerHTML = emojis.map((e,i)=>`<div class="modal-thumb ${i===0?'active':''}" onclick="selectThumb(this,'${e}')">${e}</div>`).join('');
  document.getElementById('modalName').textContent = a.name;
  document.getElementById('modalBreed').textContent = a.breed + ' · ' + a.city;
  document.getElementById('modalTags').innerHTML = a.tags.map(t=>`<span class="tag tag-verde">${t}</span>`).join('');
  document.getElementById('modalAttrs').innerHTML = [
    { label:'Idade', val: a.age },
    { label:'Sexo', val: a.sex },
    { label:'Porte', val: a.size },
    { label:'Peso', val: a.weight },
  ].map(x=>`<div class="modal-attr"><div class="modal-attr-label">${x.label}</div><div class="modal-attr-value">${x.val}</div></div>`).join('');
  document.getElementById('modalDesc').textContent = a.desc;
  const ongEl = document.getElementById('modalOng');
  ongEl.innerHTML = `<div class="modal-ong-avatar">${o.emoji}</div><div><div class="modal-ong-name">${o.name}</div><div class="modal-ong-loc">📍 ${o.city}</div></div><div class="modal-ong-arrow">→</div>`;
  ongEl.onclick = () => { closeModal(); openOngPage(a.ong); };
  document.getElementById('btnFav').classList.remove('liked');
  document.getElementById('btnFav').textContent = '🤍 Salvar nos favoritos';
  document.getElementById('animalModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('animalModal').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOutside(e) { if (e.target === document.getElementById('animalModal')) closeModal(); }
function selectThumb(el, emoji) {
  document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('modalThumb').textContent = emoji;
}
function toggleFav(btn) {
  btn.classList.toggle('liked');
  btn.textContent = btn.classList.contains('liked') ? '❤️ Salvo nos favoritos' : '🤍 Salvar nos favoritos';
  if (btn.classList.contains('liked')) showToast('❤️ Adicionado aos favoritos!');
}

// ── ONG PAGE ──
function openOngPage(id) {
  const o = ONGS[id];
  document.getElementById('homeView').classList.remove('active');
  document.getElementById('ongView').classList.add('active');
  window.scrollTo({ top: 0 });

  // hero
  document.getElementById('ongHeroInner').innerHTML = `
    <div class="ong-hero-avatar">${o.emoji}</div>
    <div class="ong-hero-info">
      <h1>${o.name}</h1>
      <p>📍 ${o.city}</p>
      <div class="badges">${o.badges.map(b=>`<span class="ong-badge">${b}</span>`).join('')}</div>
    </div>
    <div class="ong-hero-cta">
      <button class="btn-primary" onclick="switchTab(document.querySelector('.ong-tab:nth-child(3)'),'doacaoTab')">💚 Fazer doação</button>
    </div>`;

  // stats
  document.getElementById('ongStatsRow').innerHTML = o.stats.map(s=>`
    <div class="ong-stat-card"><div class="num">${s.num}</div><div class="lbl">${s.label}</div></div>`).join('');

  // animals
  document.getElementById('ongAnimalsList').innerHTML = o.animals.map(aid => {
    const a = ANIMALS[aid];
    return `<div class="ong-animal-card" onclick="openAnimalModal('${aid}')">
      <div class="ong-animal-thumb ${a.tipo}">${a.emoji}</div>
      <div class="ong-animal-info"><h5>${a.name}</h5><div class="meta">${a.breed}</div></div>
    </div>`;
  }).join('');

  // sobre
  document.getElementById('ongSobreText').textContent = o.sobre;

  // sidebar
  const pct = Math.round((o.arrecadado / o.meta) * 100);
  document.getElementById('ongSidebarMeta').innerHTML = `<span>R$ ${o.arrecadado.toLocaleString('pt-BR')}</span><span>Meta: R$ ${o.meta.toLocaleString('pt-BR')}</span>`;
  document.getElementById('ongSidebarBar').style.width = pct + '%';
  document.getElementById('ongSidebarMetaPct').textContent = pct + '% da meta atingida';
  document.getElementById('ongSidebarContact').innerHTML = `
    <a><span class="icon">💬</span> ${o.contact.whatsapp}</a>
    <a><span class="icon">✉️</span> ${o.contact.email}</a>
    <a><span class="icon">📸</span> ${o.contact.insta}</a>`;
  document.getElementById('ongSidebarCity').textContent = o.city;
  document.getElementById('ongSidebarAddr').textContent = o.addr;

  // reset tabs
  document.querySelectorAll('.ong-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.ong-tab').classList.add('active');
  ['animaisTab','sobreTab','doacaoTab'].forEach((t,i) => {
    const el = document.getElementById(t);
    if (el) el.style.display = i === 0 ? 'block' : 'none';
  });

  // scroll animations
  setTimeout(initReveal, 100);
}

function switchTab(tabEl, contentId) {
  document.querySelectorAll('.ong-tab').forEach(t => t.classList.remove('active'));
  tabEl.classList.add('active');
  ['animaisTab','sobreTab','doacaoTab'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = id === contentId ? 'block' : 'none';
  });
}

// ── UI HELPERS ──
function filterAnimais(tipo, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.animal-card[data-tipo]').forEach(c => {
    c.style.display = tipo === 'todos' || c.dataset.tipo === tipo ? '' : 'none';
  });
}
function selectChip(el) {
  el.closest('.valores-rapidos').querySelectorAll('.valor-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}
function selectSidebarChip(el) {
  el.closest('div').querySelectorAll('.sidebar-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}
function toggleMenu() { document.getElementById('navLinks').classList.toggle('open'); }
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ── COUNTERS ──
function animateCounter(el, target, dur = 1600) {
  let v = 0; const step = Math.ceil(target / (dur / 16));
  const iv = setInterval(() => {
    v += step;
    if (v >= target) { el.textContent = target.toLocaleString('pt-BR'); clearInterval(iv); }
    else el.textContent = v.toLocaleString('pt-BR');
  }, 16);
}
let heroAnimated = false;
const heroObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !heroAnimated) {
    heroAnimated = true;
    animateCounter(document.getElementById('hc1'), 1284);
    animateCounter(document.getElementById('hc2'), 3417);
    animateCounter(document.getElementById('hc3'), 12);
  }
});
heroObs.observe(document.querySelector('.hero-stats'));

const impactoObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target, parseInt(e.target.dataset.target));
      impactoObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.impacto-num[data-target]').forEach(el => impactoObs.observe(el));

// ── REVEAL ──
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}
initReveal();

function scrollToSection(id) {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  });
}

// Criar mapa
const map = L.map('map').setView([-5.289, -44.495], 13);

// Tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Marcador inicial
L.marker([-5.289, -44.495])
  .addTo(map)
  .bindPopup("📍 Resgate registrado aqui")
  .openPopup();

// Backend fake (resgates)
const resgates = JSON.parse(localStorage.getItem("resgates")) || [];
document.getElementById("total-resgates").innerText = resgates.length;

function adicionarResgate(lat, lng) {
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup("🐾 Novo resgate!");

  const resgates = JSON.parse(localStorage.getItem("resgates")) || [];
  resgates.push({ lat, lng });
  localStorage.setItem("resgates", JSON.stringify(resgates));

  document.getElementById("total-resgates").innerText = resgates.length;
}