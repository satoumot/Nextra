"use client";
import '@docsearch/css'
import { DocSearch } from '@docsearch/react'

export default function Algolia(){
    return(
               <DocSearch
        appId='LU594YEDZA'
        indexName= 'dev_crawler'
        apiKey= 'e7dbb83e71e3969c82307d7753731750'
        />
    )
}