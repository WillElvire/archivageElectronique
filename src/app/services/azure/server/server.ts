export class ServerDetails {

  // 1. the Service name
  public static searchServiceName = 'recherche002';

  // 2. The Admin Key

  public static searchServiceAdminApiKey = '46E3CA397A8D4FCA6EDF78BE71E888EA';

  // 3. The Index Name

  public static searchIndexName = 'azureblob-index';

  public static searchIndexNameLucene = 'recherche002';

  // 4. The API Version

  public static apiVersion = '2020-06-30';

  public  static skillset = "azureblob-skillset";


  // 5. The Search URLS

  // tslint:disable-next-line: max-line-length
  public static searchUri = `https://recherche002.search.windows.net/indexes/azure-index/docs?api-version=2020-06-30-Preview&search=*`;

  public  static PostsearchUri = "https://recherche002.search.windows.net/indexes/azureblob-index/docs?api-version=2020-06-30-Preview&search=go"

  // tslint:disable-next-line: max-line-length
  public static searchUriLucene = `https://${ServerDetails.searchServiceName}.search.windows.net/indexes/${ServerDetails.searchIndexNameLucene}/docs/search?api-version=${ServerDetails.apiVersion}`;


  // tslint:disable-next-line: max-line-length
  public static autocompleteUri = `https://${ServerDetails.searchServiceName}.search.windows.net/indexes/${ServerDetails.searchIndexName}/docs/autocomplete?api-version=${ServerDetails.apiVersion}`;


  // basic uri
  public static searchBasicUri = `https://${ServerDetails.searchServiceName}.search.windows.net/indexes?api-version=${ServerDetails.apiVersion}`;

  //skillset

  public skillsetUri  = ` https://${ServerDetails.searchServiceName}.search.windows.net/skillsets/${ServerDetails.skillset}?api-version=${ServerDetails.apiVersion}`


  //dataSource

  public dataSource = `https://[service name].search.windows.net/datasources/[data source name]?api-version=[api-version]&includeConnectionString=[includeConnectionString]`


}
