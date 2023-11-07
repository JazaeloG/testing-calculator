import { division } from "./division";

describe('Division Unit Tests', () => {
    it('Should divide 4 / 2 = 2', () => {
        // Arrange
        let result = 0;

        // Act
        result = division(4, 2);

        // Assert
        expect(result).toBe(2);
        //
    })

    it('Should divide -2 / 0 = -2', () => {
        // Arrange
        let result = 0;

        // Act
        result = division(-2, 0);

        // Assert
        expect(result).toBe(-2);
    }) 

})