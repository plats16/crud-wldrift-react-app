import Hero from "../models/HeroModel.js";



export const getHeroes = async (req, res) => {
  try {
    const response = await Hero.findAll();
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    console.error(err.message);
  }
};

export const getHeroesById = async (req, res) => {
  try {
    const response = await Hero.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(response);
  } catch (err) {
    console.error(err.message);
  }
};

export const addHero = async (req, res) => {
  try {
    await Hero.create(req.body);
    console.log(req.body);
    res.json({ message: "new hero added successfully" });
  } catch (err) {
    console.error(err.message);
  }
};

export const updateHero = async (req, res) => {
  try {
    await Hero.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "hero updated successfully" });
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteHero = async (req, res) => {
  try {
    await Hero.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "hero deleted successfully" });
  } catch (err) {
    console.error(err.message);
  }
};

