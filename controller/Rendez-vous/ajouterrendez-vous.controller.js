const Rendez_vous_model = require ('../../models/rendez-vous');

const ajouter_rendez_vous = async (req, res) => {
  const {
    id_rendez_vous,
    id_user,
    date_disponible,
    heure_disponible,
    minute_disponible,
  } = req.body;
  try {
    const rendezVous = await Rendez_vous_model.findByPk (id_rendez_vous);
    if (rendezVous) {
      rendezVous.id_user = id_user;
      rendezVous.date_disponible = date_disponible;
      rendezVous.heure_disponible = heure_disponible;
      rendezVous.minute_disponible = minute_disponible;
      await rendezVous.save ();
      res.status (200).json ({
        message: 'ID utilisateur du rendez-vous modifié avec succès',
        rendezVous: rendezVous,
      });
    } else {
      res.status (404).json ({
        message: 'Rendez-vous non trouvé',
      });
    }
  } catch (error) {
    console.log (error);
    res.status (500).json ({
      message: "Erreur lors de la modification de l'ID utilisateur du rendez-vous",
    });
  }
};

module.exports = {
  ajouter_rendez_vous
,
};
