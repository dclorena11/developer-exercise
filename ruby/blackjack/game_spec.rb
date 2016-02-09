require_relative 'blackjack'

describe Game do

  describe '#initialize' do
    let(:game) { Game.new }

    it 'can create an instance of a Game' do
      expect(game).to be_a Game
    end

    it 'has a deck' do
      expect(game.deck).to be_a Deck
    end
  end

  describe '#add_user' do
    let(:game) { Game.new }
    let(:lorena) {Player.new("Lorena")}
    let(:winnie) {Dealer.new("Winnie")}

    it 'can add player and dealer to game' do
      game.add_user(lorena)
      game.add_user(winnie)
      expect(game.users.length).to eq(2)
    end

  end

  describe "#dealer" do
    let(:game) { Game.new }
    let(:lorena) {Player.new("Lorena")}
    let(:winnie) {Dealer.new("Winnie")}

    before :each do
      game.add_user(lorena)
      game.add_user(winnie)
      game.initial_deal
    end

    it 'knows who the dealer is' do
      expect(game.dealer.name).to be(winnie.name)
    end
  end


end