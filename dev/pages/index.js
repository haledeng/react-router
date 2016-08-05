define('pages/index', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _reactRouter = require('node_modules/react-router/lib/index');
  
  var App = (0, _react.createClass)({
      render: function render() {
          return _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                  'h1',
                  null,
                  'App'
              ),
              _react2['default'].createElement(
                  'ul',
                  null,
                  _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                          _reactRouter.Link,
                          { to: '/about' },
                          'About'
                      )
                  ),
                  _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                          _reactRouter.Link,
                          { to: '/inbox' },
                          'Inbox'
                      )
                  )
              ),
              this.props.children
          );
      }
  });
  
  var Dashboard = _react2['default'].createClass({
      displayName: 'Dashboard',
  
      render: function render() {
          return _react2['default'].createElement(
              'div',
              null,
              'Welcome to the app!'
          );
      }
  });
  
  var About = (0, _react.createClass)({
      render: function render() {
          return _react2['default'].createElement(
              'h3',
              null,
              'About'
          );
      }
  });
  
  var Inbox = (0, _react.createClass)({
      render: function render() {
          return _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                  'h2',
                  null,
                  'This is router Inbox'
              ),
              this.props.children || "Welcome to your Inbox"
          );
      }
  });
  
  var Message = (0, _react.createClass)({
      render: function render() {
          return _react2['default'].createElement(
              'h3',
              null,
              'Message ',
              this.props.params.id
          );
      }
  });
  
  (0, _reactDom.render)(_react2['default'].createElement(
      _reactRouter.Router,
      null,
      _react2['default'].createElement(
          _reactRouter.Route,
          { path: '/', component: App },
          _react2['default'].createElement(_reactRouter.IndexRoute, { component: Dashboard }),
          _react2['default'].createElement(_reactRouter.Route, { path: 'about', component: About }),
          _react2['default'].createElement(
              _reactRouter.Route,
              { path: 'inbox', component: Inbox },
              _react2['default'].createElement(_reactRouter.Route, { path: 'messages/:id', component: Message })
          )
      )
  ), document.getElementById('container'));

});
