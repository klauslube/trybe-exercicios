class Student extends Person  {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name:string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment()
  }

  get enrollment():string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('a matricula deve ter no mininmo 16 caracteres');
    this._enrollment = value;
  }

  get examsGrades():number[] {
    return this._examsGrades;
  }

  set examsGrades(value:number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante só pode ter 4 notas de provas');
    this._examsGrades = value;
  }

  get worksGrades():number[] {
    return this._worksGrades;
  }

  set worksGrades(value:number[]) {
    if (value.length > 2) throw new Error('A pessoa estudante só pode ter 2 notas de trabalho');
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  sumGrades():number {
    const sum = this._examsGrades.reduce((a,b) => a+b)
    return sum;
  }

  sumAverageGrade():number {
    const average = this.sumGrades()/this._examsGrades.length
    return average;
  }
}

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.worksGrades = [50, 45];
tamires.worksGrades = [47, 42];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);