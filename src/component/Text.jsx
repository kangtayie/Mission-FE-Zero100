const Text=({type, text})=>{
    if(type==="h1"){
        return <h1>{text}</h1>;
    }else if(type==="h2"){
        return <h2>{text}</h2>;
    }

    return <div>{type}{text}</div>; //default
}

export default Text;