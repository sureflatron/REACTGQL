import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Header from './componentes/Header';
import Clientes from './componentes/Clientes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditarCliente from './componentes/EditarCliente';
import NuevoCliente from './componentes/NuevoCliente';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
    console.log("Corriendo Cliente");
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <Header/>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Clientes}></Route>
                  <Route exact path="/nuevo" component={NuevoCliente}></Route>
                  <Route exact path="/editar/:id" component={EditarCliente}></Route>
                </Switch>
              </div>
          </Fragment>
        </Router>

      </ApolloProvider>
    );
  }
}

export default App;
