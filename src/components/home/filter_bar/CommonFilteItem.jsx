import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function CommonFilterItem() {
    const newUuid = uuidv4();
  return (
 <>
 <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3" >
          <input type="checkbox" className="custom-control-input"  id={`${newUuid}`}/>
          <label className="custom-control-label" htmlFor={`${newUuid}`}>All</label>
    </div>
 </>

        


  );
}

export default CommonFilterItem;