
import './card-list.style.css';
import Card from "../card/card.component";
import { forwardRef } from 'react';


const CardList = ({monsters}) => (
    
            <div className="card-list">
                {monsters.map((monster)=>{
                    
                    return <Card monster={monster}/>;
                })}
            </div>
       
)


export default CardList;