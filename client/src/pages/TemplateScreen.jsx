import '../App.css';
import '../css/home.css'
import { useDispatch, useSelector } from "react-redux";
import {  useState } from "react";
import Pagination from '../components/Pagination';
import TemplatsList from '../components/templats/TemplatsList';
import TemplateSection from '../components/templats/TemplateSection';

function TemplateScreen() {
    const dispatch = useDispatch();
    const templates = useSelector((state) => state.templates);

  
  console.log(templates.template)


      const [currentPage, setCurrentPage] = useState(1);
    const [arrayPerPage, setArrayPerPage] = useState(16);
    const indexOfLastProduct = currentPage * arrayPerPage;
    const indexOfFirstProduct = indexOfLastProduct - arrayPerPage;
    const currentArray = templates.template.slice(indexOfFirstProduct,indexOfLastProduct)
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
  return ( 
    <div className="templateScreen flexcol center ">

           
          <TemplateSection arr={currentArray} />
           <Pagination paginate={paginate} arrayPerPage={arrayPerPage} totalProducts={templates.template.length}/>
      
      

    </div>
  );
}

export default TemplateScreen;
