import React, { useState} from "react";

import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";
const countryOptions = [
  { key: "af", value: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", text: "Aland Islands" },
  { key: "al", value: "al", text: "Albania" },
  { key: "dz", value: "dz", text: "Algeria" },
  { key: "as", value: "as", text: "American Samoa" },
  { key: "ad", value: "ad", text: "Andorra" },
  { key: "ao", value: "ao", text: "Angola" },
  { key: "ai", value: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", text: "Antigua" },
  { key: "ar", value: "ar", text: "Argentina" },
  { key: "am", value: "am", text: "Armenia" },
  { key: "aw", value: "aw", text: "Aruba" },
  { key: "au", value: "au", text: "Australia" },
  { key: "at", value: "at", text: "Austria" },
  { key: "az", value: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", text: "Barbados" },
  { key: "by", value: "by", text: "Belarus" },
  { key: "be", value: "be", text: "Belgium" },
  { key: "bz", value: "bz", text: "Belize" },
  { key: "bj", value: "bj", text: "Benin" },
  { key: "in", value: "in", text: "India" },
];
const area = [
  { key: "r", text: "Rural", value: "rural" },
  { key: "u", text: "Urban", value: "urban" },
];
const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];
const mainCategory = [
  { key: "open", text: "OPEN", value: "OPEN" },
  { key: "opwd", text: "OPEN-PwD", value: "OPEN-PwD" },
  { key: "sc", text: "SC", value: "SC" },
  { key: "scwd", text: "SC-PwD", value: "SC-PwD" },
  { key: "st", text: "ST", value: "ST" },
  { key: "stwd", text: "ST-PwD", value: "ST-PwD" },

  { key: "obcncl", text: "OBC-NCL", value: "OBC-NCL" },
  { key: "obcpwd", text: "OBC-NCL_PWD", value: "OBC-NCL_PWD" },
  { key: "genes", text: "GEN-EWS-PwD", value: "GEN-EWS-PwD" },
  { key: "genewswd", text: "GEN-EWS-PwD", value: "GEN-EWS-PwD" },
];
const mobileOptions = [{ key: "in", text: "+91", vale: "+91" }];
function PersonalDetails(props) {
  function check(e) {
    props.stopRest(1);
    props.GoTo(1);
  }
  return (
    <>
      <Form className="form-submit-1">
        <Form.Group widths="equal">
          <Form.Field
            required
            name="sfname"
            control={Input}
            label="Full Name"
            placeholder="Full Name"
          />
          <Form.Field
            required
            name="semail"
            type="email"
            control={Input}
            label="Student Email"
            placeholder="Student Email"
          />
          <Form.Field
            required
            name="sgender"
            control={Select}
            label="Gender"
            options={options}
            placeholder="Gender"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            required
            name="sdob"
            type="date"
            control={Input}
            label="DOB"
            placeholder="DOB"
          />
          <Form.Field
            required
            name="religion"
            control={Input}
            label="Religion"
            placeholder="Religion"
          />
          <Form.Field
            required
            name="maincategory"
            control={Select}
            label="Main Category"
            options={mainCategory}
            placeholder="Main Category"
          ></Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            required
            name="smnum"
            control={Input}
            label="Student Mobile Number"
            placeholder="Student Mobile Number"
          />
          <Form.Field
            required
            name="saadhar"
            control={Input}
            label="Student's Aadhaar Number"
            placeholder="Student's Aadhaar Number"
          />
          <Form.Field
            required
            name="sarea"
            control={Select}
            label="Do you belong to"
            options={area}
            placeholder="Do you belong tor"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            required
            name="state"
            control={Input}
            label="Enter Your State"
            placeholder="Your State"
          />
          <Form.Field
            required
            name="country"
            control={Select}
            label="Country"
            options={countryOptions}
            placeholder="Country"
          />
          <Form.Field
            required
            name="pincode"
            control={Input}
            label="Pin Code"
            placeholder="Pin Code"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            required
            name="permadd"
            control={Input}
            label="Your Perment Address"
            placeholder="Your Perment Address"
          />
          <Form.Field
            control={Input}
            name="temadd"
            label="Your Temperory Address"
            placeholder="Your Temperory Address"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            required
            name="fname"
            control={Input}
            label="Father's Name"
            placeholder="Father's Name"
          />
          <Form.Field
            required
            name="focupation"
            control={Select}
            label="Father's Ocupation"
            options={countryOptions}
            placeholder="Father's Ocupation"
          />
          <Form.Field
            required
            name="femail"
            type="email"
            control={Input}
            label="Father's Email"
            placeholder="Father's Email"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            required
            name="fnum"
            control={Input}
            label="Father's Mobile Number"
            placeholder="Father's Mobile Number"
          />
          <Form.Field
            required
            name="fsalary"
            control={Input}
            label="Father's Salary in INR"
            placeholder="Father's Salary in INR"
          />
          <Form.Field
            required
            name="faadh"
            control={Input}
            label="Father's Aadhaar Number"
            placeholder="Father's Aadhaar Number"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            required
            name="mname"
            control={Input}
            label="Mother's Name"
            placeholder="Mother's Name"
          />
          <Form.Field
            required
            name="mocupation"
            control={Select}
            label="Mother's Ocupation"
            options={countryOptions}
            placeholder="Mother's Ocupation"
          />
          <Form.Field
            required
            name="memail"
            type="email"
            control={Input}
            label="Mother's Email"
            placeholder="Mother's Email"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            required
            name="mnum"
            control={Input}
            label="Mother's Mobile Number"
            placeholder="Mother's Mobile Number"
          />
          <Form.Field
            required
            name="msalary"
            control={Input}
            label="Mother's Salary in INR"
            placeholder="Mother's Salary in INR"
          />
          <Form.Field
            required
            name="maadh"
            control={Input}
            label="Mother's Aadhaar Number"
            placeholder="Mother's Aadhaar Number"
          />
        </Form.Group>

        <Form.Field className="submit-form-1" control={Button}>
          Submit
        </Form.Field>
      </Form>
    </>
    // <>
    //   {/* <h1 onClick={check}>Personal Details</h1> */}
    //   <div className="pd-container">
    //       <form >
    //     <div className="pd-rows">
    //       <div className="pd-item pd-item-1-2">
    //         <div className="pd-input-groups">
    //           <label className="pd-label" for="pd-name">
    //             <span className="pd-star">*</span>Your Full Name
    //           </label>
    //           <input
    //             className="pd-input"
    //             type="text"
    //             name="name"
    //             id="pd-name"
    //             required
    //             placeholder="Your Full Name"

    //           />
    //         </div>
    //       </div>
    //       <div className="pd-item pd-item-1-2">
    //         <div className="pd-input-groups">
    //           <label className="pd-label" for="pd-semail">
    //             <span className="pd-star">*</span>Student Email
    //           </label>
    //           <input
    //             className="pd-input"
    //             type="email"
    //             name="semail"
    //             id="pd-semail"
    //             required
    //             placeholder="Student Email"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="pd-rows">
    //       <div className="pd-item pd-item-1-2-3">
    //       <div className="pd-input-groups">
    //           <label className="pd-label" for="pd-dob">
    //             <span className="pd-star">*</span>Student Date of Birth
    //           </label>
    //           <input
    //             className="pd-input"
    //             type="date"
    //             name="dob"
    //             id="pd-dob"
    //             required
    //             placeholder="Student Date of Birth"
    //           />
    //         </div>
    //       </div>
    //       <div className="pd-item pd-item-1-2-3">
    //       <div className="pd-input-groups">
    //           <label className="pd-label" for="pd-name">
    //             <span className="pd-star">*</span>Religion
    //           </label>
    //           <input
    //             className="pd-input"
    //             type="text"
    //             name="religion"
    //             id="pd-religion"
    //             required
    //             placeholder="Religion"
    //             list="religion"
    //           />
    //           <datalist id="religion">
    //               <option value="Ahir"/>
    //               <option value="galva"/>
    //           </datalist>
    //         </div>
    //       </div>
    //       <div className="pd-item pd-item-1-3">
    //       <div className="pd-input-groups">
    //           <label className="pd-label" for="pd-gender">
    //             <span className="pd-star">*</span>Gender
    //           </label>
    //           <input
    //             className="pd-input"
    //             type="text"
    //             name="gender"
    //             id="pd-gender"
    //             required
    //             placeholder="Gender"
    //             list="gender"
    //           />
    //           <datalist id="gender">
    //               <option value="Male"/>
    //               <option value="Female"/>
    //               <option value="Other" />
    //           </datalist>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="pd-rows">
    //       <div className="pd-item pd-item-1-2-3">
    //       <div className="pd-input-groups">
    //           <label className="pd-label" for="pd-name">
    //             <span className="pd-star">*</span>Your Full Name
    //           </label>
    //           <input
    //             className="pd-input"
    //             type="text"
    //             name="name"
    //             id="pd-name"
    //             required
    //             placeholder="Your Full Name"
    //           />
    //         </div>
    //       </div>
    //       <div className="pd-item pd-item-1-2-3">
    //       <div className="pd-input-groups">
    //           <label className="pd-label" for="pd-name">
    //             <span className="pd-star">*</span>Your Full Name
    //           </label>
    //           <input
    //             className="pd-input"
    //             type="text"
    //             name="name"
    //             id="pd-name"
    //             required
    //             placeholder="Your Full Name"
    //           />
    //         </div>
    //       </div>
    //       <div className="pd-item pd-item-1-3">
    //       <div className="pd-input-groups">
    //           <label className="pd-label" for="pd-name">
    //             <span className="pd-star">*</span>Your Full Name
    //           </label>
    //           <input
    //             className="pd-input"
    //             type="text"
    //             name="name"
    //             id="pd-name"
    //             required
    //             placeholder="Your Full Name"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <button>submit</button>
    //     </form>
    //   </div>
    // </>
  );
}

export default PersonalDetails;
