const { Router } = require("express");
const router = Router();
const { Shoe } = require("../models");

// GET /api/shoe - Fetch all shoes
router.get('/', (req, res) => {
  res.json(shoes);
});
 
// GET /api/shoe/:id - Fetch shoe details by ID
router.get('/:id', (req, res) => {
  const shoeId = parseInt(req.params.id, 10);
  const shoe = shoes.find(s => s.id === shoeId);
  if (shoe) {
    res.json(shoe);
  } else {
    res.status(404).json({ message: 'Shoe not found' });
  }
});
// CREATE /shoe
router.post('/', async (req, res,next) => {
 try { 
  const { name, price, size, category, image } = req.body;
  const shoe = await Shoe.create({ name, price, size, category, image });
  res.json(shoe);
 } catch(error){
  next(error)
 }
});

// DELETE /shoe
router.delete('/:id', async (req, res) => {
  const shoe = await Shoe.findByPk(req.params.id);
  if (!shoe) {
    return res.status(404).send('Shoe not found');
  }
  await shoe.destroy();
  res.send('Shoe deleted');
});


// UPDATE /shoe
router.put('/:id', async (req, res) => {
  const shoe = await Shoe.findByPk(req.params.id);
  if (!shoe) {
    return res.status(404).send('Shoe not found');
  }
  shoe.name = req.body.name;
  shoe.price = req.body.price;
  shoe.size = req.body.size;
  shoe.category = req.body.category;
  shoe.image = req.body.image;
  await shoe.save();
  res.send(shoe);
});


module.exports = router;
