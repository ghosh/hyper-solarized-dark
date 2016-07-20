const backgroundColor = '#002b36'
const foregroundColor = '#839496'
const cursorColor = '#b58900'
const borderColor = 'rgba(38, 139, 210, 0.3)'
const activeTabBorderColor = '#2aa198' // yellow

const colors = [
  backgroundColor,
  '#dc322f', // red
  '#859900', // green
  '#b58900', // yellow
  '#268bd2', // blue
  '#6c71c4', // violet
  '#2aa198', // cyan
  '#eee8d5', // light gray
  '#586e75', // medium gray
  '#dc322f', // red
  '#586e75', // green
  '#657b83', // yellow
  '#839496', // blue
  '#6c71c4', // violet
  '#2aa198', // cyan
  '#ffffff', // white
  foregroundColor
]

exports.middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor
      action.config.backgroundColor = backgroundColor
      action.config.cursorColor = cursorColor
      action.config.colors = colors
  }
  next(action)
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
      .cursor-node {
      	width: .325rem !important;
      }
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active {
        border: transparent !important;
        font-weight: bold;
        color: #b3b3b3 !important;
        background-color: #001f27;
        border-bottom: solid 3px ${activeTabBorderColor} !important;
      }
    `
  })
}
