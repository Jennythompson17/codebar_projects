require "open-uri"
remote_base_url = "http://en.wikipedia.org/wiki"

start_year = 1900
end_year = 1906
compiled_file = open(start_year.to_s + "-" + end_year.to_s + ".html",  "w")

(start_year..end_year).each do |yr|
    rpage = open(remote_base_url + "/" + yr.to_s)
    rpage_data = rpage.read
   
    compiled_file.write(rpage_data)
    
    local_fname = "copy-of-" + yr.to_s + ".html"
    local_file = open(local_fname, "w")
    local_file.write(rpage_data)
    local_file.close

    puts "Wrote file " + local_fname
    sleep 1
end
compiled_file.close