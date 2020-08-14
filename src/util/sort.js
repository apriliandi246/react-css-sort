export function sortProperties(properties, { smallerToBigger, biggerToSmaller }) {
   let index;
   let current;
   const arrProperties = [...properties];

   if (smallerToBigger === true) {
      for (let i = 0; i < arrProperties.length; i++) {
         index = i;

         for (let j = i; j < arrProperties.length; j++) {
            if (arrProperties[j].trim().length < arrProperties[index].trim().length) {
               index = j;
            }
         }

         current = arrProperties[i];
         arrProperties[i] = arrProperties[index];
         arrProperties[index] = current;
      }
   }

   if (biggerToSmaller === true) {
      for (let i = 0; i < arrProperties.length; i++) {
         index = i;

         for (let j = i; j < arrProperties.length; j++) {
            if (arrProperties[j].trim().length > arrProperties[index].trim().length) {
               index = j;
            }
         }

         current = arrProperties[i];
         arrProperties[i] = arrProperties[index];
         arrProperties[index] = current;
      }
   }

   return arrProperties.join('\n');
}