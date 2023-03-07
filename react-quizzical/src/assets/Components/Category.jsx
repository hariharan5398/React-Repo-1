import React from "react";
import { categoryList } from "../../Data/sourceData";

export default function Category(){

    


    return(

        <form>
            <input type={"number"}/>
            <select name={"category"}>
                {
                    categoryList.map((element, index)=>{
                        return <option id={index+"-category"} value={element}>{element}</option>
                    })
                }
            </select>


        </form>

    )
}