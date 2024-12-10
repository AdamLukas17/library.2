import AddButton from "./AddButton";
import Header from "./Header";

function MainContainer() {
    return(
        <div className = "bg-pale-cream m-8 p-8">
            <div>
                <Header />
                <AddButton /> 
            </div> 
        </div>
    )
}

export default MainContainer;
