.data
    x: .byte -6, -12, 23
    w: .word -85
    y: .byte 25
    i: .byte 2      //prueba 1 
    //i: .byte 0      //prueba 2
    
    fmtx: .asciz "x[1] = %d\n"
    fmty: .asciz "y = %d\n"
    
.text
.global main
main:
	pushq %rbx
	
	movsbl i, %eax      // eax <-- i
    cltq				// 32 to 64 bits
    movb x(%rax),%dil   // dil <-- x[i]
    
    cmpb $20, %dil      // x[i]>20
    jle else

if01:   //  y=w+100

    movswl w, %ebx      // promocion a 32 bits
    addl $100, %ebx
    movb %bl, y
    jmp if02            // ir a funcion if02

if02:   // y<=15
    
    cmpb $15, y     // y - 15
    jg else         // si y - 15 > 0 ir a else
    movsbl x+0, %ecx
    movsbl x+2, %edx
    addl %ecx, %edx
    movb %dl, x+1       // al <-- x[1]
    jmp print

else:
    
    movsbl x+0, %ecx
    addl $45, %ecx
    movb %cl, x+1       // cl <-- x[1]

print:
    movsbl x+1, %esi                     
    movl $fmtx, %edi                  
    movl $0, %eax                    
    call printf    			// imprimir x con printf
    
    movsbl y, %esi                     
    movl $fmty, %edi                  
    movl $0, %eax                    
    call printf    			// imprimir y con printf


	
	popq %rbx
	
	xor	%eax, %eax
	ret