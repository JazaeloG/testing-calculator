import { sqrt } from "./sqrt";

describe('sqrt unit tests', () => {
    
    it('Should calculate the square root of 4', () => {
        // Arrange
        const operand = 4;
        
        // Act
        const result = sqrt(operand);

        // Assert
        expect(result).toBe(2);
    });

    it('Should handle square root of 0', () => {
        // Arrange
        const operand = 0;
        
        // Act
        const result = sqrt(operand);

        // Assert
        expect(result).toBe(0);
    });

    it('Should handle square root of a decimal: 9.0', () => {
        // Arrange
        const operand = 9.0;
        
        // Act
        const result = sqrt(operand);

        // Assert
        expect(result).toBe(3);
    });

    it('Should handle square root of a negative number', () => {
        // Arrange
        const operand = -16;
        
        // Act
        const result = sqrt(operand);

        // Assert
        expect(result).toBeNaN(); // Square root of a negative number is NaN
    });

    it('Should handle square root of 1', () => {
        // Arrange
        const operand = 1;
        
        // Act
        const result = sqrt(operand);

        // Assert
        expect(result).toBe(1);
    });

    it('Should handle square root of a large number: 144', () => {
        // Arrange
        const operand = 144;
        
        // Act
        const result = sqrt(operand);

        // Assert
        expect(result).toBe(12);
    });

});
