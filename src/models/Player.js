import PlayingCard from './PlayingCard.js'
import CardDeck from './CardDeck.js'

export default class Player {
  constructor(name, hand = [], sets = []) {
    this._name = name;
    this._hand = hand;
    this._sets = sets;
  }

  name() {
    return this._name
  }

  hand() {
    return this._hand;
  }

  sets() {
    return this._sets;
  }

  handCount() {
    return this.hand().length;
  }

  setsCount() {
    return this.sets().length;
  }

  addCards(cards) {
    this._hand = this._hand.concat(cards)
  }

  isEmpty() {
    return Boolean(this.hand().length == 0);
  }

  hasAny(rank) {
    return this.hand().filter(card => rank == card.rank())
  }

  // const onlyUnique = (value, index, self) => {
  //   return self.indexOf(value) === index;
  // }
  //
  // const _hand = this.hand();
  //
  // ranksInHand() {
  //   // const _hand = this.hand();
  //   // const uniq = [...new Set(_hand)];
  //   // return uniq;
  //   _hand.filter(this.onlyUnique())
  // }
}

//   def check_for_sets
//     ranks_in_hand.each{ |rank| make_a_set(rank) if rank_count(rank) == 4 }
//   end

//   def give_cards(rank)
//     gift = hand.select{ |card| card.rank == rank }
//     hand.reject!{ |card| card.rank == rank }
//     gift
//   end

//   def sets_value
//     total_value = sets.map{ |rank| PlayingCard.value(rank) }.reduce(:+)
//   end
//
//   def highest_value
//     value_array = sets.map{|rank| PlayingCard.value(rank)}
//     value_array.max
//   end
//

//
//   def self.collection_from_data(data)
//     data.map{ |player_data| Player.from_json(player_data)}
//   end
//
//
//   def ranks_in_hand
//     hand.map(&:rank).uniq
//   end
//
//   def rank_count(rank)
//     hand.map(&:rank).length
//   end
//
//   def make_a_set(rank)
//     sets.push(rank)
//     hand.reject!{ |card| card.rank == rank }
//   end
//
//   def sort_cards
//     hand.sort! { |a, b| a.value <=> b.value }
//   end
