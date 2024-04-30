import json

# Baca file JSON
with open('sql.json') as f:
    data = json.load(f)
    for x in data:
        print(x)