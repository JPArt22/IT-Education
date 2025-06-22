.data
    //TODO:
    x: .byte 23, 126, -45             // array x of bytes
    z: .byte -45, 4, 103              // array z of bytes
    w: .long 0                        // 32-bit integer w
    a: .float 234.56                  // float variable a
    i: .byte 1                        // test 1
    //i: .byte 1                     // test 2
    fmt: .asciz "w = %d\n"           // format string for printf
    
    
.text
.global main
main:
	
    pushq   %rbx                      // save rbx on stack
	
    //a = a + x[i];
    //TODO: cargar x[i] en registro bl, promover a 32 bits, convertir a float in xmm5 y realizar suma
    movsbl i, %eax                    // eax <-- sign-extended i
    cltq                              // rax <-- sign-extended eax (64-bit index)
    movb x(%rax), %bl                // bl <-- x[i]
    movsbl %bl, %ecx                 // ecx <-- sign-extended x[i]
    cvtsi2ssl %ecx, %xmm5            // xmm5 <-- convert int to float
    movss a, %xmm0                   // xmm0 <-- current value of a
    addss %xmm5, %xmm0               // xmm0 = a + float(x[i])
    movss %xmm0, a                   // a <-- result

    //w = a + z[1];
    //TODO: cargar z[1] en registro cl, promover a 32 bits, convertir a float in xmm3 y realizar suma
    movb z+1, %cl                    // cl <-- z[1]
    movsbl %cl, %ecx                 // ecx <-- sign-extended z[1]
    cvtsi2ssl %ecx, %xmm3            // xmm3 <-- convert z[1] to float
    addss %xmm0, %xmm3               // xmm3 = (a + x[i]) + z[1]
    cvttss2sil %xmm3, %ecx           // ecx <-- convert float to int (truncate)
    movl %ecx, w                     // w <-- final result

    //printf("w = %d\n",w);
    //TODO:
    movl w, %esi                     // esi <-- w (1st printf argument)
    movl $fmt, %edi                  // edi <-- format string
    movl $0, %eax                    // no floating-point arguments
    call printf                      // call printf("w = %d\n", w)

    //return 0;
    xor %eax, %eax                   // return 0
    popq %rbx                        // restore rbx
    ret
