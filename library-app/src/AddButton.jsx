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
      <div className="p-6 py-10 max-w-sm mx-auto bg-gray-dark rounded-xl shadow-lg flex items-center gap-x-4">
        <button
          className="text-xl font-medium text-primary"
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