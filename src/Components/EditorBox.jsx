import React, {useState} from "react"
import "./EditorBox.css";

// @ts-ignore
export const EditorBox = ({closeBox}) => {
    const [formState, setFormState] = useState({
        id:0,
        name:"",
        gender:"Male",
        school:"",
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log(formState);
    }

    return (
      <div className="box-container"
           onClick={(e) => {
               const target = e.target as HTMLElement;
               if (target.className.includes("box-container")) closeBox();
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