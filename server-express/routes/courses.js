const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200);
    res.render('courses', {
        title: 'Courses',
        isCourses: true
    });
});

module.exports = router;