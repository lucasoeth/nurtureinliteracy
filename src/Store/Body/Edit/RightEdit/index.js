import $ from 'jquery';
import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import UploadFile from './UploadFile';

class RightEdit extends Component {

  componentDidMount = () => {
    var props = this.props;

    $(function() {
        // Clear event
        $('.image-preview-clear').click(function(){
          props.changeUploadedTo(false);
          $('.file-required-label').show();
          $('.image-preview-input').attr("class", "btn btn-light image-preview-input file-required")
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
              props.changeUploadedTo(true);
              $('.file-required-label').hide();
              $('.image-preview-input').attr("class", "btn btn-light image-preview-input")
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
            <UploadFile />
          </FormGroup>
          <FormGroup>
            <legend>Details</legend>
              <Input
                type="textarea"
                name="details"
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
                  name="express"
                  onClick={ () => this.props.changeExpressTo(false) }
                  defaultChecked
                />{' '}
                  Regular 7 Buissness Days
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="express"
                  onClick={ () => this.props.changeExpressTo(true) }
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
