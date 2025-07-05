.data
    x: .long 257684, -293205, 62870   // arreglo
    p: .quad 0                        // puntero al arreglo
    min: .long 0                      // valor mínimo encontrado
    i: .byte 0                        // índice
    fmt: .asciz "min = %d\n"         // cadena de formato
.text
.global main
main:
    pushq %rbx                        // salvar %rbx

    // TODO: p = x
    movq $x, p

    // TODO: min = p[0]
    movq p, %rbx
    movl (%rbx), %eax                 // eax <-- x[0]
    movl %eax, min

loop:
    cmpb $3, i                        // ¿i < 3?
    jge end_loop

    // TODO: cargar p[i] en ecx
    movsbq i, %rax                    // extender i a 64 bits
    movq p, %rbx
    movl (%rbx,%rax,4), %ecx         // ecx <-- p[i]

    // TODO: comparar p[i] con min
    movl min, %edx                   // edx <-- min
    cmpl %ecx, %edx                  // si p[i] < min
    jle skip_update                  // si no, saltar

    // TODO: actualizar min = p[i]
    movl %ecx, min

skip_update:
    incb i
    jmp loop

end_loop:
    // TODO: imprimir min
    movl min, %esi
    movl $fmt, %edi
    movl $0, %eax
    call printf

    xor %eax, %eax                   // return 0
    popq %rbx
    ret
