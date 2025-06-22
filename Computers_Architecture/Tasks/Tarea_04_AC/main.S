.data
MAX:      .byte 9           // MAX <-- 5
COUNT:    .byte 0           // COUNT <-- 0
SUM:      .byte 0           // SUM <-- 0

fmtSUM:   .asciz "SUM: %d\n"    // Formato para imprimir SUM
fmtCOUNT: .asciz "COUNT: %d\n"  // Formato para imprimir COUNT
fmtMAX:   .asciz "MAX: %d\n"    // Formato para imprimir MAX

.text
.global main
.extern printf

main:
    movb $0, COUNT           // COUNT <-- 0
    movb $0, SUM             // SUM <-- 0

while:
    movb COUNT, %al          // al <-- COUNT
    cmpb MAX, %al            // compara al con MAX
    je endwhile              // si COUNT == MAX, salta a endwhile

    incb %al                 // al <-- al + 1
    movb %al, COUNT          // COUNT <-- COUNT + 1

    movb SUM, %bl            // bl <-- SUM
    addb %al, %bl            // bl <-- bl + COUNT
    movb %bl, SUM            // SUM <-- SUM + COUNT

    jmp while                // repetir bucle

endwhile:
    // Imprimir SUM
    movzbl SUM, %edi         // edi <-- (zero-extend) SUM
    mov $fmtSUM, %rdi        // rdi <-- dirección de fmtSUM
    movzbl SUM, %esi         // esi <-- valor de SUM
    xor %eax, %eax           // limpiar eax para llamadas a funciones con varargs
    call printf              // printf("SUM: %d\n", SUM)

    // Imprimir COUNT
    mov $fmtCOUNT, %rdi      // rdi <-- dirección de fmtCOUNT
    movzbl COUNT, %esi       // esi <-- valor de COUNT
    xor %eax, %eax
    call printf              // printf("COUNT: %d\n", COUNT)

    // Imprimir MAX
    mov $fmtMAX, %rdi        // rdi <-- dirección de fmtMAX
    movzbl MAX, %esi         // esi <-- valor de MAX
    xor %eax, %eax
    call printf              // printf("MAX: %d\n", MAX)

    xor %eax, %eax           // eax <-- 0 (retorno)
    ret
