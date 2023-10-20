import React from 'react';

function FilterHeader({header}) {
  return (
   <>
   <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">{header}</span>
      </h5>
   </>
  );
}

export default FilterHeader;
