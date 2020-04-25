class RandomInput {
   randomInput(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      };
      return result;
   }
   randomPhone() {
      var numReserve = [];
      while (numReserve.length < 12) {
         var randomNumber = Math.ceil(Math.random() * 1000);
         var found = false;
         for (var i = 0; i < numReserve.length; i++) {
            if (numReserve[i] === randomNumber) { 
            found = true;
            break;
            }
         }
         if (!found) {
            numReserve[numReserve.length]=randomNumber
         };
      };
   }
}
module.exports = new RandomInput();