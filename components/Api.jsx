"use client"
import React from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
// import {useServer} from 'next/server'
import Apicall from "components/apicall"

 function Api(props) {
  const searchParams = useSearchParams();
  let catFilter="general"
  if (searchParams.get("category") != null) {
    catFilter = searchParams.get("category")
  }
  //  useServer(() => {  props.getnews(catFilter)}, [catFilter]);
 
   props.getnews(catFilter)
  return ( <></> )
}

export default Api