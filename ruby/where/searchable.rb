module Searchable
  def where(search)
    self.select do |el|
      search.all? do |key,value|
        if value.kind_of?(Regexp)
          value =~ el[key]
        else
          value == el[key]
        end
      end
    end
  end
end

class Array
  include Searchable
end
