.data
    x: .byte 23,126,-45              // array x of bytes
    z: .byte -45,4,103               // array z of bytes
    w: .long 0                       // 32-bit integer variable w
    i: .byte 1                       // test 1
    //i: .byte 0                    // test 2
    fmt: .asciz "w = %d\n"          // format string for printf
    
.text
.global main
main:
	
    pushq   %rbx                    // save rbx on stack

    //if(x[i]>103)
    //{
    //TODO: cargar x[i] en registro dil
    movsbl i, %eax                  // eax <-- sign-extended i
    cltq                            // rax <-- sign-extended eax (to 64-bit)
    movb x(%rax), %dil              // dil <-- x[i]
    
    cmpb $103, %dil                 // compare x[i] with 103
    jle else1                       // jump to else1 if x[i] <= 103

then1:
    //w=z[i]+145;
    //TODO: cargar z[i] en r8b, promover a 32 bits y realizar suma
    movb z(%rax), %r8b              // r8b <-- z[i]
    movsbl %r8b, %r8d               // r8d <-- sign-extended z[i]
    addl $145, %r8d                 // r8d += 145
    movl %r8d, w                    // w <-- result
    jmp endif1                      // skip else branch

//}
//else
//{
else1:
    //w=x[i]+z[2];
    //TODO: cargar x[i] en dl y z[2] en bl, promover a 32 bits y sumar
    movb x(%rax), %dl               // dl <-- x[i]
    movb z+2, %bl                   // bl <-- z[2]
    movsbl %dl, %edx                // edx <-- sign-extended x[i]
    movsbl %bl, %ebx                // ebx <-- sign-extended z[2]
    add %edx, %ebx                  // ebx = x[i] + z[2]
    movl %ebx, w                    // w <-- result
//}

endif1:

//printf("w = %d\n",w);
//TODO:
    movl w, %esi                    // esi <-- w 
    movq $fmt, %rdi                 // rdi <-- format
    movl $0, %eax                   // no floating-point args
    call printf                     // call printf("w = %d\n", w)


//return 0;
    xor %eax, %eax                  // return 0
    popq %rbx                       // restore rbx
    ret
