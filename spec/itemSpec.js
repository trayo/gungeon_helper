describe('Item', function() {
  var Item = require('../lib/item')

  var data = {
    Icon: 'M16.png',
    Name: 'M16',
    Quote: 'Underslung',
    Quality: 'A Quality Item.png',
    Type: 'Burst',
    'Magazine Size': '30 (machine item) 3 (grenade launcher)',
    'Ammo Capacity': '500',
    Damage: 'Item: 5.5 Grenade: 10 (impact) + 25 (explosion)', 'Fire Rate': ' 0.10',
    'Reload Time': '1.2',
    'Shot Speed': '23',
    Range: 'Infinity.png',
    Force: '11',
    Spread: '7',
    Notes: 'Reloading alternates between bursts of 3 bullets and a grenade launcher.'
  }

  it('has a name', function() {
    item = new Item(data);

    expect(item.name).toEqual('m16')
  })

  it('has a quality', function() {
    item = new Item(data);

    expect(item.quality).toEqual('A')
  })

  it('has a damage', function() {
    item = new Item(data);

    expect(item.damage).toEqual('item: 5.5 grenade: 10 (impact) + 25 (explosion)')
  })

  it('accepts damage as a number', function() {
    var data = { Name: 'blank', Damage: 22 }

    item = new Item(data);

    expect(item.damage).toEqual('22')
  });

  it('has notes', function() {
    item = new Item(data);

    expect(item.notes).toContain('reloading alternates')
  });

  it('changes empty quality to not found', function() {
   item = new Item({ Name: 'blank' })

   expect(item.quality).toEqual('not found')
  });

  it('changes empty damage to not found', function() {
   item = new Item({ Name: 'blank' })

   expect(item.damage).toEqual('not found')
  });

  it('changes empty notes to not found', function() {
   item = new Item({ Name: 'blank' })

   expect(item.notes).toEqual('not found')
  });

  it('removes apostrophes from names', function() {
   item = new Item({ Name: 'Robot\'s Left Hand' })

   expect(item.name).toEqual('robots left hand')
  });
})
