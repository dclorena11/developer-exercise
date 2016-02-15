class Card
  attr_accessor :suite, :name, :value

  def initialize(suite, name, value)
    @suite, @name, @value = suite, name, value
  end
end

class Deck
  attr_accessor :playable_cards
  SUITES = [:hearts, :diamonds, :spades, :clubs]
  NAME_VALUES = {
    :two   => 2,
    :three => 3,
    :four  => 4,
    :five  => 5,
    :six   => 6,
    :seven => 7,
    :eight => 8,
    :nine  => 9,
    :ten   => 10,
    :jack  => 10,
    :queen => 10,
    :king  => 10,
    :ace   => [11, 1]}

  def initialize
    shuffle
  end

  def deal_card
    random = rand(@playable_cards.size)
    @playable_cards.delete_at(random)
  end

  def shuffle
    @playable_cards = []
    SUITES.each do |suite|
      NAME_VALUES.each do |name, value|
        @playable_cards << Card.new(suite, name, value)
      end
    end
  end
end

class Hand
  attr_accessor :cards

  def initialize
    @cards = []
  end

  def sum
    points = @cards.map(&:value).flatten.reduce(:+)
    num_of_aces = @cards.map(&:name).count(:ace)

    if num_of_aces == 1
      if points <= 22
        points - 1
      else
        points - 11
      end
    elsif num_of_aces == 2
      points - 10
    elsif num_of_aces == 3
      points - 30
    elsif num_of_aces == 4
      points - 40
    else
      points
    end
  end

  def is_a_stay?
    return true if sum == 17
    return false if sum != 17
  end

  def is_a_bust?
    return true if sum > 21
    return false if sum <= 21
  end

  def is_blackjack?
    return true if sum == 21
    return false if sum < 21 || sum > 21
  end
end

class User
  attr_accessor :name, :hand, :in_game, :winner

  def initialize(name)
    @name = name
    @hand = Hand.new
    @in_game = true
    @winner = false
  end

  def draw_card(card)
    if @hand.is_a_stay? && self.in_game
      "It's a good idea to stay since you card total is 17"
    elsif self.in_game
      @hand.cards << card
      if @hand.is_a_bust?
        @in_game = false
        "You bust! You card total is #{@hand.sum}."
      elsif @hand.is_blackjack?
        @in_game = false
        @winner = true
        "You have blackjack!"
      elsif @hand.sum == 21
        @in_game = false
        "Nice! Your cards add up to 21!"
      else
        "Your cards add up to #{@hand.sum}."
      end
    else
      "You are not in the game anymore."
    end
  end
end

class Dealer < User
  def showing_card
    @hand.cards[0]
  end

  def start_deal(game)
    game.users.each do |user|
      2.times {user.hand.cards << game.deck.deal_card}
    end
  end
end

class Player < User

end

class Game
  attr_accessor :deck, :users
  def initialize
    @deck = Deck.new
    @users = []
  end

  def add_user(user)
    @users << user
  end

  def dealer
    @users.find do |user|
      user.is_a?(Dealer)
    end
  end

end

require 'test/unit'

# class CardTest < Test::Unit::TestCase
#   def setup
#     @card = Card.new(:hearts, :ten, 10)
#   end

#   def test_card_suite_is_correct
#     assert_equal @card.suite, :hearts
#   end

#   def test_card_name_is_correct
#     assert_equal @card.name, :ten
#   end
#   def test_card_value_is_correct
#     assert_equal @card.value, 10
#   end
# end

# class DeckTest < Test::Unit::TestCase
#   def setup
#     @deck = Deck.new
#   end

#   def test_new_deck_has_52_playable_cards
#     assert_equal @deck.playable_cards.size, 52
#   end

#   def test_dealt_card_should_not_be_included_in_playable_cards
#     card = @deck.deal_card
#     assert(@deck.playable_cards.include?(card))
#   end

#   def test_shuffled_deck_has_52_playable_cards
#     @deck.shuffle
#     assert_equal @deck.playable_cards.size, 52
#   end
# end