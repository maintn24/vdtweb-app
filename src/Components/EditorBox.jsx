import React, {useState} from "react"
import "./EditorBox.css";

export const EditorBox = ({closeBox, onSubmit}) => {
    const [formState, setFormState] = useState({
        id:0,
        name:"",
        gender:"Male",
        school:"",
    });

    const validateForm = () => {
        if(formState.id && formState.name && formState.gender && formState.school) {
            return true;
        } else {
            return false;
        }
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateForm()) return;

        console.log(formState);
        onSubmit(formState)
        closeBox();
    }

    return (
      <div className="box-container"
           onClick={(e) => {
               if (e.target.className === "box-container") closeBox();
           }}>
          <div className="box">
              <form>
                  <div className="form-group">
                      <label htmlFor="id">ID</label>
                      <input name={"id"} value={formState.id} onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input name={"name"} value={formState.name} onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <select name="gender" value={formState.gender} onChange={handleChange}>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                      </select>
                  </div>
                  <div className="form-group">
                      <label htmlFor="school">School</label>
                      <input name={"school"} value={formState.school} onChange={handleChange}/>
                  </div>
                  <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
              </form>
          </div>
      </div>
    );
};