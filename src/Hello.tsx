import * as React from "react";
import { Toggler } from './Toggler'
import { AccountPage } from './accountPage'

interface Props {
  name: string;
}

export default ({ name }: Props) => (
  <AccountPage>
    <div style={{ backgroundColor: "red", padding: "20px" }}>
      <h1>Hello {name}!</h1>
      <Toggler />
    </div>
  </AccountPage>
)
