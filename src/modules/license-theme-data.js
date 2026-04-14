/**
 * license-theme-data.js
 * 카테고리별 인증서(라이선스) 디자인 테마 데이터셋
 * 각 세계관의 고유한 레이아웃, 폰트, 에셋 정보를 관리합니다.
 */
(function() {
  const THEME_DATA = {
    // 1. 산리오 테마 - My Sweet Diary (Ultra Fidelity)
    sanrio: {
      themeName: "MY SWEET DIARY",
      className: "theme-sanrio",
      layout: {
        photoShape: "circle",
        photoEffect: "shimmer",
        showWatermark: true,
        elements: ["date", "ip", "rank", "friend"]
      },
      visuals: {
        fonts: {
          title: "'Gamja Flower', cursive",
          body: "'Gamja Flower', cursive"
        },
        colors: {
          primary: "#FFDDEE",
          secondary: "#FFFFFF",
          text: "#D6336C"
        },
        assets: {
          stamp: "🎀",
          watermark: "💖"
        }
      },
      labels: {
        idLabel: "DIARY NO.",
        rankLabel: "SWEETNESS LEVEL",
        friendLabel: "BEST FRIEND"
      }
    },

    // 2. 포켓몬 테마 - 도감 감성
    pokemon: {
      themeName: "POKEDEX PERSONAL ID",
      className: "theme-pokemon",
      layout: {
        photoShape: "rect",
        photoEffect: "scanline",
        showWatermark: false,
        elements: ["date", "ip", "serial", "rank"]
      },
      visuals: {
        fonts: {
          title: "'Orbitron', sans-serif",
          body: "'Press Start 2P', cursive"
        },
        colors: {
          primary: "#FF1F1F",
          secondary: "#333333",
          text: "#1E1E1E"
        },
        assets: {
          stamp: "🔴",
          watermark: "assets/themes/pokemon/pokeball-bg.png"
        }
      },
      labels: {
        idLabel: "TRAINER NO.",
        rankLabel: "BATTLE RANK",
        regionLabel: "KANTO"
      }
    },

    // 3. 진격의 거인 테마 - 조사병단 패스포트
    aot: {
      themeName: "SURVEY CORPS PASS",
      className: "theme-aot",
      layout: {
        photoShape: "rect",
        photoEffect: "sepia-distressed",
        showWatermark: true,
        elements: ["date", "ip", "unit", "quote"]
      },
      visuals: {
        fonts: {
          title: "'Noto Serif KR', serif",
          body: "'Noto Serif KR', serif"
        },
        colors: {
          primary: "#4F4F4F",
          secondary: "#D4C4A8",
          text: "#2C1E16"
        },
        assets: {
          stamp: "⚔️",
          watermark: "🕊️"
        }
      },
      labels: {
        idLabel: "SOLDIER ID",
        rankLabel: "CORPS RANK",
        unitLabel: "SC"
      }
    },

    // 4. 귀멸의 칼날 테마 - 귀살대 대원증 (Slayer Corps ID)
    kimetsu: {
      themeName: "SLAYER CORPS ID",
      className: "theme-kimetsu",
      layout: {
        photoShape: "rect",
        photoEffect: "wisteria",
        showWatermark: true,
        elements: ["date", "ip", "rank", "style"]
      },
      visuals: {
        fonts: {
          title: "'Noto Serif KR', serif",
          body: "'Noto Serif KR', serif"
        },
        colors: {
          primary: "#BD93F9",
          secondary: "#282A36",
          text: "#F8F8F2"
        },
        assets: {
          stamp: "🔥",
          watermark: "🌸"
        }
      },
      labels: {
        idLabel: "REGISTRY NO.",
        rankLabel: "SLAYER RANK",
        styleLabel: "BREATH STYLE"
      }
    },

    // 5. 강철의 연금술사 테마 - 국가 연금술사 등록증 (State Alchemist Badge)
    fma: {
      themeName: "STATE ALCHEMIST ID",
      className: "theme-fma",
      layout: {
        photoShape: "circle",
        photoEffect: "metallic",
        showWatermark: true,
        elements: ["date", "ip", "rank", "alchemistType"]
      },
      visuals: {
        fonts: {
          title: "'Orbitron', sans-serif",
          body: "'Orbitron', sans-serif"
        },
        colors: {
          primary: "#C0C0C0",
          secondary: "#333333",
          text: "#1E1E1E"
        },
        assets: {
          stamp: "⚗️",
          watermark: "🐉"
        }
      },
      labels: {
        idLabel: "CERTIFICATE NO.",
        rankLabel: "MILITARY RANK",
        alchemistTypeLabel: "ALCHEMIST TYPE"
      }
    }
  };

  /**
   * 카테고리에 맞는 테마 데이터 반환
   * @param {string} category 
   * @returns {object} theme object
   */
  function getThemeData(category) {
    return THEME_DATA[category] || THEME_DATA['pokemon']; // 기본값 포켓몬
  }

  // Global Namespace 에 등록
  window.LicenseThemeModule = {
    THEME_DATA,
    getThemeData
  };
})();
