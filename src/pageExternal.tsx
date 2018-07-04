import * as React from 'react';

export class PageExternal extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: "blue", padding: "20px" }}>
        <h1>page external</h1>
        <hr />
        {this.props.children}
      </div>
    )
  }
}