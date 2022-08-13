
  function checaTriangulo (
    a: number, 
    b: number, 
    c: number ) : any {
        if (a !== b && b !== c) {
          return "Escaleno";
        } else if (a === b && b === c) {
          return "Equilátero";
        } else {
          return "Isósceles";
        }
      }

console.log (checaTriangulo(2, 2, 2 ))
console.log (checaTriangulo(2, 2, 4 ))
console.log (checaTriangulo(4, 6, 2 ))