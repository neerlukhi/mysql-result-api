
var user = require('../model/user')

exports.result = async (req, res) => {

    let name = req.body.name;
    let s1 = req.body.sub1;
    let s2 = req.body.sub2;
    let s3 = req.body.sub3;
    let s4 = req.body.sub4;
    let s5 = req.body.sub5;

    let total = Number(s1) + Number(s2) + Number(s3) + Number(s4) + Number(s5);
    req.body.total = total

    let avg = total / 5;
    req.body.avg = avg

    let min = Math.min(Number(s1), Number(s2), Number(s3), Number(s4), Number(s5));
    req.body.min = min

    let max = Math.max(Number(s1), Number(s2), Number(s3), Number(s4), Number(s5));
    req.body.max = max

    var result
    if (s1 > 33 && s2 > 33 && s3 > 33 && s4 > 33 && s5 > 33) {
        result = 'Pass'
    }
    else if (per <= 33) {
        result = 'Fail'
    }
    else {
        result = 'Atkt'
    }
    req.body.result = result
    // console.log(result);

    var per = (total / 500) * 100;
    req.body.per = per
    // console.log(per, 'percantage');

    var data = await user.create(req.body);
    res.status(200).json({
        status: ' Success',
        data
    })
}

exports.get_result = async (req, res) => {
        var data = await user.find();
        res.status(200).json({
            status: "Success",
            data
        })
}
