import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 2;
     component.operator2 = 2;
 
     // Act
     component.addition();
     result = component.result;
 
     // Assert
     expect(result).toBe(4);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the addition button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css('.addition-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(7.5);

   });

  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;
 
    // Act
    component.addition();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('10');
     
  });

  it('Should render substraction in result div', () => {
    //Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    //Act
    component.substraction();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    //Assert
    expect(el.innerText).toContain('0');
  });

  it('Should substract operator1 and operator2 when i click the substraction button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let substractionButton = fixture.debugElement.query(By.css('.substraction-button'));

    // Act
    substractionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(2.5);

   });

   it('Should call substraction method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.substraction();
    result = component.result;

    // Assert
    expect(result).toBe(0);
 });

 it('Should render division in result div', () => {
  //Arrange
  component.operator1 = 10;
  component.operator2 = 2;

  //Act
  component.division();
  fixture.detectChanges();

  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  //Assert
  expect(el.innerText).toContain('5');
 });

 it('Should divide operator1 by operator2 when I click the division button', () => {
  // Arrange
  component.operator1 = 10;
  component.operator2 = 2;
  let divisionButton = fixture.debugElement.query(By.css('.division-button'));

  // Act
  divisionButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(5);
});

it('Should call division method', () => {
  // Arrange
  let result = 0;
  component.operator1 = 10;
  component.operator2 = 2;

  // Act
  component.division();
  result = component.result;

  // Assert
  expect(result).toBe(5);
})

it('Should call multiplication method', () => {
  // Arrange
  let result = 0;
  component.operator1 = 2;
  component.operator2 = 2;

  // Act
  component.multiplication();
  result = component.result;

  // Assert
  expect(result).toBe(4);
});

it('Should render multiplication in result div', () => {
  //Arrange
  component.operator1 = 5;
  component.operator2 = 5;

  //Act
  component.multiplication();
  fixture.detectChanges();

  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  //Assert
  expect(el.innerText).toContain('25');
});

it('Should multiply operator1 and operator2 when i click the multiplication button ', () => {
  // Arrange 
  component.operator1 = 5.0;
  component.operator2 = 2.5;
  let multiplicationButton = fixture.debugElement.query(By.css('.multiplication-button'));

  // Act
  multiplicationButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(12.5);
});

it('Should call multiplication method', () => {
  // Arrange
  let result = 0;
  component.operator1 = 2;
  component.operator2 = 2;

  // Act
  component.multiplication();
  result = component.result;

  // Assert
  expect(result).toBe(4);
});

it('Should render exponential in result div', () => {
  // Arrange
  component.operator1 = 2;
  component.operator2 = 3;

  // Act
  component.exponential();
  fixture.detectChanges();

  let de = fixture.debugElement.query(By.css('.result'));
  let el: HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('8');
});

it('Should exponentiate operator1 to operator2 when I click the exponential button', () => {
  // Arrange
  component.operator1 = 2.5;
  component.operator2 = 2;
  let exponentialButton = fixture.debugElement.query(By.css('.exponential-button'));

  // Act
  exponentialButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(6.25);
});

it('Should call exponential method', () => {
  // Arrange
  let result = 0;
  component.operator1 = 2;
  component.operator2 = 3;

  // Act
  component.exponential();
  result = component.result;

  // Assert
  expect(result).toBe(8);
});

it('Should render square root in result div', () => {
  // Arrange
  component.operator1 = 9;

  // Act
  component.sqrt();
  fixture.detectChanges();

  const de = fixture.debugElement.query(By.css('.result'));
  const el: HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('3'); // La raíz cuadrada de 9 es 3
});

it('Should calculate square root when I click the square root button', () => {
  // Arrange
  component.operator1 = 25;
  const sqrtButton = fixture.debugElement.query(By.css('.sqrt-button'));

  // Act
  sqrtButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(5); // La raíz cuadrada de 25 es 5
});

it('Should call sqrt method', () => {
  // Arrange
  let result = 0;
  component.operator1 = 16;

  // Act
  component.sqrt();
  result = component.result;

  // Assert
  expect(result).toBe(4); // La raíz cuadrada de 16 es 4
});

});