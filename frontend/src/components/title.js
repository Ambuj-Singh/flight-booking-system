import React,{useRef} from "react";

const Title = ({param}) =>{
    let line1 = useRef(null);
    return(
        <div ref={el => (line1 = el)} className="title">
            <div className="text-3xl text-blue-600">
            {param}
            </div>
        </div>
    );
};

export default Title;