const app = require("./app");
const { db } = require("./models");
const seed = require("./seed");

const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    await db.sync({ force: true });
    await seed();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();
