import React from 'react';

const UploadFile = props => {
  return (
    <div className='row'>
      <div className="col-xl-12">
        <div className="input-group image-preview">
          <input type="text" className="form-control image-preview-filename" disabled="disabled" />
          <span className="input-group-btn">
            <button type="button" className="btn btn-light image-preview-clear" style={{display: 'none',}}>
              <span className="glyphicon glyphicon-remove"></span> Clear
            </button>
            <div className="btn btn-light image-preview-input">
              <span className="glyphicon glyphicon-folder-open"></span>
              <span className="image-preview-input-title">Browse</span>
              <input type="file" accept=".pdf, .docx" name="input-file-preview"/>
            </div>
          </span>
        </div>
        <div className='file-required-label' style={{display: 'none'}}>Is Required</div>
      </div>
    </div>
  )
}

export default UploadFile;
