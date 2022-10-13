import '../../App.css';
import '../../css/home.css'
// import Pagination from "../components/pagenation/Pagination";

import TemplatsList from './TemplatsList';


function TemplateSection(props) {
console.log(props.arr)


  return (
    <div className="placeCenter flexcol center">
        <h1>templates</h1>
     
    <div className="w80">
          <TemplatsList arr={props.arr} />
    </div>
      
        
      
    </div>
  );
}

export default TemplateSection;
