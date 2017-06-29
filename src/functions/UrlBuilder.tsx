const api_queryString: string = "api-key";

export function UrlBuilder(baseUrl: string, path: string, apiKey: string){
    return baseUrl + path + "?"+ api_queryString + "=" + apiKey;
}