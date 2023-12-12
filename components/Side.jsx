'use client'
import { useState} from "react"
import React from "react"
import { useRouter } from 'next/navigation'
 
import Link from 'next/link'
export default function Side() {

    const router=useRouter()
    function Bar() { 
        return (
            <div className="Side4">
                <div className="Side3">
        
                    <button type="button" onClick={() => router.push('/category/general')}>General</button>
                    <br />
                    <button type="button" onClick={() => router.push('/category/entertainment')}>Entertainment</button>
                    <br />
                    <button type="button" onClick={() => router.push('/category/business')}>Business</button>
                    <br />
                    <button type="button" onClick={() => router.push('/category/health')}>Health</button>
                    <br />
                    <button type="button" onClick={() => router.push('/category/technology')}>Technology</button>
                    <br />
                    <button type="button" onClick={() => router.push('/category/sports')}>Sports</button>
                    <br />
                    <button type="button" onClick={() => router.push('/category/science')}>Science</button>
        </div>
            </div>
            
        )
    }
    const [count, setCount] = useState(false)
    return (

        <div className="Side1">
            <button className="Side2" onClick={()=>setCount(prevCount=>!prevCount)}>MENU</button>
            { count==true && Bar()}    
        </div>
    )
}

