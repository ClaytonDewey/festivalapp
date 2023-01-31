import { Authenticator } from "@aws-amplify/ui-react";
// import { Auth } from 'aws-amplify';
// import { Button } from "antd";
import '@aws-amplify/ui-react/styles.css';

const Admin = () => (
  <Authenticator>
    {({ signOut }) => (
      <div>
        <h1 style={titleStyle}>Admin</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
    )}
  </Authenticator>
)

const titleStyle = {
  fontWeight: 'normal',
  margin: '0px 0px 10px 0px'
}

export default Admin;