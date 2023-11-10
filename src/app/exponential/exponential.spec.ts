import { exponential } from "./exponential";

describe('exponential unit tests', () => {
    
    it('Should exponentiate 2^3 = 8', () => {
        // Arrange
        let result = 0;
        
        // Act
        result = exponential(2, 3);

        // Assert
        expect(result).toBe(8);
    });

    it('Should exponentiate 5^0 = 1', () => {
        // Arrange
        let result = 0;
        // Act
        result = exponential(5, 0);
        // Assert
        expect(result).toBe(1);
    });

    it('Should exponentiate 0^4 = 0', () => {
        // Arrange
        let result = 0;
        // Act
        result = exponential(0, 4);
        // Assert
        expect(result).toBe(0);
    });

    it('Should handle exponentiation with negative exponent: 3^(-2) = 1/9', () => {
        // Arrange
        let result = 0;
        // Act
        result = exponential(3, -2);
        // Assert
        expect(result).toBe(1 / 9);
    });

    it('Should handle exponentiation with decimals: 2.5^2 = 6.25', () => {
        // Arrange
        let result = 0;
        // Act
        result = exponential(2.5, 2);
        // Assert
        expect(result).toBe(6.25);
    });

    it('Should handle exponentiation with negative base: (-2)^3 = -8', () => {
        // Arrange
        let result = 0;
        // Act
        result = exponential(-2, 3);
        // Assert
        expect(result).toBe(-8);
    });

    it('Should handle exponentiation of 1 to any exponent: 1^100 = 1', () => {
        // Arrange
        let result = 0;
        // Act
        result = exponential(1, 100);
        // Assert
        expect(result).toBe(1);
    });

    it('Should handle exponentiation of any number to exponent 1: 4^1 = 4', () => {
        // Arrange
        let result = 0;
        // Act
        result = exponential(4, 1);
        // Assert
        expect(result).toBe(4);
    });

    it('Should handle exponentiation of 0 to any positive exponent: 0^5 = 0', () => {
        // Arrange
        let result = 0;
        // Act
        result = exponential(0, 5);
        // Assert
        expect(result).toBe(0); //comment to commit 
    });

});
