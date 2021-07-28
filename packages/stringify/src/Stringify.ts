console.log('out');

export default class Stringify{
    constructor(){}
    public toUpper = (x: string) => {
        console.log('in');
        const res = x.toUpperCase;
        return res;
    }
}