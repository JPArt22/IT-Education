.data
    // Declaración de variables como bytes
    x: .byte 0xC3, 0xF5, 0x48, 0x40     // float x = 3.14
    y: .byte 0xCD, 0xCC, 0x86, 0x40     // float y = 4.2
    q: .byte 5                         // int8_t q = 5
    v: .byte 0                         // int8_t v = 0
    w: .byte 9                         // int8_t w = 9

    fmtf: .string "x = %f\n"
    fmti: .string "v = %d\n"

.text
.global main
main:
    pushq %rbp                         // estÃ¡ndar de funciÃ³n
    movq %rsp, %rbp

    // --- x = x + q ---
    movss x(%rip), %xmm0               // cargar x (float) en xmm0
    movsbq q(%rip), %rax               // cargar q (int8_t) y extender a 64 bits en rax
    cvtsi2ss %rax, %xmm1               // convertir entero a float en xmm1
    addss %xmm1, %xmm0                 // xmm0 = xmm0 + xmm1
    movss %xmm0, x(%rip)               // guardar resultado en x

    // --- x = x + y ---
    movss x(%rip), %xmm0               // cargar x en xmm0
    movss y(%rip), %xmm1               // cargar y en xmm1
    addss %xmm1, %xmm0                 // xmm0 = xmm0 + xmm1
    movss %xmm0, x(%rip)               // guardar resultado en x

    // --- v = x ---
    cvtss2si x(%rip), %eax             // convertir x (float) a entero en eax
    movb %al, v(%rip)                  // guardar parte baja en v (int8_t)

    // --- v = v + w ---
    movsbq v(%rip), %rax               // cargar v y extender a 64 bits
    movsbq w(%rip), %rcx               // cargar w y extender
    addq %rcx, %rax                    // rax = v + w
    movb %al, v(%rip)                  // guardar resultado (solo 1 byte) en v

    // --- printf("x = %f\n", x); ---
    movss x(%rip), %xmm0               // cargar x como argumento flotante
    cvtss2sd %xmm0, %xmm0              // convertir float a double
    movl $fmtf, %edi                   // primer argumento: formato
    movl $1, %eax                      // nÃºmero de argumentos flotantes
    call printf

    // --- printf("v = %d\n", v); ---
    movsbq v(%rip), %rsi               // cargar v y extender para imprimir
    movl $fmti, %edi                   // primer argumento
    movl $0, %eax                      // nÃºmero de argumentos flotantes = 0
    call printf

    // --- return 0 ---
    movl $0, %eax                      // valor de retorno

    popq %rbp
    ret
