import React, { useState, useRef } from "react";

const ExCode = () => {
  const [profiles, setProfiles] = useState([]);
  const [originalProfiles, setOriginalProfiles] = useState([]);
  const [user, setUser] = useState("");
  const [book, setBook] = useState("");
  const [count, setCount] = useState(1);
  const [selectedField, setSelectedField] = useState("user");
  const [searchText, setSearchText] = useState("");
  const inputRefUser = useRef(null);
  const inputRefBook = useRef(null);

  const addProfile = () => {
    if (!user || !book) {
      // user 또는 book 중 하나라도 비어있으면
      const emptyInput = !user ? inputRefUser : inputRefBook;
      emptyInput.current.focus();
      return;
    }

    const newProfile = {
      id: count,
      user: user,
      book: book,
    };
    setProfiles([...profiles, newProfile]);
    setOriginalProfiles([...profiles, newProfile]);
    setUser("");
    setBook("");
    setCount(count + 1);
  };

  const handleSelect = (e) => {
    setSelectedField(e.target.value);
  };

  const handleSearch = () => {
    const filteredProfiles = originalProfiles.filter((profile) =>
      profile[selectedField].toLowerCase().includes(searchText.toLowerCase())
    );
    setProfiles(filteredProfiles);
  };

  const handleShowAll = () => {
    setProfiles(originalProfiles);
  };

  return (
    <div>
      <input
        type="text"
        name="user"
        id="user"
        placeholder="작성자"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        ref={inputRefUser}
      />

      <input
        type="text"
        name="book"
        id="book"
        placeholder="제목"
        value={book}
        onChange={(e) => setBook(e.target.value)}
        ref={inputRefBook}
      />

      <button onClick={addProfile}>등록</button>

      <br /><br /><br />

      <select name="select" id="select" onChange={handleSelect}>
        <option value="user">작성자</option>
        <option value="book">제목</option>
        <option value="id">번호</option>
      </select>

      <input
        type="text"
        name="selecttext"
        id="selecttext"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button onClick={handleSearch}>검색</button>
      <button onClick={handleShowAll}>전체보기</button>

      <table style={{ border: "1px solid black", width: "400px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>번호</th>
            <th style={{ border: "1px solid black" }}>작성자</th>
            <th style={{ border: "1px solid black" }}>제목</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile.id}>
              <td style={{ border: "1px solid black" }}>{profile.id}</td>
              <td style={{ border: "1px solid black" }}>{profile.user}</td>
              <td style={{ border: "1px solid black" }}>{profile.book}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExCode;
