import React,{Component} from 'react'


const Footer = (props) => {
     const {name,id} = props
    return (
        <div>
             <h4 className="txt txt-aline:center">by {name},{id}</h4>
        </div>
   
    )
}

export default Footer