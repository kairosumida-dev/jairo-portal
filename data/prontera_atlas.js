window.JAIRO_ATLAS = {
  "meta": {
    "name": "JaiRO",
    "phase": 1,
    "phase_title": {
      "pt": "Fase 1 — Fronteira de Prontera",
      "en": "Phase 1 — Prontera Frontier"
    },
    "level_cap": "99/50",
    "max_job_tier": {
      "pt": "2ªs Classes (Sem Transclasse)",
      "en": "2nd Classes (No Rebirth)"
    },
    "mechanics": "Renewal (Day 1)",
    "rates": {
      "exp_tiers": [
        {
          "range": "Lv. 1 – 40",
          "base": "8x",
          "job": "8x",
          "note_pt": "Arranque ágil para fechar 1ª e avançar à 2ª classe",
          "note_en": "Fast early progression through 1st and into 2nd class"
        },
        {
          "range": "Lv. 41 – 80",
          "base": "5x",
          "job": "5x",
          "note_pt": "Cinturão médio, dungeons e farm de equipamentos",
          "note_en": "Mid-tier belts, culverts and gear farming"
        },
        {
          "range": "Lv. 81 – 99",
          "base": "3x",
          "job": "3x",
          "note_pt": "Reta final tática até o teto 99/50 em grupo",
          "note_en": "Tactical endgame push to the 99/50 cap"
        }
      ],
      "drop_materials": "5x",
      "drop_equips": {
        "common": "8.0% – 12.0%",
        "uncommon": "2.5% – 4.5%",
        "rare": "0.60% – 1.50%",
        "relic_mvp": "0.20% – 0.50%"
      },
      "drop_cards": "0.25% (25x)",
      "drop_mvp_cards": "0.10% (10x)"
    },
    "bots": {
      "total": 700,
      "abstract_sim": 600,
      "merchants": 60,
      "active_on_demand": 40
    }
  },
  "summary": {
    "total_maps": 22,
    "combat_maps": 20,
    "total_mobs": 101,
    "total_custom_items": 50
  },
  "items": {
    "Jairo_Sprout_Blade": {
      "id": 40001,
      "aegis": "Jairo_Sprout_Blade",
      "name": "Sprout Saber",
      "type": "Weapon",
      "subtype": "1hSword",
      "tier": "common",
      "slots": 2,
      "eqlv": 8,
      "jobs": [
        "Novice",
        "Swordman",
        "Knight",
        "Crusader",
        "Thief",
        "Assassin",
        "Rogue",
        "Merchant",
        "Blacksmith",
        "Alchemist"
      ],
      "desc_pt": "Espada leve forjada pela guarda inicial. ATK +68 | STR +2, ASPD +5%, Dano contra Planta +15%.",
      "desc_en": "Light blade forged for frontier recruits. ATK +68 | STR +2, ASPD +5%, +15% damage vs Plant.",
      "custom": true
    },
    "Jairo_Feather_Bow": {
      "id": 40002,
      "aegis": "Jairo_Feather_Bow",
      "name": "Gale Feather Bow",
      "type": "Weapon",
      "subtype": "Bow",
      "tier": "common",
      "slots": 2,
      "eqlv": 10,
      "jobs": [
        "Archer",
        "Hunter",
        "Bard",
        "Dancer",
        "Rogue"
      ],
      "desc_pt": "Arco de madeira flexível das colinas leste. ATK +72 | DEX +3, HIT +10, Dano vs Vento +10%.",
      "desc_en": "Supple eastern hill bow. ATK +72 | DEX +3, HIT +10, +10% damage vs Wind.",
      "custom": true
    },
    "Jairo_Dew_Wand": {
      "id": 40003,
      "aegis": "Jairo_Dew_Wand",
      "name": "Morning Dew Wand",
      "type": "Weapon",
      "subtype": "Staff",
      "tier": "common",
      "slots": 2,
      "eqlv": 10,
      "jobs": [
        "Mage",
        "Wizard",
        "Sage",
        "Acolyte",
        "Priest",
        "Novice"
      ],
      "desc_pt": "Cajado cristalino do orvalho. MATK +85 | INT +3, MaxSP +80, Conjuração Variável -6%.",
      "desc_en": "Crystalline dew staff. MATK +85 | INT +3, MaxSP +80, Variable Cast -6%.",
      "custom": true
    },
    "Jairo_Recruit_Mail": {
      "id": 40004,
      "aegis": "Jairo_Recruit_Mail",
      "name": "Prontera Militia Coat",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "common",
      "slots": 1,
      "eqlv": 10,
      "jobs": [
        "All"
      ],
      "desc_pt": "Casaco reforçado da milícia de Prontera. DEF +38 | MaxHP +250, VIT +2, DEF +10.",
      "desc_en": "Reinforced Prontera militia coat. DEF +38 | MaxHP +250, VIT +2, DEF +10.",
      "custom": true
    },
    "Jairo_Meadow_Boots": {
      "id": 40005,
      "aegis": "Jairo_Meadow_Boots",
      "name": "Meadow Runner Boots",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "common",
      "slots": 1,
      "eqlv": 12,
      "jobs": [
        "All"
      ],
      "desc_pt": "Botas leves para patrulhar planícies. AGI +2, Velocidade de Movimento +10%, Esquiva +8.",
      "desc_en": "Light patrol boots. AGI +2, Move Speed +10%, FLEE +8.",
      "custom": true
    },
    "Jairo_Amber_Buckler": {
      "id": 40006,
      "aegis": "Jairo_Amber_Buckler",
      "name": "Amber Shell Buckler",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "uncommon",
      "slots": 1,
      "eqlv": 18,
      "jobs": [
        "Swordman",
        "Knight",
        "Crusader",
        "Acolyte",
        "Priest",
        "Monk",
        "Merchant",
        "Blacksmith",
        "Alchemist",
        "Thief",
        "Rogue",
        "Mage",
        "Sage"
      ],
      "desc_pt": "Escudo de carapaça de âmbar. DEF +42 | VIT +2, -15% dano de Inseto, -10% dano de Bruto.",
      "desc_en": "Amber shell buckler. DEF +42 | VIT +2, -15% Insect dmg, -10% Brute dmg.",
      "custom": true
    },
    "Jairo_Vocal_Ribbon": {
      "id": 40007,
      "aegis": "Jairo_Vocal_Ribbon",
      "name": "Maestro Field Beret",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "uncommon",
      "slots": 1,
      "eqlv": 18,
      "jobs": [
        "All"
      ],
      "desc_pt": "Boina de batedor Dropada pelo Vocal. DEX +3, AGI +2, ASPD +6%.",
      "desc_en": "Scout beret dropped by Vocal. DEX +3, AGI +2, ASPD +6%.",
      "custom": true
    },
    "Jairo_Eclipse_Ring": {
      "id": 40008,
      "aegis": "Jairo_Eclipse_Ring",
      "name": "Eclipse Lunar Band",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "uncommon",
      "slots": 1,
      "eqlv": 20,
      "jobs": [
        "All"
      ],
      "desc_pt": "Anel lunático do Eclipse. CRIT +6, LUK +3, ATK +4%.",
      "desc_en": "Lunar band from Eclipse. CRIT +6, LUK +3, ATK +4%.",
      "custom": true
    },
    "Jairo_Sewer_Stiletto": {
      "id": 40009,
      "aegis": "Jairo_Sewer_Stiletto",
      "name": "Culvert Fang Dagger",
      "type": "Weapon",
      "subtype": "Dagger",
      "tier": "uncommon",
      "slots": 2,
      "eqlv": 30,
      "jobs": [
        "Thief",
        "Assassin",
        "Rogue",
        "Swordman",
        "Knight",
        "Crusader",
        "Merchant",
        "Blacksmith",
        "Alchemist",
        "Mage",
        "Sage"
      ],
      "desc_pt": "Adaga serrilhada para limpar os esgotos. ATK +118 | AGI +3, CRIT +8, +20% vs Inseto.",
      "desc_en": "Serrated culvert dagger. ATK +118 | AGI +3, CRIT +8, +20% vs Insect.",
      "custom": true
    },
    "Jairo_Tide_Manteau": {
      "id": 40010,
      "aegis": "Jairo_Tide_Manteau",
      "name": "Abyssal Tide Manteau",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "uncommon",
      "slots": 1,
      "eqlv": 35,
      "jobs": [
        "All"
      ],
      "desc_pt": "Capa tecida nas correntes do esgoto. FLEE +15, MDEF +5, Resistência Água +15%.",
      "desc_en": "Sewer current cloak. FLEE +15, MDEF +5, Water Resist +15%.",
      "custom": true
    },
    "Jairo_Coral_Mace": {
      "id": 40011,
      "aegis": "Jairo_Coral_Mace",
      "name": "Tidal Sanctum Mace",
      "type": "Weapon",
      "subtype": "Mace",
      "tier": "uncommon",
      "slots": 2,
      "eqlv": 38,
      "jobs": [
        "Acolyte",
        "Priest",
        "Monk",
        "Swordman",
        "Knight",
        "Crusader",
        "Merchant",
        "Blacksmith",
        "Alchemist"
      ],
      "desc_pt": "Maça consagrada das galerias alagadas. ATK +135, MATK +65 | Cura +12%, +15% vs Demônio.",
      "desc_en": "Consecrated flooded gallery mace. ATK +135, MATK +65 | Heal +12%, +15% vs Demon.",
      "custom": true
    },
    "Jairo_Viper_Katar": {
      "id": 40012,
      "aegis": "Jairo_Viper_Katar",
      "name": "Venom Spine Katar",
      "type": "Weapon",
      "subtype": "Katar",
      "tier": "rare",
      "slots": 2,
      "eqlv": 44,
      "jobs": [
        "Assassin"
      ],
      "desc_pt": "Katar venenosa de lâmina dupla. ATK +152 | CRIT +14, Dano Crítico +15%, 6% chance de Envenenar.",
      "desc_en": "Twin-blade venom katar. ATK +152 | CRIT +14, Crit Dmg +15%, 6% Poison chance.",
      "custom": true
    },
    "Jairo_Golden_Carapace": {
      "id": 40013,
      "aegis": "Jairo_Golden_Carapace",
      "name": "Gilded Bug Armor",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "relic",
      "slots": 1,
      "eqlv": 48,
      "jobs": [
        "Swordman",
        "Knight",
        "Crusader",
        "Merchant",
        "Blacksmith",
        "Alchemist"
      ],
      "desc_pt": "Armadura forjada da carapaça do Golden Thief Bug. DEF +78 | VIT +5, MaxHP +900, MDEF +10.",
      "desc_en": "Armor forged from Golden Thief Bug shell. DEF +78 | VIT +5, MaxHP +900, MDEF +10.",
      "custom": true
    },
    "Jairo_Maya_Chitin": {
      "id": 40014,
      "aegis": "Jairo_Maya_Chitin",
      "name": "Queen Chitin Shield",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "relic",
      "slots": 1,
      "eqlv": 52,
      "jobs": [
        "All"
      ],
      "desc_pt": "Escudo relíquia da Maya. DEF +72 | MDEF +12, MaxHP +450, 12% chance de refletir magia alvo único.",
      "desc_en": "Relic shield of Maya. DEF +72 | MDEF +12, MaxHP +450, 12% single-target magic reflect.",
      "custom": true
    },
    "Jairo_Grove_Claymore": {
      "id": 40015,
      "aegis": "Jairo_Grove_Claymore",
      "name": "Wolfpack Claymore",
      "type": "Weapon",
      "subtype": "2hSword",
      "tier": "uncommon",
      "slots": 2,
      "eqlv": 45,
      "jobs": [
        "Swordman",
        "Knight",
        "Crusader"
      ],
      "desc_pt": "Espada de duas mãos balanceada para caçadores de feras. ATK +188 | STR +4, ASPD +10%, +18% vs Bruto.",
      "desc_en": "Balanced two-handed beast slayer. ATK +188 | STR +4, ASPD +10%, +18% vs Brute.",
      "custom": true
    },
    "Jairo_Arcane_Rod": {
      "id": 40016,
      "aegis": "Jairo_Arcane_Rod",
      "name": "Mistweaver Grimoire Staff",
      "type": "Weapon",
      "subtype": "Staff",
      "tier": "rare",
      "slots": 2,
      "eqlv": 50,
      "jobs": [
        "Mage",
        "Wizard",
        "Sage",
        "Priest"
      ],
      "desc_pt": "Cajado das colinas brumas. MATK +155 | INT +5, DEX +3, Cast Variável -12%, MATK +8%.",
      "desc_en": "Misty hills staff. MATK +155 | INT +5, DEX +3, Variable Cast -12%, MATK +8%.",
      "custom": true
    },
    "Jairo_Sograt_Longbow": {
      "id": 40017,
      "aegis": "Jairo_Sograt_Longbow",
      "name": "Dune Stalker Bow",
      "type": "Weapon",
      "subtype": "Bow",
      "tier": "rare",
      "slots": 2,
      "eqlv": 56,
      "jobs": [
        "Archer",
        "Hunter",
        "Bard",
        "Dancer"
      ],
      "desc_pt": "Arco longo da fronteira de Sograt. ATK +148 | DEX +5, AGI +3, Dano à Distância +12%, CRIT +8.",
      "desc_en": "Sograt border longbow. ATK +148 | DEX +5, AGI +3, Ranged Dmg +12%, CRIT +8.",
      "custom": true
    },
    "Jairo_Phreeoni_Helm": {
      "id": 40018,
      "aegis": "Jairo_Phreeoni_Helm",
      "name": "Voracious Sand Helm",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "relic",
      "slots": 1,
      "eqlv": 62,
      "jobs": [
        "All"
      ],
      "desc_pt": "Elmo relíquia de Phreeoni. HIT +35, STR +4, DEX +4, ATK +6%.",
      "desc_en": "Phreeoni relic helm. HIT +35, STR +4, DEX +4, ATK +6%.",
      "custom": true
    },
    "Jairo_Orcish_Cleaver": {
      "id": 40019,
      "aegis": "Jairo_Orcish_Cleaver",
      "name": "Warchief Greataxe",
      "type": "Weapon",
      "subtype": "2hAxe",
      "tier": "rare",
      "slots": 2,
      "eqlv": 68,
      "jobs": [
        "Merchant",
        "Blacksmith",
        "Alchemist",
        "Swordman",
        "Knight",
        "Crusader"
      ],
      "desc_pt": "Machado de guerra do posto avançado Orc. ATK +225 | STR +6, ATK +10%, Ignora 25% DEF de Humanoide.",
      "desc_en": "Orc outpost war greataxe. ATK +225 | STR +6, ATK +10%, Ignores 25% DemiHuman DEF.",
      "custom": true
    },
    "Jairo_Hero_Crest": {
      "id": 40020,
      "aegis": "Jairo_Hero_Crest",
      "name": "Orc Hero Pauldron Clip",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "relic",
      "slots": 1,
      "eqlv": 70,
      "jobs": [
        "All"
      ],
      "desc_pt": "Insígnia relíquia do Orc Hero. STR +5, VIT +5, MaxHP +600, Resistência a Atordoamento +40%.",
      "desc_en": "Orc Hero relic crest. STR +5, VIT +5, MaxHP +600, Stun Resistance +40%.",
      "custom": true
    },
    "Jairo_Eddga_Treads": {
      "id": 40021,
      "aegis": "Jairo_Eddga_Treads",
      "name": "Flame Tiger Greaves",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "relic",
      "slots": 1,
      "eqlv": 75,
      "jobs": [
        "All"
      ],
      "desc_pt": "Grevas flamejantes do Eddga. MaxHP +1000, Velocidade +15%, STR +4, Resistência Fogo +15%.",
      "desc_en": "Eddga's flame greaves. MaxHP +1000, Move Speed +15%, STR +4, Fire Resist +15%.",
      "custom": true
    },
    "Jairo_Dragonscale_Lance": {
      "id": 40022,
      "aegis": "Jairo_Dragonscale_Lance",
      "name": "Wyvern Ridge Lance",
      "type": "Weapon",
      "subtype": "2hSpear",
      "tier": "rare",
      "slots": 2,
      "eqlv": 78,
      "jobs": [
        "Swordman",
        "Knight",
        "Crusader"
      ],
      "desc_pt": "Lança dracônica forjada contra Petites. ATK +218 | STR +5, VIT +4, +22% vs Tamanho Grande, ASPD +8%.",
      "desc_en": "Wyvern ridge lance. ATK +218 | STR +5, VIT +4, +22% vs Large, ASPD +8%.",
      "custom": true
    },
    "Jairo_Sanctuary_Censer": {
      "id": 40023,
      "aegis": "Jairo_Sanctuary_Censer",
      "name": "Abbey Dawn Scepter",
      "type": "Weapon",
      "subtype": "Staff",
      "tier": "rare",
      "slots": 2,
      "eqlv": 82,
      "jobs": [
        "Acolyte",
        "Priest",
        "Monk",
        "Mage",
        "Wizard",
        "Sage"
      ],
      "desc_pt": "Cetro sagrado de Santa Capitolina. MATK +195 | INT +6, Cura +20%, MATK +12%, +20% vs Morto-Vivo.",
      "desc_en": "Sacred St. Capitolina scepter. MATK +195 | INT +6, Heal +20%, MATK +12%, +20% vs Undead.",
      "custom": true
    },
    "Jairo_Archangel_Mantle": {
      "id": 40024,
      "aegis": "Jairo_Archangel_Mantle",
      "name": "Seraphic Vigil Cloak",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "relic",
      "slots": 1,
      "eqlv": 85,
      "jobs": [
        "All"
      ],
      "desc_pt": "Manto da guarda celestial de Arc Angeling. Todos Atributos +2, FLEE +18, MaxSP +200, Resistência Sombrio +20%.",
      "desc_en": "Arc Angeling vigil cloak. All Stats +2, FLEE +18, MaxSP +200, Dark Resist +20%.",
      "custom": true
    },
    "Jairo_Doppel_Runeblade": {
      "id": 40025,
      "aegis": "Jairo_Doppel_Runeblade",
      "name": "Doppelganger Twinblade",
      "type": "Weapon",
      "subtype": "2hSword",
      "tier": "relic",
      "slots": 2,
      "eqlv": 88,
      "jobs": [
        "Knight",
        "Crusader"
      ],
      "desc_pt": "Espada demoníaca do Doppelganger. ATK +248 | ASPD +18%, STR +6, AGI +6, ATK +10%.",
      "desc_en": "Doppelganger demon blade. ATK +248 | ASPD +18%, STR +6, AGI +6, ATK +10%.",
      "custom": true
    },
    "Jairo_Bapho_Armor": {
      "id": 40026,
      "aegis": "Jairo_Bapho_Armor",
      "name": "Labyrinth Abyssal Plate",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "relic",
      "slots": 1,
      "eqlv": 90,
      "jobs": [
        "Knight",
        "Crusader",
        "Blacksmith",
        "Alchemist",
        "Monk",
        "Assassin",
        "Rogue",
        "Hunter",
        "Bard",
        "Dancer",
        "Wizard",
        "Sage",
        "Priest"
      ],
      "desc_pt": "Armadura suprema do Santuário (Fase 1). DEF +95 | Todos Atributos +3, HP +1200, SP +180, ATK/MATK +8%.",
      "desc_en": "Phase 1 Sanctuary supreme armor. DEF +95 | All Stats +3, HP +1200, SP +180, ATK/MATK +8%.",
      "custom": true
    },
    "Jairo_DarkLord_Signet": {
      "id": 40027,
      "aegis": "Jairo_DarkLord_Signet",
      "name": "Abyssal Crown Ring",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "relic",
      "slots": 1,
      "eqlv": 92,
      "jobs": [
        "All"
      ],
      "desc_pt": "Selo do Dark Lord. INT +6, DEX +5, Conjuração Variável -15%, Pós-conjuração -10%.",
      "desc_en": "Dark Lord signet. INT +6, DEX +5, Variable Cast -15%, After-cast Delay -10%.",
      "custom": true
    },
    "Jairo_Bapho_Horns_Crown": {
      "id": 40028,
      "aegis": "Jairo_Bapho_Horns_Crown",
      "name": "Crown of Prontera Frontier",
      "type": "Armor",
      "subtype": "Armor",
      "tier": "relic",
      "slots": 1,
      "eqlv": 94,
      "jobs": [
        "All"
      ],
      "desc_pt": "Coroa máxima da Fase 1 (Baphomet). Todos Atributos +4, CRIT +10, HIT +20, Dano contra Boss +12%.",
      "desc_en": "Phase 1 apex crown (Baphomet). All Stats +4, CRIT +10, HIT +20, +12% Boss damage.",
      "custom": true
    },
    "Jairo_Poring_Card": {
      "id": 40041,
      "aegis": "Jairo_Poring_Card",
      "name": "JaiRO Poring Card",
      "type": "Card",
      "subtype": "Armor",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Armadura] MaxHP +300, LUK +4, FLEE +6.",
      "desc_en": "[Armor] MaxHP +300, LUK +4, FLEE +6.",
      "custom": true
    },
    "Jairo_Rocker_Card": {
      "id": 40042,
      "aegis": "Jairo_Rocker_Card",
      "name": "JaiRO Rocker Card",
      "type": "Card",
      "subtype": "Accessory",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Acessório] DEX +4, ATK +18.",
      "desc_en": "[Accessory] DEX +4, ATK +18.",
      "custom": true
    },
    "Jairo_Spore_Card": {
      "id": 40043,
      "aegis": "Jairo_Spore_Card",
      "name": "JaiRO Spore Card",
      "type": "Card",
      "subtype": "Headgear",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Topo/Meio/Baixo] INT +4, MaxSP +120.",
      "desc_en": "[Headgear] INT +4, MaxSP +120.",
      "custom": true
    },
    "Jairo_Pecopeco_Card": {
      "id": 40044,
      "aegis": "Jairo_Pecopeco_Card",
      "name": "JaiRO Peco Peco Card",
      "type": "Card",
      "subtype": "Armor",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Armadura] MaxHP +12%, VIT +3.",
      "desc_en": "[Armor] MaxHP +12%, VIT +3.",
      "custom": true
    },
    "Jairo_Hydra_Card": {
      "id": 40045,
      "aegis": "Jairo_Hydra_Card",
      "name": "JaiRO Hydra Card",
      "type": "Card",
      "subtype": "Weapon",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Arma] Dano físico contra Humanoide +22%.",
      "desc_en": "[Weapon] +22% physical damage vs DemiHuman.",
      "custom": true
    },
    "Jairo_Marc_Card": {
      "id": 40046,
      "aegis": "Jairo_Marc_Card",
      "name": "JaiRO Marc Card",
      "type": "Card",
      "subtype": "Armor",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Armadura] Imune a Congelamento, Resistência Água +10%.",
      "desc_en": "[Armor] Immunity to Freeze, Water Resist +10%.",
      "custom": true
    },
    "Jairo_SkelWorker_Card": {
      "id": 40047,
      "aegis": "Jairo_SkelWorker_Card",
      "name": "JaiRO Skel Worker Card",
      "type": "Card",
      "subtype": "Weapon",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Arma] Dano contra Tamanho Médio +18%, ATK +15.",
      "desc_en": "[Weapon] +18% damage vs Medium size, ATK +15.",
      "custom": true
    },
    "Jairo_Gtb_Card": {
      "id": 40048,
      "aegis": "Jairo_Gtb_Card",
      "name": "JaiRO Golden Bug Card",
      "type": "Card",
      "subtype": "Shield",
      "tier": "card_mvp",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Escudo - MVP] MDEF +25, MaxHP +10%, MaxSP +10% (rebalanceada para PvE/Grupo).",
      "desc_en": "[Shield - MVP] MDEF +25, MaxHP +10%, MaxSP +10% (rebalanced for PvE).",
      "custom": true
    },
    "Jairo_Wolf_Card": {
      "id": 40049,
      "aegis": "Jairo_Wolf_Card",
      "name": "JaiRO Wolf Card",
      "type": "Card",
      "subtype": "Weapon",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Arma] ATK +25, CRIT +5.",
      "desc_en": "[Weapon] ATK +25, CRIT +5.",
      "custom": true
    },
    "Jairo_Goblin_Card": {
      "id": 40050,
      "aegis": "Jairo_Goblin_Card",
      "name": "JaiRO Goblin Card",
      "type": "Card",
      "subtype": "Weapon",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Arma] Dano contra Bruto +22%.",
      "desc_en": "[Weapon] +22% damage vs Brute.",
      "custom": true
    },
    "Jairo_Marin_Card": {
      "id": 40051,
      "aegis": "Jairo_Marin_Card",
      "name": "JaiRO Marin Card",
      "type": "Card",
      "subtype": "Accessory",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Acessório] MATK +5%, INT +3.",
      "desc_en": "[Accessory] MATK +5%, INT +3.",
      "custom": true
    },
    "Jairo_Hode_Card": {
      "id": 40052,
      "aegis": "Jairo_Hode_Card",
      "name": "JaiRO Hode Card",
      "type": "Card",
      "subtype": "Garment",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Capa] Resistência Terra +30%, FLEE +12.",
      "desc_en": "[Garment] Earth Resist +30%, FLEE +12.",
      "custom": true
    },
    "Jairo_HighOrc_Card": {
      "id": 40053,
      "aegis": "Jairo_HighOrc_Card",
      "name": "JaiRO High Orc Card",
      "type": "Card",
      "subtype": "Shield",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Escudo] Reflete 10% do dano físico corpo-a-corpo, DEF +25.",
      "desc_en": "[Shield] Reflects 10% melee damage, DEF +25.",
      "custom": true
    },
    "Jairo_Mantis_Card": {
      "id": 40054,
      "aegis": "Jairo_Mantis_Card",
      "name": "JaiRO Mantis Card",
      "type": "Card",
      "subtype": "Accessory",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Acessório] STR +5, ATK +12.",
      "desc_en": "[Accessory] STR +5, ATK +12.",
      "custom": true
    },
    "Jairo_Kobold_Card": {
      "id": 40055,
      "aegis": "Jairo_Kobold_Card",
      "name": "JaiRO Kobold Card",
      "type": "Card",
      "subtype": "Accessory",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Acessório] CRIT +8, STR +3.",
      "desc_en": "[Accessory] CRIT +8, STR +3.",
      "custom": true
    },
    "Jairo_Raydric_Card": {
      "id": 40056,
      "aegis": "Jairo_Raydric_Card",
      "name": "JaiRO Raydric Card",
      "type": "Card",
      "subtype": "Garment",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Capa] Resistência Neutro +22%, DEF +15.",
      "desc_en": "[Garment] Neutral Resist +22%, DEF +15.",
      "custom": true
    },
    "Jairo_EvilDruid_Card": {
      "id": 40057,
      "aegis": "Jairo_EvilDruid_Card",
      "name": "JaiRO Evil Druid Card",
      "type": "Card",
      "subtype": "Armor",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Armadura] Encanta armadura com Morto-Vivo, INT +3, MDEF +10.",
      "desc_en": "[Armor] Enchants armor with Undead, INT +3, MDEF +10.",
      "custom": true
    },
    "Jairo_Whisper_Card": {
      "id": 40058,
      "aegis": "Jairo_Whisper_Card",
      "name": "JaiRO Whisper Card",
      "type": "Card",
      "subtype": "Garment",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Capa] FLEE +25, AGI +2.",
      "desc_en": "[Garment] FLEE +25, AGI +2.",
      "custom": true
    },
    "Jairo_Alice_Card": {
      "id": 40059,
      "aegis": "Jairo_Alice_Card",
      "name": "JaiRO Alice Card",
      "type": "Card",
      "subtype": "Shield",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Escudo] -35% dano de Boss, +15% dano recebido de monstros comuns.",
      "desc_en": "[Shield] -35% Boss damage, +15% damage taken from normal mobs.",
      "custom": true
    },
    "Jairo_Abysmal_Card": {
      "id": 40060,
      "aegis": "Jairo_Abysmal_Card",
      "name": "JaiRO Abysmal Card",
      "type": "Card",
      "subtype": "Weapon",
      "tier": "card",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Arma] Dano físico contra monstros Boss +25%.",
      "desc_en": "[Weapon] +25% physical damage vs Boss monsters.",
      "custom": true
    },
    "Jairo_Baphomet_Card": {
      "id": 40061,
      "aegis": "Jairo_Baphomet_Card",
      "name": "JaiRO Baphomet Card",
      "type": "Card",
      "subtype": "Weapon",
      "tier": "card_mvp",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Arma - MVP] HIT +15, ATK +10%, Ataques físicos causam dano em área 3x3.",
      "desc_en": "[Weapon - MVP] HIT +15, ATK +10%, Melee hits deal 3x3 splash damage.",
      "custom": true
    },
    "Jairo_DarkLord_Card": {
      "id": 40062,
      "aegis": "Jairo_DarkLord_Card",
      "name": "JaiRO Dark Lord Card",
      "type": "Card",
      "subtype": "Shoes",
      "tier": "card_mvp",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "[Botas - MVP] MATK +10%, Cast Variável -10%, 10% chance de Chuva de Meteoros Lv.5 ao sofrer dano.",
      "desc_en": "[Shoes - MVP] MATK +10%, Variable Cast -10%, 10% chance to auto-cast Meteor Storm Lv.5 when hit.",
      "custom": true
    },
    "Red_Potion": {
      "id": 501,
      "aegis": "Red_Potion",
      "name": "Red Potion",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Red Potion) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Red Potion) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Orange_Potion": {
      "id": 502,
      "aegis": "Orange_Potion",
      "name": "Orange Potion",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Orange Potion) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Orange Potion) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Yellow_Potion": {
      "id": 503,
      "aegis": "Yellow_Potion",
      "name": "Yellow Potion",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Yellow Potion) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Yellow Potion) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "White_Potion": {
      "id": 504,
      "aegis": "White_Potion",
      "name": "White Potion",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Blue_Potion": {
      "id": 505,
      "aegis": "Blue_Potion",
      "name": "Blue Potion",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Green_Potion": {
      "id": 506,
      "aegis": "Green_Potion",
      "name": "Green Potion",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Green Potion) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Green Potion) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Panacea": {
      "id": 525,
      "aegis": "Panacea",
      "name": "Panacea",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Panacea) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Panacea) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Royal_Jelly": {
      "id": 526,
      "aegis": "Royal_Jelly",
      "name": "Royal Jelly",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Royal Jelly) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Royal Jelly) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Wing_Of_Fly": {
      "id": 601,
      "aegis": "Wing_Of_Fly",
      "name": "Fly Wing",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Fly Wing) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Fly Wing) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Wing_Of_Butterfly": {
      "id": 602,
      "aegis": "Wing_Of_Butterfly",
      "name": "Butterfly Wing",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Butterfly Wing) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Butterfly Wing) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Old_Blue_Box": {
      "id": 603,
      "aegis": "Old_Blue_Box",
      "name": "Old Blue Box",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Old Blue Box) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Old Blue Box) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Yggdrasilberry": {
      "id": 607,
      "aegis": "Yggdrasilberry",
      "name": "Yggdrasil Berry",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Seed_Of_Yggdrasil": {
      "id": 608,
      "aegis": "Seed_Of_Yggdrasil",
      "name": "Yggdrasil Seed",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Yggdrasil Seed) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Yggdrasil Seed) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Old_Card_Album": {
      "id": 616,
      "aegis": "Old_Card_Album",
      "name": "Old Card Album",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Old Card Album) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Old Card Album) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Old_Violet_Box": {
      "id": 617,
      "aegis": "Old_Violet_Box",
      "name": "Old Purple Box",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Old Purple Box) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Old Purple Box) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Emperium": {
      "id": 714,
      "aegis": "Emperium",
      "name": "Emperium",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Emperium) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Emperium) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Oridecon_Stone": {
      "id": 756,
      "aegis": "Oridecon_Stone",
      "name": "Rough Oridecon",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Rough Oridecon) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Rough Oridecon) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Elunium_Stone": {
      "id": 757,
      "aegis": "Elunium_Stone",
      "name": "Rough Elunium",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Rough Elunium) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Rough Elunium) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Gold": {
      "id": 969,
      "aegis": "Gold",
      "name": "Gold",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Gold) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Gold) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Oridecon": {
      "id": 984,
      "aegis": "Oridecon",
      "name": "Oridecon",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Elunium": {
      "id": 985,
      "aegis": "Elunium",
      "name": "Elunium",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Steel": {
      "id": 999,
      "aegis": "Steel",
      "name": "Steel",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Steel) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Steel) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Phracon": {
      "id": 1010,
      "aegis": "Phracon",
      "name": "Phracon",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Phracon) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Phracon) with rebalanced JaiRO drop rate.",
      "custom": false
    },
    "Emveretarcon": {
      "id": 1011,
      "aegis": "Emveretarcon",
      "name": "Emveretarcon",
      "type": "Material/Consumable",
      "subtype": "Vanilla",
      "tier": "material",
      "slots": 0,
      "eqlv": 1,
      "jobs": [
        "All"
      ],
      "desc_pt": "Item oficial (Emveretarcon) com drop reestruturado no JaiRO.",
      "desc_en": "Official item (Emveretarcon) with rebalanced JaiRO drop rate.",
      "custom": false
    }
  },
  "maps": [
    {
      "id": "prontera",
      "name": "Prontera (Capital)",
      "zone": "hub",
      "row": 2,
      "col": 2,
      "min_lv": 1,
      "max_lv": 99,
      "is_hub": true,
      "neighbors": [
        "prt_fild01",
        "prt_fild05",
        "prt_fild06",
        "prt_fild08",
        "prt_sewb1"
      ],
      "locked_gates": [],
      "biome_pt": "Cidadela Real & Mercado Central",
      "biome_en": "Royal Citadel & Central Market",
      "intro_pt": "Única capital ativa na Fase 1. Concentra os 60 mercadores autônomos, a Guilda de Aventureiros, o Portal do Esgoto e o Controlador de Fases (teto 99/50).",
      "intro_en": "Only active capital in Phase 1. Houses 60 autonomous bot vendors, Adventurer Guilds, Culvert entrance and the Phase Controller (99/50 cap).",
      "mobs": []
    },
    {
      "id": "izlude",
      "name": "Izlude (Porto Satélite)",
      "zone": "hub",
      "row": 3,
      "col": 3,
      "min_lv": 1,
      "max_lv": 50,
      "is_hub": true,
      "neighbors": [
        "prt_fild08"
      ],
      "locked_gates": [
        "Navios para Alberta/Byalan (Fase 2)",
        "Aeroplano de Juno (Fase 3)"
      ],
      "biome_pt": "Porto Militar & Arena de Treino",
      "biome_en": "Military Port & Training Arena",
      "intro_pt": "Porto satélite de Prontera para espadachins e iniciantes. Rotas marítimas para outros continentes permanecem fechadas pela Marinha Real durante a Fase 1.",
      "intro_en": "Prontera's satellite port for Swordsmen and beginners. Sea routes remain sealed by the Royal Navy during Phase 1.",
      "mobs": []
    },
    {
      "id": "prt_fild08",
      "name": "Campo Sul de Prontera",
      "zone": "starter",
      "row": 3,
      "col": 2,
      "min_lv": 1,
      "max_lv": 12,
      "is_hub": false,
      "neighbors": [
        "prontera",
        "izlude",
        "prt_fild07"
      ],
      "locked_gates": [
        "Deserto de Sograt (moc_fild01) — Fase 2"
      ],
      "biome_pt": "Planície dos Aprendizes",
      "biome_en": "Novice Plains",
      "intro_pt": "Com o fechamento das fronteiras do sul, slimes elementais e Lunatics migraram em massa para os portões de Prontera. Mapa ideal para sair do Lv. 1 ao 12 já dropando seus primeiros equips e cartas.",
      "intro_en": "With southern borders closed, elemental slimes and Lunatics swarmed Prontera's south gate. Ideal Lv. 1–12 warm-up with early gear & card drops.",
      "mobs": [
        {
          "id": 1002,
          "aegis": "PORING",
          "name": "Poring",
          "lv": 2,
          "hp": 80,
          "count": 45,
          "race": "Plant",
          "ele": "Water 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Red_Potion",
              "rate_raw": 3500,
              "rate_pct": "35.00%",
              "item": {
                "id": 501,
                "aegis": "Red_Potion",
                "name": "Red Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Red Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Red Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Sprout_Blade",
              "rate_raw": 850,
              "rate_pct": "8.50%",
              "item": {
                "id": 40001,
                "aegis": "Jairo_Sprout_Blade",
                "name": "Sprout Saber",
                "type": "Weapon",
                "subtype": "1hSword",
                "tier": "common",
                "slots": 2,
                "eqlv": 8,
                "jobs": [
                  "Novice",
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Thief",
                  "Assassin",
                  "Rogue",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist"
                ],
                "desc_pt": "Espada leve forjada pela guarda inicial. ATK +68 | STR +2, ASPD +5%, Dano contra Planta +15%.",
                "desc_en": "Light blade forged for frontier recruits. ATK +68 | STR +2, ASPD +5%, +15% damage vs Plant.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Poring_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40041,
                "aegis": "Jairo_Poring_Card",
                "name": "JaiRO Poring Card",
                "type": "Card",
                "subtype": "Armor",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Armadura] MaxHP +300, LUK +4, FLEE +6.",
                "desc_en": "[Armor] MaxHP +300, LUK +4, FLEE +6.",
                "custom": true
              }
            }
          ],
          "base_exp": 138,
          "job_exp": 99
        },
        {
          "id": 1113,
          "aegis": "DROPS",
          "name": "Drops",
          "lv": 4,
          "hp": 110,
          "count": 30,
          "race": "Plant",
          "ele": "Fire 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Red_Potion",
              "rate_raw": 3000,
              "rate_pct": "30.00%",
              "item": {
                "id": 501,
                "aegis": "Red_Potion",
                "name": "Red Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Red Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Red Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Recruit_Mail",
              "rate_raw": 800,
              "rate_pct": "8.00%",
              "item": {
                "id": 40004,
                "aegis": "Jairo_Recruit_Mail",
                "name": "Prontera Militia Coat",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "common",
                "slots": 1,
                "eqlv": 10,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Casaco reforçado da milícia de Prontera. DEF +38 | MaxHP +250, VIT +2, DEF +10.",
                "desc_en": "Reinforced Prontera militia coat. DEF +38 | MaxHP +250, VIT +2, DEF +10.",
                "custom": true
              }
            },
            {
              "aegis": "Phracon",
              "rate_raw": 1200,
              "rate_pct": "12.00%",
              "item": {
                "id": 1010,
                "aegis": "Phracon",
                "name": "Phracon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Phracon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Phracon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 436,
          "job_exp": 313
        },
        {
          "id": 1063,
          "aegis": "LUNATIC",
          "name": "Lunatic",
          "lv": 6,
          "hp": 150,
          "count": 35,
          "race": "Brute",
          "ele": "Neutral 3",
          "boss": false,
          "drops": [
            {
              "aegis": "Wing_Of_Fly",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 601,
                "aegis": "Wing_Of_Fly",
                "name": "Fly Wing",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Fly Wing) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Fly Wing) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Meadow_Boots",
              "rate_raw": 850,
              "rate_pct": "8.50%",
              "item": {
                "id": 40005,
                "aegis": "Jairo_Meadow_Boots",
                "name": "Meadow Runner Boots",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "common",
                "slots": 1,
                "eqlv": 12,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Botas leves para patrulhar planícies. AGI +2, Velocidade de Movimento +10%, Esquiva +8.",
                "desc_en": "Light patrol boots. AGI +2, Move Speed +10%, FLEE +8.",
                "custom": true
              }
            },
            {
              "aegis": "Emveretarcon",
              "rate_raw": 750,
              "rate_pct": "7.50%",
              "item": {
                "id": 1011,
                "aegis": "Emveretarcon",
                "name": "Emveretarcon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Emveretarcon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Emveretarcon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 900,
          "job_exp": 648
        },
        {
          "id": 1007,
          "aegis": "FABRE",
          "name": "Fabre",
          "lv": 9,
          "hp": 210,
          "count": 30,
          "race": "Insect",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Orange_Potion",
              "rate_raw": 2000,
              "rate_pct": "20.00%",
              "item": {
                "id": 502,
                "aegis": "Orange_Potion",
                "name": "Orange Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Orange Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Orange Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Dew_Wand",
              "rate_raw": 850,
              "rate_pct": "8.50%",
              "item": {
                "id": 40003,
                "aegis": "Jairo_Dew_Wand",
                "name": "Morning Dew Wand",
                "type": "Weapon",
                "subtype": "Staff",
                "tier": "common",
                "slots": 2,
                "eqlv": 10,
                "jobs": [
                  "Mage",
                  "Wizard",
                  "Sage",
                  "Acolyte",
                  "Priest",
                  "Novice"
                ],
                "desc_pt": "Cajado cristalino do orvalho. MATK +85 | INT +3, MaxSP +80, Conjuração Variável -6%.",
                "desc_en": "Crystalline dew staff. MATK +85 | INT +3, MaxSP +80, Variable Cast -6%.",
                "custom": true
              }
            },
            {
              "aegis": "Phracon",
              "rate_raw": 1400,
              "rate_pct": "14.00%",
              "item": {
                "id": 1010,
                "aegis": "Phracon",
                "name": "Phracon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Phracon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Phracon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 1915,
          "job_exp": 1378
        },
        {
          "id": 1090,
          "aegis": "MASTERING",
          "name": "Mastering",
          "lv": 14,
          "hp": 2600,
          "count": 1,
          "race": "Plant",
          "ele": "Water 1",
          "boss": true,
          "drops": [
            {
              "aegis": "Old_Blue_Box",
              "rate_raw": 3500,
              "rate_pct": "35.00%",
              "item": {
                "id": 603,
                "aegis": "Old_Blue_Box",
                "name": "Old Blue Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Blue Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Blue Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Poring_Card",
              "rate_raw": 150,
              "rate_pct": "1.50%",
              "item": {
                "id": 40041,
                "aegis": "Jairo_Poring_Card",
                "name": "JaiRO Poring Card",
                "type": "Card",
                "subtype": "Armor",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Armadura] MaxHP +300, LUK +4, FLEE +6.",
                "desc_en": "[Armor] MaxHP +300, LUK +4, FLEE +6.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Recruit_Mail",
              "rate_raw": 2500,
              "rate_pct": "25.00%",
              "item": {
                "id": 40004,
                "aegis": "Jairo_Recruit_Mail",
                "name": "Prontera Militia Coat",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "common",
                "slots": 1,
                "eqlv": 10,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Casaco reforçado da milícia de Prontera. DEF +38 | MaxHP +250, VIT +2, DEF +10.",
                "desc_en": "Reinforced Prontera militia coat. DEF +38 | MaxHP +250, VIT +2, DEF +10.",
                "custom": true
              }
            }
          ],
          "base_exp": 53676,
          "job_exp": 32200
        }
      ]
    },
    {
      "id": "prt_fild06",
      "name": "Campo Leste de Prontera",
      "zone": "starter",
      "row": 2,
      "col": 3,
      "min_lv": 10,
      "max_lv": 20,
      "is_hub": false,
      "neighbors": [
        "prontera",
        "prt_fild02"
      ],
      "locked_gates": [],
      "biome_pt": "Pomares & Colinas Ventosas",
      "biome_en": "Orchards & Windy Hills",
      "intro_pt": "Ventos vindos do leste trouxeram Condors, Hornets e o maestro Vocal para os antigos pomares. Excelente ponto para Arqueiros e Magos pegarem a 1ª classe e o primeiro set de velocidade.",
      "intro_en": "Eastern winds drew Condors, Hornets and Vocal into the orchards. Prime spot for Archers and Mages chasing speed gear.",
      "mobs": [
        {
          "id": 1049,
          "aegis": "PICKY",
          "name": "Picky",
          "lv": 11,
          "hp": 240,
          "count": 30,
          "race": "Brute",
          "ele": "Fire 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Orange_Potion",
              "rate_raw": 2400,
              "rate_pct": "24.00%",
              "item": {
                "id": 502,
                "aegis": "Orange_Potion",
                "name": "Orange Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Orange Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Orange Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Feather_Bow",
              "rate_raw": 900,
              "rate_pct": "9.00%",
              "item": {
                "id": 40002,
                "aegis": "Jairo_Feather_Bow",
                "name": "Gale Feather Bow",
                "type": "Weapon",
                "subtype": "Bow",
                "tier": "common",
                "slots": 2,
                "eqlv": 10,
                "jobs": [
                  "Archer",
                  "Hunter",
                  "Bard",
                  "Dancer",
                  "Rogue"
                ],
                "desc_pt": "Arco de madeira flexível das colinas leste. ATK +72 | DEX +3, HIT +10, Dano vs Vento +10%.",
                "desc_en": "Supple eastern hill bow. ATK +72 | DEX +3, HIT +10, +10% damage vs Wind.",
                "custom": true
              }
            },
            {
              "aegis": "Phracon",
              "rate_raw": 1500,
              "rate_pct": "15.00%",
              "item": {
                "id": 1010,
                "aegis": "Phracon",
                "name": "Phracon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Phracon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Phracon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 2807,
          "job_exp": 2021
        },
        {
          "id": 1009,
          "aegis": "CONDOR",
          "name": "Condor",
          "lv": 14,
          "hp": 320,
          "count": 30,
          "race": "Brute",
          "ele": "Wind 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Wing_Of_Fly",
              "rate_raw": 2500,
              "rate_pct": "25.00%",
              "item": {
                "id": 601,
                "aegis": "Wing_Of_Fly",
                "name": "Fly Wing",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Fly Wing) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Fly Wing) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Meadow_Boots",
              "rate_raw": 950,
              "rate_pct": "9.50%",
              "item": {
                "id": 40005,
                "aegis": "Jairo_Meadow_Boots",
                "name": "Meadow Runner Boots",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "common",
                "slots": 1,
                "eqlv": 12,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Botas leves para patrulhar planícies. AGI +2, Velocidade de Movimento +10%, Esquiva +8.",
                "desc_en": "Light patrol boots. AGI +2, Move Speed +10%, FLEE +8.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Feather_Bow",
              "rate_raw": 650,
              "rate_pct": "6.50%",
              "item": {
                "id": 40002,
                "aegis": "Jairo_Feather_Bow",
                "name": "Gale Feather Bow",
                "type": "Weapon",
                "subtype": "Bow",
                "tier": "common",
                "slots": 2,
                "eqlv": 10,
                "jobs": [
                  "Archer",
                  "Hunter",
                  "Bard",
                  "Dancer",
                  "Rogue"
                ],
                "desc_pt": "Arco de madeira flexível das colinas leste. ATK +72 | DEX +3, HIT +10, Dano vs Vento +10%.",
                "desc_en": "Supple eastern hill bow. ATK +72 | DEX +3, HIT +10, +10% damage vs Wind.",
                "custom": true
              }
            }
          ],
          "base_exp": 4473,
          "job_exp": 3220
        },
        {
          "id": 1004,
          "aegis": "HORNET",
          "name": "Hornet",
          "lv": 16,
          "hp": 380,
          "count": 30,
          "race": "Insect",
          "ele": "Wind 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Green_Potion",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 506,
                "aegis": "Green_Potion",
                "name": "Green Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Green Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Green Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Dew_Wand",
              "rate_raw": 800,
              "rate_pct": "8.00%",
              "item": {
                "id": 40003,
                "aegis": "Jairo_Dew_Wand",
                "name": "Morning Dew Wand",
                "type": "Weapon",
                "subtype": "Staff",
                "tier": "common",
                "slots": 2,
                "eqlv": 10,
                "jobs": [
                  "Mage",
                  "Wizard",
                  "Sage",
                  "Acolyte",
                  "Priest",
                  "Novice"
                ],
                "desc_pt": "Cajado cristalino do orvalho. MATK +85 | INT +3, MaxSP +80, Conjuração Variável -6%.",
                "desc_en": "Crystalline dew staff. MATK +85 | INT +3, MaxSP +80, Variable Cast -6%.",
                "custom": true
              }
            },
            {
              "aegis": "Oridecon_Stone",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 756,
                "aegis": "Oridecon_Stone",
                "name": "Rough Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Rough Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Rough Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 5805,
          "job_exp": 4179
        },
        {
          "id": 1052,
          "aegis": "ROCKER",
          "name": "Rocker",
          "lv": 18,
          "hp": 460,
          "count": 25,
          "race": "Insect",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Yellow_Potion",
              "rate_raw": 1400,
              "rate_pct": "14.00%",
              "item": {
                "id": 503,
                "aegis": "Yellow_Potion",
                "name": "Yellow Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yellow Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yellow Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Sprout_Blade",
              "rate_raw": 950,
              "rate_pct": "9.50%",
              "item": {
                "id": 40001,
                "aegis": "Jairo_Sprout_Blade",
                "name": "Sprout Saber",
                "type": "Weapon",
                "subtype": "1hSword",
                "tier": "common",
                "slots": 2,
                "eqlv": 8,
                "jobs": [
                  "Novice",
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Thief",
                  "Assassin",
                  "Rogue",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist"
                ],
                "desc_pt": "Espada leve forjada pela guarda inicial. ATK +68 | STR +2, ASPD +5%, Dano contra Planta +15%.",
                "desc_en": "Light blade forged for frontier recruits. ATK +68 | STR +2, ASPD +5%, +15% damage vs Plant.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Rocker_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40042,
                "aegis": "Jairo_Rocker_Card",
                "name": "JaiRO Rocker Card",
                "type": "Card",
                "subtype": "Accessory",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Acessório] DEX +4, ATK +18.",
                "desc_en": "[Accessory] DEX +4, ATK +18.",
                "custom": true
              }
            }
          ],
          "base_exp": 7314,
          "job_exp": 5266
        },
        {
          "id": 1088,
          "aegis": "VOCAL",
          "name": "Vocal",
          "lv": 22,
          "hp": 4200,
          "count": 1,
          "race": "Insect",
          "ele": "Earth 1",
          "boss": true,
          "drops": [
            {
              "aegis": "Jairo_Vocal_Ribbon",
              "rate_raw": 2800,
              "rate_pct": "28.00%",
              "item": {
                "id": 40007,
                "aegis": "Jairo_Vocal_Ribbon",
                "name": "Maestro Field Beret",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 18,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Boina de batedor Dropada pelo Vocal. DEX +3, AGI +2, ASPD +6%.",
                "desc_en": "Scout beret dropped by Vocal. DEX +3, AGI +2, ASPD +6%.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Blue_Box",
              "rate_raw": 4000,
              "rate_pct": "40.00%",
              "item": {
                "id": 603,
                "aegis": "Old_Blue_Box",
                "name": "Old Blue Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Blue Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Blue Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Rocker_Card",
              "rate_raw": 150,
              "rate_pct": "1.50%",
              "item": {
                "id": 40042,
                "aegis": "Jairo_Rocker_Card",
                "name": "JaiRO Rocker Card",
                "type": "Card",
                "subtype": "Accessory",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Acessório] DEX +4, ATK +18.",
                "desc_en": "[Accessory] DEX +4, ATK +18.",
                "custom": true
              }
            }
          ],
          "base_exp": 130464,
          "job_exp": 78270
        }
      ]
    },
    {
      "id": "prt_fild05",
      "name": "Campo Oeste de Prontera",
      "zone": "starter",
      "row": 2,
      "col": 1,
      "min_lv": 15,
      "max_lv": 26,
      "is_hub": false,
      "neighbors": [
        "prontera",
        "prt_fild04",
        "prt_fild07"
      ],
      "locked_gates": [
        "Monte Mjolnir Sul (mjolnir_09) — Fase 2"
      ],
      "biome_pt": "Bosques Úmidos do Aqueduto",
      "biome_en": "Damp Aqueduct Woods",
      "intro_pt": "A umidade perto do aqueduto atraiu Spores, Ambernite de casca dura e o Mini-Boss Eclipse. Dropa o escudo inicial contra Insetos/Brutos e cartas mágicas.",
      "intro_en": "Aqueduct humidity drew Spores, hard-shelled Ambernite and Mini-Boss Eclipse. Drops the starter Insect/Brute buckler and magic cards.",
      "mobs": [
        {
          "id": 1014,
          "aegis": "SPORE",
          "name": "Spore",
          "lv": 17,
          "hp": 420,
          "count": 35,
          "race": "Plant",
          "ele": "Water 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Blue_Potion",
              "rate_raw": 950,
              "rate_pct": "9.50%",
              "item": {
                "id": 505,
                "aegis": "Blue_Potion",
                "name": "Blue Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Dew_Wand",
              "rate_raw": 950,
              "rate_pct": "9.50%",
              "item": {
                "id": 40003,
                "aegis": "Jairo_Dew_Wand",
                "name": "Morning Dew Wand",
                "type": "Weapon",
                "subtype": "Staff",
                "tier": "common",
                "slots": 2,
                "eqlv": 10,
                "jobs": [
                  "Mage",
                  "Wizard",
                  "Sage",
                  "Acolyte",
                  "Priest",
                  "Novice"
                ],
                "desc_pt": "Cajado cristalino do orvalho. MATK +85 | INT +3, MaxSP +80, Conjuração Variável -6%.",
                "desc_en": "Crystalline dew staff. MATK +85 | INT +3, MaxSP +80, Variable Cast -6%.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Spore_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40043,
                "aegis": "Jairo_Spore_Card",
                "name": "JaiRO Spore Card",
                "type": "Card",
                "subtype": "Headgear",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Topo/Meio/Baixo] INT +4, MaxSP +120.",
                "desc_en": "[Headgear] INT +4, MaxSP +120.",
                "custom": true
              }
            }
          ],
          "base_exp": 6537,
          "job_exp": 4706
        },
        {
          "id": 1094,
          "aegis": "AMBERNITE",
          "name": "Ambernite",
          "lv": 20,
          "hp": 580,
          "count": 25,
          "race": "Insect",
          "ele": "Water 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Amber_Buckler",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 40006,
                "aegis": "Jairo_Amber_Buckler",
                "name": "Amber Shell Buckler",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 18,
                "jobs": [
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Acolyte",
                  "Priest",
                  "Monk",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist",
                  "Thief",
                  "Rogue",
                  "Mage",
                  "Sage"
                ],
                "desc_pt": "Escudo de carapaça de âmbar. DEF +42 | VIT +2, -15% dano de Inseto, -10% dano de Bruto.",
                "desc_en": "Amber shell buckler. DEF +42 | VIT +2, -15% Insect dmg, -10% Brute dmg.",
                "custom": true
              }
            },
            {
              "aegis": "Elunium_Stone",
              "rate_raw": 550,
              "rate_pct": "5.50%",
              "item": {
                "id": 757,
                "aegis": "Elunium_Stone",
                "name": "Rough Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Rough Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Rough Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Yellow_Potion",
              "rate_raw": 1600,
              "rate_pct": "16.00%",
              "item": {
                "id": 503,
                "aegis": "Yellow_Potion",
                "name": "Yellow Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yellow Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yellow Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 9003,
          "job_exp": 6482
        },
        {
          "id": 1018,
          "aegis": "CREAMY",
          "name": "Creamy",
          "lv": 22,
          "hp": 640,
          "count": 25,
          "race": "Insect",
          "ele": "Wind 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Wing_Of_Butterfly",
              "rate_raw": 1800,
              "rate_pct": "18.00%",
              "item": {
                "id": 602,
                "aegis": "Wing_Of_Butterfly",
                "name": "Butterfly Wing",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Butterfly Wing) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Butterfly Wing) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Wing_Of_Fly",
              "rate_raw": 3000,
              "rate_pct": "30.00%",
              "item": {
                "id": 601,
                "aegis": "Wing_Of_Fly",
                "name": "Fly Wing",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Fly Wing) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Fly Wing) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Recruit_Mail",
              "rate_raw": 850,
              "rate_pct": "8.50%",
              "item": {
                "id": 40004,
                "aegis": "Jairo_Recruit_Mail",
                "name": "Prontera Militia Coat",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "common",
                "slots": 1,
                "eqlv": 10,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Casaco reforçado da milícia de Prontera. DEF +38 | MaxHP +250, VIT +2, DEF +10.",
                "desc_en": "Reinforced Prontera militia coat. DEF +38 | MaxHP +250, VIT +2, DEF +10.",
                "custom": true
              }
            }
          ],
          "base_exp": 10872,
          "job_exp": 7827
        },
        {
          "id": 1167,
          "aegis": "SAVAGE_BABE",
          "name": "Savage Babe",
          "lv": 24,
          "hp": 740,
          "count": 25,
          "race": "Brute",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Yellow_Potion",
              "rate_raw": 1800,
              "rate_pct": "18.00%",
              "item": {
                "id": 503,
                "aegis": "Yellow_Potion",
                "name": "Yellow Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yellow Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yellow Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Oridecon_Stone",
              "rate_raw": 600,
              "rate_pct": "6.00%",
              "item": {
                "id": 756,
                "aegis": "Oridecon_Stone",
                "name": "Rough Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Rough Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Rough Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Meadow_Boots",
              "rate_raw": 900,
              "rate_pct": "9.00%",
              "item": {
                "id": 40005,
                "aegis": "Jairo_Meadow_Boots",
                "name": "Meadow Runner Boots",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "common",
                "slots": 1,
                "eqlv": 12,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Botas leves para patrulhar planícies. AGI +2, Velocidade de Movimento +10%, Esquiva +8.",
                "desc_en": "Light patrol boots. AGI +2, Move Speed +10%, FLEE +8.",
                "custom": true
              }
            }
          ],
          "base_exp": 12921,
          "job_exp": 9303
        },
        {
          "id": 1093,
          "aegis": "ECLIPSE",
          "name": "Eclipse",
          "lv": 26,
          "hp": 5400,
          "count": 1,
          "race": "Brute",
          "ele": "Neutral 3",
          "boss": true,
          "drops": [
            {
              "aegis": "Jairo_Eclipse_Ring",
              "rate_raw": 2500,
              "rate_pct": "25.00%",
              "item": {
                "id": 40008,
                "aegis": "Jairo_Eclipse_Ring",
                "name": "Eclipse Lunar Band",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 20,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Anel lunático do Eclipse. CRIT +6, LUK +3, ATK +4%.",
                "desc_en": "Lunar band from Eclipse. CRIT +6, LUK +3, ATK +4%.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Blue_Box",
              "rate_raw": 4500,
              "rate_pct": "45.00%",
              "item": {
                "id": 603,
                "aegis": "Old_Blue_Box",
                "name": "Old Blue Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Blue Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Blue Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Emperium",
              "rate_raw": 800,
              "rate_pct": "8.00%",
              "item": {
                "id": 714,
                "aegis": "Emperium",
                "name": "Emperium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Emperium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Emperium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 181824,
          "job_exp": 109090
        }
      ]
    },
    {
      "id": "prt_fild01",
      "name": "Estrada Norte de Prontera",
      "zone": "starter",
      "row": 1,
      "col": 2,
      "min_lv": 18,
      "max_lv": 30,
      "is_hub": false,
      "neighbors": [
        "prontera",
        "prt_fild02",
        "prt_maze01"
      ],
      "locked_gates": [
        "Montanhas Mjolnir (mjolnir_09/10) — Fase 2"
      ],
      "biome_pt": "Estrada Real da Guarda",
      "biome_en": "Royal Guard Road",
      "intro_pt": "Rota norte vigiada rumo ao Labirinto. Peco Pecos selvagens e Poison Spores servem de ponte entre o nível 18 e a mudança de 2ª classe ou descida aos Esgotos.",
      "intro_en": "Northern road toward the Labyrinth. Wild Peco Pecos and Poison Spores bridge Lv. 18–30 toward 2nd jobs or the Culverts.",
      "mobs": [
        {
          "id": 1019,
          "aegis": "PECOPECO",
          "name": "Peco Peco",
          "lv": 21,
          "hp": 680,
          "count": 30,
          "race": "Brute",
          "ele": "Fire 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Yellow_Potion",
              "rate_raw": 1800,
              "rate_pct": "18.00%",
              "item": {
                "id": 503,
                "aegis": "Yellow_Potion",
                "name": "Yellow Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yellow Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yellow Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Pecopeco_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40044,
                "aegis": "Jairo_Pecopeco_Card",
                "name": "JaiRO Peco Peco Card",
                "type": "Card",
                "subtype": "Armor",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Armadura] MaxHP +12%, VIT +3.",
                "desc_en": "[Armor] MaxHP +12%, VIT +3.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Recruit_Mail",
              "rate_raw": 1000,
              "rate_pct": "10.00%",
              "item": {
                "id": 40004,
                "aegis": "Jairo_Recruit_Mail",
                "name": "Prontera Militia Coat",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "common",
                "slots": 1,
                "eqlv": 10,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Casaco reforçado da milícia de Prontera. DEF +38 | MaxHP +250, VIT +2, DEF +10.",
                "desc_en": "Reinforced Prontera militia coat. DEF +38 | MaxHP +250, VIT +2, DEF +10.",
                "custom": true
              }
            }
          ],
          "base_exp": 9915,
          "job_exp": 7138
        },
        {
          "id": 1103,
          "aegis": "CARAMEL",
          "name": "Caramel",
          "lv": 24,
          "hp": 810,
          "count": 25,
          "race": "Brute",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Elunium_Stone",
              "rate_raw": 650,
              "rate_pct": "6.50%",
              "item": {
                "id": 757,
                "aegis": "Elunium_Stone",
                "name": "Rough Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Rough Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Rough Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Amber_Buckler",
              "rate_raw": 400,
              "rate_pct": "4.00%",
              "item": {
                "id": 40006,
                "aegis": "Jairo_Amber_Buckler",
                "name": "Amber Shell Buckler",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 18,
                "jobs": [
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Acolyte",
                  "Priest",
                  "Monk",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist",
                  "Thief",
                  "Rogue",
                  "Mage",
                  "Sage"
                ],
                "desc_pt": "Escudo de carapaça de âmbar. DEF +42 | VIT +2, -15% dano de Inseto, -10% dano de Bruto.",
                "desc_en": "Amber shell buckler. DEF +42 | VIT +2, -15% Insect dmg, -10% Brute dmg.",
                "custom": true
              }
            },
            {
              "aegis": "Royal_Jelly",
              "rate_raw": 600,
              "rate_pct": "6.00%",
              "item": {
                "id": 526,
                "aegis": "Royal_Jelly",
                "name": "Royal Jelly",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Royal Jelly) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Royal Jelly) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 12921,
          "job_exp": 9303
        },
        {
          "id": 1077,
          "aegis": "POISON_SPORE",
          "name": "Poison Spore",
          "lv": 26,
          "hp": 920,
          "count": 30,
          "race": "Plant",
          "ele": "Poison 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Panacea",
              "rate_raw": 1200,
              "rate_pct": "12.00%",
              "item": {
                "id": 525,
                "aegis": "Panacea",
                "name": "Panacea",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Panacea) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Panacea) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Blue_Potion",
              "rate_raw": 1100,
              "rate_pct": "11.00%",
              "item": {
                "id": 505,
                "aegis": "Blue_Potion",
                "name": "Blue Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Spore_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40043,
                "aegis": "Jairo_Spore_Card",
                "name": "JaiRO Spore Card",
                "type": "Card",
                "subtype": "Headgear",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Topo/Meio/Baixo] INT +4, MaxSP +120.",
                "desc_en": "[Headgear] INT +4, MaxSP +120.",
                "custom": true
              }
            }
          ],
          "base_exp": 15152,
          "job_exp": 10909
        },
        {
          "id": 1031,
          "aegis": "POPORING",
          "name": "Poporing",
          "lv": 28,
          "hp": 1050,
          "count": 25,
          "race": "Plant",
          "ele": "Poison 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Green_Potion",
              "rate_raw": 2800,
              "rate_pct": "28.00%",
              "item": {
                "id": 506,
                "aegis": "Green_Potion",
                "name": "Green Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Green Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Green Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Oridecon_Stone",
              "rate_raw": 750,
              "rate_pct": "7.50%",
              "item": {
                "id": 756,
                "aegis": "Oridecon_Stone",
                "name": "Rough Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Rough Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Rough Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Sewer_Stiletto",
              "rate_raw": 350,
              "rate_pct": "3.50%",
              "item": {
                "id": 40009,
                "aegis": "Jairo_Sewer_Stiletto",
                "name": "Culvert Fang Dagger",
                "type": "Weapon",
                "subtype": "Dagger",
                "tier": "uncommon",
                "slots": 2,
                "eqlv": 30,
                "jobs": [
                  "Thief",
                  "Assassin",
                  "Rogue",
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist",
                  "Mage",
                  "Sage"
                ],
                "desc_pt": "Adaga serrilhada para limpar os esgotos. ATK +118 | AGI +3, CRIT +8, +20% vs Inseto.",
                "desc_en": "Serrated culvert dagger. ATK +118 | AGI +3, CRIT +8, +20% vs Insect.",
                "custom": true
              }
            }
          ],
          "base_exp": 17566,
          "job_exp": 12647
        },
        {
          "id": 1091,
          "aegis": "DRAGON_FLY",
          "name": "Dragon Fly",
          "lv": 30,
          "hp": 6800,
          "count": 1,
          "race": "Insect",
          "ele": "Wind 1",
          "boss": true,
          "drops": [
            {
              "aegis": "Old_Blue_Box",
              "rate_raw": 5000,
              "rate_pct": "50.00%",
              "item": {
                "id": 603,
                "aegis": "Old_Blue_Box",
                "name": "Old Blue Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Blue Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Blue Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Eclipse_Ring",
              "rate_raw": 2000,
              "rate_pct": "20.00%",
              "item": {
                "id": 40008,
                "aegis": "Jairo_Eclipse_Ring",
                "name": "Eclipse Lunar Band",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 20,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Anel lunático do Eclipse. CRIT +6, LUK +3, ATK +4%.",
                "desc_en": "Lunar band from Eclipse. CRIT +6, LUK +3, ATK +4%.",
                "custom": true
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 1500,
              "rate_pct": "15.00%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 241956,
          "job_exp": 145170
        }
      ]
    },
    {
      "id": "prt_sewb1",
      "name": "Esgoto de Prontera 1F",
      "zone": "dungeon",
      "row": 4,
      "col": 0,
      "min_lv": 20,
      "max_lv": 30,
      "is_hub": false,
      "neighbors": [
        "prontera",
        "prt_sewb2"
      ],
      "locked_gates": [],
      "biome_pt": "Canais Rasos Subterrâneos",
      "biome_en": "Shallow Culvert Channels",
      "intro_pt": "Primeiro nível do aqueduto esquecido. Enxames de Thief Bugs, Tarous e Hydras vindas dos canais marinhos garantem XP densa em grupo.",
      "intro_en": "First culvert tier. Thief Bugs, Tarous and Hydras washed up from sea channels provide dense party XP.",
      "mobs": [
        {
          "id": 1051,
          "aegis": "THIEF_BUG",
          "name": "Thief Bug",
          "lv": 22,
          "hp": 720,
          "count": 40,
          "race": "Insect",
          "ele": "Neutral 3",
          "boss": false,
          "drops": [
            {
              "aegis": "Yellow_Potion",
              "rate_raw": 1700,
              "rate_pct": "17.00%",
              "item": {
                "id": 503,
                "aegis": "Yellow_Potion",
                "name": "Yellow Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yellow Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yellow Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Sewer_Stiletto",
              "rate_raw": 350,
              "rate_pct": "3.50%",
              "item": {
                "id": 40009,
                "aegis": "Jairo_Sewer_Stiletto",
                "name": "Culvert Fang Dagger",
                "type": "Weapon",
                "subtype": "Dagger",
                "tier": "uncommon",
                "slots": 2,
                "eqlv": 30,
                "jobs": [
                  "Thief",
                  "Assassin",
                  "Rogue",
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist",
                  "Mage",
                  "Sage"
                ],
                "desc_pt": "Adaga serrilhada para limpar os esgotos. ATK +118 | AGI +3, CRIT +8, +20% vs Inseto.",
                "desc_en": "Serrated culvert dagger. ATK +118 | AGI +3, CRIT +8, +20% vs Insect.",
                "custom": true
              }
            },
            {
              "aegis": "Phracon",
              "rate_raw": 1800,
              "rate_pct": "18.00%",
              "item": {
                "id": 1010,
                "aegis": "Phracon",
                "name": "Phracon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Phracon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Phracon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 10872,
          "job_exp": 7827
        },
        {
          "id": 1175,
          "aegis": "TAROU",
          "name": "Tarou",
          "lv": 25,
          "hp": 860,
          "count": 30,
          "race": "Brute",
          "ele": "Dark 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Steel",
              "rate_raw": 1200,
              "rate_pct": "12.00%",
              "item": {
                "id": 999,
                "aegis": "Steel",
                "name": "Steel",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Steel) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Steel) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Meadow_Boots",
              "rate_raw": 950,
              "rate_pct": "9.50%",
              "item": {
                "id": 40005,
                "aegis": "Jairo_Meadow_Boots",
                "name": "Meadow Runner Boots",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "common",
                "slots": 1,
                "eqlv": 12,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Botas leves para patrulhar planícies. AGI +2, Velocidade de Movimento +10%, Esquiva +8.",
                "desc_en": "Light patrol boots. AGI +2, Move Speed +10%, FLEE +8.",
                "custom": true
              }
            },
            {
              "aegis": "Oridecon_Stone",
              "rate_raw": 600,
              "rate_pct": "6.00%",
              "item": {
                "id": 756,
                "aegis": "Oridecon_Stone",
                "name": "Rough Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Rough Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Rough Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 14014,
          "job_exp": 10090
        },
        {
          "id": 1005,
          "aegis": "FARMILIAR",
          "name": "Familiar",
          "lv": 27,
          "hp": 940,
          "count": 25,
          "race": "Brute",
          "ele": "Dark 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Wing_Of_Fly",
              "rate_raw": 2600,
              "rate_pct": "26.00%",
              "item": {
                "id": 601,
                "aegis": "Wing_Of_Fly",
                "name": "Fly Wing",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Fly Wing) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Fly Wing) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Blue_Potion",
              "rate_raw": 900,
              "rate_pct": "9.00%",
              "item": {
                "id": 505,
                "aegis": "Blue_Potion",
                "name": "Blue Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Elunium_Stone",
              "rate_raw": 650,
              "rate_pct": "6.50%",
              "item": {
                "id": 757,
                "aegis": "Elunium_Stone",
                "name": "Rough Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Rough Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Rough Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 16336,
          "job_exp": 11761
        },
        {
          "id": 1068,
          "aegis": "HYDRA",
          "name": "Hydra",
          "lv": 29,
          "hp": 1120,
          "count": 25,
          "race": "Plant",
          "ele": "Water 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Hydra_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40045,
                "aegis": "Jairo_Hydra_Card",
                "name": "JaiRO Hydra Card",
                "type": "Card",
                "subtype": "Weapon",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Arma] Dano físico contra Humanoide +22%.",
                "desc_en": "[Weapon] +22% physical damage vs DemiHuman.",
                "custom": true
              }
            },
            {
              "aegis": "Panacea",
              "rate_raw": 900,
              "rate_pct": "9.00%",
              "item": {
                "id": 525,
                "aegis": "Panacea",
                "name": "Panacea",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Panacea) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Panacea) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Tide_Manteau",
              "rate_raw": 300,
              "rate_pct": "3.00%",
              "item": {
                "id": 40010,
                "aegis": "Jairo_Tide_Manteau",
                "name": "Abyssal Tide Manteau",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 35,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Capa tecida nas correntes do esgoto. FLEE +15, MDEF +5, Resistência Água +15%.",
                "desc_en": "Sewer current cloak. FLEE +15, MDEF +5, Water Resist +15%.",
                "custom": true
              }
            }
          ],
          "base_exp": 18841,
          "job_exp": 13565
        }
      ]
    },
    {
      "id": "prt_sewb2",
      "name": "Esgoto de Prontera 2F",
      "zone": "dungeon",
      "row": 4,
      "col": 1,
      "min_lv": 30,
      "max_lv": 40,
      "is_hub": false,
      "neighbors": [
        "prt_sewb1",
        "prt_sewb3"
      ],
      "locked_gates": [],
      "biome_pt": "Galerias Alagadas",
      "biome_en": "Flooded Galleries",
      "intro_pt": "Os dutos rompidos inundaram esta galeria com fauna oceânica de Byalan. Ótimo local para farmar a capa resistente à Água e armas contra Insetos.",
      "intro_en": "Ruptured pipes flooded this floor with oceanic fauna. Farm Water-resist cloaks and Insect-slaying daggers here.",
      "mobs": [
        {
          "id": 1053,
          "aegis": "THIEF_BUG_",
          "name": "Thief Bug Female",
          "lv": 32,
          "hp": 1350,
          "count": 35,
          "race": "Insect",
          "ele": "Dark 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Sewer_Stiletto",
              "rate_raw": 420,
              "rate_pct": "4.20%",
              "item": {
                "id": 40009,
                "aegis": "Jairo_Sewer_Stiletto",
                "name": "Culvert Fang Dagger",
                "type": "Weapon",
                "subtype": "Dagger",
                "tier": "uncommon",
                "slots": 2,
                "eqlv": 30,
                "jobs": [
                  "Thief",
                  "Assassin",
                  "Rogue",
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist",
                  "Mage",
                  "Sage"
                ],
                "desc_pt": "Adaga serrilhada para limpar os esgotos. ATK +118 | AGI +3, CRIT +8, +20% vs Inseto.",
                "desc_en": "Serrated culvert dagger. ATK +118 | AGI +3, CRIT +8, +20% vs Insect.",
                "custom": true
              }
            },
            {
              "aegis": "White_Potion",
              "rate_raw": 950,
              "rate_pct": "9.50%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Elunium_Stone",
              "rate_raw": 800,
              "rate_pct": "8.00%",
              "item": {
                "id": 757,
                "aegis": "Elunium_Stone",
                "name": "Rough Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Rough Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Rough Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 22943,
          "job_exp": 16518
        },
        {
          "id": 1161,
          "aegis": "PLANKTON",
          "name": "Plankton",
          "lv": 34,
          "hp": 1480,
          "count": 25,
          "race": "Plant",
          "ele": "Water 3",
          "boss": false,
          "drops": [
            {
              "aegis": "Blue_Potion",
              "rate_raw": 1300,
              "rate_pct": "13.00%",
              "item": {
                "id": 505,
                "aegis": "Blue_Potion",
                "name": "Blue Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Tide_Manteau",
              "rate_raw": 380,
              "rate_pct": "3.80%",
              "item": {
                "id": 40010,
                "aegis": "Jairo_Tide_Manteau",
                "name": "Abyssal Tide Manteau",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 35,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Capa tecida nas correntes do esgoto. FLEE +15, MDEF +5, Resistência Água +15%.",
                "desc_en": "Sewer current cloak. FLEE +15, MDEF +5, Water Resist +15%.",
                "custom": true
              }
            },
            {
              "aegis": "Royal_Jelly",
              "rate_raw": 650,
              "rate_pct": "6.50%",
              "item": {
                "id": 526,
                "aegis": "Royal_Jelly",
                "name": "Royal Jelly",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Royal Jelly) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Royal Jelly) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 25908,
          "job_exp": 18653
        },
        {
          "id": 1141,
          "aegis": "MARINA",
          "name": "Marina",
          "lv": 36,
          "hp": 1650,
          "count": 25,
          "race": "Plant",
          "ele": "Water 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Tide_Manteau",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 40010,
                "aegis": "Jairo_Tide_Manteau",
                "name": "Abyssal Tide Manteau",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 35,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Capa tecida nas correntes do esgoto. FLEE +15, MDEF +5, Resistência Água +15%.",
                "desc_en": "Sewer current cloak. FLEE +15, MDEF +5, Water Resist +15%.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Coral_Mace",
              "rate_raw": 320,
              "rate_pct": "3.20%",
              "item": {
                "id": 40011,
                "aegis": "Jairo_Coral_Mace",
                "name": "Tidal Sanctum Mace",
                "type": "Weapon",
                "subtype": "Mace",
                "tier": "uncommon",
                "slots": 2,
                "eqlv": 38,
                "jobs": [
                  "Acolyte",
                  "Priest",
                  "Monk",
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist"
                ],
                "desc_pt": "Maça consagrada das galerias alagadas. ATK +135, MATK +65 | Cura +12%, +15% vs Demônio.",
                "desc_en": "Consecrated flooded gallery mace. ATK +135, MATK +65 | Heal +12%, +15% vs Demon.",
                "custom": true
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 400,
              "rate_pct": "4.00%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 29057,
          "job_exp": 20921
        },
        {
          "id": 1070,
          "aegis": "KUKRE",
          "name": "Kukre",
          "lv": 38,
          "hp": 1820,
          "count": 25,
          "race": "Fish",
          "ele": "Water 1",
          "boss": false,
          "drops": [
            {
              "aegis": "White_Potion",
              "rate_raw": 1200,
              "rate_pct": "12.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 380,
              "rate_pct": "3.80%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Eclipse_Ring",
              "rate_raw": 250,
              "rate_pct": "2.50%",
              "item": {
                "id": 40008,
                "aegis": "Jairo_Eclipse_Ring",
                "name": "Eclipse Lunar Band",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 20,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Anel lunático do Eclipse. CRIT +6, LUK +3, ATK +4%.",
                "desc_en": "Lunar band from Eclipse. CRIT +6, LUK +3, ATK +4%.",
                "custom": true
              }
            }
          ],
          "base_exp": 32392,
          "job_exp": 23322
        }
      ]
    },
    {
      "id": "prt_sewb3",
      "name": "Esgoto de Prontera 3F",
      "zone": "dungeon",
      "row": 4,
      "col": 2,
      "min_lv": 40,
      "max_lv": 50,
      "is_hub": false,
      "neighbors": [
        "prt_sewb2",
        "prt_sewb4"
      ],
      "locked_gates": [],
      "biome_pt": "Fosso Tóxico & Oficinas Antigas",
      "biome_en": "Toxic Sump & Old Works",
      "intro_pt": "Cavaleiros e Mercenários já em 2ª classe vêm aqui buscar Skel Worker Card, Cramp e Cornutus antes de enfrentar o subsolo final.",
      "intro_en": "Fresh 2nd-job characters hunt Skel Worker Cards, Cramps and Cornutus here before descending to the boss chamber.",
      "mobs": [
        {
          "id": 1054,
          "aegis": "THIEF_BUG__",
          "name": "Thief Bug Male",
          "lv": 41,
          "hp": 2250,
          "count": 30,
          "race": "Insect",
          "ele": "Dark 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Sewer_Stiletto",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 40009,
                "aegis": "Jairo_Sewer_Stiletto",
                "name": "Culvert Fang Dagger",
                "type": "Weapon",
                "subtype": "Dagger",
                "tier": "uncommon",
                "slots": 2,
                "eqlv": 30,
                "jobs": [
                  "Thief",
                  "Assassin",
                  "Rogue",
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist",
                  "Mage",
                  "Sage"
                ],
                "desc_pt": "Adaga serrilhada para limpar os esgotos. ATK +118 | AGI +3, CRIT +8, +20% vs Inseto.",
                "desc_en": "Serrated culvert dagger. ATK +118 | AGI +3, CRIT +8, +20% vs Insect.",
                "custom": true
              }
            },
            {
              "aegis": "White_Potion",
              "rate_raw": 1500,
              "rate_pct": "15.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 500,
              "rate_pct": "5.00%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 37743,
          "job_exp": 27174
        },
        {
          "id": 1066,
          "aegis": "VADON",
          "name": "Vadon",
          "lv": 43,
          "hp": 2480,
          "count": 25,
          "race": "Fish",
          "ele": "Water 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Amber_Buckler",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 40006,
                "aegis": "Jairo_Amber_Buckler",
                "name": "Amber Shell Buckler",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 18,
                "jobs": [
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Acolyte",
                  "Priest",
                  "Monk",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist",
                  "Thief",
                  "Rogue",
                  "Mage",
                  "Sage"
                ],
                "desc_pt": "Escudo de carapaça de âmbar. DEF +42 | VIT +2, -15% dano de Inseto, -10% dano de Bruto.",
                "desc_en": "Amber shell buckler. DEF +42 | VIT +2, -15% Insect dmg, -10% Brute dmg.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Coral_Mace",
              "rate_raw": 380,
              "rate_pct": "3.80%",
              "item": {
                "id": 40011,
                "aegis": "Jairo_Coral_Mace",
                "name": "Tidal Sanctum Mace",
                "type": "Weapon",
                "subtype": "Mace",
                "tier": "uncommon",
                "slots": 2,
                "eqlv": 38,
                "jobs": [
                  "Acolyte",
                  "Priest",
                  "Monk",
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist"
                ],
                "desc_pt": "Maça consagrada das galerias alagadas. ATK +135, MATK +65 | Cura +12%, +15% vs Demônio.",
                "desc_en": "Consecrated flooded gallery mace. ATK +135, MATK +65 | Heal +12%, +15% vs Demon.",
                "custom": true
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 480,
              "rate_pct": "4.80%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 41544,
          "job_exp": 29911
        },
        {
          "id": 1067,
          "aegis": "CORNUTUS",
          "name": "Cornutus",
          "lv": 45,
          "hp": 2720,
          "count": 20,
          "race": "Fish",
          "ele": "Water 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Tide_Manteau",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 40010,
                "aegis": "Jairo_Tide_Manteau",
                "name": "Abyssal Tide Manteau",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 35,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Capa tecida nas correntes do esgoto. FLEE +15, MDEF +5, Resistência Água +15%.",
                "desc_en": "Sewer current cloak. FLEE +15, MDEF +5, Water Resist +15%.",
                "custom": true
              }
            },
            {
              "aegis": "Royal_Jelly",
              "rate_raw": 900,
              "rate_pct": "9.00%",
              "item": {
                "id": 526,
                "aegis": "Royal_Jelly",
                "name": "Royal Jelly",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Royal Jelly) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Royal Jelly) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Blue_Potion",
              "rate_raw": 1500,
              "rate_pct": "15.00%",
              "item": {
                "id": 505,
                "aegis": "Blue_Potion",
                "name": "Blue Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 45531,
          "job_exp": 32782
        },
        {
          "id": 1169,
          "aegis": "SKEL_WORKER",
          "name": "Skeleton Worker",
          "lv": 47,
          "hp": 3100,
          "count": 25,
          "race": "Undead",
          "ele": "Undead 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_SkelWorker_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40047,
                "aegis": "Jairo_SkelWorker_Card",
                "name": "JaiRO Skel Worker Card",
                "type": "Card",
                "subtype": "Weapon",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Arma] Dano contra Tamanho Médio +18%, ATK +15.",
                "desc_en": "[Weapon] +18% damage vs Medium size, ATK +15.",
                "custom": true
              }
            },
            {
              "aegis": "Steel",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 999,
                "aegis": "Steel",
                "name": "Steel",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Steel) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Steel) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 650,
              "rate_pct": "6.50%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 49706,
          "job_exp": 35788
        },
        {
          "id": 1209,
          "aegis": "CRAMP",
          "name": "Cramp",
          "lv": 49,
          "hp": 3450,
          "count": 18,
          "race": "Brute",
          "ele": "Poison 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Viper_Katar",
              "rate_raw": 180,
              "rate_pct": "1.80%",
              "item": {
                "id": 40012,
                "aegis": "Jairo_Viper_Katar",
                "name": "Venom Spine Katar",
                "type": "Weapon",
                "subtype": "Katar",
                "tier": "rare",
                "slots": 2,
                "eqlv": 44,
                "jobs": [
                  "Assassin"
                ],
                "desc_pt": "Katar venenosa de lâmina dupla. ATK +152 | CRIT +14, Dano Crítico +15%, 6% chance de Envenenar.",
                "desc_en": "Twin-blade venom katar. ATK +152 | CRIT +14, Crit Dmg +15%, 6% Poison chance.",
                "custom": true
              }
            },
            {
              "aegis": "Panacea",
              "rate_raw": 1500,
              "rate_pct": "15.00%",
              "item": {
                "id": 525,
                "aegis": "Panacea",
                "name": "Panacea",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Panacea) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Panacea) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Old_Blue_Box",
              "rate_raw": 300,
              "rate_pct": "3.00%",
              "item": {
                "id": 603,
                "aegis": "Old_Blue_Box",
                "name": "Old Blue Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Blue Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Blue Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 54069,
          "job_exp": 38929
        }
      ]
    },
    {
      "id": "prt_sewb4",
      "name": "Câmara Abissal (Esgoto 4F)",
      "zone": "dungeon",
      "row": 4,
      "col": 3,
      "min_lv": 48,
      "max_lv": 58,
      "is_hub": false,
      "neighbors": [
        "prt_sewb3"
      ],
      "locked_gates": [],
      "biome_pt": "Ninho do Besouro Dourado",
      "biome_en": "Golden Bug Lair",
      "intro_pt": "O coração submerso de Prontera guarda Marcs (Carta anti-Congelamento), Swordfish, Deviaces e o primeiro MVP do servidor: Golden Thief Bug!",
      "intro_en": "Submerged heart of Prontera housing Marcs (anti-Freeze Card), Swordfish, Deviaces and the server's first MVP: Golden Thief Bug!",
      "mobs": [
        {
          "id": 1045,
          "aegis": "MARC",
          "name": "Marc",
          "lv": 50,
          "hp": 3900,
          "count": 25,
          "race": "Fish",
          "ele": "Water 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Marc_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40046,
                "aegis": "Jairo_Marc_Card",
                "name": "JaiRO Marc Card",
                "type": "Card",
                "subtype": "Armor",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Armadura] Imune a Congelamento, Resistência Água +10%.",
                "desc_en": "[Armor] Immunity to Freeze, Water Resist +10%.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Tide_Manteau",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 40010,
                "aegis": "Jairo_Tide_Manteau",
                "name": "Abyssal Tide Manteau",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 35,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Capa tecida nas correntes do esgoto. FLEE +15, MDEF +5, Resistência Água +15%.",
                "desc_en": "Sewer current cloak. FLEE +15, MDEF +5, Water Resist +15%.",
                "custom": true
              }
            },
            {
              "aegis": "White_Potion",
              "rate_raw": 1800,
              "rate_pct": "18.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 56321,
          "job_exp": 40551
        },
        {
          "id": 1069,
          "aegis": "SWORD_FISH",
          "name": "Swordfish",
          "lv": 52,
          "hp": 4300,
          "count": 20,
          "race": "Fish",
          "ele": "Water 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Coral_Mace",
              "rate_raw": 420,
              "rate_pct": "4.20%",
              "item": {
                "id": 40011,
                "aegis": "Jairo_Coral_Mace",
                "name": "Tidal Sanctum Mace",
                "type": "Weapon",
                "subtype": "Mace",
                "tier": "uncommon",
                "slots": 2,
                "eqlv": 38,
                "jobs": [
                  "Acolyte",
                  "Priest",
                  "Monk",
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist"
                ],
                "desc_pt": "Maça consagrada das galerias alagadas. ATK +135, MATK +65 | Cura +12%, +15% vs Demônio.",
                "desc_en": "Consecrated flooded gallery mace. ATK +135, MATK +65 | Heal +12%, +15% vs Demon.",
                "custom": true
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 650,
              "rate_pct": "6.50%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Blue_Potion",
              "rate_raw": 1800,
              "rate_pct": "18.00%",
              "item": {
                "id": 505,
                "aegis": "Blue_Potion",
                "name": "Blue Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 60967,
          "job_exp": 43896
        },
        {
          "id": 1108,
          "aegis": "DEVIACE",
          "name": "Deviace",
          "lv": 54,
          "hp": 4900,
          "count": 18,
          "race": "Fish",
          "ele": "Water 4",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Arcane_Rod",
              "rate_raw": 150,
              "rate_pct": "1.50%",
              "item": {
                "id": 40016,
                "aegis": "Jairo_Arcane_Rod",
                "name": "Mistweaver Grimoire Staff",
                "type": "Weapon",
                "subtype": "Staff",
                "tier": "rare",
                "slots": 2,
                "eqlv": 50,
                "jobs": [
                  "Mage",
                  "Wizard",
                  "Sage",
                  "Priest"
                ],
                "desc_pt": "Cajado das colinas brumas. MATK +155 | INT +5, DEX +3, Cast Variável -12%, MATK +8%.",
                "desc_en": "Misty hills staff. MATK +155 | INT +5, DEX +3, Variable Cast -12%, MATK +8%.",
                "custom": true
              }
            },
            {
              "aegis": "Royal_Jelly",
              "rate_raw": 1200,
              "rate_pct": "12.00%",
              "item": {
                "id": 526,
                "aegis": "Royal_Jelly",
                "name": "Royal Jelly",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Royal Jelly) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Royal Jelly) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 700,
              "rate_pct": "7.00%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 65801,
          "job_exp": 47376
        },
        {
          "id": 1216,
          "aegis": "PENOMENA",
          "name": "Penomena",
          "lv": 56,
          "hp": 5400,
          "count": 15,
          "race": "Fish",
          "ele": "Poison 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Viper_Katar",
              "rate_raw": 200,
              "rate_pct": "2.00%",
              "item": {
                "id": 40012,
                "aegis": "Jairo_Viper_Katar",
                "name": "Venom Spine Katar",
                "type": "Weapon",
                "subtype": "Katar",
                "tier": "rare",
                "slots": 2,
                "eqlv": 44,
                "jobs": [
                  "Assassin"
                ],
                "desc_pt": "Katar venenosa de lâmina dupla. ATK +152 | CRIT +14, Dano Crítico +15%, 6% chance de Envenenar.",
                "desc_en": "Twin-blade venom katar. ATK +152 | CRIT +14, Crit Dmg +15%, 6% Poison chance.",
                "custom": true
              }
            },
            {
              "aegis": "Seed_Of_Yggdrasil",
              "rate_raw": 500,
              "rate_pct": "5.00%",
              "item": {
                "id": 608,
                "aegis": "Seed_Of_Yggdrasil",
                "name": "Yggdrasil Seed",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Seed) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Seed) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Old_Violet_Box",
              "rate_raw": 150,
              "rate_pct": "1.50%",
              "item": {
                "id": 617,
                "aegis": "Old_Violet_Box",
                "name": "Old Purple Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Purple Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Purple Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 70825,
          "job_exp": 50994
        },
        {
          "id": 1086,
          "aegis": "GOLDEN_BUG",
          "name": "Golden Thief Bug",
          "lv": 60,
          "hp": 210000,
          "count": 1,
          "race": "Insect",
          "ele": "Fire 2",
          "boss": true,
          "drops": [
            {
              "aegis": "Jairo_Golden_Carapace",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 40013,
                "aegis": "Jairo_Golden_Carapace",
                "name": "Gilded Bug Armor",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 48,
                "jobs": [
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist"
                ],
                "desc_pt": "Armadura forjada da carapaça do Golden Thief Bug. DEF +78 | VIT +5, MaxHP +900, MDEF +10.",
                "desc_en": "Armor forged from Golden Thief Bug shell. DEF +78 | VIT +5, MaxHP +900, MDEF +10.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Gtb_Card",
              "rate_raw": 10,
              "rate_pct": "0.10%",
              "item": {
                "id": 40048,
                "aegis": "Jairo_Gtb_Card",
                "name": "JaiRO Golden Bug Card",
                "type": "Card",
                "subtype": "Shield",
                "tier": "card_mvp",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Escudo - MVP] MDEF +25, MaxHP +10%, MaxSP +10% (rebalanceada para PvE/Grupo).",
                "desc_en": "[Shield - MVP] MDEF +25, MaxHP +10%, MaxSP +10% (rebalanced for PvE).",
                "custom": true
              }
            },
            {
              "aegis": "Old_Card_Album",
              "rate_raw": 1800,
              "rate_pct": "18.00%",
              "item": {
                "id": 616,
                "aegis": "Old_Card_Album",
                "name": "Old Card Album",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Card Album) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Card Album) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Yggdrasilberry",
              "rate_raw": 2500,
              "rate_pct": "25.00%",
              "item": {
                "id": 607,
                "aegis": "Yggdrasilberry",
                "name": "Yggdrasil Berry",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 977292,
          "job_exp": 586370
        }
      ]
    },
    {
      "id": "prt_fild07",
      "name": "Campo Sudoeste (Formigueiro)",
      "zone": "mid",
      "row": 3,
      "col": 1,
      "min_lv": 28,
      "max_lv": 38,
      "is_hub": false,
      "neighbors": [
        "prt_fild08",
        "prt_fild05",
        "prt_fild09"
      ],
      "locked_gates": [
        "Campos de Geffen (gef_fild02) — Fase 2"
      ],
      "biome_pt": "Colinas Rochosas das Formigas",
      "biome_en": "Rocky Ant Hills",
      "intro_pt": "Fendas abertas sob o solo trouxeram toda a colônia do Formigueiro Infernal (Andre, Piere, Deniro, Vitata) e a rainha Maya para o sudoeste de Prontera.",
      "intro_en": "Underground rifts surfaced the Ant Hell colony (Andre, Piere, Deniro, Vitata) and MVP Queen Maya into southwestern Prontera.",
      "mobs": [
        {
          "id": 1105,
          "aegis": "DENIRO",
          "name": "Deniro",
          "lv": 30,
          "hp": 1250,
          "count": 30,
          "race": "Insect",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Yellow_Potion",
              "rate_raw": 2000,
              "rate_pct": "20.00%",
              "item": {
                "id": 503,
                "aegis": "Yellow_Potion",
                "name": "Yellow Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yellow Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yellow Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Sprout_Blade",
              "rate_raw": 950,
              "rate_pct": "9.50%",
              "item": {
                "id": 40001,
                "aegis": "Jairo_Sprout_Blade",
                "name": "Sprout Saber",
                "type": "Weapon",
                "subtype": "1hSword",
                "tier": "common",
                "slots": 2,
                "eqlv": 8,
                "jobs": [
                  "Novice",
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Thief",
                  "Assassin",
                  "Rogue",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist"
                ],
                "desc_pt": "Espada leve forjada pela guarda inicial. ATK +68 | STR +2, ASPD +5%, Dano contra Planta +15%.",
                "desc_en": "Light blade forged for frontier recruits. ATK +68 | STR +2, ASPD +5%, +15% damage vs Plant.",
                "custom": true
              }
            },
            {
              "aegis": "Oridecon_Stone",
              "rate_raw": 850,
              "rate_pct": "8.50%",
              "item": {
                "id": 756,
                "aegis": "Oridecon_Stone",
                "name": "Rough Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Rough Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Rough Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 20163,
          "job_exp": 14517
        },
        {
          "id": 1160,
          "aegis": "PIERE",
          "name": "Piere",
          "lv": 32,
          "hp": 1380,
          "count": 30,
          "race": "Insect",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Meadow_Boots",
              "rate_raw": 900,
              "rate_pct": "9.00%",
              "item": {
                "id": 40005,
                "aegis": "Jairo_Meadow_Boots",
                "name": "Meadow Runner Boots",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "common",
                "slots": 1,
                "eqlv": 12,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Botas leves para patrulhar planícies. AGI +2, Velocidade de Movimento +10%, Esquiva +8.",
                "desc_en": "Light patrol boots. AGI +2, Move Speed +10%, FLEE +8.",
                "custom": true
              }
            },
            {
              "aegis": "Elunium_Stone",
              "rate_raw": 850,
              "rate_pct": "8.50%",
              "item": {
                "id": 757,
                "aegis": "Elunium_Stone",
                "name": "Rough Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Rough Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Rough Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Blue_Potion",
              "rate_raw": 950,
              "rate_pct": "9.50%",
              "item": {
                "id": 505,
                "aegis": "Blue_Potion",
                "name": "Blue Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 22943,
          "job_exp": 16518
        },
        {
          "id": 1095,
          "aegis": "ANDRE",
          "name": "Andre",
          "lv": 34,
          "hp": 1520,
          "count": 30,
          "race": "Insect",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Amber_Buckler",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 40006,
                "aegis": "Jairo_Amber_Buckler",
                "name": "Amber Shell Buckler",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 18,
                "jobs": [
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Acolyte",
                  "Priest",
                  "Monk",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist",
                  "Thief",
                  "Rogue",
                  "Mage",
                  "Sage"
                ],
                "desc_pt": "Escudo de carapaça de âmbar. DEF +42 | VIT +2, -15% dano de Inseto, -10% dano de Bruto.",
                "desc_en": "Amber shell buckler. DEF +42 | VIT +2, -15% Insect dmg, -10% Brute dmg.",
                "custom": true
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 420,
              "rate_pct": "4.20%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Wolf_Card",
              "rate_raw": 15,
              "rate_pct": "0.15%",
              "item": {
                "id": 40049,
                "aegis": "Jairo_Wolf_Card",
                "name": "JaiRO Wolf Card",
                "type": "Card",
                "subtype": "Weapon",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Arma] ATK +25, CRIT +5.",
                "desc_en": "[Weapon] ATK +25, CRIT +5.",
                "custom": true
              }
            }
          ],
          "base_exp": 25908,
          "job_exp": 18653
        },
        {
          "id": 1176,
          "aegis": "VITATA",
          "name": "Vitata",
          "lv": 36,
          "hp": 1700,
          "count": 22,
          "race": "Insect",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Royal_Jelly",
              "rate_raw": 1100,
              "rate_pct": "11.00%",
              "item": {
                "id": 526,
                "aegis": "Royal_Jelly",
                "name": "Royal Jelly",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Royal Jelly) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Royal Jelly) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "White_Potion",
              "rate_raw": 1200,
              "rate_pct": "12.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Coral_Mace",
              "rate_raw": 250,
              "rate_pct": "2.50%",
              "item": {
                "id": 40011,
                "aegis": "Jairo_Coral_Mace",
                "name": "Tidal Sanctum Mace",
                "type": "Weapon",
                "subtype": "Mace",
                "tier": "uncommon",
                "slots": 2,
                "eqlv": 38,
                "jobs": [
                  "Acolyte",
                  "Priest",
                  "Monk",
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist"
                ],
                "desc_pt": "Maça consagrada das galerias alagadas. ATK +135, MATK +65 | Cura +12%, +15% vs Demônio.",
                "desc_en": "Consecrated flooded gallery mace. ATK +135, MATK +65 | Heal +12%, +15% vs Demon.",
                "custom": true
              }
            }
          ],
          "base_exp": 29057,
          "job_exp": 20921
        },
        {
          "id": 1147,
          "aegis": "MAYA",
          "name": "Maya",
          "lv": 55,
          "hp": 265000,
          "count": 1,
          "race": "Insect",
          "ele": "Earth 4",
          "boss": true,
          "drops": [
            {
              "aegis": "Jairo_Maya_Chitin",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 40014,
                "aegis": "Jairo_Maya_Chitin",
                "name": "Queen Chitin Shield",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 52,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Escudo relíquia da Maya. DEF +72 | MDEF +12, MaxHP +450, 12% chance de refletir magia alvo único.",
                "desc_en": "Relic shield of Maya. DEF +72 | MDEF +12, MaxHP +450, 12% single-target magic reflect.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Card_Album",
              "rate_raw": 2000,
              "rate_pct": "20.00%",
              "item": {
                "id": 616,
                "aegis": "Old_Card_Album",
                "name": "Old Card Album",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Card Album) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Card Album) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 5500,
              "rate_pct": "55.00%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Yggdrasilberry",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 607,
                "aegis": "Yggdrasilberry",
                "name": "Yggdrasil Berry",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 819468,
          "job_exp": 491680
        }
      ]
    },
    {
      "id": "prt_fild04",
      "name": "Clareira Oeste das Feras",
      "zone": "mid",
      "row": 2,
      "col": 0,
      "min_lv": 36,
      "max_lv": 46,
      "is_hub": false,
      "neighbors": [
        "prt_fild05",
        "prt_fild00"
      ],
      "locked_gates": [
        "Campos de Geffen (gef_fild01) — Fase 2"
      ],
      "biome_pt": "Mata das Feras & Alcateias",
      "biome_en": "Beast Clearing & Wolfpacks",
      "intro_pt": "Alcateias de Lobos, Bigfoots e Elder Willows tomaram a clareira oeste. Excelente mapa para Knights e Assassins farmarem Wolf Card e a Wolfpack Claymore.",
      "intro_en": "Wolfpacks, Bigfoots and Elder Willows claimed the western clearing. Prime farming for Wolf Cards and Wolfpack Claymore.",
      "mobs": [
        {
          "id": 1056,
          "aegis": "SMOKIE",
          "name": "Smokie",
          "lv": 37,
          "hp": 1800,
          "count": 25,
          "race": "Brute",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "White_Potion",
              "rate_raw": 1400,
              "rate_pct": "14.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Viper_Katar",
              "rate_raw": 150,
              "rate_pct": "1.50%",
              "item": {
                "id": 40012,
                "aegis": "Jairo_Viper_Katar",
                "name": "Venom Spine Katar",
                "type": "Weapon",
                "subtype": "Katar",
                "tier": "rare",
                "slots": 2,
                "eqlv": 44,
                "jobs": [
                  "Assassin"
                ],
                "desc_pt": "Katar venenosa de lâmina dupla. ATK +152 | CRIT +14, Dano Crítico +15%, 6% chance de Envenenar.",
                "desc_en": "Twin-blade venom katar. ATK +152 | CRIT +14, Crit Dmg +15%, 6% Poison chance.",
                "custom": true
              }
            },
            {
              "aegis": "Wing_Of_Butterfly",
              "rate_raw": 1800,
              "rate_pct": "18.00%",
              "item": {
                "id": 602,
                "aegis": "Wing_Of_Butterfly",
                "name": "Butterfly Wing",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Butterfly Wing) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Butterfly Wing) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 30701,
          "job_exp": 22104
        },
        {
          "id": 1060,
          "aegis": "BIGFOOT",
          "name": "Bigfoot",
          "lv": 39,
          "hp": 2150,
          "count": 28,
          "race": "Brute",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Royal_Jelly",
              "rate_raw": 1000,
              "rate_pct": "10.00%",
              "item": {
                "id": 526,
                "aegis": "Royal_Jelly",
                "name": "Royal Jelly",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Royal Jelly) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Royal Jelly) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 550,
              "rate_pct": "5.50%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Grove_Claymore",
              "rate_raw": 320,
              "rate_pct": "3.20%",
              "item": {
                "id": 40015,
                "aegis": "Jairo_Grove_Claymore",
                "name": "Wolfpack Claymore",
                "type": "Weapon",
                "subtype": "2hSword",
                "tier": "uncommon",
                "slots": 2,
                "eqlv": 45,
                "jobs": [
                  "Swordman",
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Espada de duas mãos balanceada para caçadores de feras. ATK +188 | STR +4, ASPD +10%, +18% vs Bruto.",
                "desc_en": "Balanced two-handed beast slayer. ATK +188 | STR +4, ASPD +10%, +18% vs Brute.",
                "custom": true
              }
            }
          ],
          "base_exp": 34129,
          "job_exp": 24572
        },
        {
          "id": 1013,
          "aegis": "WOLF",
          "name": "Wolf",
          "lv": 42,
          "hp": 2400,
          "count": 35,
          "race": "Brute",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Wolf_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40049,
                "aegis": "Jairo_Wolf_Card",
                "name": "JaiRO Wolf Card",
                "type": "Card",
                "subtype": "Weapon",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Arma] ATK +25, CRIT +5.",
                "desc_en": "[Weapon] ATK +25, CRIT +5.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Grove_Claymore",
              "rate_raw": 380,
              "rate_pct": "3.80%",
              "item": {
                "id": 40015,
                "aegis": "Jairo_Grove_Claymore",
                "name": "Wolfpack Claymore",
                "type": "Weapon",
                "subtype": "2hSword",
                "tier": "uncommon",
                "slots": 2,
                "eqlv": 45,
                "jobs": [
                  "Swordman",
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Espada de duas mãos balanceada para caçadores de feras. ATK +188 | STR +4, ASPD +10%, +18% vs Bruto.",
                "desc_en": "Balanced two-handed beast slayer. ATK +188 | STR +4, ASPD +10%, +18% vs Brute.",
                "custom": true
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 500,
              "rate_pct": "5.00%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 39620,
          "job_exp": 28526
        },
        {
          "id": 1033,
          "aegis": "ELDER_WILOW",
          "name": "Elder Willow",
          "lv": 44,
          "hp": 2650,
          "count": 25,
          "race": "Plant",
          "ele": "Fire 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Arcane_Rod",
              "rate_raw": 160,
              "rate_pct": "1.60%",
              "item": {
                "id": 40016,
                "aegis": "Jairo_Arcane_Rod",
                "name": "Mistweaver Grimoire Staff",
                "type": "Weapon",
                "subtype": "Staff",
                "tier": "rare",
                "slots": 2,
                "eqlv": 50,
                "jobs": [
                  "Mage",
                  "Wizard",
                  "Sage",
                  "Priest"
                ],
                "desc_pt": "Cajado das colinas brumas. MATK +155 | INT +5, DEX +3, Cast Variável -12%, MATK +8%.",
                "desc_en": "Misty hills staff. MATK +155 | INT +5, DEX +3, Variable Cast -12%, MATK +8%.",
                "custom": true
              }
            },
            {
              "aegis": "Blue_Potion",
              "rate_raw": 1600,
              "rate_pct": "16.00%",
              "item": {
                "id": 505,
                "aegis": "Blue_Potion",
                "name": "Blue Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Spore_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40043,
                "aegis": "Jairo_Spore_Card",
                "name": "JaiRO Spore Card",
                "type": "Card",
                "subtype": "Headgear",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Topo/Meio/Baixo] INT +4, MaxSP +120.",
                "desc_en": "[Headgear] INT +4, MaxSP +120.",
                "custom": true
              }
            }
          ],
          "base_exp": 43514,
          "job_exp": 31330
        },
        {
          "id": 1092,
          "aegis": "VAGABOND_WOLF",
          "name": "Vagabond Wolf",
          "lv": 48,
          "hp": 14500,
          "count": 1,
          "race": "Brute",
          "ele": "Earth 1",
          "boss": true,
          "drops": [
            {
              "aegis": "Jairo_Grove_Claymore",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 40015,
                "aegis": "Jairo_Grove_Claymore",
                "name": "Wolfpack Claymore",
                "type": "Weapon",
                "subtype": "2hSword",
                "tier": "uncommon",
                "slots": 2,
                "eqlv": 45,
                "jobs": [
                  "Swordman",
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Espada de duas mãos balanceada para caçadores de feras. ATK +188 | STR +4, ASPD +10%, +18% vs Bruto.",
                "desc_en": "Balanced two-handed beast slayer. ATK +188 | STR +4, ASPD +10%, +18% vs Brute.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Blue_Box",
              "rate_raw": 5500,
              "rate_pct": "55.00%",
              "item": {
                "id": 603,
                "aegis": "Old_Blue_Box",
                "name": "Old Blue Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Blue Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Blue Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Wolf_Card",
              "rate_raw": 180,
              "rate_pct": "1.80%",
              "item": {
                "id": 40049,
                "aegis": "Jairo_Wolf_Card",
                "name": "JaiRO Wolf Card",
                "type": "Card",
                "subtype": "Weapon",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Arma] ATK +25, CRIT +5.",
                "desc_en": "[Weapon] ATK +25, CRIT +5.",
                "custom": true
              }
            }
          ],
          "base_exp": 622368,
          "job_exp": 373420
        }
      ]
    },
    {
      "id": "prt_fild02",
      "name": "Floresta Nordeste dos Goblins",
      "zone": "mid",
      "row": 1,
      "col": 3,
      "min_lv": 44,
      "max_lv": 54,
      "is_hub": false,
      "neighbors": [
        "prt_fild01",
        "prt_fild06",
        "prt_fild03"
      ],
      "locked_gates": [
        "Monte Mjolnir Leste (mjolnir_11) — Fase 2"
      ],
      "biome_pt": "Bosque dos Duendes & Macacos",
      "biome_en": "Goblin & Primate Woods",
      "intro_pt": "Uma tribo inteira de Goblins estabeleceu acampamento no nordeste de Prontera ao lado de Yoyos e Cocos. Dropa a desejada Goblin Card (+22% vs Bruto).",
      "intro_en": "A Goblin clan fortified northeastern Prontera alongside Yoyos and Cocos. Drops Goblin Card (+22% vs Brute).",
      "mobs": [
        {
          "id": 1057,
          "aegis": "YOYO",
          "name": "Yoyo",
          "lv": 45,
          "hp": 2650,
          "count": 25,
          "race": "Brute",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "White_Potion",
              "rate_raw": 1600,
              "rate_pct": "16.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Eclipse_Ring",
              "rate_raw": 350,
              "rate_pct": "3.50%",
              "item": {
                "id": 40008,
                "aegis": "Jairo_Eclipse_Ring",
                "name": "Eclipse Lunar Band",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 20,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Anel lunático do Eclipse. CRIT +6, LUK +3, ATK +4%.",
                "desc_en": "Lunar band from Eclipse. CRIT +6, LUK +3, ATK +4%.",
                "custom": true
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 550,
              "rate_pct": "5.50%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 45531,
          "job_exp": 32782
        },
        {
          "id": 1128,
          "aegis": "HORN",
          "name": "Horn",
          "lv": 47,
          "hp": 2950,
          "count": 22,
          "race": "Insect",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Amber_Buckler",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 40006,
                "aegis": "Jairo_Amber_Buckler",
                "name": "Amber Shell Buckler",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 18,
                "jobs": [
                  "Swordman",
                  "Knight",
                  "Crusader",
                  "Acolyte",
                  "Priest",
                  "Monk",
                  "Merchant",
                  "Blacksmith",
                  "Alchemist",
                  "Thief",
                  "Rogue",
                  "Mage",
                  "Sage"
                ],
                "desc_pt": "Escudo de carapaça de âmbar. DEF +42 | VIT +2, -15% dano de Inseto, -10% dano de Bruto.",
                "desc_en": "Amber shell buckler. DEF +42 | VIT +2, -15% Insect dmg, -10% Brute dmg.",
                "custom": true
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 600,
              "rate_pct": "6.00%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Royal_Jelly",
              "rate_raw": 950,
              "rate_pct": "9.50%",
              "item": {
                "id": 526,
                "aegis": "Royal_Jelly",
                "name": "Royal Jelly",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Royal Jelly) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Royal Jelly) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 49706,
          "job_exp": 35788
        },
        {
          "id": 1122,
          "aegis": "GOBLIN_1",
          "name": "Goblin (Flail)",
          "lv": 49,
          "hp": 3300,
          "count": 25,
          "race": "Demihuman",
          "ele": "Wind 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Goblin_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40050,
                "aegis": "Jairo_Goblin_Card",
                "name": "JaiRO Goblin Card",
                "type": "Card",
                "subtype": "Weapon",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Arma] Dano contra Bruto +22%.",
                "desc_en": "[Weapon] +22% damage vs Brute.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Viper_Katar",
              "rate_raw": 180,
              "rate_pct": "1.80%",
              "item": {
                "id": 40012,
                "aegis": "Jairo_Viper_Katar",
                "name": "Venom Spine Katar",
                "type": "Weapon",
                "subtype": "Katar",
                "tier": "rare",
                "slots": 2,
                "eqlv": 44,
                "jobs": [
                  "Assassin"
                ],
                "desc_pt": "Katar venenosa de lâmina dupla. ATK +152 | CRIT +14, Dano Crítico +15%, 6% chance de Envenenar.",
                "desc_en": "Twin-blade venom katar. ATK +152 | CRIT +14, Crit Dmg +15%, 6% Poison chance.",
                "custom": true
              }
            },
            {
              "aegis": "Steel",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 999,
                "aegis": "Steel",
                "name": "Steel",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Steel) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Steel) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 54069,
          "job_exp": 38929
        },
        {
          "id": 1123,
          "aegis": "GOBLIN_2",
          "name": "Goblin (Hammer)",
          "lv": 51,
          "hp": 3600,
          "count": 25,
          "race": "Demihuman",
          "ele": "Fire 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Goblin_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40050,
                "aegis": "Jairo_Goblin_Card",
                "name": "JaiRO Goblin Card",
                "type": "Card",
                "subtype": "Weapon",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Arma] Dano contra Bruto +22%.",
                "desc_en": "[Weapon] +22% damage vs Brute.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Orcish_Cleaver",
              "rate_raw": 140,
              "rate_pct": "1.40%",
              "item": {
                "id": 40019,
                "aegis": "Jairo_Orcish_Cleaver",
                "name": "Warchief Greataxe",
                "type": "Weapon",
                "subtype": "2hAxe",
                "tier": "rare",
                "slots": 2,
                "eqlv": 68,
                "jobs": [
                  "Merchant",
                  "Blacksmith",
                  "Alchemist",
                  "Swordman",
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Machado de guerra do posto avançado Orc. ATK +225 | STR +6, ATK +10%, Ignora 25% DEF de Humanoide.",
                "desc_en": "Orc outpost war greataxe. ATK +225 | STR +6, ATK +10%, Ignores 25% DemiHuman DEF.",
                "custom": true
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 700,
              "rate_pct": "7.00%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 58621,
          "job_exp": 42207
        },
        {
          "id": 1258,
          "aegis": "GOBLIN_ARCHER",
          "name": "Goblin Archer",
          "lv": 53,
          "hp": 3850,
          "count": 22,
          "race": "Demihuman",
          "ele": "Poison 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Sograt_Longbow",
              "rate_raw": 170,
              "rate_pct": "1.70%",
              "item": {
                "id": 40017,
                "aegis": "Jairo_Sograt_Longbow",
                "name": "Dune Stalker Bow",
                "type": "Weapon",
                "subtype": "Bow",
                "tier": "rare",
                "slots": 2,
                "eqlv": 56,
                "jobs": [
                  "Archer",
                  "Hunter",
                  "Bard",
                  "Dancer"
                ],
                "desc_pt": "Arco longo da fronteira de Sograt. ATK +148 | DEX +5, AGI +3, Dano à Distância +12%, CRIT +8.",
                "desc_en": "Sograt border longbow. ATK +148 | DEX +5, AGI +3, Ranged Dmg +12%, CRIT +8.",
                "custom": true
              }
            },
            {
              "aegis": "Panacea",
              "rate_raw": 1500,
              "rate_pct": "15.00%",
              "item": {
                "id": 525,
                "aegis": "Panacea",
                "name": "Panacea",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Panacea) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Panacea) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 650,
              "rate_pct": "6.50%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 63360,
          "job_exp": 45619
        }
      ]
    },
    {
      "id": "prt_fild00",
      "name": "Vale Noroeste das Brumas",
      "zone": "mid",
      "row": 1,
      "col": 1,
      "min_lv": 52,
      "max_lv": 62,
      "is_hub": false,
      "neighbors": [
        "prt_fild04"
      ],
      "locked_gates": [
        "Geffen Norte (gef_fild00) e Mjolnir Oeste (mjolnir_07/09) — Fase 2"
      ],
      "biome_pt": "Colinas Nebulosas & Minérios",
      "biome_en": "Misty Hills & Mineral Ridge",
      "intro_pt": "Neblina arcana cobriu o noroeste de Prontera, atraindo Giearths, Marins e o raro Mini-Boss Angeling. Ponto-chave para Magos e Sages montarem o set de cast rápido.",
      "intro_en": "Arcane mist cloaks northwestern Prontera, drawing Giearths, Marins and Angeling. Key spot for Wizards and Sages seeking cast-speed gear.",
      "mobs": [
        {
          "id": 1121,
          "aegis": "GIEARTH",
          "name": "Giearth",
          "lv": 53,
          "hp": 3950,
          "count": 25,
          "race": "Demon",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Elunium",
              "rate_raw": 950,
              "rate_pct": "9.50%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 950,
              "rate_pct": "9.50%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Arcane_Rod",
              "rate_raw": 220,
              "rate_pct": "2.20%",
              "item": {
                "id": 40016,
                "aegis": "Jairo_Arcane_Rod",
                "name": "Mistweaver Grimoire Staff",
                "type": "Weapon",
                "subtype": "Staff",
                "tier": "rare",
                "slots": 2,
                "eqlv": 50,
                "jobs": [
                  "Mage",
                  "Wizard",
                  "Sage",
                  "Priest"
                ],
                "desc_pt": "Cajado das colinas brumas. MATK +155 | INT +5, DEX +3, Cast Variável -12%, MATK +8%.",
                "desc_en": "Misty hills staff. MATK +155 | INT +5, DEX +3, Variable Cast -12%, MATK +8%.",
                "custom": true
              }
            }
          ],
          "base_exp": 63360,
          "job_exp": 45619
        },
        {
          "id": 1042,
          "aegis": "STEEL_CHONCHON",
          "name": "Steel Chonchon",
          "lv": 55,
          "hp": 4200,
          "count": 25,
          "race": "Insect",
          "ele": "Wind 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Steel",
              "rate_raw": 2600,
              "rate_pct": "26.00%",
              "item": {
                "id": 999,
                "aegis": "Steel",
                "name": "Steel",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Steel) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Steel) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Viper_Katar",
              "rate_raw": 200,
              "rate_pct": "2.00%",
              "item": {
                "id": 40012,
                "aegis": "Jairo_Viper_Katar",
                "name": "Venom Spine Katar",
                "type": "Weapon",
                "subtype": "Katar",
                "tier": "rare",
                "slots": 2,
                "eqlv": 44,
                "jobs": [
                  "Assassin"
                ],
                "desc_pt": "Katar venenosa de lâmina dupla. ATK +152 | CRIT +14, Dano Crítico +15%, 6% chance de Envenenar.",
                "desc_en": "Twin-blade venom katar. ATK +152 | CRIT +14, Crit Dmg +15%, 6% Poison chance.",
                "custom": true
              }
            },
            {
              "aegis": "White_Potion",
              "rate_raw": 1700,
              "rate_pct": "17.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 68289,
          "job_exp": 49168
        },
        {
          "id": 1242,
          "aegis": "MARIN",
          "name": "Marin",
          "lv": 57,
          "hp": 4600,
          "count": 30,
          "race": "Plant",
          "ele": "Water 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Marin_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40051,
                "aegis": "Jairo_Marin_Card",
                "name": "JaiRO Marin Card",
                "type": "Card",
                "subtype": "Accessory",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Acessório] MATK +5%, INT +3.",
                "desc_en": "[Accessory] MATK +5%, INT +3.",
                "custom": true
              }
            },
            {
              "aegis": "Blue_Potion",
              "rate_raw": 1800,
              "rate_pct": "18.00%",
              "item": {
                "id": 505,
                "aegis": "Blue_Potion",
                "name": "Blue Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Arcane_Rod",
              "rate_raw": 250,
              "rate_pct": "2.50%",
              "item": {
                "id": 40016,
                "aegis": "Jairo_Arcane_Rod",
                "name": "Mistweaver Grimoire Staff",
                "type": "Weapon",
                "subtype": "Staff",
                "tier": "rare",
                "slots": 2,
                "eqlv": 50,
                "jobs": [
                  "Mage",
                  "Wizard",
                  "Sage",
                  "Priest"
                ],
                "desc_pt": "Cajado das colinas brumas. MATK +155 | INT +5, DEX +3, Cast Variável -12%, MATK +8%.",
                "desc_en": "Misty hills staff. MATK +155 | INT +5, DEX +3, Variable Cast -12%, MATK +8%.",
                "custom": true
              }
            }
          ],
          "base_exp": 73407,
          "job_exp": 52853
        },
        {
          "id": 1058,
          "aegis": "METALLER",
          "name": "Metaller",
          "lv": 59,
          "hp": 4950,
          "count": 22,
          "race": "Insect",
          "ele": "Fire 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Sograt_Longbow",
              "rate_raw": 180,
              "rate_pct": "1.80%",
              "item": {
                "id": 40017,
                "aegis": "Jairo_Sograt_Longbow",
                "name": "Dune Stalker Bow",
                "type": "Weapon",
                "subtype": "Bow",
                "tier": "rare",
                "slots": 2,
                "eqlv": 56,
                "jobs": [
                  "Archer",
                  "Hunter",
                  "Bard",
                  "Dancer"
                ],
                "desc_pt": "Arco longo da fronteira de Sograt. ATK +148 | DEX +5, AGI +3, Dano à Distância +12%, CRIT +8.",
                "desc_en": "Sograt border longbow. ATK +148 | DEX +5, AGI +3, Ranged Dmg +12%, CRIT +8.",
                "custom": true
              }
            },
            {
              "aegis": "Seed_Of_Yggdrasil",
              "rate_raw": 600,
              "rate_pct": "6.00%",
              "item": {
                "id": 608,
                "aegis": "Seed_Of_Yggdrasil",
                "name": "Yggdrasil Seed",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Seed) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Seed) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Gold",
              "rate_raw": 500,
              "rate_pct": "5.00%",
              "item": {
                "id": 969,
                "aegis": "Gold",
                "name": "Gold",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Gold) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Gold) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 78715,
          "job_exp": 56674
        },
        {
          "id": 1096,
          "aegis": "ANGELING",
          "name": "Angeling",
          "lv": 62,
          "hp": 28000,
          "count": 1,
          "race": "Angel",
          "ele": "Holy 4",
          "boss": true,
          "drops": [
            {
              "aegis": "Jairo_Sanctuary_Censer",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 40023,
                "aegis": "Jairo_Sanctuary_Censer",
                "name": "Abbey Dawn Scepter",
                "type": "Weapon",
                "subtype": "Staff",
                "tier": "rare",
                "slots": 2,
                "eqlv": 82,
                "jobs": [
                  "Acolyte",
                  "Priest",
                  "Monk",
                  "Mage",
                  "Wizard",
                  "Sage"
                ],
                "desc_pt": "Cetro sagrado de Santa Capitolina. MATK +195 | INT +6, Cura +20%, MATK +12%, +20% vs Morto-Vivo.",
                "desc_en": "Sacred St. Capitolina scepter. MATK +195 | INT +6, Heal +20%, MATK +12%, +20% vs Undead.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Violet_Box",
              "rate_raw": 2800,
              "rate_pct": "28.00%",
              "item": {
                "id": 617,
                "aegis": "Old_Violet_Box",
                "name": "Old Purple Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Purple Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Purple Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Yggdrasilberry",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 607,
                "aegis": "Yggdrasilberry",
                "name": "Yggdrasil Berry",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 1044408,
          "job_exp": 626640
        }
      ]
    },
    {
      "id": "prt_fild09",
      "name": "Fronteira Árida do Sul",
      "zone": "mid",
      "row": 4,
      "col": 4,
      "min_lv": 58,
      "max_lv": 68,
      "is_hub": false,
      "neighbors": [
        "prt_fild07",
        "prt_fild10"
      ],
      "locked_gates": [
        "Deserto de Morroc (moc_fild01) — Fase 2"
      ],
      "biome_pt": "Dunas Fronteiriças de Sograt",
      "biome_en": "Sograt Border Dunes",
      "intro_pt": "As areias de Morroc avançaram até a fronteira sul de Prontera, trazendo Hodes, Sandmen, Mukas e o devorador Phreeoni. Farm essencial para capas anti-Terra e Arcos.",
      "intro_en": "Sograt sands crept into southern Prontera with Hodes, Sandmen, Mukas and MVP Phreeoni. Essential farm for Earth-resist garments and Bows.",
      "mobs": [
        {
          "id": 1055,
          "aegis": "MUKA",
          "name": "Muka",
          "lv": 59,
          "hp": 4800,
          "count": 25,
          "race": "Plant",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Green_Potion",
              "rate_raw": 3000,
              "rate_pct": "30.00%",
              "item": {
                "id": 506,
                "aegis": "Green_Potion",
                "name": "Green Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Green Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Green Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "White_Potion",
              "rate_raw": 1900,
              "rate_pct": "19.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Sograt_Longbow",
              "rate_raw": 220,
              "rate_pct": "2.20%",
              "item": {
                "id": 40017,
                "aegis": "Jairo_Sograt_Longbow",
                "name": "Dune Stalker Bow",
                "type": "Weapon",
                "subtype": "Bow",
                "tier": "rare",
                "slots": 2,
                "eqlv": 56,
                "jobs": [
                  "Archer",
                  "Hunter",
                  "Bard",
                  "Dancer"
                ],
                "desc_pt": "Arco longo da fronteira de Sograt. ATK +148 | DEX +5, AGI +3, Dano à Distância +12%, CRIT +8.",
                "desc_en": "Sograt border longbow. ATK +148 | DEX +5, AGI +3, Ranged Dmg +12%, CRIT +8.",
                "custom": true
              }
            }
          ],
          "base_exp": 78715,
          "job_exp": 56674
        },
        {
          "id": 1165,
          "aegis": "SAND_MAN",
          "name": "Sandman",
          "lv": 61,
          "hp": 5300,
          "count": 28,
          "race": "Formless",
          "ele": "Earth 3",
          "boss": false,
          "drops": [
            {
              "aegis": "Elunium",
              "rate_raw": 1100,
              "rate_pct": "11.00%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Sograt_Longbow",
              "rate_raw": 260,
              "rate_pct": "2.60%",
              "item": {
                "id": 40017,
                "aegis": "Jairo_Sograt_Longbow",
                "name": "Dune Stalker Bow",
                "type": "Weapon",
                "subtype": "Bow",
                "tier": "rare",
                "slots": 2,
                "eqlv": 56,
                "jobs": [
                  "Archer",
                  "Hunter",
                  "Bard",
                  "Dancer"
                ],
                "desc_pt": "Arco longo da fronteira de Sograt. ATK +148 | DEX +5, AGI +3, Dano à Distância +12%, CRIT +8.",
                "desc_en": "Sograt border longbow. ATK +148 | DEX +5, AGI +3, Ranged Dmg +12%, CRIT +8.",
                "custom": true
              }
            },
            {
              "aegis": "Seed_Of_Yggdrasil",
              "rate_raw": 650,
              "rate_pct": "6.50%",
              "item": {
                "id": 608,
                "aegis": "Seed_Of_Yggdrasil",
                "name": "Yggdrasil Seed",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Seed) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Seed) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 84213,
          "job_exp": 60633
        },
        {
          "id": 1119,
          "aegis": "FRILLDORA",
          "name": "Frilldora",
          "lv": 63,
          "hp": 5700,
          "count": 22,
          "race": "Brute",
          "ele": "Fire 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Viper_Katar",
              "rate_raw": 240,
              "rate_pct": "2.40%",
              "item": {
                "id": 40012,
                "aegis": "Jairo_Viper_Katar",
                "name": "Venom Spine Katar",
                "type": "Weapon",
                "subtype": "Katar",
                "tier": "rare",
                "slots": 2,
                "eqlv": 44,
                "jobs": [
                  "Assassin"
                ],
                "desc_pt": "Katar venenosa de lâmina dupla. ATK +152 | CRIT +14, Dano Crítico +15%, 6% chance de Envenenar.",
                "desc_en": "Twin-blade venom katar. ATK +152 | CRIT +14, Crit Dmg +15%, 6% Poison chance.",
                "custom": true
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 1000,
              "rate_pct": "10.00%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Royal_Jelly",
              "rate_raw": 1200,
              "rate_pct": "12.00%",
              "item": {
                "id": 526,
                "aegis": "Royal_Jelly",
                "name": "Royal Jelly",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Royal Jelly) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Royal Jelly) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 89902,
          "job_exp": 64729
        },
        {
          "id": 1127,
          "aegis": "HODE",
          "name": "Hode",
          "lv": 65,
          "hp": 6200,
          "count": 28,
          "race": "Brute",
          "ele": "Earth 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Hode_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40052,
                "aegis": "Jairo_Hode_Card",
                "name": "JaiRO Hode Card",
                "type": "Card",
                "subtype": "Garment",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Capa] Resistência Terra +30%, FLEE +12.",
                "desc_en": "[Garment] Earth Resist +30%, FLEE +12.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Tide_Manteau",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 40010,
                "aegis": "Jairo_Tide_Manteau",
                "name": "Abyssal Tide Manteau",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "uncommon",
                "slots": 1,
                "eqlv": 35,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Capa tecida nas correntes do esgoto. FLEE +15, MDEF +5, Resistência Água +15%.",
                "desc_en": "Sewer current cloak. FLEE +15, MDEF +5, Water Resist +15%.",
                "custom": true
              }
            },
            {
              "aegis": "White_Potion",
              "rate_raw": 2000,
              "rate_pct": "20.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 95781,
          "job_exp": 68962
        },
        {
          "id": 1159,
          "aegis": "PHREEONI",
          "name": "Phreeoni",
          "lv": 68,
          "hp": 320000,
          "count": 1,
          "race": "Brute",
          "ele": "Neutral 3",
          "boss": true,
          "drops": [
            {
              "aegis": "Jairo_Phreeoni_Helm",
              "rate_raw": 480,
              "rate_pct": "4.80%",
              "item": {
                "id": 40018,
                "aegis": "Jairo_Phreeoni_Helm",
                "name": "Voracious Sand Helm",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 62,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Elmo relíquia de Phreeoni. HIT +35, STR +4, DEX +4, ATK +6%.",
                "desc_en": "Phreeoni relic helm. HIT +35, STR +4, DEX +4, ATK +6%.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Card_Album",
              "rate_raw": 2500,
              "rate_pct": "25.00%",
              "item": {
                "id": 616,
                "aegis": "Old_Card_Album",
                "name": "Old Card Album",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Card Album) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Card Album) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Yggdrasilberry",
              "rate_raw": 3000,
              "rate_pct": "30.00%",
              "item": {
                "id": 607,
                "aegis": "Yggdrasilberry",
                "name": "Yggdrasil Berry",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 1259484,
          "job_exp": 755690
        }
      ]
    },
    {
      "id": "prt_fild10",
      "name": "Fortaleza Orc do Sudoeste",
      "zone": "high",
      "row": 3,
      "col": 0,
      "min_lv": 65,
      "max_lv": 76,
      "is_hub": false,
      "neighbors": [
        "prt_fild09",
        "prt_fild11"
      ],
      "locked_gates": [
        "Fronteira Oeste de Geffen (gef_fild02) — Fase 2"
      ],
      "biome_pt": "Acampamento Guerreiro Orc",
      "biome_en": "Orc War Encampment",
      "intro_pt": "Sem rota para o oeste, legiões de Orcs e High Orcs fortificaram as ruínas do sudoeste sob o comando do MVP Orc Hero. Mapa frenético para upar do 65 ao 76 em PT.",
      "intro_en": "Orc legions fortified these southwestern ruins under MVP Orc Hero. High-density party grind from Lv. 65 to 76.",
      "mobs": [
        {
          "id": 1023,
          "aegis": "ORK_WARRIOR",
          "name": "Orc Warrior",
          "lv": 66,
          "hp": 6400,
          "count": 30,
          "race": "Demihuman",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Orcish_Cleaver",
              "rate_raw": 220,
              "rate_pct": "2.20%",
              "item": {
                "id": 40019,
                "aegis": "Jairo_Orcish_Cleaver",
                "name": "Warchief Greataxe",
                "type": "Weapon",
                "subtype": "2hAxe",
                "tier": "rare",
                "slots": 2,
                "eqlv": 68,
                "jobs": [
                  "Merchant",
                  "Blacksmith",
                  "Alchemist",
                  "Swordman",
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Machado de guerra do posto avançado Orc. ATK +225 | STR +6, ATK +10%, Ignora 25% DEF de Humanoide.",
                "desc_en": "Orc outpost war greataxe. ATK +225 | STR +6, ATK +10%, Ignores 25% DemiHuman DEF.",
                "custom": true
              }
            },
            {
              "aegis": "White_Potion",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 1100,
              "rate_pct": "11.00%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 98792,
          "job_exp": 71130
        },
        {
          "id": 1273,
          "aegis": "ORC_LADY",
          "name": "Orc Lady",
          "lv": 68,
          "hp": 6900,
          "count": 25,
          "race": "Demihuman",
          "ele": "Earth 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Royal_Jelly",
              "rate_raw": 1400,
              "rate_pct": "14.00%",
              "item": {
                "id": 526,
                "aegis": "Royal_Jelly",
                "name": "Royal Jelly",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Royal Jelly) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Royal Jelly) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 1100,
              "rate_pct": "11.00%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Grove_Claymore",
              "rate_raw": 380,
              "rate_pct": "3.80%",
              "item": {
                "id": 40015,
                "aegis": "Jairo_Grove_Claymore",
                "name": "Wolfpack Claymore",
                "type": "Weapon",
                "subtype": "2hSword",
                "tier": "uncommon",
                "slots": 2,
                "eqlv": 45,
                "jobs": [
                  "Swordman",
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Espada de duas mãos balanceada para caçadores de feras. ATK +188 | STR +4, ASPD +10%, +18% vs Bruto.",
                "desc_en": "Balanced two-handed beast slayer. ATK +188 | STR +4, ASPD +10%, +18% vs Brute.",
                "custom": true
              }
            }
          ],
          "base_exp": 104957,
          "job_exp": 75569
        },
        {
          "id": 1189,
          "aegis": "ORC_ARCHER",
          "name": "Orc Archer",
          "lv": 71,
          "hp": 7400,
          "count": 25,
          "race": "Demihuman",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Sograt_Longbow",
              "rate_raw": 300,
              "rate_pct": "3.00%",
              "item": {
                "id": 40017,
                "aegis": "Jairo_Sograt_Longbow",
                "name": "Dune Stalker Bow",
                "type": "Weapon",
                "subtype": "Bow",
                "tier": "rare",
                "slots": 2,
                "eqlv": 56,
                "jobs": [
                  "Archer",
                  "Hunter",
                  "Bard",
                  "Dancer"
                ],
                "desc_pt": "Arco longo da fronteira de Sograt. ATK +148 | DEX +5, AGI +3, Dano à Distância +12%, CRIT +8.",
                "desc_en": "Sograt border longbow. ATK +148 | DEX +5, AGI +3, Ranged Dmg +12%, CRIT +8.",
                "custom": true
              }
            },
            {
              "aegis": "Panacea",
              "rate_raw": 1600,
              "rate_pct": "16.00%",
              "item": {
                "id": 525,
                "aegis": "Panacea",
                "name": "Panacea",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Panacea) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Panacea) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 1200,
              "rate_pct": "12.00%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 114564,
          "job_exp": 82486
        },
        {
          "id": 1213,
          "aegis": "HIGH_ORC",
          "name": "High Orc",
          "lv": 74,
          "hp": 8800,
          "count": 28,
          "race": "Demihuman",
          "ele": "Fire 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_HighOrc_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40053,
                "aegis": "Jairo_HighOrc_Card",
                "name": "JaiRO High Orc Card",
                "type": "Card",
                "subtype": "Shield",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Escudo] Reflete 10% do dano físico corpo-a-corpo, DEF +25.",
                "desc_en": "[Shield] Reflects 10% melee damage, DEF +25.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Orcish_Cleaver",
              "rate_raw": 320,
              "rate_pct": "3.20%",
              "item": {
                "id": 40019,
                "aegis": "Jairo_Orcish_Cleaver",
                "name": "Warchief Greataxe",
                "type": "Weapon",
                "subtype": "2hAxe",
                "tier": "rare",
                "slots": 2,
                "eqlv": 68,
                "jobs": [
                  "Merchant",
                  "Blacksmith",
                  "Alchemist",
                  "Swordman",
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Machado de guerra do posto avançado Orc. ATK +225 | STR +6, ATK +10%, Ignora 25% DEF de Humanoide.",
                "desc_en": "Orc outpost war greataxe. ATK +225 | STR +6, ATK +10%, Ignores 25% DemiHuman DEF.",
                "custom": true
              }
            },
            {
              "aegis": "Seed_Of_Yggdrasil",
              "rate_raw": 900,
              "rate_pct": "9.00%",
              "item": {
                "id": 608,
                "aegis": "Seed_Of_Yggdrasil",
                "name": "Yggdrasil Seed",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Seed) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Seed) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 124603,
          "job_exp": 89714
        },
        {
          "id": 1087,
          "aegis": "ORK_HERO",
          "name": "Orc Hero",
          "lv": 78,
          "hp": 460000,
          "count": 1,
          "race": "Demihuman",
          "ele": "Earth 2",
          "boss": true,
          "drops": [
            {
              "aegis": "Jairo_Hero_Crest",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 40020,
                "aegis": "Jairo_Hero_Crest",
                "name": "Orc Hero Pauldron Clip",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 70,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Insígnia relíquia do Orc Hero. STR +5, VIT +5, MaxHP +600, Resistência a Atordoamento +40%.",
                "desc_en": "Orc Hero relic crest. STR +5, VIT +5, MaxHP +600, Stun Resistance +40%.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Card_Album",
              "rate_raw": 2800,
              "rate_pct": "28.00%",
              "item": {
                "id": 616,
                "aegis": "Old_Card_Album",
                "name": "Old Card Album",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Card Album) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Card Album) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Yggdrasilberry",
              "rate_raw": 3200,
              "rate_pct": "32.00%",
              "item": {
                "id": 607,
                "aegis": "Yggdrasilberry",
                "name": "Yggdrasil Berry",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 1663932,
          "job_exp": 998350
        }
      ]
    },
    {
      "id": "prt_fild03",
      "name": "Selva Leste de Capitolina",
      "zone": "high",
      "row": 2,
      "col": 4,
      "min_lv": 72,
      "max_lv": 82,
      "is_hub": false,
      "neighbors": [
        "prt_fild02",
        "prt_monk"
      ],
      "locked_gates": [],
      "biome_pt": "Mata Fechada & Feras Venenosas",
      "biome_en": "Dense Jungle & Venomous Beasts",
      "intro_pt": "Antecâmara selvagem da Abadia de Santa Capitolina. Mantis, Side Winders e Argiopes guardam o caminho enquanto o tigre MVP Eddga ronda as clareiras.",
      "intro_en": "Wild approach to St. Capitolina Abbey. Mantis, Side Winders and Argiopes prowl while MVP Eddga hunts the clearings.",
      "mobs": [
        {
          "id": 1166,
          "aegis": "SAVAGE",
          "name": "Savage",
          "lv": 73,
          "hp": 8200,
          "count": 25,
          "race": "Brute",
          "ele": "Earth 2",
          "boss": false,
          "drops": [
            {
              "aegis": "White_Potion",
              "rate_raw": 2400,
              "rate_pct": "24.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 1200,
              "rate_pct": "12.00%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Dragonscale_Lance",
              "rate_raw": 200,
              "rate_pct": "2.00%",
              "item": {
                "id": 40022,
                "aegis": "Jairo_Dragonscale_Lance",
                "name": "Wyvern Ridge Lance",
                "type": "Weapon",
                "subtype": "2hSpear",
                "tier": "rare",
                "slots": 2,
                "eqlv": 78,
                "jobs": [
                  "Swordman",
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Lança dracônica forjada contra Petites. ATK +218 | STR +5, VIT +4, +22% vs Tamanho Grande, ASPD +8%.",
                "desc_en": "Wyvern ridge lance. ATK +218 | STR +5, VIT +4, +22% vs Large, ASPD +8%.",
                "custom": true
              }
            }
          ],
          "base_exp": 121209,
          "job_exp": 87270
        },
        {
          "id": 1139,
          "aegis": "MANTIS",
          "name": "Mantis",
          "lv": 75,
          "hp": 9100,
          "count": 28,
          "race": "Insect",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Mantis_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40054,
                "aegis": "Jairo_Mantis_Card",
                "name": "JaiRO Mantis Card",
                "type": "Card",
                "subtype": "Accessory",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Acessório] STR +5, ATK +12.",
                "desc_en": "[Accessory] STR +5, ATK +12.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Viper_Katar",
              "rate_raw": 280,
              "rate_pct": "2.80%",
              "item": {
                "id": 40012,
                "aegis": "Jairo_Viper_Katar",
                "name": "Venom Spine Katar",
                "type": "Weapon",
                "subtype": "Katar",
                "tier": "rare",
                "slots": 2,
                "eqlv": 44,
                "jobs": [
                  "Assassin"
                ],
                "desc_pt": "Katar venenosa de lâmina dupla. ATK +152 | CRIT +14, Dano Crítico +15%, 6% chance de Envenenar.",
                "desc_en": "Twin-blade venom katar. ATK +152 | CRIT +14, Crit Dmg +15%, 6% Poison chance.",
                "custom": true
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 1300,
              "rate_pct": "13.00%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 128045,
          "job_exp": 92192
        },
        {
          "id": 1037,
          "aegis": "SIDE_WINDER",
          "name": "Side Winder",
          "lv": 77,
          "hp": 9800,
          "count": 25,
          "race": "Brute",
          "ele": "Poison 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Panacea",
              "rate_raw": 1900,
              "rate_pct": "19.00%",
              "item": {
                "id": 525,
                "aegis": "Panacea",
                "name": "Panacea",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Panacea) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Panacea) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Dragonscale_Lance",
              "rate_raw": 260,
              "rate_pct": "2.60%",
              "item": {
                "id": 40022,
                "aegis": "Jairo_Dragonscale_Lance",
                "name": "Wyvern Ridge Lance",
                "type": "Weapon",
                "subtype": "2hSpear",
                "tier": "rare",
                "slots": 2,
                "eqlv": 78,
                "jobs": [
                  "Swordman",
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Lança dracônica forjada contra Petites. ATK +218 | STR +5, VIT +4, +22% vs Tamanho Grande, ASPD +8%.",
                "desc_en": "Wyvern ridge lance. ATK +218 | STR +5, VIT +4, +22% vs Large, ASPD +8%.",
                "custom": true
              }
            },
            {
              "aegis": "Blue_Potion",
              "rate_raw": 2000,
              "rate_pct": "20.00%",
              "item": {
                "id": 505,
                "aegis": "Blue_Potion",
                "name": "Blue Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 135074,
          "job_exp": 97253
        },
        {
          "id": 1099,
          "aegis": "ARGIOPE",
          "name": "Argiope",
          "lv": 80,
          "hp": 11200,
          "count": 25,
          "race": "Insect",
          "ele": "Poison 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Seed_Of_Yggdrasil",
              "rate_raw": 1100,
              "rate_pct": "11.00%",
              "item": {
                "id": 608,
                "aegis": "Seed_Of_Yggdrasil",
                "name": "Yggdrasil Seed",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Seed) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Seed) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Orcish_Cleaver",
              "rate_raw": 250,
              "rate_pct": "2.50%",
              "item": {
                "id": 40019,
                "aegis": "Jairo_Orcish_Cleaver",
                "name": "Warchief Greataxe",
                "type": "Weapon",
                "subtype": "2hAxe",
                "tier": "rare",
                "slots": 2,
                "eqlv": 68,
                "jobs": [
                  "Merchant",
                  "Blacksmith",
                  "Alchemist",
                  "Swordman",
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Machado de guerra do posto avançado Orc. ATK +225 | STR +6, ATK +10%, Ignora 25% DEF de Humanoide.",
                "desc_en": "Orc outpost war greataxe. ATK +225 | STR +6, ATK +10%, Ignores 25% DemiHuman DEF.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Violet_Box",
              "rate_raw": 200,
              "rate_pct": "2.00%",
              "item": {
                "id": 617,
                "aegis": "Old_Violet_Box",
                "name": "Old Purple Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Purple Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Purple Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 145979,
          "job_exp": 105104
        },
        {
          "id": 1115,
          "aegis": "EDDGA",
          "name": "Eddga",
          "lv": 82,
          "hp": 580000,
          "count": 1,
          "race": "Brute",
          "ele": "Fire 1",
          "boss": true,
          "drops": [
            {
              "aegis": "Jairo_Eddga_Treads",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 40021,
                "aegis": "Jairo_Eddga_Treads",
                "name": "Flame Tiger Greaves",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 75,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Grevas flamejantes do Eddga. MaxHP +1000, Velocidade +15%, STR +4, Resistência Fogo +15%.",
                "desc_en": "Eddga's flame greaves. MaxHP +1000, Move Speed +15%, STR +4, Fire Resist +15%.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Card_Album",
              "rate_raw": 3000,
              "rate_pct": "30.00%",
              "item": {
                "id": 616,
                "aegis": "Old_Card_Album",
                "name": "Old Card Album",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Card Album) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Card Album) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Yggdrasilberry",
              "rate_raw": 3500,
              "rate_pct": "35.00%",
              "item": {
                "id": 607,
                "aegis": "Yggdrasilberry",
                "name": "Yggdrasil Berry",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 1841868,
          "job_exp": 1105120
        }
      ]
    },
    {
      "id": "prt_fild11",
      "name": "Desfiladeiro dos Kobolds & Dragões",
      "zone": "high",
      "row": 2,
      "col": 5,
      "min_lv": 78,
      "max_lv": 88,
      "is_hub": false,
      "neighbors": [
        "prt_fild10"
      ],
      "locked_gates": [
        "Entrada de Glast Heim / Geffen (gef_fild03/11) — Fase 2"
      ],
      "biome_pt": "Desfiladeiro dos Veteranos",
      "biome_en": "Veterans' Ravine",
      "intro_pt": "No último desfiladeiro antes da barreira oeste, Kobolds de elite e Petites dracônicos protegem armas Lv. 4 e a cobiçada Kobold Card (+8 CRIT).",
      "intro_en": "Before the sealed western barrier, elite Kobolds and Petites guard Lv. 4 weapons and the prized Kobold Card (+8 CRIT).",
      "mobs": [
        {
          "id": 1133,
          "aegis": "KOBOLD_1",
          "name": "Kobold (Axe)",
          "lv": 79,
          "hp": 11500,
          "count": 25,
          "race": "Demihuman",
          "ele": "Wind 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Kobold_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40055,
                "aegis": "Jairo_Kobold_Card",
                "name": "JaiRO Kobold Card",
                "type": "Card",
                "subtype": "Accessory",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Acessório] CRIT +8, STR +3.",
                "desc_en": "[Accessory] CRIT +8, STR +3.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Orcish_Cleaver",
              "rate_raw": 320,
              "rate_pct": "3.20%",
              "item": {
                "id": 40019,
                "aegis": "Jairo_Orcish_Cleaver",
                "name": "Warchief Greataxe",
                "type": "Weapon",
                "subtype": "2hAxe",
                "tier": "rare",
                "slots": 2,
                "eqlv": 68,
                "jobs": [
                  "Merchant",
                  "Blacksmith",
                  "Alchemist",
                  "Swordman",
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Machado de guerra do posto avançado Orc. ATK +225 | STR +6, ATK +10%, Ignora 25% DEF de Humanoide.",
                "desc_en": "Orc outpost war greataxe. ATK +225 | STR +6, ATK +10%, Ignores 25% DemiHuman DEF.",
                "custom": true
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 1400,
              "rate_pct": "14.00%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 142296,
          "job_exp": 102453
        },
        {
          "id": 1135,
          "aegis": "KOBOLD_3",
          "name": "Kobold (Mace)",
          "lv": 81,
          "hp": 12400,
          "count": 25,
          "race": "Demihuman",
          "ele": "Fire 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Kobold_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40055,
                "aegis": "Jairo_Kobold_Card",
                "name": "JaiRO Kobold Card",
                "type": "Card",
                "subtype": "Accessory",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Acessório] CRIT +8, STR +3.",
                "desc_en": "[Accessory] CRIT +8, STR +3.",
                "custom": true
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 1400,
              "rate_pct": "14.00%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "White_Potion",
              "rate_raw": 2600,
              "rate_pct": "26.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 149710,
          "job_exp": 107791
        },
        {
          "id": 1282,
          "aegis": "KOBOLD_ARCHER",
          "name": "Kobold Archer",
          "lv": 83,
          "hp": 12900,
          "count": 22,
          "race": "Demihuman",
          "ele": "Fire 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Sograt_Longbow",
              "rate_raw": 320,
              "rate_pct": "3.20%",
              "item": {
                "id": 40017,
                "aegis": "Jairo_Sograt_Longbow",
                "name": "Dune Stalker Bow",
                "type": "Weapon",
                "subtype": "Bow",
                "tier": "rare",
                "slots": 2,
                "eqlv": 56,
                "jobs": [
                  "Archer",
                  "Hunter",
                  "Bard",
                  "Dancer"
                ],
                "desc_pt": "Arco longo da fronteira de Sograt. ATK +148 | DEX +5, AGI +3, Dano à Distância +12%, CRIT +8.",
                "desc_en": "Sograt border longbow. ATK +148 | DEX +5, AGI +3, Ranged Dmg +12%, CRIT +8.",
                "custom": true
              }
            },
            {
              "aegis": "Seed_Of_Yggdrasil",
              "rate_raw": 1100,
              "rate_pct": "11.00%",
              "item": {
                "id": 608,
                "aegis": "Seed_Of_Yggdrasil",
                "name": "Yggdrasil Seed",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Seed) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Seed) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Blue_Potion",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 505,
                "aegis": "Blue_Potion",
                "name": "Blue Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 157317,
          "job_exp": 113268
        },
        {
          "id": 1156,
          "aegis": "PETIT_",
          "name": "Sky Petite",
          "lv": 85,
          "hp": 14500,
          "count": 25,
          "race": "Dragon",
          "ele": "Wind 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Dragonscale_Lance",
              "rate_raw": 340,
              "rate_pct": "3.40%",
              "item": {
                "id": 40022,
                "aegis": "Jairo_Dragonscale_Lance",
                "name": "Wyvern Ridge Lance",
                "type": "Weapon",
                "subtype": "2hSpear",
                "tier": "rare",
                "slots": 2,
                "eqlv": 78,
                "jobs": [
                  "Swordman",
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Lança dracônica forjada contra Petites. ATK +218 | STR +5, VIT +4, +22% vs Tamanho Grande, ASPD +8%.",
                "desc_en": "Wyvern ridge lance. ATK +218 | STR +5, VIT +4, +22% vs Large, ASPD +8%.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Blue_Box",
              "rate_raw": 600,
              "rate_pct": "6.00%",
              "item": {
                "id": 603,
                "aegis": "Old_Blue_Box",
                "name": "Old Blue Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Blue Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Blue Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Yggdrasilberry",
              "rate_raw": 350,
              "rate_pct": "3.50%",
              "item": {
                "id": 607,
                "aegis": "Yggdrasilberry",
                "name": "Yggdrasil Berry",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 165118,
          "job_exp": 118884
        },
        {
          "id": 1155,
          "aegis": "PETIT",
          "name": "Earth Petite",
          "lv": 87,
          "hp": 16200,
          "count": 20,
          "race": "Dragon",
          "ele": "Earth 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Dragonscale_Lance",
              "rate_raw": 380,
              "rate_pct": "3.80%",
              "item": {
                "id": 40022,
                "aegis": "Jairo_Dragonscale_Lance",
                "name": "Wyvern Ridge Lance",
                "type": "Weapon",
                "subtype": "2hSpear",
                "tier": "rare",
                "slots": 2,
                "eqlv": 78,
                "jobs": [
                  "Swordman",
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Lança dracônica forjada contra Petites. ATK +218 | STR +5, VIT +4, +22% vs Tamanho Grande, ASPD +8%.",
                "desc_en": "Wyvern ridge lance. ATK +218 | STR +5, VIT +4, +22% vs Large, ASPD +8%.",
                "custom": true
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 1600,
              "rate_pct": "16.00%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Old_Violet_Box",
              "rate_raw": 250,
              "rate_pct": "2.50%",
              "item": {
                "id": 617,
                "aegis": "Old_Violet_Box",
                "name": "Old Purple Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Purple Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Purple Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 173112,
          "job_exp": 124640
        }
      ]
    },
    {
      "id": "prt_monk",
      "name": "Abadia de Santa Capitolina",
      "zone": "endgame",
      "row": 1,
      "col": 4,
      "min_lv": 82,
      "max_lv": 94,
      "is_hub": false,
      "neighbors": [
        "prt_fild03"
      ],
      "locked_gates": [],
      "biome_pt": "Mosteiro Profanado",
      "biome_en": "Desecrated Abbey",
      "intro_pt": "O monastério sagrado foi tomado por Evil Druids, Dark Priests e patrulhas Raydric que romperam os selos de Glast Heim. O guardião Arc Angeling tenta conter a corrupção.",
      "intro_en": "Evil Druids, Dark Priests and Raydric patrols breached the monastery. Arc Angeling still fights to contain the corruption.",
      "mobs": [
        {
          "id": 1117,
          "aegis": "EVIL_DRUID",
          "name": "Evil Druid",
          "lv": 83,
          "hp": 14200,
          "count": 25,
          "race": "Undead",
          "ele": "Undead 4",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_EvilDruid_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40057,
                "aegis": "Jairo_EvilDruid_Card",
                "name": "JaiRO Evil Druid Card",
                "type": "Card",
                "subtype": "Armor",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Armadura] Encanta armadura com Morto-Vivo, INT +3, MDEF +10.",
                "desc_en": "[Armor] Enchants armor with Undead, INT +3, MDEF +10.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Sanctuary_Censer",
              "rate_raw": 280,
              "rate_pct": "2.80%",
              "item": {
                "id": 40023,
                "aegis": "Jairo_Sanctuary_Censer",
                "name": "Abbey Dawn Scepter",
                "type": "Weapon",
                "subtype": "Staff",
                "tier": "rare",
                "slots": 2,
                "eqlv": 82,
                "jobs": [
                  "Acolyte",
                  "Priest",
                  "Monk",
                  "Mage",
                  "Wizard",
                  "Sage"
                ],
                "desc_pt": "Cetro sagrado de Santa Capitolina. MATK +195 | INT +6, Cura +20%, MATK +12%, +20% vs Morto-Vivo.",
                "desc_en": "Sacred St. Capitolina scepter. MATK +195 | INT +6, Heal +20%, MATK +12%, +20% vs Undead.",
                "custom": true
              }
            },
            {
              "aegis": "Blue_Potion",
              "rate_raw": 2500,
              "rate_pct": "25.00%",
              "item": {
                "id": 505,
                "aegis": "Blue_Potion",
                "name": "Blue Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 157317,
          "job_exp": 113268
        },
        {
          "id": 1140,
          "aegis": "MARDUK",
          "name": "Marduk",
          "lv": 85,
          "hp": 15400,
          "count": 20,
          "race": "Demihuman",
          "ele": "Fire 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Sanctuary_Censer",
              "rate_raw": 320,
              "rate_pct": "3.20%",
              "item": {
                "id": 40023,
                "aegis": "Jairo_Sanctuary_Censer",
                "name": "Abbey Dawn Scepter",
                "type": "Weapon",
                "subtype": "Staff",
                "tier": "rare",
                "slots": 2,
                "eqlv": 82,
                "jobs": [
                  "Acolyte",
                  "Priest",
                  "Monk",
                  "Mage",
                  "Wizard",
                  "Sage"
                ],
                "desc_pt": "Cetro sagrado de Santa Capitolina. MATK +195 | INT +6, Cura +20%, MATK +12%, +20% vs Morto-Vivo.",
                "desc_en": "Sacred St. Capitolina scepter. MATK +195 | INT +6, Heal +20%, MATK +12%, +20% vs Undead.",
                "custom": true
              }
            },
            {
              "aegis": "Royal_Jelly",
              "rate_raw": 1800,
              "rate_pct": "18.00%",
              "item": {
                "id": 526,
                "aegis": "Royal_Jelly",
                "name": "Royal Jelly",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Royal Jelly) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Royal Jelly) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Seed_Of_Yggdrasil",
              "rate_raw": 1200,
              "rate_pct": "12.00%",
              "item": {
                "id": 608,
                "aegis": "Seed_Of_Yggdrasil",
                "name": "Yggdrasil Seed",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Seed) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Seed) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 165118,
          "job_exp": 118884
        },
        {
          "id": 1198,
          "aegis": "DARK_PRIEST",
          "name": "Dark Priest",
          "lv": 88,
          "hp": 18500,
          "count": 20,
          "race": "Demon",
          "ele": "Undead 4",
          "boss": false,
          "drops": [
            {
              "aegis": "Yggdrasilberry",
              "rate_raw": 450,
              "rate_pct": "4.50%",
              "item": {
                "id": 607,
                "aegis": "Yggdrasilberry",
                "name": "Yggdrasil Berry",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Old_Violet_Box",
              "rate_raw": 350,
              "rate_pct": "3.50%",
              "item": {
                "id": 617,
                "aegis": "Old_Violet_Box",
                "name": "Old Purple Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Purple Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Purple Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 1800,
              "rate_pct": "18.00%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 177182,
          "job_exp": 127571
        },
        {
          "id": 1163,
          "aegis": "RAYDRIC",
          "name": "Raydric",
          "lv": 90,
          "hp": 21500,
          "count": 24,
          "race": "Demihuman",
          "ele": "Dark 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Raydric_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40056,
                "aegis": "Jairo_Raydric_Card",
                "name": "JaiRO Raydric Card",
                "type": "Card",
                "subtype": "Garment",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Capa] Resistência Neutro +22%, DEF +15.",
                "desc_en": "[Garment] Neutral Resist +22%, DEF +15.",
                "custom": true
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 1800,
              "rate_pct": "18.00%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "White_Potion",
              "rate_raw": 2800,
              "rate_pct": "28.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 185466,
          "job_exp": 133535
        },
        {
          "id": 1276,
          "aegis": "RAYDRIC_ARCHER",
          "name": "Raydric Archer",
          "lv": 91,
          "hp": 19200,
          "count": 18,
          "race": "Demihuman",
          "ele": "Dark 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Sograt_Longbow",
              "rate_raw": 380,
              "rate_pct": "3.80%",
              "item": {
                "id": 40017,
                "aegis": "Jairo_Sograt_Longbow",
                "name": "Dune Stalker Bow",
                "type": "Weapon",
                "subtype": "Bow",
                "tier": "rare",
                "slots": 2,
                "eqlv": 56,
                "jobs": [
                  "Archer",
                  "Hunter",
                  "Bard",
                  "Dancer"
                ],
                "desc_pt": "Arco longo da fronteira de Sograt. ATK +148 | DEX +5, AGI +3, Dano à Distância +12%, CRIT +8.",
                "desc_en": "Sograt border longbow. ATK +148 | DEX +5, AGI +3, Ranged Dmg +12%, CRIT +8.",
                "custom": true
              }
            },
            {
              "aegis": "Panacea",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 525,
                "aegis": "Panacea",
                "name": "Panacea",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Panacea) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Panacea) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 1600,
              "rate_pct": "16.00%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 189682,
          "job_exp": 136571
        },
        {
          "id": 1388,
          "aegis": "ARCHANGELING",
          "name": "Arc Angeling",
          "lv": 93,
          "hp": 65000,
          "count": 1,
          "race": "Angel",
          "ele": "Holy 3",
          "boss": true,
          "drops": [
            {
              "aegis": "Jairo_Archangel_Mantle",
              "rate_raw": 650,
              "rate_pct": "6.50%",
              "item": {
                "id": 40024,
                "aegis": "Jairo_Archangel_Mantle",
                "name": "Seraphic Vigil Cloak",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 85,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Manto da guarda celestial de Arc Angeling. Todos Atributos +2, FLEE +18, MaxSP +200, Resistência Sombrio +20%.",
                "desc_en": "Arc Angeling vigil cloak. All Stats +2, FLEE +18, MaxSP +200, Dark Resist +20%.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Card_Album",
              "rate_raw": 2500,
              "rate_pct": "25.00%",
              "item": {
                "id": 616,
                "aegis": "Old_Card_Album",
                "name": "Old Card Album",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Card Album) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Card Album) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Yggdrasilberry",
              "rate_raw": 3800,
              "rate_pct": "38.00%",
              "item": {
                "id": 607,
                "aegis": "Yggdrasilberry",
                "name": "Yggdrasil Berry",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 2379096,
          "job_exp": 1427450
        }
      ]
    },
    {
      "id": "prt_maze01",
      "name": "Labirinto da Floresta 1F",
      "zone": "endgame",
      "row": 0,
      "col": 2,
      "min_lv": 80,
      "max_lv": 88,
      "is_hub": false,
      "neighbors": [
        "prt_fild01",
        "prt_maze02"
      ],
      "locked_gates": [],
      "biome_pt": "Véu Externo das Assombrações",
      "biome_en": "Outer Haunted Canopy",
      "intro_pt": "Primeiro andar do Labirinto ao norte de Prontera. Whispers, Marionettes e Ghostring testam precisão e elementos contra propriedade Fantasma.",
      "intro_en": "First Hidden Temple floor north of Prontera. Whispers, Marionettes and Ghostring test elemental counters vs Ghost.",
      "mobs": [
        {
          "id": 1179,
          "aegis": "WHISPER",
          "name": "Whisper",
          "lv": 81,
          "hp": 12800,
          "count": 30,
          "race": "Demon",
          "ele": "Ghost 3",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Whisper_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40058,
                "aegis": "Jairo_Whisper_Card",
                "name": "JaiRO Whisper Card",
                "type": "Card",
                "subtype": "Garment",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Capa] FLEE +25, AGI +2.",
                "desc_en": "[Garment] FLEE +25, AGI +2.",
                "custom": true
              }
            },
            {
              "aegis": "Blue_Potion",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 505,
                "aegis": "Blue_Potion",
                "name": "Blue Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Seed_Of_Yggdrasil",
              "rate_raw": 1100,
              "rate_pct": "11.00%",
              "item": {
                "id": 608,
                "aegis": "Seed_Of_Yggdrasil",
                "name": "Yggdrasil Seed",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Seed) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Seed) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 149710,
          "job_exp": 107791
        },
        {
          "id": 1143,
          "aegis": "MARIONETTE",
          "name": "Marionette",
          "lv": 83,
          "hp": 14000,
          "count": 25,
          "race": "Demon",
          "ele": "Ghost 3",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Sanctuary_Censer",
              "rate_raw": 240,
              "rate_pct": "2.40%",
              "item": {
                "id": 40023,
                "aegis": "Jairo_Sanctuary_Censer",
                "name": "Abbey Dawn Scepter",
                "type": "Weapon",
                "subtype": "Staff",
                "tier": "rare",
                "slots": 2,
                "eqlv": 82,
                "jobs": [
                  "Acolyte",
                  "Priest",
                  "Monk",
                  "Mage",
                  "Wizard",
                  "Sage"
                ],
                "desc_pt": "Cetro sagrado de Santa Capitolina. MATK +195 | INT +6, Cura +20%, MATK +12%, +20% vs Morto-Vivo.",
                "desc_en": "Sacred St. Capitolina scepter. MATK +195 | INT +6, Heal +20%, MATK +12%, +20% vs Undead.",
                "custom": true
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 1500,
              "rate_pct": "15.00%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Old_Blue_Box",
              "rate_raw": 650,
              "rate_pct": "6.50%",
              "item": {
                "id": 603,
                "aegis": "Old_Blue_Box",
                "name": "Old Blue Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Blue Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Blue Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 157317,
          "job_exp": 113268
        },
        {
          "id": 1130,
          "aegis": "JAKK",
          "name": "Jakk",
          "lv": 85,
          "hp": 15200,
          "count": 22,
          "race": "Formless",
          "ele": "Fire 2",
          "boss": false,
          "drops": [
            {
              "aegis": "White_Potion",
              "rate_raw": 2600,
              "rate_pct": "26.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 1500,
              "rate_pct": "15.00%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Arcane_Rod",
              "rate_raw": 350,
              "rate_pct": "3.50%",
              "item": {
                "id": 40016,
                "aegis": "Jairo_Arcane_Rod",
                "name": "Mistweaver Grimoire Staff",
                "type": "Weapon",
                "subtype": "Staff",
                "tier": "rare",
                "slots": 2,
                "eqlv": 50,
                "jobs": [
                  "Mage",
                  "Wizard",
                  "Sage",
                  "Priest"
                ],
                "desc_pt": "Cajado das colinas brumas. MATK +155 | INT +5, DEX +3, Cast Variável -12%, MATK +8%.",
                "desc_en": "Misty hills staff. MATK +155 | INT +5, DEX +3, Variable Cast -12%, MATK +8%.",
                "custom": true
              }
            }
          ],
          "base_exp": 165118,
          "job_exp": 118884
        },
        {
          "id": 1170,
          "aegis": "SOHEE",
          "name": "Sohee",
          "lv": 87,
          "hp": 16800,
          "count": 20,
          "race": "Demon",
          "ele": "Water 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Royal_Jelly",
              "rate_raw": 1600,
              "rate_pct": "16.00%",
              "item": {
                "id": 526,
                "aegis": "Royal_Jelly",
                "name": "Royal Jelly",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Royal Jelly) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Royal Jelly) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Yggdrasilberry",
              "rate_raw": 400,
              "rate_pct": "4.00%",
              "item": {
                "id": 607,
                "aegis": "Yggdrasilberry",
                "name": "Yggdrasil Berry",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Archangel_Mantle",
              "rate_raw": 120,
              "rate_pct": "1.20%",
              "item": {
                "id": 40024,
                "aegis": "Jairo_Archangel_Mantle",
                "name": "Seraphic Vigil Cloak",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 85,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Manto da guarda celestial de Arc Angeling. Todos Atributos +2, FLEE +18, MaxSP +200, Resistência Sombrio +20%.",
                "desc_en": "Arc Angeling vigil cloak. All Stats +2, FLEE +18, MaxSP +200, Dark Resist +20%.",
                "custom": true
              }
            }
          ],
          "base_exp": 173112,
          "job_exp": 124640
        },
        {
          "id": 1120,
          "aegis": "GHOSTRING",
          "name": "Ghostring",
          "lv": 89,
          "hp": 58000,
          "count": 1,
          "race": "Demon",
          "ele": "Ghost 4",
          "boss": true,
          "drops": [
            {
              "aegis": "Jairo_Whisper_Card",
              "rate_raw": 200,
              "rate_pct": "2.00%",
              "item": {
                "id": 40058,
                "aegis": "Jairo_Whisper_Card",
                "name": "JaiRO Whisper Card",
                "type": "Card",
                "subtype": "Garment",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Capa] FLEE +25, AGI +2.",
                "desc_en": "[Garment] FLEE +25, AGI +2.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Card_Album",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 616,
                "aegis": "Old_Card_Album",
                "name": "Old Card Album",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Card Album) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Card Album) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Yggdrasilberry",
              "rate_raw": 3500,
              "rate_pct": "35.00%",
              "item": {
                "id": 607,
                "aegis": "Yggdrasilberry",
                "name": "Yggdrasil Berry",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 2175600,
          "job_exp": 1305360
        }
      ]
    },
    {
      "id": "prt_maze02",
      "name": "Labirinto da Floresta 2F",
      "zone": "endgame",
      "row": 0,
      "col": 3,
      "min_lv": 88,
      "max_lv": 95,
      "is_hub": false,
      "neighbors": [
        "prt_maze01",
        "prt_maze03"
      ],
      "locked_gates": [],
      "biome_pt": "Coração Distorcido do Tempo",
      "biome_en": "Warped Clockwork Heart",
      "intro_pt": "Relógios vivos da Torre de Aldebaran, Alices e Wanderers convergiram para o centro do labirinto ao redor do espadachim sombrio Doppelganger.",
      "intro_en": "Clock Tower constructs, Alices and Wanderers converged in the maze heart around MVP Doppelganger.",
      "mobs": [
        {
          "id": 1269,
          "aegis": "CLOCK",
          "name": "Clock",
          "lv": 89,
          "hp": 19500,
          "count": 22,
          "race": "Formless",
          "ele": "Earth 2",
          "boss": false,
          "drops": [
            {
              "aegis": "Elunium",
              "rate_raw": 1900,
              "rate_pct": "19.00%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 1900,
              "rate_pct": "19.00%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Seed_Of_Yggdrasil",
              "rate_raw": 1400,
              "rate_pct": "14.00%",
              "item": {
                "id": 608,
                "aegis": "Seed_Of_Yggdrasil",
                "name": "Yggdrasil Seed",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Seed) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Seed) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 181300,
          "job_exp": 130536
        },
        {
          "id": 1193,
          "aegis": "ALARM",
          "name": "Alarm",
          "lv": 91,
          "hp": 22000,
          "count": 25,
          "race": "Formless",
          "ele": "Neutral 3",
          "boss": false,
          "drops": [
            {
              "aegis": "White_Potion",
              "rate_raw": 3000,
              "rate_pct": "30.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Jairo_Doppel_Runeblade",
              "rate_raw": 110,
              "rate_pct": "1.10%",
              "item": {
                "id": 40025,
                "aegis": "Jairo_Doppel_Runeblade",
                "name": "Doppelganger Twinblade",
                "type": "Weapon",
                "subtype": "2hSword",
                "tier": "relic",
                "slots": 2,
                "eqlv": 88,
                "jobs": [
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Espada demoníaca do Doppelganger. ATK +248 | ASPD +18%, STR +6, AGI +6, ATK +10%.",
                "desc_en": "Doppelganger demon blade. ATK +248 | ASPD +18%, STR +6, AGI +6, ATK +10%.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Violet_Box",
              "rate_raw": 420,
              "rate_pct": "4.20%",
              "item": {
                "id": 617,
                "aegis": "Old_Violet_Box",
                "name": "Old Purple Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Purple Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Purple Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 189682,
          "job_exp": 136571
        },
        {
          "id": 1275,
          "aegis": "ALICE",
          "name": "Alice",
          "lv": 92,
          "hp": 23500,
          "count": 18,
          "race": "Demihuman",
          "ele": "Neutral 3",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Alice_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40059,
                "aegis": "Jairo_Alice_Card",
                "name": "JaiRO Alice Card",
                "type": "Card",
                "subtype": "Shield",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Escudo] -35% dano de Boss, +15% dano recebido de monstros comuns.",
                "desc_en": "[Shield] -35% Boss damage, +15% damage taken from normal mobs.",
                "custom": true
              }
            },
            {
              "aegis": "Royal_Jelly",
              "rate_raw": 2000,
              "rate_pct": "20.00%",
              "item": {
                "id": 526,
                "aegis": "Royal_Jelly",
                "name": "Royal Jelly",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Royal Jelly) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Royal Jelly) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Yggdrasilberry",
              "rate_raw": 550,
              "rate_pct": "5.50%",
              "item": {
                "id": 607,
                "aegis": "Yggdrasilberry",
                "name": "Yggdrasil Berry",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 193945,
          "job_exp": 139640
        },
        {
          "id": 1208,
          "aegis": "WANDER_MAN",
          "name": "Wanderer",
          "lv": 94,
          "hp": 26500,
          "count": 16,
          "race": "Demon",
          "ele": "Wind 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Viper_Katar",
              "rate_raw": 380,
              "rate_pct": "3.80%",
              "item": {
                "id": 40012,
                "aegis": "Jairo_Viper_Katar",
                "name": "Venom Spine Katar",
                "type": "Weapon",
                "subtype": "Katar",
                "tier": "rare",
                "slots": 2,
                "eqlv": 44,
                "jobs": [
                  "Assassin"
                ],
                "desc_pt": "Katar venenosa de lâmina dupla. ATK +152 | CRIT +14, Dano Crítico +15%, 6% chance de Envenenar.",
                "desc_en": "Twin-blade venom katar. ATK +152 | CRIT +14, Crit Dmg +15%, 6% Poison chance.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Card_Album",
              "rate_raw": 250,
              "rate_pct": "2.50%",
              "item": {
                "id": 616,
                "aegis": "Old_Card_Album",
                "name": "Old Card Album",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Card Album) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Card Album) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Emperium",
              "rate_raw": 400,
              "rate_pct": "4.00%",
              "item": {
                "id": 714,
                "aegis": "Emperium",
                "name": "Emperium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Emperium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Emperium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 202619,
          "job_exp": 145885
        },
        {
          "id": 1046,
          "aegis": "DOPPELGANGER",
          "name": "Doppelganger",
          "lv": 96,
          "hp": 680000,
          "count": 1,
          "race": "Demon",
          "ele": "Dark 3",
          "boss": true,
          "drops": [
            {
              "aegis": "Jairo_Doppel_Runeblade",
              "rate_raw": 480,
              "rate_pct": "4.80%",
              "item": {
                "id": 40025,
                "aegis": "Jairo_Doppel_Runeblade",
                "name": "Doppelganger Twinblade",
                "type": "Weapon",
                "subtype": "2hSword",
                "tier": "relic",
                "slots": 2,
                "eqlv": 88,
                "jobs": [
                  "Knight",
                  "Crusader"
                ],
                "desc_pt": "Espada demoníaca do Doppelganger. ATK +248 | ASPD +18%, STR +6, AGI +6, ATK +10%.",
                "desc_en": "Doppelganger demon blade. ATK +248 | ASPD +18%, STR +6, AGI +6, ATK +10%.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Card_Album",
              "rate_raw": 3800,
              "rate_pct": "38.00%",
              "item": {
                "id": 616,
                "aegis": "Old_Card_Album",
                "name": "Old Card Album",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Card Album) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Card Album) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Yggdrasilberry",
              "rate_raw": 4500,
              "rate_pct": "45.00%",
              "item": {
                "id": 607,
                "aegis": "Yggdrasilberry",
                "name": "Yggdrasil Berry",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 2537832,
          "job_exp": 1522690
        }
      ]
    },
    {
      "id": "prt_maze03",
      "name": "Santuário do Labirinto 3F (Endgame)",
      "zone": "endgame",
      "row": 0,
      "col": 4,
      "min_lv": 92,
      "max_lv": 99,
      "is_hub": false,
      "neighbors": [
        "prt_maze02"
      ],
      "locked_gates": [],
      "biome_pt": "Altar de Baphomet & Dark Lord",
      "biome_en": "Sanctum of Baphomet & Dark Lord",
      "intro_pt": "O ápice da Fase 1 (99/50). Requer grupo coordenado de amigos + bots de suporte: Cavaleiros do Abismo, Khalitzburgs, Súcubos e os dois MVPs finais — Baphomet e Dark Lord.",
      "intro_en": "Phase 1 apex (99/50). Demands coordinated party play: Abysmal Knights, Khalitzburgs, Succubi and twin final MVPs — Baphomet & Dark Lord.",
      "mobs": [
        {
          "id": 1101,
          "aegis": "BAPHOMET_",
          "name": "Baphomet Jr.",
          "lv": 93,
          "hp": 25000,
          "count": 25,
          "race": "Demon",
          "ele": "Dark 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Yggdrasilberry",
              "rate_raw": 650,
              "rate_pct": "6.50%",
              "item": {
                "id": 607,
                "aegis": "Yggdrasilberry",
                "name": "Yggdrasil Berry",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Berry) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Berry) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Elunium",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 985,
                "aegis": "Elunium",
                "name": "Elunium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Elunium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Elunium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Oridecon",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 984,
                "aegis": "Oridecon",
                "name": "Oridecon",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Oridecon) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Oridecon) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 198258,
          "job_exp": 142745
        },
        {
          "id": 1132,
          "aegis": "KHALITZBURG",
          "name": "Khalitzburg",
          "lv": 95,
          "hp": 31000,
          "count": 20,
          "race": "Undead",
          "ele": "Undead 1",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Bapho_Armor",
              "rate_raw": 120,
              "rate_pct": "1.20%",
              "item": {
                "id": 40026,
                "aegis": "Jairo_Bapho_Armor",
                "name": "Labyrinth Abyssal Plate",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 90,
                "jobs": [
                  "Knight",
                  "Crusader",
                  "Blacksmith",
                  "Alchemist",
                  "Monk",
                  "Assassin",
                  "Rogue",
                  "Hunter",
                  "Bard",
                  "Dancer",
                  "Wizard",
                  "Sage",
                  "Priest"
                ],
                "desc_pt": "Armadura suprema do Santuário (Fase 1). DEF +95 | Todos Atributos +3, HP +1200, SP +180, ATK/MATK +8%.",
                "desc_en": "Phase 1 Sanctuary supreme armor. DEF +95 | All Stats +3, HP +1200, SP +180, ATK/MATK +8%.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Violet_Box",
              "rate_raw": 550,
              "rate_pct": "5.50%",
              "item": {
                "id": 617,
                "aegis": "Old_Violet_Box",
                "name": "Old Purple Box",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Purple Box) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Purple Box) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "White_Potion",
              "rate_raw": 3500,
              "rate_pct": "35.00%",
              "item": {
                "id": 504,
                "aegis": "White_Potion",
                "name": "White Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (White Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (White Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 207028,
          "job_exp": 149060
        },
        {
          "id": 1219,
          "aegis": "KNIGHT_OF_ABYSS",
          "name": "Abysmal Knight",
          "lv": 97,
          "hp": 36500,
          "count": 18,
          "race": "Formless",
          "ele": "Dark 4",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_Abysmal_Card",
              "rate_raw": 25,
              "rate_pct": "0.25%",
              "item": {
                "id": 40060,
                "aegis": "Jairo_Abysmal_Card",
                "name": "JaiRO Abysmal Card",
                "type": "Card",
                "subtype": "Weapon",
                "tier": "card",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Arma] Dano físico contra monstros Boss +25%.",
                "desc_en": "[Weapon] +25% physical damage vs Boss monsters.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Bapho_Armor",
              "rate_raw": 180,
              "rate_pct": "1.80%",
              "item": {
                "id": 40026,
                "aegis": "Jairo_Bapho_Armor",
                "name": "Labyrinth Abyssal Plate",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 90,
                "jobs": [
                  "Knight",
                  "Crusader",
                  "Blacksmith",
                  "Alchemist",
                  "Monk",
                  "Assassin",
                  "Rogue",
                  "Hunter",
                  "Bard",
                  "Dancer",
                  "Wizard",
                  "Sage",
                  "Priest"
                ],
                "desc_pt": "Armadura suprema do Santuário (Fase 1). DEF +95 | Todos Atributos +3, HP +1200, SP +180, ATK/MATK +8%.",
                "desc_en": "Phase 1 Sanctuary supreme armor. DEF +95 | All Stats +3, HP +1200, SP +180, ATK/MATK +8%.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Card_Album",
              "rate_raw": 350,
              "rate_pct": "3.50%",
              "item": {
                "id": 616,
                "aegis": "Old_Card_Album",
                "name": "Old Card Album",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Card Album) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Card Album) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 215993,
          "job_exp": 155514
        },
        {
          "id": 1370,
          "aegis": "SUCCUBUS",
          "name": "Succubus",
          "lv": 96,
          "hp": 32000,
          "count": 14,
          "race": "Demon",
          "ele": "Dark 3",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_DarkLord_Signet",
              "rate_raw": 110,
              "rate_pct": "1.10%",
              "item": {
                "id": 40027,
                "aegis": "Jairo_DarkLord_Signet",
                "name": "Abyssal Crown Ring",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 92,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Selo do Dark Lord. INT +6, DEX +5, Conjuração Variável -15%, Pós-conjuração -10%.",
                "desc_en": "Dark Lord signet. INT +6, DEX +5, Variable Cast -15%, After-cast Delay -10%.",
                "custom": true
              }
            },
            {
              "aegis": "Seed_Of_Yggdrasil",
              "rate_raw": 1800,
              "rate_pct": "18.00%",
              "item": {
                "id": 608,
                "aegis": "Seed_Of_Yggdrasil",
                "name": "Yggdrasil Seed",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Yggdrasil Seed) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Yggdrasil Seed) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Blue_Potion",
              "rate_raw": 3000,
              "rate_pct": "30.00%",
              "item": {
                "id": 505,
                "aegis": "Blue_Potion",
                "name": "Blue Potion",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Blue Potion) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Blue Potion) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 211486,
          "job_exp": 152269
        },
        {
          "id": 1374,
          "aegis": "INCUBUS",
          "name": "Incubus",
          "lv": 96,
          "hp": 32000,
          "count": 14,
          "race": "Demon",
          "ele": "Dark 3",
          "boss": false,
          "drops": [
            {
              "aegis": "Jairo_DarkLord_Signet",
              "rate_raw": 110,
              "rate_pct": "1.10%",
              "item": {
                "id": 40027,
                "aegis": "Jairo_DarkLord_Signet",
                "name": "Abyssal Crown Ring",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 92,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Selo do Dark Lord. INT +6, DEX +5, Conjuração Variável -15%, Pós-conjuração -10%.",
                "desc_en": "Dark Lord signet. INT +6, DEX +5, Variable Cast -15%, After-cast Delay -10%.",
                "custom": true
              }
            },
            {
              "aegis": "Royal_Jelly",
              "rate_raw": 2200,
              "rate_pct": "22.00%",
              "item": {
                "id": 526,
                "aegis": "Royal_Jelly",
                "name": "Royal Jelly",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Royal Jelly) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Royal Jelly) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            },
            {
              "aegis": "Emperium",
              "rate_raw": 550,
              "rate_pct": "5.50%",
              "item": {
                "id": 714,
                "aegis": "Emperium",
                "name": "Emperium",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Emperium) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Emperium) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 211486,
          "job_exp": 152269
        },
        {
          "id": 1039,
          "aegis": "BAPHOMET",
          "name": "Baphomet",
          "lv": 99,
          "hp": 980000,
          "count": 1,
          "race": "Demon",
          "ele": "Dark 3",
          "boss": true,
          "drops": [
            {
              "aegis": "Jairo_Bapho_Horns_Crown",
              "rate_raw": 500,
              "rate_pct": "5.00%",
              "item": {
                "id": 40028,
                "aegis": "Jairo_Bapho_Horns_Crown",
                "name": "Crown of Prontera Frontier",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 94,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Coroa máxima da Fase 1 (Baphomet). Todos Atributos +4, CRIT +10, HIT +20, Dano contra Boss +12%.",
                "desc_en": "Phase 1 apex crown (Baphomet). All Stats +4, CRIT +10, HIT +20, +12% Boss damage.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Baphomet_Card",
              "rate_raw": 10,
              "rate_pct": "0.10%",
              "item": {
                "id": 40061,
                "aegis": "Jairo_Baphomet_Card",
                "name": "JaiRO Baphomet Card",
                "type": "Card",
                "subtype": "Weapon",
                "tier": "card_mvp",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Arma - MVP] HIT +15, ATK +10%, Ataques físicos causam dano em área 3x3.",
                "desc_en": "[Weapon - MVP] HIT +15, ATK +10%, Melee hits deal 3x3 splash damage.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Bapho_Armor",
              "rate_raw": 650,
              "rate_pct": "6.50%",
              "item": {
                "id": 40026,
                "aegis": "Jairo_Bapho_Armor",
                "name": "Labyrinth Abyssal Plate",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 90,
                "jobs": [
                  "Knight",
                  "Crusader",
                  "Blacksmith",
                  "Alchemist",
                  "Monk",
                  "Assassin",
                  "Rogue",
                  "Hunter",
                  "Bard",
                  "Dancer",
                  "Wizard",
                  "Sage",
                  "Priest"
                ],
                "desc_pt": "Armadura suprema do Santuário (Fase 1). DEF +95 | Todos Atributos +3, HP +1200, SP +180, ATK/MATK +8%.",
                "desc_en": "Phase 1 Sanctuary supreme armor. DEF +95 | All Stats +3, HP +1200, SP +180, ATK/MATK +8%.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Card_Album",
              "rate_raw": 5000,
              "rate_pct": "50.00%",
              "item": {
                "id": 616,
                "aegis": "Old_Card_Album",
                "name": "Old Card Album",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Card Album) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Card Album) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 2701836,
          "job_exp": 1621100
        },
        {
          "id": 1272,
          "aegis": "DARK_LORD",
          "name": "Dark Lord",
          "lv": 99,
          "hp": 1150000,
          "count": 1,
          "race": "Demon",
          "ele": "Undead 4",
          "boss": true,
          "drops": [
            {
              "aegis": "Jairo_DarkLord_Signet",
              "rate_raw": 500,
              "rate_pct": "5.00%",
              "item": {
                "id": 40027,
                "aegis": "Jairo_DarkLord_Signet",
                "name": "Abyssal Crown Ring",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 92,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Selo do Dark Lord. INT +6, DEX +5, Conjuração Variável -15%, Pós-conjuração -10%.",
                "desc_en": "Dark Lord signet. INT +6, DEX +5, Variable Cast -15%, After-cast Delay -10%.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_DarkLord_Card",
              "rate_raw": 10,
              "rate_pct": "0.10%",
              "item": {
                "id": 40062,
                "aegis": "Jairo_DarkLord_Card",
                "name": "JaiRO Dark Lord Card",
                "type": "Card",
                "subtype": "Shoes",
                "tier": "card_mvp",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "[Botas - MVP] MATK +10%, Cast Variável -10%, 10% chance de Chuva de Meteoros Lv.5 ao sofrer dano.",
                "desc_en": "[Shoes - MVP] MATK +10%, Variable Cast -10%, 10% chance to auto-cast Meteor Storm Lv.5 when hit.",
                "custom": true
              }
            },
            {
              "aegis": "Jairo_Archangel_Mantle",
              "rate_raw": 650,
              "rate_pct": "6.50%",
              "item": {
                "id": 40024,
                "aegis": "Jairo_Archangel_Mantle",
                "name": "Seraphic Vigil Cloak",
                "type": "Armor",
                "subtype": "Armor",
                "tier": "relic",
                "slots": 1,
                "eqlv": 85,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Manto da guarda celestial de Arc Angeling. Todos Atributos +2, FLEE +18, MaxSP +200, Resistência Sombrio +20%.",
                "desc_en": "Arc Angeling vigil cloak. All Stats +2, FLEE +18, MaxSP +200, Dark Resist +20%.",
                "custom": true
              }
            },
            {
              "aegis": "Old_Card_Album",
              "rate_raw": 5000,
              "rate_pct": "50.00%",
              "item": {
                "id": 616,
                "aegis": "Old_Card_Album",
                "name": "Old Card Album",
                "type": "Material/Consumable",
                "subtype": "Vanilla",
                "tier": "material",
                "slots": 0,
                "eqlv": 1,
                "jobs": [
                  "All"
                ],
                "desc_pt": "Item oficial (Old Card Album) com drop reestruturado no JaiRO.",
                "desc_en": "Official item (Old Card Album) with rebalanced JaiRO drop rate.",
                "custom": false
              }
            }
          ],
          "base_exp": 2701836,
          "job_exp": 1621100
        }
      ]
    }
  ]
};
