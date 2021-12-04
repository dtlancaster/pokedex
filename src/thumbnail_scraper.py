from bs4 import BeautifulSoup
import re
import requests
import shutil
import urllib.robotparser

headers = {'user_agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15'}
first_path = "images/thumbnails/001.png"
first_url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
data = []
pages = []
n = 1
for i in range(899):
    r = requests.get(first_url, stream=True)

    if r.status_code == 200:
        with open(first_path, 'wb') as f:
            r.raw.decode_content = True
            shutil.copyfileobj(r.raw, f)
    first_path = f"images/thumbnails/{n:03d}.png"
    first_url = f"https://assets.pokemon.com/assets/cms2/img/pokedex/full/{n:03d}.png"
    n += 1

