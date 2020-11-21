import React, { Component } from 'react';
import { render } from 'react-dom';
import CookieJar from './CookieJar';
import { Button, Container, Grid, Header, Segment } from 'semantic-ui-react';

const MainCookieContainer = (props) => (
  <div>
    <Grid verticalAlign='middle' centered columns={2} >
      <Grid.Column id='cntr' >
        <Segment id='ck' textAlign="center">
          <Header >Welcome to the Cookie Jar</Header>
          <CookieJar />
          <Button>COOKIES!!!</Button>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

export default MainCookieContainer;
