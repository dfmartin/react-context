import * as React from "react";
import { PageExternal } from './pageExternal'

export class AccountPage extends React.Component {
  render() {
    return (
      <PageExternal>
        <div style={{ backgroundColor: "lightgreen", padding: "20px" }}>
            <h1>account page</h1>
            <hr />
            {this.props.children}
        </div>
      </PageExternal>
    );
  }
}
