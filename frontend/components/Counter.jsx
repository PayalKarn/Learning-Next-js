import { useState } from "react"

export const Counter = () =>{
    const [Inc , setInc] = useState(0)


    return (
        <>
        <button className="bg-amber-800 px-4 py-2 mx-2" onClick={()=>setInc((prev)=> prev+1)}>ADD - {Inc}</button>
        </>
    )
}