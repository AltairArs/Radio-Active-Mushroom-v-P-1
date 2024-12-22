interface GraphQlResponse {
    data: {};
    errors?: [];
    statusCode: number;
}

async function graphqlFetchURL(url: string, query: string, additionalHeaders: object = {}, variables: object = {}): Promise<GraphQlResponse>{
    const headers: object = {
        "Content-Type": "application/json"
    }

    const response: Response = await fetch(url, {
        method: "POST",
        headers: {...headers, ...additionalHeaders},
        body: JSON.stringify({query, variables})
    });

    let graphqlResponse: GraphQlResponse = await response.json();
    graphqlResponse.statusCode = response.status;

    return graphqlResponse;
}

export async function graphqlFetch(url: string, query: string, additionalHeaders: object = {}, variables: object = {}): Promise<GraphQlResponse>{
    return graphqlFetchURL("http://localhost:8080/api/" + service, query, additionalHeaders, variables);
}

export async function graphqlFetchAuth(url: string, query: string, token: string, variables: object = {}): Promise<GraphQlResponse>{
    return graphqlFetchURL("http://localhost:8080/api/" + service, query, {"Authorization": "Bearer " + token}, variables);
}