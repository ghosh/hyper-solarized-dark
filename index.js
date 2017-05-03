const backgroundColor = '#002b36'
const foregroundColor = '#839496'
const cursorColor = 'rgba(181, 137, 0, 0.6)'
const borderColor = 'transparent'

const colors = {
  lightBlack:     '#586e75',
  black:          '#073642',
  lightGreen:     '#586e75',
  lightYellow:    '#657b83',
  lightBlue:      '#839496',
  lightCyan:      '#93a1a1',
  white:          '#eee8d5',
  lightWhite:     '#fdf6e3',
  yellow:         '#b58900',
  lightRed:       '#cb4b16',
  red:            '#dc322f',
  magenta:        '#d33682',
  lightMagenta:   '#6c71c4',
  blue:           '#268bd2',
  cyan:           '#2aa198',
  green:          '#859900'
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
      .tabs_nav {
      	background-color: #001f27 !important;
      }
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: #001f27;
				border-color: ${borderColor} !important;
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
      .splitpane_divider {
      	background-color: #001f27 !important;
      }
    `
  })
}