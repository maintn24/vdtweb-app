import React from "react"
import "./EditorBox.css";

// @ts-ignore
export const EditorBox = ({closeBox}) => {
    return (
      <div className="box-container"
           onClick={(e) => {
               const target = e.target as HTMLElement;
               if (target.className.includes("box-container")) closeBox();
           }}>
          <div className="box">
              <form>
                  <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input name={"name"}/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <select name="gender">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                      </select>
                  </div>
                  <div className="form-group">
                      <label htmlFor="school">School</label>
                      <input name={"school"}/>
                  </div>
                  <button type="submit" className="btn">Submit</button>
              </form>
          </div>
      </div>
    );
};