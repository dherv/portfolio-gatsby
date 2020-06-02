import Typography from "typography";

const typography = new Typography({
  baseFontSize: "12px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    "Barlow Condensed",
    "Roboto",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: [
    "Roboto",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  googleFonts: [
    {
      name: "Barlow Condensed",
      styles: ["500", "600", "700"],
    },
    {
      name: "Roboto",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
});

export default typography;
