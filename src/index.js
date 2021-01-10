import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

// por un error de compatibilidad debi importar ApolloProvider de react-apollo en ver de @apollo/react-hooks
console.log('Iniciando aplicacion')

const client = new ApolloClient({
  uri: 'https://petgram-server-javier-gniqu123t.vercel.app/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app'))
