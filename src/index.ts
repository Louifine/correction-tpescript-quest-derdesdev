// let message: string = "Hello World !";
// console.log(message);

// // les différents types de données primitives

// // /**
// //  * string
// //  * number
// //  * boolean
// //  * undefined
// //  * null
// //  * void
// //  */

// // typer un tableau avec TS

// //Première méthode de déclaration d'un tableau
// let tab: number[] = [1, 2, 3];

// console.log("la variable tab est de type : ", typeof tab[0]);
// console.log("la variable tab contient : ", tab);

// //Deuxième méthode de déclaration d'un tableau

// let tab2: Array<boolean>;
// tab2 = [true, false];
// console.log("la variable tab est de type : ", typeof tab2);

// // Quel est le type any

// let maVariable;

// console.log("variable sans typage : ", typeof maVariable);

// let maVariable2: any;

// console.log("variable sans typage : ", typeof maVariable2);

// let valeursAny: Array<any> = [1, "test", 4];

// // typer une fonction et ses paramètres

// function addition(a: number, b: number): number {
//   //   console.log("résultat a + b", a + b);
//   return a + b;
// }

// console.log("le type de retour de la fonction : ", typeof addition(5, 7));
