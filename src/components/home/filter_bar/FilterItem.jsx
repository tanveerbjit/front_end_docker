import React, { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import {addCategory,removeCategory} from "../../../store/slices/home/filter/categorySlice";
import {addAuthor,removeAuthor,} from "../../../store/slices/home/filter/authorSlice";
import { addRating,removeRating } from "../../../store/slices/home/filter/ratingSlice";
import { addPublisher,removePublisher } from "../../../store/slices/home/filter/publisherSlice";

function FilterItem({ item, filter }) {
  const newUuid = uuidv4();
  const [isChecked, setIsChecked] = useState(false);
  const [init, setInit] = useState(false);
  const [itemId, setItemId] = useState(1);
 
  const dispatch = useDispatch();


  const handleCheckboxChange = (id) => {

    setIsChecked(!isChecked); // Toggle the isChecked state
    setItemId(id);
    setInit(true);
  
  };

  useEffect(()=> {

    if(isChecked){
      switch(filter){
        case "category":
          dispatch(addCategory(itemId));
          break;
        case "author":
          dispatch(addAuthor(itemId));
          break;
        case "publisher":
          dispatch(addPublisher(itemId));
          break;
        case "rating":
          dispatch(addRating(itemId));
          break;
       
      }
    }else if(!isChecked && init){
      switch(filter){
        case "category":
          dispatch(removeCategory(itemId));
          break;
        case "author":
          dispatch(removeAuthor(itemId));
          break;
        case "publisher":
          dispatch(removePublisher(itemId));
          break;
        case "rating":
          dispatch(removeRating(itemId));
          break;
       
      }
    }
    },[isChecked])

  return (
    <>
      <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
        <input
          type="checkbox"
          className="custom-control-input"
          id={newUuid}
          checked={isChecked}
          onChange={() => handleCheckboxChange(item._id)}
        />
        <label className="custom-control-label" htmlFor={newUuid}>
          {item.name}
        </label>
      </div>
    </>
  );
}

export default FilterItem;
