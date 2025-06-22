.data
x: .byte 3
y: .byte 0
z: .byte 0

.text
.global main
main:
    movb x, %al        # mueve x al acumulador
    cmp $3, %al        # compara x con 3
    jnz else           # si x no es 3, va al else

    movb $5, %al       # mueve 5 al acumulador
    addb y, %al        # agrega y al acumulador
    movb %al, y        # mueve lo que está en el acumulador a y
    jmp endif          # salta a endif

else:
    movb $2, %al       # mueve 2 al acumulador
    addb z, %al        # suma z al acumulador
    movb %al, z        # guarda el resultado en z

endif:
    movb $8, %al       # mueve 8 al acumulador
    movb %al, x        # guarda el 8 en x


    xor %eax, %eax     # limpia el registro eax
    ret
