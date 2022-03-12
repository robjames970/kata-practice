import { Fridge, FridgeItem, Item } from "./index";

describe("Fridge", () => {
  const mockGetCurrentDate = () => new Date("2/1/2022");
  describe.each([
    [
      new FridgeItem("Milk", new Date("10/02/2022"), "sealed"),
      "Milk 2/10/2022 sealed",
    ],
    [
      new FridgeItem("Chicken", new Date("05/02/2022"), "sealed"),
      "Chicken 2/5/2022 sealed",
    ],
  ] as [FridgeItem, string][])(
    "when adding item to fridge",
    function (item: FridgeItem, expected: string) {
      let fridge: Fridge;

      beforeAll(() => {
        fridge = new Fridge(mockGetCurrentDate);
        fridge.addItem(item);
      });

      describe("when the contents of the fridge are inspected", () => {
        it("should allow items to be added to it", () => {
          expect(fridge.getItems()).toBe(expected);
        });

        it("should record the date when added", () => {
          expect(fridge.getContents()[0].storedAt).toEqual(
            mockGetCurrentDate()
          );
        });
      });

      describe("when the fridge is opened", () => {
        it("should decrease the expiry by one hour for sealed items", () => {
          fridge.open();
          const expectedDate = new Date(item.expiry);
          expectedDate.setHours(expectedDate.getHours() - 1);
          expect(fridge.getContents()[0].expiry).toEqual(expectedDate);
        });
      });
    }
  );

  it("should let you add multiple items", () => {
    const items = [
      new FridgeItem("Cheese", new Date("2/2/2022"), "sealed"),
      new FridgeItem("Petril", new Date("2/2/2025"), "sealed"),
    ];

    const fridge = new Fridge(mockGetCurrentDate);
    fridge.addItem(items[0]);
    fridge.addItem(items[1]);

    expect(fridge.getItems()).toBe(
      "Cheese 2/2/2022 sealed,Petril 2/2/2025 sealed"
    );
  });
});
