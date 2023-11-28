import { useState } from 'react';


export function useEditing(initialState ) {
  const [isEditing, setIsEditing] = useState(initialState);
  

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
     
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Handle saving the modified data here
  };

  return {
    isEditing,
    handleEditClick,
    handleCancelClick,
    handleSaveClick,
  };
}




export function useEditingCard(initialCards) {
  const [cards, setCards] = useState(initialCards);
  console.log("initial " , initialCards , "cards" , cards )
  const handleEdit = (id) => {
    
    setCards((prevCards) =>
     
      prevCards.map((card) =>
        card.id === id ? { ...card, isEditing: true } : card
      ) ,
      
    );
  };

  const handleDelete = (id) => {
    setCards((prevCards) => {
      // Check if prevCards is an array, if not, return it as is
      if (!Array.isArray(prevCards)) {
        console.error("prevCards is not an array:", prevCards);
        return prevCards;
      }
  
      // Use filter if prevCards is an array
      return prevCards.filter((card) => card.id !== id);
    });
  };
  
  const handleAddCard = () => {
    if (cards.length < 15) {
      const newId = Math.max(...cards.map((card) => card.id), 0) + 1;
      const newCard = {
        id: newId,
        isEditing: false,
        name:'',
        description: '',
        images: [],
      };
      setCards([...cards, newCard]);
    }
  };

  const handleUpdate = (updatedData) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === updatedData.id ? { ...updatedData, isEditing: false } : card
      )
    );
  };

  const handleCancel = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isEditing: false } : card
      )
    );
  };

  return {
    cards,
    handleEdit,
    handleDelete,
    handleAddCard,
    handleUpdate,
    handleCancel,
  };
}
