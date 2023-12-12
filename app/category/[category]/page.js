import React from 'react'
import { useSearchParams } from 'next/navigation'
// import {useServer} from 'next/server'
import Apicall from "components/apicall"
import Cards from "components/cards"
async function CategoryPage({ params }) {

    
    async function getnews(category = "general") {

        
        const data = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=" +
            category +
            "&apiKey=ec4810ca37fd45728e97017e6fdba1b1")
        const json = await data.json();
        return json;
    }

    let dataobj = await getnews(params.category)
    const cardData=dataobj.articles;
    return (
        <div className="HB">
          { 
            (!cardData)?(null):
                cardData?.map(item => <Cards key={item.source.id}  {...item} />)
          }
        </div>
        )
     
     
}
export default CategoryPage
//   const searchParams = useSearchParams();
//   let catFilter="general"
//   if (searchParams.get("category") != null) {
//     catFilter = searchParams.get("category")
//   }
  //  useServer(() => {  props.getnews(catFilter)}, [catFilter]);
