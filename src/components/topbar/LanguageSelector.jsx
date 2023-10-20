import React from 'react';

function LanguageSelector() {
  return (
    <div className="btn-group mx-2">
      <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">ENG</button>
      <div className="dropdown-menu dropdown-menu-right">
        <button className="dropdown-item" type="button">BN</button>
      </div>
    </div>
  );
}

export default LanguageSelector;
