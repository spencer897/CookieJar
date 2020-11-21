import React, { Component } from 'react';
import { render } from 'react-dom';
import CookieJar from './CookieJar';
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const MainCookieContainer = (props) => (
  <div>
    <Grid id='cntr' verticalAlign='middle' centered columns={2} >
      <Grid.Column>
        <Header>Welcome to the Cookie Jar</Header>
        <CookieJar />
        <Button>COOKIES!!!</Button>
      </Grid.Column>
    </Grid>
  </div>
);

export default MainCookieContainer;
