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
      expect(dealer.hand.cards.length).to eq(0)
    end
  end

  pending "#initial_deal" do
    # let(:game) { Game.new }
    # let(:lorena) {Player.new("Lorena")}
    # let(:winnie) {Dealer.new("Winnie")}

    # before :each do
    #   game.add_user(lorena)
    #   game.add_user(winnie)
    #   game.initial_deal
    # end

    it 'can deal 2 cards to each player' do
      expect(lorena.hand.cards.length).to eq(2)
    end

    it 'can deal 2 cards to dealer' do
      expect(winnie.hand.cards.length).to eq (2)
    end
  end

end