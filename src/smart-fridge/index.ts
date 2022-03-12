export interface Item {
  name: string;
  expiry: Date;
  condition: Condition;
  toString: () => string;
}

interface StoredItem extends Item {
  storedAt: Date;
}

type Condition = "sealed" | "opened";

function parseDate(date: Date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export class FridgeItem implements Item {
  condition: Condition;
  expiry: Date;
  name: string;

  constructor(name: string, expiry: Date, condition: Condition) {
    this.condition = condition;
    this.name = name;
    this.expiry = expiry;
  }

  public toString() {
    return `${this.name} ${parseDate(this.expiry)} ${this.condition}`;
  }
}

export class Fridge {
  private contents: StoredItem[];

  private getCurrentDate: () => Date;

  constructor(getCurrentDate: () => Date) {
    this.contents = [];
    this.getCurrentDate = getCurrentDate;
  }

  public addItem(item: Item) {
    this.contents.push({
      ...item,
      storedAt: this.getCurrentDate(),
      toString: item.toString,
    });
  }

  public getItems() {
    return this.contents.toString();
  }

  public getContents() {
    return this.contents;
  }

  public open() {
    this.contents = this.contents.map((c: StoredItem) => {
      const newExpiry = new Date(c.expiry);
      newExpiry.setHours(newExpiry.getHours() - 1);
      return {
        ...c,
        expiry: newExpiry,
      };
    });
  }
}
