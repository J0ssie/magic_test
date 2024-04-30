import random
from Crypto.Util.number import *
lirik=open('lirik.txt').read()
hasil=[]
for i in lirik:
    temp=random.getrandbits(32)
    enc=ord(i)^temp
    hasil.append(enc)
encrypted_lirik=open('enc','w')
for i in hasil:
    encrypted_lirik.write(str(i)+'\n')