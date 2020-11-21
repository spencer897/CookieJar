import React, { useState } from 'react';
import Axios from 'axios';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import '../app.css';

function LoginPage() {
  // React hooks for state management
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const register = () => {
    Axios({
      method: 'POST',
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: 'http://localhost:3000/register',
    }).then((res) => console.log(res));
  };

  const login = () => {
    Axios({
      method: 'POST',
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: 'http://localhost:3000/login',
    }).then((res) => console.log(res));
  };

  return (
    <Grid id='cntr' verticalAlign='middle' centered columns={2} >
      <Grid.Column id="login">
        <div className="App" id="cookie">
          <Segment>
            <Form>
              <div className="LoginComponent">
                <h1>Register</h1>
                <Form.Field>
                  <input
                    placeholder="username"
                    onChange={(e) => setRegisterUsername(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    placeholder="password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                  />
                </Form.Field>
                <Button type="button" onClick={register}>Submit</Button>
              </div>
            </Form>
            <Form>
              <div className="LoginComponent">
                <h1>Login</h1>
                <Form.Field>
                  <input
                    placeholder="username"
                    onChange={(e) => setLoginUsername(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    placeholder="password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </Form.Field>
                <Button type="button" onClick={login}>Submit</Button>
              </div>
            </Form>
          </Segment>
        </div>
      </Grid.Column>
    </ Grid>
  );
}

export default LoginPage;
