import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Header from './componentes/Header';
import Clientes from './componentes/Clientes';

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
       <Header/>
       <Clientes/>
      </ApolloProvider>
    );
  }
}

export default App;
