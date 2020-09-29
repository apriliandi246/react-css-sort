function minSort(properties) {
   let index;
   let current;
   const arrProperties = [...properties];

   for (let i = 0; i < arrProperties.length; i++) {
      index = i;

      for (let j = i; j < arrProperties.length; j++) {
         if (arrProperties[j].toString().trim().length < arrProperties[index].toString().trim().length) {
            index = j;
         }
      }

      current = arrProperties[i].toString().trim();
      arrProperties[i] = arrProperties[index].toString().trim();
      arrProperties[index] = current;
   }

   return arrProperties;
}

function maxSort(properties) {
   let index;
   let current;
   const arrProperties = [...properties];

   for (let i = 0; i < arrProperties.length; i++) {
      index = i;

      for (let j = i; j < arrProperties.length; j++) {
         if (arrProperties[j].toString().trim().length > arrProperties[index].toString().trim().length) {
            index = j;
         }
      }

      current = arrProperties[i].toString().trim();
      arrProperties[i] = arrProperties[index].toString().trim();
      arrProperties[index] = current;
   }

   return arrProperties;
}


export function sortProperties(properties, format) {
   const { smallerToBigger, biggerToSmaller } = format;

   if (smallerToBigger === true) {
      return minSort(properties).join("\n");
   }

   if (biggerToSmaller === true) {
      return maxSort(properties).join("\n");
   }
}
