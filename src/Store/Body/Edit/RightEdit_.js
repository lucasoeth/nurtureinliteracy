import $ from 'jquery';
import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

class RightEdit extends Component {

  componentDidMount = () => {
    $(function() {
        // Clear event
        $('.image-preview-clear').click(function(){
            $('.image-preview-filename').val("");
            $('.image-preview-clear').hide();
            $('.image-preview-input input:file').val("");
            $(".image-preview-input-title").text("Browse");
        });
        // Create the preview image
        $(".image-preview-input input:file").change(function (){
            var file = this.files[0];
            var reader = new FileReader();
            // Set preview image into the popover data-content
            reader.onload = function (e) {
                $(".image-preview-input-title").text("Change");
                $(".image-preview-clear").show();
                $(".image-preview-filename").val(file.name);
            }
            reader.readAsDataURL(file);
        });
    });
  }

  state = {
    details: '',
  }

  onDetailsChange = (e) => {
    this.setState({
      details: e.target.value,
    })
  }

  render() {
    return(
      <div id='right-edit' className='cart-body cart-body-right'>
        <Form>
          <FormGroup>
            <legend>Upload File</legend>

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
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <legend>Details</legend>
            <Input
              type="textarea"
              name="text"
              placeholder='Tell me more'
              value={this.props.RightEdit.details}
              onChange={ (e) => this.props.changeInputFor('RightEdit', 'details', e)}
            />
          </FormGroup>

          <FormGroup tag="fieldset">
            <legend>Radio Buttons</legend>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  onClick={ () => this.props.changeToExpress(false) }
                  defaultChecked
                />{' '}
                  Regular 7 Buissness Days
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  onClick={ () => this.props.changeToExpress(true) }
                />{' '}
                  Express 3 Buissness Days ( +$4.99 )
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default RightEdit;
