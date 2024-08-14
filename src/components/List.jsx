import Card from './Card';
import { useState } from 'react';

const List = () => {
  const [cards, setCards] = useState([{title: "Foo", id: 0}, {title: "Bar", id: 1}, {title: "Foobar", id: 3}]);
  const [newCard, setNewCard] = useState('');

  const addCard = () => {
    const tempArr = [...cards];
     const card = {title: newCard, id: cards.length};
     tempArr.push(card);
     setCards(tempArr);
     setNewCard('');
   }
  
  return (
    <div className="list">
      <div className="add-card-form">
        <input type="text" value={newCard} className="new-card-input" onChange={(e) => setNewCard(e.target.value)}/><button onClick={addCard}>Add card</button>
      </div>
      {cards.map((card) => <Card title={card.title} key={card.id} />)}
    </div>
  )
}

export default List;