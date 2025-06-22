.data
max:    .byte 5
sum:    .byte 0
count:  .byte 0

.text
.global main
main:
    cmpb count, max          // max - count
    je endwhile              // si son iguales, termina

    addb $1, count           // count = count + 1
    movzxb count, %al        // mover count a AL (extensión cero)
    movzxb sum, %bl          // mover sum a BL (extensión cero)
    addb %al, %bl            // BL = BL + AL
    movb %bl, sum            // guardar resultado en sum

    jmp main

endwhile:

    movbsl sum, %esi 
    movl $fmtsum, %edi 
    
    call printf
    xor %eax, %eax           # limpiar eax
    ret
