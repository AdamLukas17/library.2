import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Modal({ onAddBook, setIsModalOpen }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const newBook = { title, author, pages };
        onAddBook(newBook);
        setTitle('');
        setAuthor('');
        setPages('');
    }

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>

      <div className="modal-container bg-gray-light w-11/12 md:max-w-md   
 mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <h3 className="text-2xl font-overpass   
 font-bold mb-4">Add New Book</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 font-overpass text-gray-700 text-md font-bold">
              <label htmlFor="title" className="block text-gray-700 text-md mb-2 font-overpass font-bold">
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
 className="block text-gray-700 text-md mb-2 font-overpass font-bold">
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

            <div className="mb-4 font-overpass text-gray-700 text-md font-bold">
              <label htmlFor="Pages" className="block text-gray-700 text-md mb-2 font-overpass font-bold">
                Pages:
              </label>
              <input

                type="number"
                id="pages"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
 focus:shadow-outline"
                value={pages}
                onChange={(e) => setPages(e.target.value)}
              />
            </div>
            {/* Add more input fields for other book details */}
            <div className="flex justify-end">
              <button
                className="hover:bg-rose-pink text-white font-overpass font-bold py-2 px-4 rounded focus:outline-none
 focus:shadow-outline"
                type="submit"
              >
                Add Book
              </button>

              <button
                className="hover:bg-rose-pink text-white font-overpass font-bold py-2 px-4 rounded focus:outline-none
 focus:shadow-outline"

                type="button"
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