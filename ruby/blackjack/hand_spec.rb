require_relative 'blackjack'

describe Hand do
  describe '#sum' do
    let(:game) { Game.new }
    let(:lorena) {Player.new("Lorena")}
    let(:winnie) {Dealer.new("Winnie")}

    before :each do
      game.add_user(lorena)
      game.add_user(winnie)
      game.deal_to_users
    end

    it 'User can check to see dealer\'s card' do
      expect(lorena.hand.sum).to be_a Integer
    end
  end

  describe '#is_a_bust?' do
    let(:game) { Game.new }
    let(:lorena) {Player.new("Lorena")}

    before :each do
      game.add_user(lorena)
      game.deal_to_users
    end

    it 'can check if sum is over 21' do
      expect(lorena.hand.is_a_bust?).to be_falsey
    end
  end
end
