require "twitter"
require "sqlite3"
require "pp"

def db
@db ||= SQLite3::Database.new("buddington.db")
end 


OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE

##SSL set up for RailsInstaller is buggy
def client
  @client ||= Twitter::REST::Client.new do |config|
    config.consumer_key        = "6Qp2jNoS9qOVZMpVNjpBNw"
    config.consumer_secret     = "fm7Xplz3ndNsLgMrBRwHaT6oiaBE78wYO8K013dN8"
    config.access_token        = "1256486036-PoyKFmiz3VtVchgbip875A57HZ5AA3cMxbgWfOk"
    config.access_token_secret = "N4MehECNc3x658xZb674Ev8TnD5doh5v8sFGYdL0t5J94"
  end
end

def results
  @results ||= client.search('ThomTownsend', count:3, result_type: 'recent').take(5)
end

def user_mentions(tweet)
  tweet.user_mentions.map do |mention| 
    { to: mention.screen_name,
      from: mention.name
    }
  end
end

def tweets
  results.map do |tweet|
    { ref_id: tweet.id,
      text: tweet.text,
      hashtags: tweet.hashtags,
      urls: tweet.urls,
      user_mentions: user_mentions(tweet)
    }
  end
end



#sql = <<SQL
 # create table Tweet_Text (
  #  id integer PRIMARY KEY,
   # text varchar2(255)
    #);
#SQL
#db.execute_batch(sql)
tweets.each do |tweet|
puts '---'
  begin
    db.execute "INSERT INTO tweet_text (text, ref_id) values ('#{tweet[:text]}','#{tweet[:ref_id]}');"
  rescue
    puts "This reference id already exists."
  end
end

pp tweets
