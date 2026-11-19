(() => {
  "use strict";

  const I18N = {
    pt: {
      phase_badge: "FASE 1 · PRONTERA 99/50",
      brand_sub: "Renewal Dia 1 · 2ªs Classes · Mundo Vivo · Epic P2P",
      stat_territory_lbl: "Território Ativo",
      stat_territory_val: "Prontera (Fase 1)",
      stat_cap_lbl: "Teto Atual",
      stat_mech_lbl: "Mecânica Base",
      stat_bots_lbl: "População do Mundo",
      stat_bots_val: "700 Aventureiros Persistentes",
      hero_eyebrow: "ACESSO PRIVADO POR CONVITE",
      hero_title: "Criar Conta & Rates do Servidor",
      hero_lead: "Crie sua conta para entrar pela sala privada via Jogar.bat. Drops e segredos de cada mapa são descobertos diretamente dentro do jogo com @whodrops e @mobinfo.",
      reg_tag: "01 // CADASTRO DE CONTA",
      reg_title: "Novo Jogador",
      lbl_invite: "Código de Convite",
      lbl_user: "Usuário (4–23 caracteres, sem _M/_F)",
      lbl_pass: "Senha (6–32 caracteres)",
      lbl_pass2: "Confirmar Senha",
      lbl_sex: "Gênero do Personagem",
      opt_male: "Masculino (M)",
      opt_female: "Feminino (F)",
      lbl_class: "Classe Pretendida (2ª Classe)",
      vault_cfg_title: "Configuração Avançada (Token do Cofre)",
      vault_cfg_hint: "Se o servidor ainda não estiver com envio automático habilitado, você pode usar um token com acesso ao repositório privado ou baixar o ticket JSON para o Host importar.",
      btn_submit: "Criar Conta",
      card_exp_title: "Progressão Escalonada (99/50)",
      exp1_note: "Arranque rápido até a 2ª classe",
      exp2_note: "Campos médios e dungeons",
      exp3_note: "Reta final tática em grupo",
      card_drop_title: "Drops Reestruturados",
      drp_mat: "Materiais & Consumíveis:",
      drp_eq: "Equipamentos Custom:",
      drp_eq_note: "(conforme raridade)",
      drp_card: "Cartas Comuns / MVP:",
      cmd_hint: "Comandos liberados no jogo: @whodrops e @mobinfo.",
      flow_tag: "04 // COMO JOGAR",
      how_works_title: "Entrada em 1 Clique",
      step1: "Crie sua conta ao lado com o código de convite do grupo.",
      step2: "Abra o Jogar.bat: se nenhum amigo estiver online, seu PC assume como Host automaticamente; se já houver sala aberta, você entra direto via Epic P2P.",
      step3: "O progresso é salvo na nuvem de forma contínua para ninguém perder nada.",
    },
    en: {
      phase_badge: "PHASE 1 · PRONTERA 99/50",
      brand_sub: "Day-1 Renewal · 2nd Classes · Living World · Epic P2P",
      stat_territory_lbl: "Active Territory",
      stat_territory_val: "Prontera (Phase 1)",
      stat_cap_lbl: "Current Cap",
      stat_mech_lbl: "Base Mechanics",
      stat_bots_lbl: "World Population",
      stat_bots_val: "700 Persistent Adventurers",
      hero_eyebrow: "INVITE-ONLY PRIVATE ACCESS",
      hero_title: "Create Account & Server Rates",
      hero_lead: "Create your account to join the private room via Jogar.bat. Map spawns, drops and item secrets are discovered in-game using @whodrops and @mobinfo.",
      reg_tag: "01 // ACCOUNT REGISTRATION",
      reg_title: "New Player",
      lbl_invite: "Invite Code",
      lbl_user: "Username (4–23 chars, no _M/_F)",
      lbl_pass: "Password (6–32 chars)",
      lbl_pass2: "Confirm Password",
      lbl_sex: "Character Gender",
      opt_male: "Male (M)",
      opt_female: "Female (F)",
      lbl_class: "Target Class (2nd Class)",
      vault_cfg_title: "Advanced Setup (Vault Token)",
      vault_cfg_hint: "If direct server submission is not enabled yet, you may supply a scoped private repo token or download the signed JSON ticket for the Host.",
      btn_submit: "Create Account",
      card_exp_title: "Tiered Progression (99/50)",
      exp1_note: "Fast progression into 2nd class",
      exp2_note: "Mid-tier fields & dungeons",
      exp3_note: "Tactical party push to cap",
      card_drop_title: "Rebalanced Drops",
      drp_mat: "Materials & Consumables:",
      drp_eq: "Custom Equipment:",
      drp_eq_note: "(by rarity tier)",
      drp_card: "Normal / MVP Cards:",
      cmd_hint: "In-game discovery commands enabled: @whodrops & @mobinfo.",
      flow_tag: "04 // HOW TO PLAY",
      how_works_title: "1-Click Launch",
      step1: "Create your account using the group invite code.",
      step2: "Run Jogar.bat: if nobody is online yet, your PC becomes Host automatically; otherwise you join directly via Epic P2P.",
      step3: "Progress is continuously backed up to the cloud Vault.",
    },
  };

  let lang = localStorage.getItem("jairo_lang") || "pt";
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
  }

  function md5Hex(str) {
    function add(x, y) {
      const l = (x & 0xffff) + (y & 0xffff);
      return (((x >> 16) + (y >> 16) + (l >> 16)) << 16) | (l & 0xffff);
    }
    function rol(n, c) { return (n << c) | (n >>> (32 - c)); }
    function cmn(q, a, b, x, s, t) { return add(rol(add(add(a, q), add(x, t)), s), b); }
    function ff(a, b, c, d, x, s, t) { return cmn((b & c) | (~b & d), a, b, x, s, t); }
    function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & ~d), a, b, x, s, t); }
    function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); }
    function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | ~d), a, b, x, s, t); }
    const utf8 = unescape(encodeURIComponent(str));
    const n = utf8.length;
    const words = [];
    for (let i = 0; i < n; i++) words[i >> 2] |= utf8.charCodeAt(i) << ((i % 4) * 8);
    words[n >> 2] |= 0x80 << ((n % 4) * 8);
    words[(((n + 8) >> 6) + 1) * 16 - 2] = n * 8;
    let a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (let i = 0; i < words.length; i += 16) {
      const oa = a, ob = b, oc = c, od = d;
      const w = (k) => words[i + k] || 0;
      a = ff(a, b, c, d, w(0), 7, -680876936); d = ff(d, a, b, c, w(1), 12, -389564586); c = ff(c, d, a, b, w(2), 17, 606105819); b = ff(b, c, d, a, w(3), 22, -1044525330);
      a = ff(a, b, c, d, w(4), 7, -176418897); d = ff(d, a, b, c, w(5), 12, 1200080426); c = ff(c, d, a, b, w(6), 17, -1473231341); b = ff(b, c, d, a, w(7), 22, -45705983);
      a = ff(a, b, c, d, w(8), 7, 1770035416); d = ff(d, a, b, c, w(9), 12, -1958414417); c = ff(c, d, a, b, w(10), 17, -42063); b = ff(b, c, d, a, w(11), 22, -1990404162);
      a = ff(a, b, c, d, w(12), 7, 1804603682); d = ff(d, a, b, c, w(13), 12, -40341101); c = ff(c, d, a, b, w(14), 17, -1502002290); b = ff(b, c, d, a, w(15), 22, 1236535329);
      a = gg(a, b, c, d, w(1), 5, -165796510); d = gg(d, a, b, c, w(6), 9, -1069501632); c = gg(c, d, a, b, w(11), 14, 643717713); b = gg(b, c, d, a, w(0), 20, -373897302);
      a = gg(a, b, c, d, w(5), 5, -701558691); d = gg(d, a, b, c, w(10), 9, 38016083); c = gg(c, d, a, b, w(15), 14, -660478335); b = gg(b, c, d, a, w(4), 20, -405537848);
      a = gg(a, b, c, d, w(9), 5, 568446438); d = gg(d, a, b, c, w(14), 9, -1019803690); c = gg(c, d, a, b, w(3), 14, -187363961); b = gg(b, c, d, a, w(8), 20, 1163531501);
      a = gg(a, b, c, d, w(13), 5, -1444681467); d = gg(d, a, b, c, w(2), 9, -51403784); c = gg(c, d, a, b, w(7), 14, 1735328473); b = gg(b, c, d, a, w(12), 20, -1926607734);
      a = hh(a, b, c, d, w(5), 4, -378558); d = hh(d, a, b, c, w(8), 11, -2022574463); c = hh(c, d, a, b, w(11), 16, 1839030562); b = hh(b, c, d, a, w(14), 23, -35309556);
      a = hh(a, b, c, d, w(1), 4, -1530992060); d = hh(d, a, b, c, w(4), 11, 1272893353); c = hh(c, d, a, b, w(7), 16, -155497632); b = hh(b, c, d, a, w(10), 23, -1094730640);
      a = hh(a, b, c, d, w(13), 4, 681279174); d = hh(d, a, b, c, w(0), 11, -358537222); c = hh(c, d, a, b, w(3), 16, -722521979); b = hh(b, c, d, a, w(6), 23, 76029189);
      a = hh(a, b, c, d, w(9), 4, -640364487); d = hh(d, a, b, c, w(12), 11, -421815835); c = hh(c, d, a, b, w(15), 16, 530742520); b = hh(b, c, d, a, w(2), 23, -995338651);
      a = ii(a, b, c, d, w(0), 6, -198630844); d = ii(d, a, b, c, w(7), 10, 1126891415); c = ii(c, d, a, b, w(14), 15, -1416354905); b = ii(b, c, d, a, w(5), 21, -57434055);
      a = ii(a, b, c, d, w(12), 6, 1700485571); d = ii(d, a, b, c, w(3), 10, -1894986606); c = ii(c, d, a, b, w(10), 15, -1051523); b = ii(b, c, d, a, w(1), 21, -2054922799);
      a = ii(a, b, c, d, w(8), 6, 1873313359); d = ii(d, a, b, c, w(15), 10, -30611744); c = ii(c, d, a, b, w(6), 15, -1560198380); b = ii(b, c, d, a, w(13), 21, 1309151649);
      a = ii(a, b, c, d, w(4), 6, -145523070); d = ii(d, a, b, c, w(11), 10, -1120210379); c = ii(c, d, a, b, w(2), 15, 718787259); b = ii(b, c, d, a, w(9), 21, -343485551);
      a = add(a, oa); b = add(b, ob); c = add(c, oc); d = add(d, od);
    }
    return [a, b, c, d].map((x) => {
      let s = "";
      for (let j = 0; j < 4; j++) s += ("0" + ((x >>> (j * 8)) & 255).toString(16)).slice(-2);
      return s;
    }).join("");
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
    const token = $("vaultToken").value.trim();
    const fb = $("regFeedback");

    if (token) localStorage.setItem("jairo_vault_token", token);
    else localStorage.removeItem("jairo_vault_token");

    if (pass !== pass2) {
      fb.hidden = false;
      fb.className = "feedback-box err";
      fb.textContent = lang === "pt" ? "As senhas não conferem." : "Passwords do not match.";
      return;
    }

    const ts = new Date().toISOString().replace(/[:.]/g, "-");
    const ticket = {
      schema: "jairo.registration.v2",
      invite_code: invite,
      userid: user,
      password_md5: md5Hex(pass),
      sex,
      preferred_class: targetClass,
      created_at: new Date().toISOString(),
    };
    const filename = `${ts}_${user}.json`;

    const delivered = [];
    if (window.location.protocol.startsWith("http")) {
      try {
        const cfResp = await fetch("./api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ticket),
        });
        if (cfResp.ok) delivered.push("Cloudflare Portal (/jairo/api/register)");
      } catch (_) {}
    }

    if (!delivered.length) {
      try {
        const resp = await fetch("http://127.0.0.1:8787/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ticket),
        });
        if (resp.ok) delivered.push("Host Local (127.0.0.1:8787)");
      } catch (_) {}
    }

    if (!delivered.length && token) {
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
            body: JSON.stringify({ message: `queue: register ${user}`, content: b64 }),
          }
        );
        if (ghResp.ok) delivered.push("GitHub Vault");
      } catch (_) {}
    }

    fb.hidden = false;
    fb.className = "feedback-box";
    if (delivered.length) {
      fb.innerHTML = `<strong>${lang === "pt" ? "Conta enviada com sucesso!" : "Account submitted!"}</strong><br><span class="mono small">${delivered.join(" · ")}</span>`;
    } else {
      fb.innerHTML = `
        <strong>${lang === "pt" ? "Ticket gerado!" : "Ticket generated!"}</strong>
        <div class="small muted">${lang === "pt" ? "Baixe o ticket e envie ao Host ou coloque em vault_repo/queue/registrations/." : "Download the ticket and send it to the Host or drop it into vault_repo/queue/registrations/."}</div>
        <button id="dlTicketBtn" class="btn-secondary mono" type="button">⬇ ${filename}</button>
      `;
      $("dlTicketBtn").addEventListener("click", () => downloadTicket(filename, ticket));
    }
  }

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

  $("registerForm").addEventListener("submit", handleRegister);

  const savedTheme = localStorage.getItem("jairo_theme");
  if (savedTheme === "porcelain" || savedTheme === "obsidian") {
    document.documentElement.dataset.theme = savedTheme;
    $("themeToggle").textContent = savedTheme.toUpperCase();
  }
  const savedTok = localStorage.getItem("jairo_vault_token");
  if (savedTok) $("vaultToken").value = savedTok;

  applyI18n();
})();
