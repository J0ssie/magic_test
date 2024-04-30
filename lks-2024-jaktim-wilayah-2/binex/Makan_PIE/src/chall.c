#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

// gcc chall.c -o chall -m64 -fno-stack-protector
char flag[0x50];
void setup()
{
    setvbuf(stdout, 0 , 2 , 0);
    setvbuf(stdin, 0 , 2 , 0);
    FILE *fp;

    fp = fopen("flag.txt", "r");
    if (!fp){
        puts("[!] Error!\nJika flag tidak ditemukan di server, silahkan hubungi admin!");
        exit(1);
    }
    fgets(flag, 50, fp);
}

int main()
{
    char nama[32];
    setup();
    
    printf("Hai! Karena aku baik hati, aku akan memberimu PIE: 0x%llx\n", main);
    printf("Kalau boleh tau, siapa namamu? ");
    gets(nama);
    puts("Salam Kenal!\n Oh ya... Aku ada pesan untukmu, flag sudah terbaca tetapi (sengaja) tidak ditampilkan..\nbisakah kamu mendapatkannya?");
}