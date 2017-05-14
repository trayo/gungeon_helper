describe('Gun', function() {
  var Gun = require('../lib/gun')

  var data = {
    Icon: 'M16.png',
    Name: 'M16',
    Quote: 'Underslung',
    Quality: 'A Quality Item.png',
    Type: 'Burst',
    'Magazine Size': '30 (machine gun) 3 (grenade launcher)',
    'Ammo Capacity': '500',
    Damage: 'Gun: 5.5 Grenade: 10 (impact) + 25 (explosion)', 'Fire Rate': ' 0.10',
    'Reload Time': '1.2',
    'Shot Speed': '23',
    Range: 'Infinity.png',
    Force: '11',
    Spread: '7',
    Notes: 'Reloading alternates between bursts of 3 bullets and a grenade launcher.'
  }

  it('has a name', function() {
    gun = new Gun(data);

    expect(gun.name).toEqual('m16')
  })

  it('has a quality', function() {
    gun = new Gun(data);

    expect(gun.quality).toEqual('A')
  })

  it('has a damage', function() {
    gun = new Gun(data);

    expect(gun.damage).toEqual('gun: 5.5 grenade: 10 (impact) + 25 (explosion)')
  })

  it('accepts damage as a number', function() {
    var data = { Damage: 22 }

    gun = new Gun(data);

    expect(gun.damage).toEqual('22')
  });

  it('has notes', function() {
    gun = new Gun(data);

    expect(gun.notes).toContain('reloading alternates')
  });

  it('changes empty quality to not found', function() {
   gun = new Gun({})

   expect(gun.quality).toEqual('not found')
  });

  it('changes empty damage to not found', function() {
   gun = new Gun({})

   expect(gun.damage).toEqual('not found')
  });

  it('changes empty notes to not found', function() {
   gun = new Gun({})

   expect(gun.notes).toEqual('not found')
  });

  it('removes apostrophes from names', function() {
   gun = new Gun({Name: 'Robot\'s Left Hand'})

   expect(gun.name).toEqual('robots left hand')
  });
})
