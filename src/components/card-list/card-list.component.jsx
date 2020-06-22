import React from 'react';
import './card-list.sytles.css';
import { Card } from '../card/card.component'

export const CardList = props => {
    return <div className='card-list'>
        {
            props.monsters.map(poops => (
                <Card key={poops.id} monster={poops}/>
            ))
        }
    </div>;
}