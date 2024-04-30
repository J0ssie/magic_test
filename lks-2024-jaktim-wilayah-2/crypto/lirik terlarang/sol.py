from randcrack import RandCrack
f=open('src/enc').readlines()
f2=open('src/lirik.txt').read()
rc=RandCrack()
cnt=0
ans=''
for i,j in zip(f,f2):
    rc.submit(int(i)^ord(j))
    ans+=j
    if cnt==623:
        print('cukup')
        break
    cnt+=1
for i in range(624,len(f)):
    key=rc.predict_getrandbits(32)
    ans+=chr(key^int(f[i]))

hasil=open('ans.txt','w')
hasil.write(ans)