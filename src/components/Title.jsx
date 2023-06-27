import "./css/Title.css"

function Title(props){
    return (
        <div className="text-center">
            <h1>{props.title}</h1>
        </div>
    );
}

export default Title;