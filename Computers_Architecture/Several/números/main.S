.data
    x_32u:   .long 0x02D36666
    x16_hi:  .word 0x02D3
    x16_lo:  .word 0x6666
    x8_1:    .byte 0x02
    x8_2:    .byte 0xD3
    x8_3:    .byte 0x66
    x8_4:    .byte 0x66

    b1:     .byte 0x02
    b2:     .byte 0xD3
    b3:     .byte 0x66
    b4:     .byte 0x66

    fmtu:    .asciz "32 bits unsigned = %u\n"
    fmts:    .asciz "32 bits signed = %d\n"
    fmt16:   .asciz "16 bits parte alta = %u\n16 bits parte baja = %u\n"
    fmt8:    .asciz "8 bits: %u %u %u %u\n"
    fmtf8:   .asciz "Byte %d como float = %.2f\n"

.text
.global main
main:
    subq $8, %rsp

    // 32 bits sin signo
    movl x_32u, %esi
    movl $fmtu, %edi
    call printf

    // 32 bits con signo
    movl x_32u, %esi
    movl $fmts, %edi
    call printf

    // 16 bits parte alta y baja
    movzwl x16_hi, %esi
    movzwl x16_lo, %edx
    movl $fmt16, %edi
    call printf

    // 8 bits individuales
    movzbl x8_1, %esi
    movzbl x8_2, %edx
    movzbl x8_3, %ecx
    movzbl x8_4, %r8d
    movl $fmt8, %edi
    call printf

    // Byte 1 como float
    mov $1, %edi              // primer argumento %d -> edi
    movzbl b1, %eax
    cvtsi2ss %eax, %xmm0      // primer argumento float en xmm0
    movl $fmtf8, %esi         // segundo argumento %s en esi
    xor %eax, %eax            // %al=0 para printf (número de regs float usados)
    call printf

    // Byte 2 como float
    mov $2, %edi
    movzbl b2, %eax
    cvtsi2ss %eax, %xmm0
    movl $fmtf8, %esi
    xor %eax, %eax
    call printf

    // Byte 3 como float
    mov $3, %edi
    movzbl b3, %eax
    cvtsi2ss %eax, %xmm0
    movl $fmtf8, %esi
    xor %eax, %eax
    call printf

    // Byte 4 como float
    mov $4, %edi
    movzbl b4, %eax
    cvtsi2ss %eax, %xmm0
    movl $fmtf8, %esi
    xor %eax, %eax
    call printf

    addq $8, %rsp
    xor %eax, %eax
    ret
