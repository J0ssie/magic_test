#include <stdio.h>
#include <string.h> 
void tidak_benar(){
    printf("Flag yang anda masukkan salah!!");
}
int main(){
    int arr_cek[40]={22, 114, 77, 116, 95, 82, 56, 84, 10, 7, 0, 123, 52, 10, 77, 89, 45, 108, 12, 121, 95, 127, 74, 0, 52, 88, 74, 86, 90, 87, 38, 87, 90, 89, 77, 66, 16, 96, 50, 121};
    char inp[50];
    char kunci[5]="k3y5";
    printf("cek flag : ");
    fgets(inp,50,stdin);
    int inp_len=strlen(inp);
    if(inp_len!=40){
        tidak_benar();
        return 0;
    }
    else{
        for(int i=0;i<20;i++){
            char temp=inp[i];
            inp[i]=inp[40-i-1];
            inp[40-i-1]=temp;
        }
        for(int i=0;i<inp_len;i++){
            int temp=(int)inp[i]^(int)kunci[i%4];
            if(temp!=arr_cek[i]){
                tidak_benar();
                return 0;
            }
        }
        printf("Flag anda sudah benar!");
    }
}