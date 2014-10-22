require "open-uri"

remote_base_url = "http://en.wikipedia.org/wiki"
remote_page_name = "Ada_Lovelace"
remote_full_url = remote_base_url + "/" + remote_page_name

puts "Downloading from:" + remote_full_url

remote_data = open(remote_full_url).read

my_local_filename = "my_copy_of-" + remote_page_name + ".csv"

puts "Writing to: " + my_local_filename

my_local_file = open(my_local_filename, "w")
my_local_file.write(remote_data)    
my_local_file.close