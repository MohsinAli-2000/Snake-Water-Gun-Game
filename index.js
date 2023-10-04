let You = prompt ("Choose snake ,water or gun");
let a = Math.floor(Math.random()*3);
let John = ["snake","water","gun"][a]

const match = (You , John)=>{
        if (You === John ){
            return "Match Draw!"
        }else if ( You === "snake" && John === "water" ){
            return "YOU"
        }else if ( You === "water" && John === "snake" ){
            return "JOHN"
        }else if ( You === "gun" && John === "snake" ){
            return "YOU"
        }else if ( You === "snake" && John === "gun" ) {
            return "JOHN"
        }else if ( You === "water" && John === "gun" ) {
            return  "YOU"          
        }else if ( You === "gun" && John === "water" ) {
            return "JOHN"
        }
}
let result = match (You , John);
document.write (`The John choice was ${John} and Your choice was ${You} and the winner is ${result} <br> Reload the page to Play Again!`)







