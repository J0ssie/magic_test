#include <stdlib.h>
#include <stdio.h>
#include <string.h> 

int TERKUNCI=1;
int main(){
    printf("======Selamat datang di Encryptor-3002!======\n");
    int opt;
    char inp[100];
    char nl;
    while(1){
        printf("Apa yang ingin kamu lakukan?\n");
        printf("1. Encrypt Plaintext\n");
        printf("2. Decrypt ciphertext\n");
        printf("3. Exit\n");
        printf("Masukkan Opsi : ");
        scanf("%d",&opt);
        scanf("%c", &nl);
        if(opt==1){
            char out[100]="";
            printf("Masukkan Plaintext : ");
            fgets(inp,100,stdin);
            int ln=strlen(inp);
            if(ln>=4){
                int kunci=((int)inp[0]+(int)inp[1]+(int)inp[2]+(int)inp[3])%26;
                for(int i=0;i<ln;i++){
                    if(inp[i]>='A'&&inp[i]<='Z'){
                        int temp=(int)inp[i]+kunci;
                        if(temp>90){
                            temp-=90;
                            temp+=64;
                        }
                        out[i]=(char)temp;
                    }
                    else{
                        out[i]=inp[i];
                    }
                    kunci=(kunci*12+i)%26;
                }
                printf("Hasil enkripsi : %s",out);
            }
            else{
                printf("Tidak dapat men-encrypt plaintext\n");
            }
        }
        else if(opt==2){
            printf("Maaf fitur dekripsi sedang rusak\n");
        }
        else{
            return 0;
        }
    }

}