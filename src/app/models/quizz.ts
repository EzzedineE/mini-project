export class Quizz {
  titre: string;
  questions: any[];
  question: string;
  reponses: string[];
  bonnereponse: any;

  constructor(
    titre: string = '',
    questions: any[] = [],
    question: string = '',
    reponses: string[] = [],
    bonnereponse: any = null
  ) {
    this.titre = titre;
    this.questions = questions;
    this.question = question;
    this.reponses = reponses;
    this.bonnereponse = bonnereponse;
  }
}
