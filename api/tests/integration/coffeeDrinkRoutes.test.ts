import request from 'supertest';
import app from '../../src/app';
import { CoffeeDrink } from '../../src/models/CoffeeDrink';

describe('Coffee Drink Routes', () => {
  const assertCoffeeDrinkProperties = (coffeeDrink: CoffeeDrink) => {
    expect(coffeeDrink.id).toBeDefined();
    expect(typeof coffeeDrink.id).toBe("number");
    expect(coffeeDrink.name).toBeDefined();
    expect(typeof coffeeDrink.name).toBe("string");
    expect(coffeeDrink.category).toBeDefined();
    expect(typeof coffeeDrink.category).toBe("string");
    expect(coffeeDrink.formCode).toBeDefined();
    expect(typeof coffeeDrink.formCode).toBe("string");
    expect(coffeeDrink.displayOrder).toBeDefined();
    expect(typeof coffeeDrink.displayOrder).toBe("number");
    expect(coffeeDrink.availability).toBeDefined();
    expect(typeof coffeeDrink.availability).toBe("string");
    expect(coffeeDrink.assets).toBeDefined();
    expect(typeof coffeeDrink.assets).toBe("object");
    expect(Array.isArray(coffeeDrink.sizes)).toBeTruthy();
  };

  it('should list all coffee drinks', async () => {
    const response = await request(app).get('/coffee-drinks');

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBeTruthy();

    const coffeeDrinks: CoffeeDrink[] = response.body;
    expect(coffeeDrinks.length).toBeGreaterThan(0);

    coffeeDrinks.forEach(coffeeDrink => {
      assertCoffeeDrinkProperties(coffeeDrink);
    });
  });

  it('should get a coffee drink by ID', async () => {
    const response = await request(app).get('/coffee-drinks/488');

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();

    const coffeeDrink: CoffeeDrink = response.body;
    assertCoffeeDrinkProperties(coffeeDrink);
  });
});
