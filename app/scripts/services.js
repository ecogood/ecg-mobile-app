(function() {
  'use strict';

  angular.module('ecgMobile.services', [])
    .factory('ECGMatrix', ECGMatrix);

  function ECGMatrix() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var indicators = [
      { id: 0, name: 'A1: Ethisches Beschaffungswesen' },
      { id: 1, name: 'B1: Ethisches Finanzmanagement' },
      { id: 2, name: 'C1: Arbeitsplatzqualität und Gleichstellung' },
      { id: 3, name: 'C2: Gerechte Verteilung der Erwerbsarbeit' },
      { id: 4, name: 'D5: Erhöhung der sozialen und ökologischen Branchenstandards' },
      { id: 5, name: 'E1: Sinn und Gesellschaftliche Wirkung der Produkte / Dienstleistungen' }
    ];

    return {
      getIndicators: function() {
        return indicators;
      },
      getIndicator: function(friendId) {
        return indicators[friendId];
      }
    };
  }

})();
