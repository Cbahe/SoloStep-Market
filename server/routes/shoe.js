const { Router } = require ("express");
const router = Router();
const { Shoe } = require("../models");


// GET /shoe
router.get("/", async (req, res, next) => {
  try {
    const shoe = await Shoe.findAll();
    res.send(shoe);
  } catch (error) {
    next(error);
  }
});


router.get("/:id", async (req, res, next) => {
  try {
      const shoe = await Shoe.findByPk(req.params.id);
      if (!shoe) {
          throw new Error("No shoe found")
      }
      res.json(shoe)
  } catch (error) {
      next(error)
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