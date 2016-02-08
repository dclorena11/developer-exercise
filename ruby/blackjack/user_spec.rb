require_relative 'blackjack'

describe User do
  describe '#initialize' do
    let(:user) { User.new("Lorena") }

    it 'can create an instance of a User' do
      expect(user).to be_a User
    end

    it 'has a name' do
      expect(user.name).to eq("Lorena")
    end

    it 'has an empty hand' do
      expect(user.hand.cards.length).to eq(0)
    end
  end


end