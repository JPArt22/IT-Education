.data
    x: .long 257684, -293205, 62870   // arreglo de 3 enteros
    p: .quad 0                        // puntero al arreglo
    max: .long 0                      // valor máximo encontrado
    i: .byte 0                        // índice del bucle
    fmt: .asciz "max = %d\n"         // formato para printf
.text
.global main
main:
    pushq %rbx                        // guardar %rbx en la pila

    // TODO: p = x
    movq $x, p

    // TODO: max = p[0]
    movq p, %rbx                      // cargar la dirección de x en %rbx
    movl (%rbx), %eax                 // %eax <-- x[0]
    movl %eax, max                    // guardar x[0] en max

loop:
    cmpb $3, i                        // si i >= 3, salir del bucle
    jge end_loop

    // TODO: cargar p[i] en %ecx
    movsbq i, %rax                    // convertir i a 64 bits en %rax
    movq p, %rbx                      // recargar p en %rbx
    movl (%rbx,%rax,4), %ecx         // ecx <-- p[i]

    // TODO: comparar p[i] con max
    movl max, %edx                   // edx <-- max
    cmpl %edx, %ecx                  // comparar p[i] con max
    jle skip_update                  // si p[i] <= max, saltar

    // TODO: actualizar max = p[i]
    movl %ecx, max

skip_update:
    incb i                           // i++
    jmp loop

end_loop:
    // TODO: imprimir el valor de max
    movl max, %esi
    movl $fmt, %edi
    movl $0, %eax
    call printf

    xor %eax, %eax                   // return 0
    popq %rbx
    ret
