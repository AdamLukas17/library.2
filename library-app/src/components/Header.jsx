import bookIcon from '../assets/library-book-icon.png';

function Header() {
    return(
        <>
        <div className="flex flex-row justify-between items-center p-4">
            <div className="flex flex-col">
            <div className="font-overpass">
            <h2>Your Books</h2>
        </div>
        <div className="font-overpass">
            <p>Book Count: 0</p>
        </div>
            </div>
        
        <div>
            <img src={bookIcon} alt="library-book-icon" className="flex w-auto h-14"/>
        </div>
        
        </div>



        

       

        
        </>
    )
}

export default Header;