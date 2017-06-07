describe('Item', function() {
  var Items = require('../lib/items')
  var items;

  beforeEach(function() {
    items = new Items();
  });

  it('can find a item', function() {
    item = items.find_by_name('rad gun')

    expect(item.name).toEqual('rad gun')
  });

  it('can find a different item', function() {
    item = items.find_by_name('dart gun')

    expect(item.name).toEqual('dart gun')
  });

  it('returns undefined when a item does not exist', function() {
    item = items.find_by_name('magic bullet')

    expect(item).toEqual(undefined)
  });

  it('can find an item with an apostrophe', function() {
    item = items.find_by_name('robot\'s left hand')

    expect(item.name).toEqual('robots left hand')
  });
})
