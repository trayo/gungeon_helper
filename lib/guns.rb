require "csv"
require "./lib/gun"

class Guns
  FILE_LOCATION = "guns.csv"

  attr_reader :guns

  def initialize
    body = File.read("guns.csv")
    csv = CSV.new(body, :headers => true, :header_converters => :symbol, :converters => [:all])
    # @guns = csv.to_a.map {|row| row.to_hash }

    @guns = csv.to_a.map do |row|
      Gun.new(row)
    end
  end

  def find_gun_by_name(name)
    @guns.find do |gun|
      gun.name.delete("'").downcase.include?(name.downcase)
    end
  end
end
