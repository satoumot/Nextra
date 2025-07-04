import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

export function AlgoliaSearch() {
    const appId = 'LU594YEDZA'
    const apiKey = 'e7dbb83e71e3969c82307d7753731750'
    const indexName = 'dev_crawler'

    return (
        <DocSearch
        appId={appId}
        apiKey={apiKey}
        indexName={indexName}
        />
        )
        
}
// docsearch({
//   container: '#docsearch',
//   appId: 'LU594YEDZA',
//   indexName: 'dev_crawler',
//   apiKey: 'e7dbb83e71e3969c82307d7753731750'
// });