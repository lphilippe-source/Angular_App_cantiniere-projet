export class NumberUtils{

    static isNumber(number: string): boolean{
        let numberRegex = new RegExp(/^[0-9]*$/)
        return numberRegex.test(number)
    }

}