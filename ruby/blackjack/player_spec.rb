require_relative 'blackjack'

describe Player do
  describe '#initialize' do
    let(:player) { Player.new("Lorena") }

    it 'can create an instance of a User' do
      expect(player).to be_a User
    end

    it 'has a name' do
      expect(player.name).to eq("Lorena")
    end

    it 'has an empty hand' do
      expect(player.hand.length).to eq(0)
    end
  end

end