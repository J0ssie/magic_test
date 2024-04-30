#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

// gcc chall.c -o chall -m64 -no-pie -fstack-protector

void setup()
{
    setvbuf(stdout, 0 , 2 , 0);
    setvbuf(stdin, 0 , 2 , 0);
}

void win()
{
    system("/bin/sh");
}

int main()
{
    char nama[32];
	setup();
    
    puts("Hai! Aku ada hadiah kecil untukmu.");
    printf("Ini adalah CANARY pelindung dunia: 0x%11$llx\n");
    printf("Apakah kamu senang? ");
    gets(nama);
}
