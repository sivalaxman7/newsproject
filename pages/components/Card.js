import react from "react";
import Link from "next/link";

const Card =({source,title,id,content})=>{
    return(
      <div className="card">
    <img src={source} alt="Denim Jeans" style={{"width":"100%"}}/>
    <h3>{title}</h3>
    <p className="innerpara">{content}</p>
    <Link href={`blogview/${id}`}><a className="inner-link" style={{"color":"black", "backgroundColor":"white","border":"2px solid lightgray" }}>View</a></Link>
  </div>
    )
}
export default Card