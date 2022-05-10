import React, { useState } from "react";

function Form() {
  //State
  const [search, saveSearch] = useState({
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    saveSearch({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="row justify-content-left mt-5 col-md-12">
      <div className="card ">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="form-group mb-3 row">
                  <div className="col-md-3 mt-1">
                    <label>
                      <strong>City:</strong>
                    </label>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="textarea"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group mb-2 row">
                  <div className="col-md-6">
                    <select
                      onChange={handleChange}
                      name="country"
                      className="form-select"
                    >
                      <option value="">Select a country</option>
                      <option value="CU">Cuba</option>
                      <option value="US">United States</option>
                      <option value="ES">Spain</option>
                      <option value="IT">Italy</option>
                      <option value="AL">Germany</option>
                    </select>
                  </div>
                </div>

                <input
                  type="submit"
                  className="btn btn-primary font-weight-bold d-block w-100  mt-3"
                  value="Get weather"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
