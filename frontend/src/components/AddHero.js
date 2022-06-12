import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddHero= () => {
  const [name, setName] = useState("");
  const [heroclass, setHeroClass] = useState("");
  const [role, setRole] = useState("");
  const [region, setRegion] = useState("");
  const navigate = useNavigate();

  const saveHero = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/hero", {
        name,
        heroclass,
        role,
        region

      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveHero}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Class</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={heroclass}
                onChange={(e) => setHeroClass(e.target.value)}
                placeholder="Class"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Role</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Role"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Region</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder="Region"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHero;
