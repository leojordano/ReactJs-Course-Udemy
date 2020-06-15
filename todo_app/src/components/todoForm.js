import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
        value: ""
    }
  }
    
      onHandleChange(e) {
        this.setState({ value: e.target.value })
      }

      onClick(e) {
        this.props.onAddTodo(this.state.value)

        this.setState({ value: '' })
      }

    render() {
        const { value } = this.state

        return(
            <> 
                <input value={value} onChange={e => this.onHandleChange(e)} />
                <button type='button' onClick={e => this.onClick(e)}>Salvar</button>
            </>
        )
    }
}