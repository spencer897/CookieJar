import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'semantic-ui-react';
import Cookie from './Cookie';
import '../app.css';

class CookieJar extends Component {

    // should render <p> tag with cookies info, which is passed down from Cookie Jar

    constructor(props) {
        super(props);
    }

    render() {
        const rawCookieArray = document.cookie.split('; ')
        const cookies = [];
        for (let i = 0; i < rawCookieArray.length; i++) {
            cookies.push(<Cookie key={i} cookie={rawCookieArray[i]} />);
        }
        return (
            <div>
                <Container >
                    {cookies}
                </Container>
            </div>
        );
    }
}

export default CookieJar;
