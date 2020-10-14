export function sortProperties(properties, format) {
   const { smallerToBigger, biggerToSmaller } = format;

   if (smallerToBigger === true) {
      const result = properties
         .map((property) => property.toString().trim() + ";")
         .sort((a, b) => a.length - b.length)
         .slice(1)
         .join("\n");

      return result;
   }

   if (biggerToSmaller === true) {
      const result = properties
         .map((property) => property.toString().trim() + ";")
         .sort((a, b) => b.length - a.length)
         .slice(0, properties.length - 1)
         .join("\n");

      return result;
   }
}
