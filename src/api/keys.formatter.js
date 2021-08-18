export const fieldKeyFormater = key => {
    switch (key) {
      case 'date_rendez_vous':
        return '🕗 Date rendez-vous';
        break;
      case 'heure_rendez_vous':
        return '🕗 Heure rendez_vous';
        break;
      case 'type_visa':
        return '🛂 Type visa';
        break;
      case 'prenom':
        return '🧍 Prénom';
        break;
      case 'nom_de_famille':
        return '🧍 Nom de famille';
        break;
      case 'date_naissance':
        return '🕗 Date naissance';
        break;
      case 'nmr_tlf':
        return '📱 Numéro tlf';
        break;
      case 'nationalite':
        return '📍 Nationalité';
        break;
      case 'type_passport':
        return '🛂 Type passport';
        break;
      case 'nmr_passport':
        return '🛂 Numéro passport';
        break;
      case 'date_emission':
        return '🕗 Date émission';
        break;
      case 'date_expiration':
        return '🕗 Date éxpiration';
        break;
      case 'lieu_passport':
        return '📍 Lieu passport';
        break;
      default:
        return key;
    }
  };
  