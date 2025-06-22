.data
    a:      .byte 45, 32, -28, 72, -40, 7        // int8_t a[6] = {45, 32, -28, 72, -40, 7}
    sum:    .byte 0                             // int8_t sum = 0
    i:      .byte 0                             // int8_t i = 0
    fmt:    .string "sum = %d\n"                // formato para printf

.text
    .global main
    .extern printf

main:
    pushq %rbp                              // guardar RBP previo en la pila
    movq %rsp, %rbp                         // RBP <-- RSP (nuevo frame base)

loop_start:
    movsbl i(%rip), %eax                    // EAX <-- signo_ext(i)        ; i de 8 → 32 bits
    cmp $6, %eax                            // compara EAX - 6             ; ¿i < 6?
    jge end_loop                            // si i ≥ 6 → salta a end_loop

    cltq                                    // RAX <-- signo_ext(EAX)      ; EAX de 32 → 64 bits (para indexar)

    movsbl a(,%rax,1), %edx                 // EDX <-- signo_ext(a[i])     ; carga a[i] como int

    movsbl sum(%rip), %ecx                  // ECX <-- signo_ext(sum)      ; carga sum como int
    add %dl, %cl                            // CL <-- CL + DL              ; sum += a[i]
    movb %cl, sum(%rip)                     // sum <-- byte(CL)            ; guardar sum actualizado

    movsbl i(%rip), %eax                    // EAX <-- signo_ext(i)
    add $1, %al                             // AL <-- AL + 1               ; i++
    movb %al, i(%rip)                       // i <-- byte(AL)

    jmp loop_start                          // volver a inicio del bucle

end_loop:
    movsbl sum(%rip), %esi                  // ESI <-- signo_ext(sum)      ; printf arg: int sum
    lea fmt(%rip), %rdi                     // RDI <-- dirección de fmt    ; printf arg: formato
    xor %eax, %eax                          // EAX = 0                     ; no se usan registros xmm
    call printf                             // llamar a printf(fmt, sum)

    movl $0, %eax                           // return 0
    popq %rbp                               // restaurar RBP
    ret                                     // finalizar main
