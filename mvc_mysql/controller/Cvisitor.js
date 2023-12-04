const Visitor =require('../model/Visitior')

exports.main = (req,res) => {
    res.render('index')
}

exports.get_Visitors = (req,res) => {
    // //before
    // console.log(Visitor.getVisitors())
    // res.render('Vistor',{ data: visitor.getVisitors()})


// after
Visitor.getVisitors((result) => {
console.log('Cvisitor.js >',result)
res.render('visitor',{data:result})
})
}

exports.post_visitor=(req,res)=>{
    console.log(Req.body)
    Visitor.postVisitor(req.body,(result)=>{
        
    })
}