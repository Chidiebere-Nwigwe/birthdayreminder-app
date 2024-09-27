//import '../data'
import './Item.css'
function Item ({name,image,age}){
    return(
        <div>
            <img src={image}  alt="" name={name}/>
            <h3>{name} <br /> <span>{age} years</span></h3>
           
        </div>

    )

}

export {Item}