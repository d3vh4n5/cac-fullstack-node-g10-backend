//https://www.instagram.com/p/C_T7vKQMtf0/

function divide(num1, num2){
    if (num2 === 0) {
        throw Error('No se puede dividir por cero')
    }

    return num1/num2;
}

describe('Test divide function', ()=>{
    
    it('shoud divide 2 numbers', ()=> {
        const num1 = 10
        const num2 = 2
        const expected = 5

        const result = divide(num1, num2);

        expect(result).toBe(expected)
    })

    it.each([
        [10, 2, 5],
        [30, 1, 30],
        [25, 5, 5],
    ])('shoud divide 2 numbers', (num1, num2, expected)=> {

        const result = divide(num1, num2);

        expect(result).toBe(expected)
    })

    it('shoud throw exception if divided by 0', ()=> {
        const num1 = 10
        const num2 = 0

        expect(()=> divide(num1, num2)).toThrow(Error);
        expect(()=> divide(num1, num2)).toThrow('No se puede dividir por cero');
    })
})