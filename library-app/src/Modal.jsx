import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Modal({ onAddBook }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const newBook = { title, author };
        onAddBook(newBook);
        setTitle('');
        setAuthor('');
    }

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md   
 mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <h3 className="text-2xl   
 font-bold mb-4">Add New Book</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                Title:
              </label>
              <input

                type="text"
                id="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
 focus:shadow-outline"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="author"
 className="block text-gray-700 text-sm font-bold mb-2">
                Author:
              </label>
              <input
                type="text"
                id="author"

                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 

                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            {/* Add more input fields for other book details */}
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none
 focus:shadow-outline"
                type="submit"
              >
                Add Book
              </button>

              <button
                className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

                type="button"
                // eslint-disable-next-line no-undef
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div> 
    </div>
  );
}

export default Modal;