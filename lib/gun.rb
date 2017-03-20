class Gun
  attr_reader :name,
              :quality,
              :damage,
              :notes

  def initialize(data)
    @name    = data[:name]
    @quality = data[:quality] == "N/A" ? nil : data[:quality].delete("Quality Item.png")
    @damage  = data[:damage].nil? ? nil : data[:damage].to_s
    @notes   = data[:notes]
  end
end
