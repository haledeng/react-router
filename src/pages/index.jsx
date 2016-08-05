import React, {
    createClass
} from 'react'
import {
    render
} from 'react-dom'
import {
    Router,
    Route,
    Link,
    IndexRoute
} from 'react-router'

const App = createClass({
    render() {
        return (
            <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
        )
    }
})

const Dashboard = React.createClass({
    render() {
        return <div>Welcome to the app!</div>
    }
})

const About = createClass({
    render() {
        return (<h3>About</h3>)
    }
})

const Inbox = createClass({
    render() {
        return (
            <div>
        <h2>This is router Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
        )
    }
})

const Message = createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
})

render((
    <Router>
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.getElementById('container'))