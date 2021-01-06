import React, {Component} from 'react';
import AppNav from './AppNav';
import {Row} from 'reactstrap'
import {CLIENT_VERSION, REACT_VERSION, SERVER_URL} from './config';
import 'whatwg-fetch';

  class App extends Component {

    state = {
      serverInfo: {},
      clientInfo: {
        version: CLIENT_VERSION,
        react: REACT_VERSION
      },
      collapse: false
    }

    toggle = () => {
        this.setState({collapse: !!this.state.collapse})
    }

    componentDidMount() {
        fetch(SERVER_URL + '/api/application')
            .then(r => r.json())
            .then(json => this.setState({serverInfo: json}))
            .catch(error => console.error('Error connecting to server: ' + error));

    }

    render() {
        const {serverInfo, clientInfo, collapse} = this.state;

        return [
            <AppNav collapse={collapse} toggle={this.toggle} key={0}/>,
            <Row key={2}>
                <div id="content">
                    <section className="row colset-2-its">
                        <h1 style={{textAlign: 'center'}}>Local Zone Online Companies</h1>
                       

                        <div id="controllers" role="navigation">
                            
                            <h2>Available Controllers:</h2>
                            <ul>
                                {serverInfo.controllers ? serverInfo.controllers.map(controller => {
                                    return <li key={controller.name}><a
                                        href={SERVER_URL + controller.logicalPropertyName}>{controller.name}</a>
                                    </li>;
                                }) : null}
                            </ul>
                        </div>
                    </section>

                </div>

            </Row>,
            // <Footer key={3}/>
        ];
    }
}

export default App;
