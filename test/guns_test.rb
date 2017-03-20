require "minitest/autorun"
require "minitest/pride"

require "./lib/guns"

class GunsTest < Minitest::Test

  def setup
    @guns = Guns.new()
  end

  def test_can_find_a_gun
    gun = @guns.find_gun_by_name("rad gun")

    assert_equal "Rad Gun", gun.name
  end

  def test_it_can_find_a_gun_with_apostrophe
    gun = @guns.find_gun_by_name("robots left hand")

    assert_equal "Robot's Left Hand", gun.name
  end

  def test_it_returns_nil_for_an_unknown_gun
    gun = @guns.find_gun_by_name("magic bullet")

    assert_nil gun
  end
end
