const Visitor =require('../model/Visitior')

exports.main = (req,res) => {
    res.render('index')
}

exports.getVisitors = (req,res) => {
    //before
    console.log(Visitor.getVisitors())
    res.render('Vistor',{ data: visitor.getVisitors()})


// after
Visitor.getVisitors(() => {

})
}