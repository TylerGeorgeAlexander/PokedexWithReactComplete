import React, { useRef } from 'react';

function Search(props){
  const searchInput = useRef(null);
  
  function onBtnClick(){
    // we need to get the value from the input
    props.setSearch(searchInput.current.value);
    
    // reset the input = ''
    searchInput.current.value = '';    
  }
  
  return (
    <div className="search-container">
        <input id="name-input" type="text" placeholder="Enter Pokemon name or number!" ref={searchInput}/>
        <div id="search-btn" className="ball-container" onClick={onBtnClick}>
          <div className="upper-half-ball"></div>
          <div className="bottom-half-ball"></div>
          <div className="center-ball"></div>
          <div className="center-line"></div>
        </div>
      </div>
  );
}

export default Search;