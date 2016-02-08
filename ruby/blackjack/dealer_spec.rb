require_relative 'blackjack'

describe Dealer do
  describe '#initialize' do
    let(:dealer) { Dealer.new("Lorena") }

    it 'can also create an instance of a User' do
      expect(dealer).to be_a User
    end

    it 'has a name' do
      expect(dealer.name).to eq("Lorena")
    end

    it 'has an empty hand' do
      expect(dealer.hand.length).to eq(0)
    end
  end

end