export function sortProperties(properties, format) {
   const result = properties
      .filter((property) => property.toString().trim() !== "")
      .map((property) => property.toString().trim() + ";")
      .sort((a, b) =>
         format.smallerToBigger === true
            ? a.length - b.length
            : b.length - a.length
      )
      .join("\n");

   return result;
}
