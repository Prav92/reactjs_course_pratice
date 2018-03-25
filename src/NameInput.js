import React, { Component } from 'react';


class NameInput extends Component {
	render() {
    return (
      <div>
        <label for="name">Name</label>
        <input id="name" value={this.props.name} onChange={this.props.onChange} />
      </div>
    );
  }
}

class DisplayName extends Component {
	render() {
		return (
			<p>The Name is called {this.props.name}</p>
		);
	}
}

export default NameInput;
