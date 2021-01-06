import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [
        { id: 1, name: 'Thing 1', description: 'thing one'},
        { id: 2,name: "Thing 2", description: "These Things will not bite you. The want to have fun. Then out of the box came thing two and thing one"},
      ]
      
    }
    this.onCreated = this.onCreated.bind(this)
  }
  onCreated(thing) {

    const things = [...this.state.things, thing];
    thing.id = things.length
    this.setState({ things })
  }


  render() {
    return(
      <div className="App">
        <Header thingCount={this.state.things.length} />
        <ThingList onCreated={this.onCreated} things={this.state.things} />
        <Footer />
        </div>
    )
  }
}

function Header(props) {
  return <h2>Thing Tracker: {props.thingCount}</h2>
}

class ThingList extends Component {

  render() {
    return (
      <div>

        <ThingForm onCreated={this.props.onCreated} />

        <ul>
          {this.props.things.map(thing => (
            <ThingItem key={thing.id} name = {thing.name} description = {thing.description} />
        ))}
      </ul>
      </div>
    )
  }
}

class ThingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", description: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onCreated(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Thing Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function ThingItem(props) {
  return <li>{props.name}</li>
}

function Footer(){
  return <h2>Footer soon</h2>
}

export default App;
