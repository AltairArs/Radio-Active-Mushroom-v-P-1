import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createApolloProvider } from 'vue-apollo';

const API_GATEWAY: string = "http://api-gateway:8080/api/";

function createClient(serviceName: string): ApolloClient{
    return new ApolloClient({
        uri: API_GATEWAY + serviceName,
        cache: new InMemoryCache()
    })
}

const clientAuthenticationService: ApolloClient = createClient("authentication-service");

const apolloProvider = createApolloProvider({
    defaultClient: clientAuthenticationService,
    clients: {
        clientAuthenticationService
    }
});

export default apolloProvider;