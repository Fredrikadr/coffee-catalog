import { formatCoffeeData } from "../../src/utils/coffeeDataMapper";

describe("coffeeDataMapper", () => {
  describe("formatCoffeeData", () => {
    it("should format coffee data correctly", () => {
      const rawData = [
        {
          id: 1,
          name: "Coffee A",
          category: "Category A",
          formCode: "Hot",
          displayOrder: 1,
          availability: "Available",
          assets: { thumbnail: "thumb", fullSize: "full" },
          sizes: ["Small", "Medium", "Large"],
        },
        {
          id: 2,
          name: "Coffee B",
          category: "Category B",
          formCode: "Iced",
          displayOrder: 2,
          availability: "Available",
          assets: { thumbnail: "thumb", fullSize: "full" },
          sizes: ["Medium", "Large"],
        }

      ];

      const formattedData = formatCoffeeData(rawData);

      expect(Array.isArray(formattedData)).toBe(true);
      expect(formattedData).toHaveLength(rawData.length);

      // Test a specific item in the formatted data
      const firstFormattedItem = formattedData[0];
      expect(firstFormattedItem.id).toBe(1);
      expect(firstFormattedItem.name).toBe("Coffee A");
      expect(firstFormattedItem.category).toBe("Category A");
      expect(firstFormattedItem.formCode).toBe("Hot");
      expect(firstFormattedItem.displayOrder).toBe(1);
      expect(firstFormattedItem.availability).toBe("Available");
      expect(firstFormattedItem.assets).toEqual({ thumbnail: "thumb", fullSize: "full" });
      expect(firstFormattedItem.sizes).toEqual(["Small", "Medium", "Large"]);

      const secondFormattedItem = formattedData[1];
      expect(secondFormattedItem.id).toBe(2);
      expect(secondFormattedItem.name).toBe("Coffee B");
      expect(secondFormattedItem.category).toBe("Category B");
      expect(secondFormattedItem.formCode).toBe("Iced");
      expect(secondFormattedItem.displayOrder).toBe(2);
      expect(secondFormattedItem.availability).toBe("Available");
      expect(secondFormattedItem.assets).toEqual({ thumbnail: "thumb", fullSize: "full" });
      expect(secondFormattedItem.sizes).toEqual(["Medium", "Large"]);



    });

  });
});
