import React, { useState } from "react";

function MapPrac() {
  const [profiles, setProfiles] = useState([]);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const addProfile = () => {
    if (id && pw) {
      const newProfile = {
        id: id,
        pw: pw,
      };
      setProfiles([...profiles, newProfile]);
      setId("");
      setPw("");
    }
  };

  const handleKeyPress = (e) => {
    console.log("Key Pressed:", e.key);
    if (e.key === "Enter") {
      addProfile();
    }
  };

  const deleteProfile = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
  };

  return (
    <div>
      <input
        type="text"
        name="id"
        id="id"
        placeholder="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <input
        type="text"
        name="pw"
        id="pw"
        placeholder="pw"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={addProfile}>Add Profile</button>

      <h1>
        <ol>
          {profiles.map((profile) => (
            <li key={profile.id} onDoubleClick={() => deleteProfile(profile.id)}>
              {`아이디: ${profile.id}`} <br /> {`비밀번호: ${profile.pw}`}
            </li>
          ))}
        </ol>
      </h1>
    </div>
  );
}

export default MapPrac;
