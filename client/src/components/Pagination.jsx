import "../App.css";
import "./../css/home.css";



function Pagination(props) {
    const pagenum = []

   
    for(let i = 1 ; i <= Math.ceil(props.totalProducts / props.arrayPerPage); i++){
        pagenum.push(i)
       
    }
 

  return (
    <div className=" padding margtop">
        <div className="arraynum flexrow center">
            {pagenum.map(num => (
                <div key={num} className="f">
                    <a href="#temp" onClick={()=> props.paginate(num)} className="pagelink cbc">
                        {num}
                    </a>
                </div>
            ))}
        </div>

    </div>
  );
}

export default Pagination;
