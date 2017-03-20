require "minitest/autorun"
require "minitest/pride"

require "./lib/gun"

class GunTest < Minitest::Test

  def test_it_has_a_name_quality_damage_and_notes
    data = {
      :name=>"Crossbow",
      :quality=>"D Quality Item.png",
      :damage=>22,
      :notes=>"Fires bolts.",
    }

    g = Gun.new(data)

    assert_equal "Crossbow", g.name
    assert_equal "D", g.quality
    assert_equal "22", g.damage
    assert_equal "Fires bolts.", g.notes
  end

  def test_nil_damage_stays_nil
    data = {
      :name=>"Robot's Left Hand",
      :quality=>"A Quality Item.png",
      :damage=>nil,
      :notes=>"Rapidly fires blue lasers.",
    }

    g = Gun.new(data)

    assert_nil g.damage
  end

  def test_N_A_quality_is_set_to_nil
    data = {
      :name=>"Rusty Sidearm",
      :quality=>"N/A",
      :damage=>6,
      :notes=>"Starting gun of The Hunter. Does not reveal secret walls."
    }

    g = Gun.new(data)

    assert_nil g.quality
  end
end
