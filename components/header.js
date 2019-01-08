var React = require('react')
var h = React.createElement

var UibookPageSelect = require('./select')
var fixClick = require('../lib/fix-click')

var Header = function (props) {
  return h('header', { className: 'uibook-header' }, props.children)
}

var UibookHeader = function (props) {
  var onNextPage = function (e) {
    props.onNextPage()
    fixClick(e)
  }
  var onPrevPage = function (e) {
    props.onPrevPage()
    fixClick(e)
  }

  var selectors = []
  if (props.values) {
    for (var key in props.values) {
      if (props.values[key]) {
        selectors.push({
          key: key,
          values: props.values[key]
        })
      }
    }
  }

  return h(Header, { key: 'header' }, [
    h('div', { key: 'controls' }, [
      h('button', {
        className: 'uibook-arrow',
        onClick: onPrevPage,
        key: '←'
      }, '←'),
      ' ',
      h(UibookPageSelect, {
        onPageChange: props.onPageChange,
        color: props.color,
        pages: props.pages,
        page: props.page,
        key: 'select'
      }),
      ' ',
      h('button', {
        className: 'uibook-arrow',
        onClick: onNextPage,
        key: '→'
      }, '→')
    ]),
    selectors.length > 0
      ? selectors.map(function (selector) {
        return h('select', {
          className: 'uibook-select',
          onChange: props.onValueChange,
          value: props.state[selector.key],
          key: selector.key,
          id: selector.key
        }, selector.values.map(function (value) {
          return h('option', {
            value: value,
            key: selector.key + value
          }, value)
        }))
      })
      : null
  ])
}

module.exports = UibookHeader
