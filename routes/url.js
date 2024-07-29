const express = require('express')
const {handleGenrateShortUrl,handleGetClick} = require('../controllers/url')

const router = express.Router()

router.post('/',handleGenrateShortUrl)
router.get('/analytics/:shortId',handleGetClick)

module.exports = router