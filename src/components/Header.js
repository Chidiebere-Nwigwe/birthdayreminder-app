
function Header({data, children}){
 return(
    <h2 style={{marginLeft:"40px", fontWeight:"400", marginTop:"5px", marginBottom:"5px", padding:"0"}}>{data.length} {children}</h2>
 )
}

export {Header}