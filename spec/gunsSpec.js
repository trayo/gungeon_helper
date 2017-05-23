describe('Gun', function() {
  var Guns = require('../lib/guns')
  var guns;

  beforeEach(function() {
    guns = new Guns();
  });

  it('can find a gun', function() {
    gun = guns.find_by_name('rad gun')

    expect(gun.name).toEqual('rad gun')
  });

  it('can find a different gun', function() {
    gun = guns.find_by_name('dart gun')

    expect(gun.name).toEqual('dart gun')
  });

  it('returns undefined when a gun does not exist', function() {
    gun = guns.find_by_name('magic bullet')

    expect(gun).toEqual(undefined)
  });
})
