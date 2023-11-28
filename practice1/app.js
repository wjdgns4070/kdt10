const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("practice1");
});

app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.render('practice1');
});

app.post("/axios", (req, res) => {
  const clientData = {
    ID: req.body.ID,
    PW: req.body.PW,
  };

  const userInfo = { id: 'apple', pw: '1234' };

  if (clientData.ID === userInfo.id && clientData.PW === userInfo.pw) {
    // 로그인 성공
    res.json({ success: true });
  } else {
    // 로그인 실패
    res.json({ success: false });
  }
});

app.get("/login", (req, res) => {
  // 로그인 성공 여부에 따라 처리
  const success = req.query.success === 'true'; // 쿼리 파라미터에서 success 값을 가져옴

  if (success) {
    // 로그인 성공 시
    res.render("result", { title: "Login Result" });
  } else {
    // 로그인 실패 시
    res.redirect("/"); // 로그인 실패 시 홈페이지로 리다이렉트
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} open`);
});
