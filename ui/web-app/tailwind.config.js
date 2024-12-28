/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutrals: {
          black: "#222222",
          gray1: "#9B9B9B",
          gray2: "#CACACA",
          gray3: "#EBEBEB",
          gray4: "#F4F4F4",
          gray5: "#F8F8F8",
          white: "#FFFFFF",
        },
        reds: {
          red1: "#A30214",
          red2: "#DD0218",
          red3: "#FD2138",
          red4: "#FF7D7D",
          red5: "#FFF1F1",
        },
        oranges: {
          orange1: "#C76A0D",
          orange2: "#FF9600",
          orange3: "#FB5A17",
          orange4: "#FFD6B6",
          orange5: "#FF7EA",
        },
        yellows: {
          yellow1: "#C8B600",
          yellow2: "#FFA800",
          yellow3: "#FFC547",
          yellow4: "#FFF4D6",
          yellow5: "#FFF7EA",
        },
        greens: {
          green1: "#42A62B",
          green2: "#6FD167",
          green3: "#7AC45A",
          green4: "#E4F10E",
          green5: "#F1FEEE",
        },
        teals: {
          teal1: "#006C88",
          teal2: "#00A9A8",
          teal3: "#00CAE4",
          teal4: "#E1F5F7",
        },
        blues: {
          blue1: "#2271B5",
          blue2: "#4A90E2",
          blue3: "#84C8EB",
          blue4: "#DEFFFF",
          blue5: "#F1FFFF",
        },
        darkblues: {
          darkblue1: "#2A4073",
          darkblue2: "#385B9F",
          darkblue3: "#8DD0C5",
          darkblue4: "#E1EAF4",
        },
      },
      fontSize: {
        xxs: ["0.625rem", "1.5"], // 10px, line-height: 1.5
        xs: ["0.75rem", "1.5"], // 12px, line-height: 1.5
        sm: ["0.875rem", "1.5"], // 14px, line-height: 1.5
        md: ["1rem", "1.5"], // 16px, line-height: 1.5
        lg: ["1.125rem", "1.5"], // 18px, line-height: 1.5
        xl: ["1.25rem", "1.5"], // 20px, line-height: 1.5
        xxl: ["1.5rem", "1.5"], // 24px, line-height: 1.5
        xxxl: ["2rem", "1.5"], // 32px, line-height: 1.5
        h1: ["2rem", { lineHeight: "1.5", fontWeight: "700" }], // 32px
        h2: ["1.5rem", { lineHeight: "1.5", fontWeight: "700" }], // 24px
        h3: ["1.25rem", { lineHeight: "1.5", fontWeight: "700" }], // 20px
        h4: ["1.125rem", { lineHeight: "1.5", fontWeight: "700" }], // 18px
        h5: ["1rem", { lineHeight: "1.5", fontWeight: "700" }], // 16px
        h6: ["0.875rem", { lineHeight: "1.5", fontWeight: "700" }], // 14px
      },
      fontWeight: {
        bold: "700", // Font weight đậm
        normal: "400", // Font weight bình thường
        heading: "700", // Font weight dành cho tiêu đề
        body: "400", // Font weight dành cho nội dung
      },
      borderWidth: {
        none: "0px", // Không có border
        sm: "1px", // Border 1px
        md: "2px", // Border 2px
        lg: "3px", // Border 3px
        xl: "4px", // Border 4px
      },
      borderRadius: {
        none: "0px",
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "14px",
        xl: "20px",
        pill: "9999px",
        circle: "100%",
      },
      transitionDuration: {
        xxxs: "100ms",
        xxs: "150ms",
        xs: "300ms",
        sm: "500ms",
        md: "1000ms",
        lg: "2000ms",
        xl: "4000ms",
        xxl: "6000ms",
        xxxl: "8000ms",
        xxxxl: "10000ms",
      },
      boxShadow: {
        none: "none",
        md: "0px 0px 8px rgba(0, 0, 0, 0.3)",
        lg: "2px 2px 14px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
