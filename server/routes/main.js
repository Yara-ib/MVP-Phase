const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    const locals = {
        title: 'Home',
    }
    response.render('index', locals);
});

router.get('/about', (request, response) => {
    const locals = {
        title: 'About',
    }
    response.render('about', locals);
});


router.get('/contactUs', (request, response) => {
    const locals = {
        title: 'Contact Us',
    }
    response.render('contactUs', locals);
});



module.exports = router;
