import React,{useRef} from "react";

const Title = ({param}) =>{
    let line1 = useRef(null);
    return(
        <div ref={el => (line1 = el)} >
            <div className="text-4xl text-blue-100 m-4 shadow-2xl">
            {param}
            </div>
        </div>
    );
};

export default Title;