(() => {
  "use strict";

  const atlas = window.JAIRO_ATLAS;
  if (!atlas) return;

  const I18N = {
    pt: {
      phase_badge: "FASE 1 · PRONTERA 99/50",
      brand_sub: "Renewal Dia 1 · 2ªs Classes · Ecossistema 700 Bots · EOS P2P",
      tab_atlas: "Atlas Visual",
      tab_table: "Tabela de Aprovação",
      tab_rates: "Rates & Arquitetura",
      tab_register: "Criar Conta",
      stat_territory_lbl: "Território Ativo",
      maps_word: "mapas",
      stat_cap_lbl: "Limite Fase 1",
      stat_mobs_lbl: "Spawns Realocados",
      stat_items_lbl: "Itens & Cartas JaiRO",
      stat_bots_lbl: "Bots Persistentes",
      atlas_eyebrow: "MAPA TÁTICO DE PROGRESSÃO (LV. 1 → 99/50)",
      atlas_title: "Atlas Visual do Território de Prontera",
      atlas_lead: "Clique em qualquer setor do mapa para revisar a introdução ecológica, os monstros realocados, quantidades de spawn e taxas de drop customizadas.",
      zone_hub: "Cidades (Safe)",
      zone_dungeon: "Esgoto 20–58",
      board_hint: "Dica: Nós com cadeado laranja indicam portais selados na Fase 1 (Mt. Mjolnir, Geffen e Deserto de Sograt).",
      tbl_eyebrow: "REVISÃO COMPLETA PARA APROVAÇÃO",
      tbl_title: "Tabela Mestra de Mapas, Monstros & Drops",
      tbl_lead: "Filtre por zona, tipo de recompensa ou busque qualquer monstro/item antes de liberar a expansão além de Prontera.",
      search_ph: "Buscar monstro, mapa, item, carta ou bônus...",
      opt_all_zones: "Todas as Zonas",
      opt_all_tiers: "Todos os Drops / Tipos",
      opt_boss_only: "Apenas MVPs & Mini-Bosses",
      opt_cards: "Contém Cartas",
      opt_relics: "Contém Relíquias",
      opt_rares: "Contém Equips Raros",
      col_map: "Mapa & Zona",
      col_mob: "Monstro (Realocado)",
      col_stats: "Lv · HP · Elem",
      col_drops: "Drops Reestruturados & Taxas",
      rates_eyebrow: "EQUILÍBRIO & INFRAESTRUTURA",
      rates_title: "Rates da Fase 1 & Arquitetura JaiRO",
      rates_lead: "Mecânica Renewal desde o Dia 1 com progressão escalonada até 99/50, rede EOS P2P e Cofre Oficial no GitHub.",
      card_exp_title: "EXP Escalonada (Cap 99/50)",
      card_drop_title: "Taxas de Drop Customizadas",
      card_bots_title: "700 Bots em 3 Camadas",
      bot_l1: "Simulação abstrata em segundo plano (farm real, níveis, clãs e PMs).",
      bot_l2: "Mercadores ativos em Prontera vendendo o farm da Camada 1.",
      bot_l3: "Entidades físicas sob demanda com spawn discreto nos mapas com jogadores.",
      card_net_title: "Host Rotativo Sem Perder Saves",
      card_net_desc: "O primeiro amigo a abrir o jogo puxa o snapshot mais recente do repositório privado jairo-vault no GitHub, assume o lock de Host e sobe a sala na Epic Online Services (EOS P2P). Snapshots automáticos sobem a cada 5 minutos e a fila de novas contas do site sincroniza a cada 15 segundos.",
      card_pipe_title: "YAML ⇄ iteminfo.lua ⇄ Atlas Web",
      card_pipe_desc: "Todos os monstros, spawns, drops e bônus de equipamentos são compilados por um único gerador Python. Isso garante que @whodrops, @mobinfo, descrição no client e esta tabela web nunca fiquem dessincronizados.",
      reg_eyebrow: "ACESSO PRIVADO POR CONVITE",
      reg_title: "Criar Conta no JaiRO",
      reg_lead: "Seu cadastro entra na fila segura do Cofre (GitHub Vault) ou direto no Host ativo. Quando você abrir o Jogar.bat, sua conta já estará sincronizada no servidor.",
      lbl_invite: "Código de Convite do Grupo",
      lbl_user: "Usuário (4–23 caracteres, sem _M/_F)",
      lbl_pass: "Senha (6–32 caracteres)",
      lbl_pass2: "Confirmar Senha",
      lbl_sex: "Gênero do Personagem",
      opt_male: "Masculino (M)",
      opt_female: "Feminino (F)",
      lbl_class: "Classe Alvo (Fase 1 — 99/50)",
      vault_cfg_title: "Configuração Opcional: Envio Direto ao Cofre GitHub (kairosumida-dev/jairo-vault)",
      vault_cfg_hint: "Se quiser que este navegador envie o ticket direto para o repositório privado sem precisar baixar o arquivo, cole um Fine-Grained Token com acesso apenas a kairosumida-dev/jairo-vault (fica salvo somente neste navegador).",
      btn_submit: "Gerar & Enviar Cadastro",
      how_works_title: "Como funciona na prática",
      step1: "Preencha os dados ao lado e envie seu cadastro.",
      step2: "O site tenta entregar primeiro ao Host ativo local e/ou ao repositório privado jairo-vault. Se estiver offline sem token, baixa um ticket JSON pronto para o Jogar.bat importar.",
      step3: "Quem abrir o Jogar.bat primeiro assume como Host (via Epic EOS P2P), baixa a fila do GitHub Vault e injeta as contas novas no MariaDB antes do jogo abrir.",
      step4: "Se outro amigo já estiver hosteando, o daemon dele checa a fila a cada 15 segundos e cria sua conta automaticamente.",
      hub_msg: "Zona segura sem monstros agressivos. Use este mapa para comércio, guilda e acesso aos setores ao redor.",
      sealed_label: "Fronteira selada na Fase 1:",
      spawn_word: "spawns",
      results_word: "resultados",
    },
    en: {
      phase_badge: "PHASE 1 · PRONTERA 99/50",
      brand_sub: "Day-1 Renewal · 2nd Classes · 700-Bot Ecosystem · EOS P2P",
      tab_atlas: "Visual Atlas",
      tab_table: "Approval Table",
      tab_rates: "Rates & Architecture",
      tab_register: "Create Account",
      stat_territory_lbl: "Active Territory",
      maps_word: "maps",
      stat_cap_lbl: "Phase 1 Cap",
      stat_mobs_lbl: "Relocated Spawns",
      stat_items_lbl: "JaiRO Items & Cards",
      stat_bots_lbl: "Persistent Bots",
      atlas_eyebrow: "TACTICAL PROGRESSION MAP (LV. 1 → 99/50)",
      atlas_title: "Prontera Territory Visual Atlas",
      atlas_lead: "Click any map sector to inspect its ecological lore, relocated monsters, spawn counts and rebalanced drop tables.",
      zone_hub: "Cities (Safe)",
      zone_dungeon: "Culverts 20–58",
      board_hint: "Tip: Orange lock badges mark borders sealed during Phase 1 (Mt. Mjolnir, Geffen & Sograt Desert).",
      tbl_eyebrow: "FULL APPROVAL MATRIX",
      tbl_title: "Master Maps, Monsters & Drops Table",
      tbl_lead: "Filter by zone, reward tier or search any monster/item before approving expansion beyond Prontera.",
      search_ph: "Search monster, map, item, card or bonus...",
      opt_all_zones: "All Zones",
      opt_all_tiers: "All Drops / Tiers",
      opt_boss_only: "MVPs & Mini-Bosses Only",
      opt_cards: "Includes Cards",
      opt_relics: "Includes Relics",
      opt_rares: "Includes Rare Equips",
      col_map: "Map & Zone",
      col_mob: "Monster (Relocated)",
      col_stats: "Lv · HP · Elem",
      col_drops: "Rebalanced Drops & Rates",
      rates_eyebrow: "BALANCE & INFRASTRUCTURE",
      rates_title: "Phase 1 Rates & JaiRO Architecture",
      rates_lead: "Day-1 Renewal mechanics scaled to 99/50 cap, EOS P2P networking and GitHub Private Vault persistence.",
      card_exp_title: "Tiered EXP Curve (99/50 Cap)",
      card_drop_title: "Custom Drop Rates",
      card_bots_title: "700 Bots Across 3 Layers",
      bot_l1: "Background abstract simulation (real mob drops, leveling, guilds & PMs).",
      bot_l2: "Active Prontera merchants vending Layer 1 loot.",
      bot_l3: "On-demand physical entities spawning off-screen in player-occupied maps.",
      card_net_title: "Rotating Host Without Save Loss",
      card_net_desc: "The first friend to launch pulls the latest snapshot from private GitHub repo jairo-vault, claims the Host lease and opens the Epic Online Services (EOS P2P) room. Snapshots upload every 5 minutes and account registrations sync every 15 seconds.",
      card_pipe_title: "YAML ⇄ iteminfo.lua ⇄ Web Atlas",
      card_pipe_desc: "All monsters, spawns, drops and item scripts compile from one Python source of truth so @whodrops, @mobinfo, client descriptions and this web atlas stay 100% in sync.",
      reg_eyebrow: "INVITE-ONLY PRIVATE ACCESS",
      reg_title: "Create JaiRO Account",
      reg_lead: "Your registration enters the secure GitHub Vault queue or active Host directly. When launching Jogar.bat, your account is synced automatically.",
      lbl_invite: "Group Invite Code",
      lbl_user: "Username (4–23 chars, no _M/_F)",
      lbl_pass: "Password (6–32 chars)",
      lbl_pass2: "Confirm Password",
      lbl_sex: "Character Gender",
      opt_male: "Male (M)",
      opt_female: "Female (F)",
      lbl_class: "Target Class (Phase 1 — 99/50)",
      vault_cfg_title: "Optional: Direct Push to GitHub Vault (kairosumida-dev/jairo-vault)",
      vault_cfg_hint: "To push registration tickets straight into the private vault repo from this browser, paste a scoped Fine-Grained Token (stored only in your browser localStorage).",
      btn_submit: "Generate & Submit Registration",
      how_works_title: "How it works end-to-end",
      step1: "Fill out your account details and submit.",
      step2: "The portal delivers to the active local Host and/or private GitHub repo jairo-vault. If offline without a token, you can download the signed JSON ticket for Jogar.bat.",
      step3: "Whoever launches Jogar.bat first becomes Host over Epic EOS P2P, pulls the GitHub Vault queue and inserts new accounts before opening the client.",
      step4: "If a friend is already hosting, their background daemon polls the queue every 15s and activates your account live.",
      hub_msg: "Safe city zone without aggressive monsters. Use this hub for vending, guilds and border access.",
      sealed_label: "Phase 1 sealed borders:",
      spawn_word: "spawns",
      results_word: "results",
    },
  };

  let lang = localStorage.getItem("jairo_lang") || "pt";
  let selectedMapId = "prt_fild08";

  const $ = (id) => document.getElementById(id);

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.pt[key] || key;
  }

  function applyI18n() {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    $("langToggle").textContent = lang === "pt" ? "PT-BR" : "EN";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    renderRates();
    renderGrid();
    renderInspector(selectedMapId);
    renderTable();
  }

  function renderRates() {
    const expUl = $("expTierList");
    expUl.innerHTML = atlas.meta.rates.exp_tiers
      .map(
        (row) => `
        <li>
          <strong class="mono">${row.range}:</strong>
          <span class="mono" style="color:var(--accent)">Base ${row.base} / Job ${row.job}</span>
          <div class="muted small">${lang === "pt" ? row.note_pt : row.note_en}</div>
        </li>`
      )
      .join("");

    const d = atlas.meta.rates;
    $("dropRateList").innerHTML = `
      <li><strong>${lang === "pt" ? "Materiais & Consumíveis" : "Materials & Consumables"}:</strong> <span class="mono">${d.drop_materials}</span></li>
      <li><strong>${lang === "pt" ? "Equips Comuns" : "Common Equips"}:</strong> <span class="mono">${d.drop_equips.common}</span></li>
      <li><strong>${lang === "pt" ? "Equips Incomuns" : "Uncommon Equips"}:</strong> <span class="mono">${d.drop_equips.uncommon}</span></li>
      <li><strong>${lang === "pt" ? "Equips Raros" : "Rare Equips"}:</strong> <span class="mono">${d.drop_equips.rare}</span></li>
      <li><strong>${lang === "pt" ? "Relíquias de MVP" : "MVP Relics"}:</strong> <span class="mono">${d.drop_equips.relic_mvp}</span></li>
      <li><strong>${lang === "pt" ? "Cartas Normais / MVP" : "Normal / MVP Cards"}:</strong> <span class="mono">${d.drop_cards} · MVP ${d.drop_mvp_cards}</span></li>
    `;
  }

  function renderGrid() {
    const grid = $("pronteraGrid");
    grid.innerHTML = "";
    const nodesById = {};

    atlas.maps.forEach((m) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "map-node" + (m.id === selectedMapId ? " selected" : "");
      btn.dataset.zone = m.zone;
      btn.dataset.mapId = m.id;
      btn.style.gridRow = String(m.row + 1);
      btn.style.gridColumn = String(m.col + 1);

      const lockMark = m.locked_gates && m.locked_gates.length ? `<span class="node-lock" title="Phase 1 Sealed Gate">🔒 ${m.locked_gates.length}</span>` : "";
      const totalSpawns = m.mobs.reduce((acc, x) => acc + x.count, 0);
      const hasBoss = m.mobs.some((x) => x.boss);

      btn.innerHTML = `
        <div class="node-top">
          <span class="node-code mono">${m.id}</span>
          <span class="node-lv mono">${m.is_hub ? "SAFE" : `Lv.${m.min_lv}-${m.max_lv}`}</span>
        </div>
        <div class="node-name">${m.name}</div>
        <div class="node-foot mono">
          <span>${m.is_hub ? "HUB" : `${totalSpawns} ${t("spawn_word")}${hasBoss ? " · ★" : ""}`}</span>
          ${lockMark}
        </div>
      `;
      btn.addEventListener("click", () => {
        selectedMapId = m.id;
        renderGrid();
        renderInspector(m.id);
      });
      grid.appendChild(btn);
      nodesById[m.id] = btn;
    });

    requestAnimationFrame(() => drawLinks(nodesById));
  }

  function drawLinks(nodesById) {
    const svg = $("mapLinksSvg");
    const wrap = svg.parentElement;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
    const seen = new Set();
    const lines = [];

    atlas.maps.forEach((m) => {
      const elA = nodesById[m.id];
      if (!elA) return;
      const rA = elA.getBoundingClientRect();
      const x1 = rA.left - rect.left + rA.width / 2;
      const y1 = rA.top - rect.top + rA.height / 2;

      m.neighbors.forEach((nId) => {
        const key = [m.id, nId].sort().join("|");
        if (seen.has(key)) return;
        seen.add(key);
        const elB = nodesById[nId];
        if (!elB) return;
        const rB = elB.getBoundingClientRect();
        const x2 = rB.left - rect.left + rB.width / 2;
        const y2 = rB.top - rect.top + rB.height / 2;
        const active = m.id === selectedMapId || nId === selectedMapId;
        lines.push(
          `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${active ? "var(--accent)" : "var(--border-strong)"}" stroke-width="${active ? "2.2" : "1.2"}" stroke-dasharray="${active ? "none" : "4 4"}" opacity="${active ? "0.95" : "0.55"}" />`
        );
      });
    });
    svg.innerHTML = lines.join("");
  }

  function renderInspector(mapId) {
    const m = atlas.maps.find((x) => x.id === mapId) || atlas.maps[0];
    const el = $("mapInspector");
    const biome = lang === "pt" ? m.biome_pt : m.biome_en;
    const intro = lang === "pt" ? m.intro_pt : m.intro_en;

    const gatesHtml = m.locked_gates && m.locked_gates.length
      ? `<div class="gate-pills"><span class="mono small muted">${t("sealed_label")}</span>${m.locked_gates.map((g) => `<span class="gate-pill mono">🔒 ${g}</span>`).join("")}</div>`
      : "";

    const mobsHtml = m.mobs.length
      ? m.mobs
          .map((mob) => {
            const dropsHtml = mob.drops
              .map((d) => {
                const desc = lang === "pt" ? d.item.desc_pt : d.item.desc_en;
                return `
                  <div class="drop-row">
                    <div>
                      <div class="drop-name">${d.item.name} <span class="mono small muted">[${d.aegis}]</span></div>
                      <div class="drop-desc">${desc}</div>
                    </div>
                    <span class="rate-chip mono tier-${d.item.tier}">${d.rate_pct}</span>
                  </div>`;
              })
              .join("");
            return `
              <div class="mob-card ${mob.boss ? "is-boss" : ""}">
                <div class="mob-head">
                  <div class="mob-sprite-box">
                    <img src="https://static.divine-pride.net/images/mobs/png/${mob.id}.png" alt="${mob.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" />
                    <span class="mob-fallback mono" style="display:none">#${mob.id}</span>
                  </div>
                  <div>
                    <div class="mob-title">
                      ${mob.name}
                      ${mob.boss ? `<span class="boss-badge mono">${mob.hp >= 150000 ? "MVP" : "MINI-BOSS"}</span>` : ""}
                    </div>
                    <div class="mob-meta mono">
                      Lv.${mob.lv} · HP ${mob.hp.toLocaleString()} · ${mob.race} · ${mob.ele} · Spawn: ${mob.count}x
                    </div>
                  </div>
                </div>
                <div class="drop-list">${dropsHtml}</div>
              </div>`;
          })
          .join("")
      : `<div class="insp-intro">${t("hub_msg")}</div>`;

    el.innerHTML = `
      <div class="insp-head">
        <div class="insp-code mono">${m.id} · ${biome} · ${m.is_hub ? "SAFE HUB" : `Lv. ${m.min_lv}–${m.max_lv}`}</div>
        <h2>${m.name}</h2>
        <div class="insp-intro">${intro}</div>
        ${gatesHtml}
      </div>
      <div>${mobsHtml}</div>
    `;
  }

  function renderTable() {
    const q = ($("searchInput").value || "").trim().toLowerCase();
    const zone = $("zoneFilter").value;
    const tier = $("tierFilter").value;
    const tbody = $("masterTableBody");
    const rows = [];

    atlas.maps.forEach((m) => {
      if (zone !== "all" && m.zone !== zone) return;
      m.mobs.forEach((mob) => {
        if (tier === "boss" && !mob.boss) return;
        if (tier === "card" && !mob.drops.some((d) => d.item.tier === "card" || d.item.tier === "card_mvp")) return;
        if (tier === "relic" && !mob.drops.some((d) => d.item.tier === "relic")) return;
        if (tier === "rare" && !mob.drops.some((d) => d.item.tier === "rare")) return;

        const hay = [
          m.id, m.name, m.biome_pt, m.biome_en,
          mob.name, mob.aegis, String(mob.id), mob.ele, mob.race,
          ...mob.drops.map((d) => `${d.item.name} ${d.aegis} ${d.item.desc_pt} ${d.item.desc_en}`)
        ].join(" ").toLowerCase();

        if (q && !hay.includes(q)) return;

        const dropsHtml = mob.drops
          .map(
            (d) => `
              <div class="mini-drop">
                <span><strong>${d.item.name}</strong> <span class="muted">(${lang === "pt" ? d.item.desc_pt : d.item.desc_en})</span></span>
                <span class="mono rate-chip tier-${d.item.tier}">${d.rate_pct}</span>
              </div>`
          )
          .join("");

        rows.push(`
          <tr>
            <td>
              <strong>${m.name}</strong>
              <div class="mono small muted">${m.id} · Lv.${m.min_lv}-${m.max_lv}</div>
            </td>
            <td>
              <strong>${mob.name}</strong> ${mob.boss ? `<span class="boss-badge mono">${mob.hp >= 150000 ? "MVP" : "MINI"}</span>` : ""}
              <div class="mono small muted">#${mob.id} · ${mob.count}x</div>
            </td>
            <td class="mono small">
              Lv.${mob.lv}<br>HP ${mob.hp.toLocaleString()}<br>${mob.race} / ${mob.ele}
            </td>
            <td>${dropsHtml}</td>
          </tr>
        `);
      });
    });

    $("tableCountBadge").textContent = `${rows.length} ${t("results_word")}`;
    tbody.innerHTML = rows.join("");
  }

  async function sha256Hex(str) {
    const buf = new TextEncoder().encode(str);
    const hash = await crypto.subtle.digest("SHA-256", buf);
    return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  function downloadTicket(filename, payload) {
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  async function handleRegister(ev) {
    ev.preventDefault();
    const invite = $("regInvite").value.trim();
    const user = $("regUser").value.trim();
    const pass = $("regPass").value;
    const pass2 = $("regPass2").value;
    const sex = $("regSex").value;
    const targetClass = $("regClass").value;
    const token = ($("vaultToken").value || localStorage.getItem("jairo_vault_token") || "").trim();
    const fb = $("regFeedback");

    if (token) localStorage.setItem("jairo_vault_token", token);

    if (pass !== pass2) {
      fb.hidden = false;
      fb.className = "feedback-box err";
      fb.textContent = lang === "pt" ? "As senhas não conferem." : "Passwords do not match.";
      return;
    }

    const ts = new Date().toISOString().replace(/[:.]/g, "-");
    const ticket = {
      schema: "jairo.registration.v1",
      invite_code: invite,
      userid: user,
      password_plain_dev: pass,
      password_sha256: await sha256Hex(pass),
      sex,
      preferred_class: targetClass,
      created_at: new Date().toISOString(),
    };
    const filename = `${ts}_${user}.json`;

    let delivered = [];
    // 1) Try local active Host daemon
    try {
      const resp = await fetch("http://127.0.0.1:8787/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticket),
      });
      if (resp.ok) delivered.push("Host Local (127.0.0.1:8787)");
    } catch (_) {}

    // 2) Try GitHub Private Vault API if user supplied scoped PAT
    if (token) {
      try {
        const b64 = btoa(unescape(encodeURIComponent(JSON.stringify(ticket, null, 2))));
        const ghResp = await fetch(
          `https://api.github.com/repos/kairosumida-dev/jairo-vault/contents/queue/registrations/${encodeURIComponent(filename)}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/vnd.github+json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              message: `queue: register ${user}`,
              content: b64,
            }),
          }
        );
        if (ghResp.ok) delivered.push("GitHub Vault (kairosumida-dev/jairo-vault)");
      } catch (_) {}
    }

    fb.hidden = false;
    fb.className = "feedback-box";
    if (delivered.length) {
      fb.innerHTML = `<strong>${lang === "pt" ? "Cadastro enviado!" : "Registration sent!"}</strong><br><span class="mono small">${delivered.join(" · ")}</span>`;
    } else {
      fb.innerHTML = `
        <strong>${lang === "pt" ? "Ticket gerado com sucesso!" : "Ticket generated!"}</strong>
        <div class="small muted">${lang === "pt" ? "Nenhum Host local nem token GitHub detectado neste navegador. Baixe o ticket e coloque em vault_repo/queue/registrations/ (ou envie ao Host)." : "No active local Host or GitHub token detected. Download the ticket and drop it in vault_repo/queue/registrations/."}</div>
        <button id="dlTicketBtn" class="btn-secondary mono" type="button">⬇ ${filename}</button>
      `;
      $("dlTicketBtn").addEventListener("click", () => downloadTicket(filename, ticket));
    }
  }

  // Tabs & Controls
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      $("tab-" + btn.dataset.tab).classList.add("active");
      if (btn.dataset.tab === "atlas") renderGrid();
    });
  });

  $("langToggle").addEventListener("click", () => {
    lang = lang === "pt" ? "en" : "pt";
    localStorage.setItem("jairo_lang", lang);
    applyI18n();
  });

  $("themeToggle").addEventListener("click", () => {
    const html = document.documentElement;
    const next = html.dataset.theme === "obsidian" ? "porcelain" : "obsidian";
    html.dataset.theme = next;
    $("themeToggle").textContent = next.toUpperCase();
    localStorage.setItem("jairo_theme", next);
  });

  $("searchInput").addEventListener("input", renderTable);
  $("zoneFilter").addEventListener("change", renderTable);
  $("tierFilter").addEventListener("change", renderTable);
  $("registerForm").addEventListener("submit", handleRegister);
  window.addEventListener("resize", () => {
    if ($("tab-atlas").classList.contains("active")) renderGrid();
  });

  // Init
  const savedTheme = localStorage.getItem("jairo_theme");
  if (savedTheme === "porcelain" || savedTheme === "obsidian") {
    document.documentElement.dataset.theme = savedTheme;
    $("themeToggle").textContent = savedTheme.toUpperCase();
  }
  const savedTok = localStorage.getItem("jairo_vault_token");
  if (savedTok) $("vaultToken").value = savedTok;

  $("statMobCount").textContent = String(atlas.summary.total_mobs);
  $("statItemCount").textContent = String(atlas.summary.total_custom_items);
  $("footerStats").textContent = `${atlas.summary.total_maps} Maps · ${atlas.summary.total_mobs} Spawns · ${atlas.summary.total_custom_items} Custom Items`;

  applyI18n();
})();
