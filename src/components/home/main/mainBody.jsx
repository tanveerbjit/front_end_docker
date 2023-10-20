import React from 'react';


function MainBody({children}) {
  return (
    
    <div className="container-fluid">
        <div className="row px-xl-5">
          
          {...children}
    
        </div>
    </div>
    
  )
}

export default MainBody