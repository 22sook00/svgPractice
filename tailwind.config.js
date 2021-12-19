module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    colors: {
      "yellow": "#ffd951",
      "label-yellow" : '#FFEEB4',
      "hover-yellow": "#FFB801",
      "normal-text" : "#515151", //don't use anymore
      "disabled-gray": "#D1D1D1",
      "gray": "#8b8b8b",
      "disabled-gray-font": "#8B8B8B",
      "font-black": "#333333",
      "slate": "#f8fafc",
      "white": "#ffffff",
      "primary-default": "#ffd951",
      "primary-dark": "#ffd801",
      "primary-light": "#ffeeb4",
      "secondary": "#0e54a2",
      "secondary-dark": "#0a3a72",
      "secondary-light": "#b1d2f8",
      "text-primary": "#515151",
      "text-dark": "#333333",
      "text-light": "#8b8b8b",
      "text-tint": "#d1d1d1",
      "error-primary": "#e74346",
      "error-dark": "#b82a2d",
      "error-light": "#F8979B",
      "warn-primary": "#f7a74d",
      "warn-dark": "##E88139",
      "warn-light": "#FACB90",
      "matching-primary": "#49BD58",
      "matching-dark": "#009024",
      "matching-light": "#9AD79E",
      "mobile-menu-border": "#dddddd",
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      flexGrow: {
        "2": 2
      },
      width : {
        "label-width" : '66px',
      },
      height : {
        "label-height" : '24px',
        "mobile-section" : '300px'
      },
      padding : {
        "label-y-padding" : '4px',
        "label-x-padding" : '18px'
      },
      keyframes : {

      },
      animation : {

      },
      borderWidth: {
        '1px': '1px',
      },

  },
  plugins: [],
  },
}