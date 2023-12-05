exports.main = (req,res) => {
    res.render('index');
}

// const Visitor = require('../model/Visitor');
const models = require('../models/index')
const Visitor = models.Visitor

// GET /
exports.main = (req, res) => {
    res.render('index');
}

// GET /visitor
exports.get_visitors = (req, res) => {

    Visitor.getVisitors((result) => {
        // 모델에 rows를 result라는 변수명으로 받음
        console.log('Cvisitor.js >', result);
        res.render('visitor', { data: result });
    })
}

// POST /visitor
exports.post_visitor = (req, res) => {
    console.log(req.body);
    const { name, comment } = req.body;
    // 요청 시 컨트롤러에서 모델에 필요한 값을 넘겨줘야 함
    // Visitor.postVisitor( view에서 받아온 데이터, 콜백 함수 ) 호출
    Visitor.postVisitor(req.body, (result) => {
        // result: rows.insertId => ex) 3
        console.log(result);
        res.send({ id: result, name, comment });
    })
}

// GET /visitor => localhost:PORT/visitor?id=N
exports.get_visitor = (req, res) => {
    console.log(req.query); // { id: '1' }
    console.log(req.query.id);

    // 모델에 함수 호출
    Visitor.getVisitor(req.query.id, (result) => {
        // result: rows[0] -> { id: 1, name: '홍길동', comment: '내가 왔다.' }
        console.log('get_visitor Cvisitor.js >', result);
        res.send(result);
    })
}

// GET /visitor/:id => localhost:PORT/visitor/:id
exports.get_visitor2 = (req, res) => {
    console.log(req.params); // { id: '1' }
    console.log(req.params.id);

    // 모델에 함수 호출
    Visitor.getVisitor(req.params.id, (result) => {
        // result: rows[0] -> { id: 1, name: '홍길동', comment: '내가 왔다.' }
        console.log('get_visitor2 Cvisitor.js >', result);
        res.send(result);
    })
}

// PATCH /visitor
exports.patch_visitor = (req, res) => {
    console.log(req.body); // { id: 4, name: '바나나맛', comment: '우유' }

    Visitor.patchVisitor(req.body, (result) => {
        console.log('patchVisitor Cvisitor.js >', result);
        res.send('수정 성공!');
    })
}

// DELETE /visitor
exports.delete_visitor = (req, res) => {
    console.log(req.body);
    console.log(req.body.id);

    Visitor.deleteVisitor(req.body.id, (result) => {
        console.log('deleteVisitor Cvisitor.js >', result);
        res.send('삭제 성공!');
    })
}




