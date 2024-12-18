import AddButton from "./AddButton";
import Header from "./Header";

function MainContainer() {
    return(
        <div className = "bg-white m-8 p-8 h-screen">
            <div>
                <Header />
                <AddButton /> 
            </div> 
        </div>
    )
}

export default MainContainer;
