import "./css/styles.css"

function InputField(props){
    return (
        <div class={props.class}>
            <input class="mb-1 form-control" type={props.type} placeholder={props.placeholder} />
            <br />
        </div>
    )
}

export default InputField;