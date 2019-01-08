var React = require('react')
var h = React.createElement

var UibookHeader = require('./header')
var UibookEvents = require('./events')

var THEMES = {
  default: '#f2f2f2',
  white: '#fff',
  dark: '#ddd'
}

var Page = function (props) {
  return h('div', {
    className: 'uibook-page',
    style: { background: THEMES[props.background] }
  }, props.children)
}

var Uibook = function (props) {
  return h(Page, { background: props.background }, [
    h('div', { className: 'uibook-top', key: 'top' },
      h(UibookEvents, { events: props.events })
    ),
    h(UibookHeader, {
      onValueChange: props.onValueChange,
      onPageChange: props.onPageChange,
      onNextPage: props.onNextPage,
      onPrevPage: props.onPrevPage,
      values: props.values,
      color: THEMES[props.background],
      pages: props.pages,
      state: props.state,
      page: props.page,
      key: 'header'
    }),
    h('main', { className: 'uibook-container', key: 'body' }, props.children)
  ])
}

module.exports = Uibook
