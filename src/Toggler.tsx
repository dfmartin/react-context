import * as React from 'react'
import { AppContext } from './contexts';

export class Toggler extends React.Component {

  render() {
    return (
      <AppContext.Consumer>
      { ctx  => (
        <h1>Title: {ctx.title}</h1>
      )}
      </AppContext.Consumer>
    )
  }
}