import { useState } from 'react';
import Modal from './Modal';

function AddButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
    setIsModalOpen(false); // Close the modal after adding
  };

    return( 
      <div className="flex flex-col items-center"> {/* Center content */}
      <div className="p-6 py-6 max-w-sm mx-auto bg-gray-dark rounded-full shadow-lg flex items-center gap-x-2">
     
        <button
          className="px-3 py-4 text-sm font-semibold rounded-full bg-gray-light border-purple hover:text-gray-light hover:bg-purple hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 text-purple"
          onClick={() => setIsModalOpen(true)}
        >
          Add
        </button>
      </div>

      {isModalOpen && <Modal onAddBook={handleAddBook} />}

      {/* Display the books */}
      <div className="mt-8">
        {books.map((book, index) => (
          <div key={index} className="border rounded p-4 mb-4">
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