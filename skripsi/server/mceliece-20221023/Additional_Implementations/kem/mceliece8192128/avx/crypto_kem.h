#ifndef crypto_kem_H
#define crypto_kem_H

#include "crypto_kem_mceliece8192128.h"

#define crypto_kem_keypair crypto_kem_mceliece8192128_keypair
#define crypto_kem_enc crypto_kem_mceliece8192128_enc
#define crypto_kem_dec crypto_kem_mceliece8192128_dec
#define crypto_kem_PUBLICKEYBYTES crypto_kem_mceliece8192128_PUBLICKEYBYTES
#define crypto_kem_SECRETKEYBYTES crypto_kem_mceliece8192128_SECRETKEYBYTES
#define crypto_kem_BYTES crypto_kem_mceliece8192128_BYTES
#define crypto_kem_CIPHERTEXTBYTES crypto_kem_mceliece8192128_CIPHERTEXTBYTES
#define crypto_kem_PRIMITIVE "mceliece8192128"

#endif
