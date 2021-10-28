import {useState} from "react"; 




function State() {

    
    const [mas, setMas] = useState([]); 
    const [take, setTake] = useState(""); 

    const send = () => {
 
        setMas([...mas, take]); 
        setTake(""); 
        console.log(mas); 
       
    }

    const deleteMasElement = (index) => { 
      const list = mas;
      mas.splice(index, 1);
      setMas( [...list] );
    }

    const List = ({mas}) => (
        <div>
            <ul> 
            {mas.map((element, index) => (<li key={index}><span>{element}</span><button onClick={({index}) => deleteMasElement(index)} >Удалить</button></li>))} 
           
            </ul>
        </div> 
    ); 
  

    return (
        
      <div> 
         <List mas={mas} /> 
        <input type="text" name="firstName" value={take} onChange={(event) => setTake(event.target.value)} />
        <button onClick = {send} type="button"> Кнопка </button>
      </div> 
    );
  }
  
  
  
  export default State; 
  