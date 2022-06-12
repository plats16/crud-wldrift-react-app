import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditHero = () => {
  const [name, setName] = useState("");
  const [heroclass, setHeroClass] = useState("");
  const [role, setRole] = useState("");
  const [region, setRegion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateHero = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/hero/${id}`, {
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

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/hero/${id}`);
    setName(response.data.name);
    setHeroClass(response.data.heroclass);
    setRole(response.data.role);
    setRegion(response.data.region);
};

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <h4>Edit Hero Details</h4>
      <form onSubmit={updateHero}>
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
                Update 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditHero;
