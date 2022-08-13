const express = require('express');
const router = express.Router();
const Todo = require('../../models/Todo');


router.post(
  '/',
  async (req, res) => {
    if(req.body.title == undefined){
     return res.status(400).send('title is required')
    }
    try {
      const email = req.body.email
      const newTodo = new Todo({
        title: req.body.title,
        email: email,
        desc : req.body.desc,
        date_den : req.body.date_den,
        isChecked : false,
      });

      const todo = await newTodo.save();

      res.json(todo);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.put('/:id', async (req, res) => {
  try { 

   const todo = await Todo.findByIdAndUpdate(req.params.id, 
    { 
      new: true,
      upsert: true 
    });
    todo.isChecked = true;
    todo.save()
    console.log(todo);
    res.status(200).json({todo})
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }
    await Todo.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Todo removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/', async (req, res) => {
  try {
    Todo.deleteMany({ }).then(function(){
      res.json({ msg: 'Todos removed' }); // Success
  }).catch(function(error){
      console.log(error); // Failure
  });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
