import '../Css/Button.css';
function Button(props){
    return(
       
            <button onClick={props.fun} className='button'>{props.name}</button>
        
    )

}
export default Button;