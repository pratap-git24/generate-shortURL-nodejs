const shortid = require('shortid');
const URL = require('../models/url')

async function handleGenrateShortUrl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({ error : 'url is required'})
    const shortID = shortid(8)

    await URL.create({
        shortId: shortID,
        redirectUrl : body.url,
        visitedHistory : [],
    });
    const allurls = await URL.find({})
    return res.render("home",{
        urls:allurls,
    });
    //return res.render('home');
}

async function handleGetClick(req,res){
    const shortId = req.params.shortId;
    const result  = await URL.findOne({ shortId });
    
    return res.json({
        totalClick : result.visitedHistory.length,
        analytics:result.visitedHistory,
    });
}


module.exports = {
    handleGenrateShortUrl,
    handleGetClick
};