import React from "react";



export default function Tile(props){
    const TileNos = 10
    const {num, Setnum, rand} = props;
    const [butFunc, setButFunc] = React.useState(true)
    const [holdObj, SetHoldObj] = React.useState(
        
        {    
             holder : undefined,
             holdBoolean : true,
             flag : []
         }
     
     )
    
  
    const {holder, holdBoolean, flag} = holdObj
    
    // Triggered onCLick of a tile
  function blockTile(event){

    let picker = Number(event.target.textContent)
    let pickerId = Number(event.target.id)

    // Hold the initial value
    if(holdBoolean){
     
        SetHoldObj(
            (prev)=>{
                return {...prev,
                holdBoolean : false,
                holder : picker
            }
        })


        
    }
    
    // Apply style if initial pick & current pick are same
    if( holder == picker ){
    event.target.classList.add("TileElement-click")
    if(flag.indexOf(pickerId) == -1){
      flag.push(pickerId)
    }

    // Change butFunc if all tiles selected
    if(flag.length == TileNos){
        setButFunc(
            (prev)=>false
        )
    }
  }
  }



//   Roll the tiles
function Roll(){
    Setnum(

        (prevNum)=>{
            for(let i=0; i<TileNos; i++){
                if(flag.indexOf(i) == -1){
                    prevNum[i]=rand()
                }
            }
            return [...prevNum]
        }
    )

}


// Reset Game
function ResetGame(){

    // Reset HoldObj State
    SetHoldObj(
        (prev)=>{
            return{
                ...prev,
             holder : undefined,
             holdBoolean : true,
             flag : []
            }
        }
        )
            
        // Reset Num State 
        Setnum(

            (prev)=>{
                let init=[];
                const TileObj = document.getElementsByClassName("TileElement")
                for(let i=0; i<TileNos; i++){
                    init.push(rand())
                    TileObj[i].classList.remove("TileElement-click")
                }
                return init
            }
        )
    
        setButFunc((prev)=>!prev)
}



    //Stack the tiles in a array 
    let TileElement = num.map(
        (value, index)=>{
        return <div 
            key={index}
            id={index}
            onClick={(event)=>blockTile(event)}
            className={"TileElement"}
        
        >{value}</div>
    }
    )

    return(
        <div className="TileSpace">
            <div className="TileSpaceEle col-7 grid">{TileElement}</div>
            <button 
            onClick={butFunc ? Roll : ResetGame}
            className={butFunc ? "btn btn-primary" : "btn btn-success"}
            >
            {butFunc ? "Roll" : "Reset Game"}</button>
        </div>
    )
}