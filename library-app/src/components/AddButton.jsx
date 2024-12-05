import { useState } from 'react';
import Modal from './Modal';
// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Button from '@mui/material/Button';

function AddButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
    setIsModalOpen(false); // Close the modal after adding
  };

    return( 
      <div className="flex flex-col items-center"> {/* Center content */}
     
      <Button className= "font-overpass" onClick={() => setIsModalOpen(true)}>Add Book</Button>

      {isModalOpen && <Modal onAddBook={handleAddBook} setIsModalOpen={setIsModalOpen}/>}

      {/* Display the books */}
      <div className="mt-8">
        {books.map((book, index) => (
          <div key={index} className="border rounded p-4 mb-2 bg-pale-blue font-overpass text-gray-light">
            {/* Display book details here */}
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddButton;