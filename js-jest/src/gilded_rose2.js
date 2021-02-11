class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case "Aged Brie":
          this.items[i].sellIn--;
          this.items[i].quality++;
          if (this.items[i].sellIn < 0) this.items[i].quality++;
          if (this.items[i].quality > 50) this.items[i].quality = 50;
          break;

        case "Backstage passes to a TAFKAL80ETC concert":
          this.items[i].sellIn--;
          this.items[i].quality++;
          if (this.items[i].sellIn < 11) this.items[i].quality++;
          if (this.items[i].sellIn < 6) this.items[i].quality++;
          if (this.items[i].quality > 50) this.items[i].quality = 50;
          if (this.items[i].sellIn < 0) this.items[i].quality = 0;
          break;

        case "Sulfuras, Hand of Ragnaros":
          break;
        case "Conjured Mana Cake":
          this.items[i].sellIn--;
          this.items[i].quality -= 2;
          if (this.items[i].sellIn < 0) this.items[i].quality -= 2;
          if (this.items[i].quality < 0) this.items[i].quality = 0;
          break;
        default:
          this.items[i].sellIn--;
          this.items[i].quality--;
          if (this.items[i].sellIn < 0) this.items[i].quality--;
          if (this.items[i].quality < 0) this.items[i].quality = 0;
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
