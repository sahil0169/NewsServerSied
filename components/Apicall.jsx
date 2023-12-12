
import Api from "components/Api"
export async function Apicall() {
    
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=" +
        catFilter +
        "&apiKey=ec4810ca37fd45728e97017e6fdba1b1"
    );
    const json = await data.json();
  
    return json;
  }