f = open("new.log","r").readlines()

#get http.request.full_uri and  http.file_data
for data in f:
    data_content = ""
    uri = ""
    if("http.request.full_uri" in data):
        uri = data.split("http.request.full_uri")[-1].split("',")[0]
    else:
        uri = ""
    if("http.file_data" in data):
        data_content = data.split("http.file_data")[-1].split("',")[0]
    else:
        data_content = ""
    print("ini uri", uri)
    print("ini data_cotent", data_content)
    
    print("\n")
#type f adalah list