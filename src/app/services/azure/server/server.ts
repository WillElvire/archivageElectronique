export class ServerDetails {

  // 1. the Service name
  public static searchServiceName = 'recherche002';

  // 2. The Admin Key

  public static searchServiceAdminApiKey = '8120625D96BC4D8CED61EE6F536FC14A';

  // 3. The Index Name

  public static searchIndexName = 'recherche002';

  public static searchIndexNameLucene = 'recherche002';

  // 4. The API Version

  public static apiVersion = '2020-06-30';

  public  static skillset = "azureblob-skillset";


  // 5. The Search URLS

  // tslint:disable-next-line: max-line-length
  public static searchUri = `https://${ServerDetails.searchServiceName}.search.windows.net/indexes/${ServerDetails.searchIndexName}/docs/search?api-version=${ServerDetails.apiVersion}`;

  // tslint:disable-next-line: max-line-length
  public static searchUriLucene = `https://${ServerDetails.searchServiceName}.search.windows.net/indexes/${ServerDetails.searchIndexNameLucene}/docs/search?api-version=${ServerDetails.apiVersion}`;


  // tslint:disable-next-line: max-line-length
  public static autocompleteUri = `https://${ServerDetails.searchServiceName}.search.windows.net/indexes/${ServerDetails.searchIndexName}/docs/autocomplete?api-version=${ServerDetails.apiVersion}`;


  // basic uri
  public static searchBasicUri = `https://${ServerDetails.searchServiceName}.search.windows.net/indexes?api-version=${ServerDetails.apiVersion}`;

  //skilset

  public skillsetUri  = ` https://${ServerDetails.searchServiceName}.search.windows.net/skillsets/${ServerDetails.skillset}?api-version=${ServerDetails.apiVersion}`


}
