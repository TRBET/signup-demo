var fs = require('fs')
var express = require('express')
var Student = require('./student')
var router = express.Router()


router.get('/', function (req, res) {
    res.render('signup.html')
})
router.get('/students', function (req, res) {
    Student.find(function (err, students) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('index.html', {
            students: students

        })

    })
})
router.get('/students/new', function (req, res) {
    res.render('new.html')
})
router.post('/students/new', function (req, res) {
    var student = req.body
    Student.save(student, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})
router.get('/students/edit', function (req, res) {
    Student.findById(parseInt(req.query.id), function (err, student) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('edit.html', {
            student: student

        })
    })
})
router.post('/students/edit', function (req, res) {
    Student.updataById(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})
router.get('/students/delete', function (req, res) {
    Student.deleteById(req.query.id, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})
module.exports = router