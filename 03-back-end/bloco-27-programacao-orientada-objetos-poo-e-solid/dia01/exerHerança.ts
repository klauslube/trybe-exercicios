class Person {
  // name: string;
  // birthDate: Date;

  constructor(private _name:string,private  _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  get name():string {
    return this._name;
  }

  set name(value:string) {
    this.validadeName(value);
    this._name = value;
  }

  get birthDate():Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBirh(value);
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff/yearMs)
  }

  private validadeName(value:string): void {
    if (value.length < 3) throw new Error('o nome deve ter mais de 3 caracteres')
  }

  private validateBirh(value: Date):void {
    if (value.getTime() > new Date().getTime()) throw new Error('a data de nascimento  nao pode ser no futuro')
    if (Person.getAge(value) > 120) throw new Error('a pessoa nao pode ter mais de 120 anos')
  }
}


const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));