let nextmove = true;
const squares = new Array(9).fill(null);

const winner=(s)=>{
    let combinations=[
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
    ];
 for(let i in combinations){
    const[a,b,c]=combinations[i];
 
    if(s[a]&&s[a]===s[b]&&s[a]===s[c]){
        let set=[a,b,c];
     return set;
    }
  }
  return null;
 }

const handleClick = (e) => {
  // e.preventdefault();
  console.log(e.target);
  let id=Number.parseInt(e.target.id);
  console.log(id);
  if(squares[id]||winner(squares)){
    console.log(squares)
    return;
  }
  nextmove
    ? (squares[id] = "X")
    : (squares[id] = "O");

  if(nextmove){
    e.target.innerHTML="X";
    document.getElementById(id).style.color="red";
  }else{
    e.target.innerHTML="O";
    document.getElementById(id).style.color="black";
  }

  nextmove = !nextmove;
  
  let win=winner(squares);
  if(win){
    document.getElementById("display").innerHTML=`
    <h3 style="color:green">Winner is ${squares[win[0]]} ---</h3><br>
    <button id="play" style="background:green">Play Again</button>`
    document.getElementById(win[0]).style.color="green";
    document.getElementById(win[1]).style.color="green";
    document.getElementById(win[2]).style.color="green";

    document.getElementById("play").addEventListener("click",()=>{
        location.reload();
    })
    
  }else{
    document.getElementById("display").innerHTML=`
    <h4>Next Move : ${nextmove?"X":"O"}</h4>`
  }
};
