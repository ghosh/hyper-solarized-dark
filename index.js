const backgroundColor = '#002b36'
const foregroundColor = '#839496'
const cursorColor = 'rgba(181, 137, 0, 0.6)'
const borderColor = 'rgba(38, 139, 210, 0.3)'
const activeTabBorderColor = '#2aa198' // cyan

const colors = {
  black:          '#002b36',
  red:            '#dc322f',
  green:          '#859900',
  yellow:         '#b58900',
  blue:           '#268bd2',
  magenta:        '#6c71c4',
  cyan:           '#2aa198',
  white:          '#eee8d5',
  lightBlack:     '#586e75',
  lightRed:       '#dc322f',
  lightGreen:     '#586e75',
  lightYellow:    '#657b83',
  lightBlue:      '#839496',
  lightMagenta:   '#6c71c4',
  lightCyan:      '#2aa198',
  lightWhite:     '#ffffff',
}



exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      * {
      	-webkit-font-feature-settings: "liga" on, "calt" on, "dlig" on !important;
      	text-rendering: optimizeLegibility !important;
        font-weight: 500;
      }
      .tabs_list {
      	border: 0;
      }
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: #001f27;
      }
      .tab_tab:before {
      	border: 0;
      }
      .tab_tab.tab_active {
        border: transparent !important;
        font-weight: bold;
        color: #b3b3b3 !important;
        background-color: ${backgroundColor};
      }
    `
  })
}
