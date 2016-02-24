import React, { Component } from 'react'

class TextInput extends Component {
  handleSubmit(e) {
    if (e.which === 13) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    return (
      <input type="text" placeholder="input todo" onKeyDown={this.handleSubmit.bind(this)}/>
    )
  }
}

export default TextInput
