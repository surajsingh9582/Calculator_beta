import { useState } from "react";
import Btn from "./BtnText";
import Searchbar from "./serachBar";

let Container=()=>{
    const arr=["1","2","3","+","4","5","6","-","7","8","9","*","0",".","C","/","="]
    const [data,setData]=useState("");
    let Cdata=(ele)=>{
        if(ele=="="){
            let a=eval(data);
            setData(a);
        }
        else if(ele=="C"){
            setData("")
        }
        else{
        setData((prev)=>prev+ele)
        console.log(data)
        }
    }

    return <div className="h-110 border w-96 mx-auto mt-15 rounded-lg bg-black">
        <Searchbar value={data}/>
        <Btn arr={arr} data={Cdata}/>
    </div>
}
export default Container;
