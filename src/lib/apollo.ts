import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4yjip4503p801uo10yqenqs/master',
    cache: new InMemoryCache()
})