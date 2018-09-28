import React from 'react';
import ReactLoading from "react-loading";

const Loader = () => {
  return(
    <div className="loader">
      <ReactLoading type={'bars'} color={'#fafafa'} height={'5%'} width={'5%'}/>
    </div>
  );
}

export default Loader;
