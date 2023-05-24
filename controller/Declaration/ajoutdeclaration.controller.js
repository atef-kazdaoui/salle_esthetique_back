const Declarationmodel = require('../../models/declaration');

const ajouterdeclaration = async (req, res) => {
    try {
      await Declarationmodel.create({
        message: req.body.message,
        iduser: req.body.id_produit
      });
  
      console.log(req.body.nom_categorie);
      res.status(200).json({ message: "Ajout de la declaration avec succes" });
  
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  module.exports = {
    ajouterdeclaration,
  };