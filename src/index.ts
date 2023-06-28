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

// Niveau 2

// => classe :
// structure qui définit les caractéristiques et le comportement d'un objet
// => propriétés
// => méthode

// constructeur
// une méthode spéciale qui permet d'initialiser les valeurs des propriétés d'une instance

// une instance :
// Un objet créé à partir d'une classe

class Gateau {
  forme: string;
  private nombreDePart: number;
  Gout: string;

  constructor(
    paramForme: string,
    paramNombreDePart: number,
    paramGout: string
  ) {
    this.forme = paramForme;
    this.nombreDePart = paramNombreDePart;
    this.Gout = paramGout;
  }

  reduitUnePart() {
    this.nombreDePart -= 1;
    // this.Gout = "fraise";
  }

  donneMoiLeNombreDePartSTP(): void {
    console.log("test", this.nombreDePart);
  }
}

const fraisier: Gateau = new Gateau("rond", 36, "fraise");
fraisier.Gout = "mangue";
fraisier.reduitUnePart();

console.log("part du gateau : ", fraisier);
// fraisier.nombreDePart = 15;

console.log(
  "fraisier est elle ue instance de gateau : ",
  fraisier instanceof Gateau
);

// - Qu'est ce que `this` dans une classe ?
//  mot clé
// Faire reférence à l'instance de l'objet actuel sur lequel on se situe

// - Qu'est ce qu'une méthode de classe ?
// fonction attaché à l'instance d'une classe
// Comment l'executer ?
// nomDeMonInstance.nomDeMaMethode()

// - Qu'est ce que la visibilité des propriétés ?
// public
// private
// protected
