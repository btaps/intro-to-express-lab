 const names = [
   {name: 'Rick Sanchez', mainCharacter: true},
   {name: 'Morty Smith', mainCharacter: true},
   {name: 'Summer Smith', mainCharacter: true},
   {name: 'Beth Smith', mainCharacter: true},
   {name: 'Jerry Smith', mainCharacter: true},
   {name: 'Mr. Meeseeks', mainCharacter: false},
   {name: 'Birdperson', mainCharacter: false},
   {name: 'Squanchy', mainCharacter: false},
   {name: 'The Vindicators', mainCharacter: false},

 ];
 
 module.exports = {
   getAll: function() {
     return names;
   }
 };
