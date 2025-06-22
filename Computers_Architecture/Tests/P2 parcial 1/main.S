.data
    z: .byte 25, 120, 32
    s: .float 157.28
    q: .float 0
    v: .word 0
    w: .long 367
    i: .byte 1      //prueba 1 
    //i: .byte 0      //prueba 2
    
    fmtq: .asciz "q = %f\n"
    fmtv: .asciz "v = %d\n"
    
.text
.global main
main:
	pushq %rbx
	
	// q=s+z[i]
	movsbl i, %eax      // eax <-- i
    cltq				// 32 to 64 bits
    movb z(%rax),%dil   // dil <-- x[i]
    
    movsbl %dil, %edi       // edi <-- x[1] (promocion)
    cvtsi2ssl %edi, %xmm4   //convertir entero a flotante de 32 bits
    movss s, %xmm0          // xmm0 <-- s
    addss %xmm4, %xmm0      // xmm0 <-- s + z[i]  
    movss %xmm0, q          // q <-- xmm0
    
    //v=w+q
    movswl v, %ecx
    cvtsi2ssl w, %xmm2      //convertir entero a flotante de 32 bits
    addss %xmm0, %xmm2
    cvttss2sil %xmm2, %edi   // convertir flotante a entero truncado de 32 bits
    movw %di, v             // reduccion a 16 bits


print:
    
    movss       q,%xmm0
	cvtss2sd    %xmm0,%xmm0     // single precision to doble precision
	movl        $fmtq,%edi
	movl        $1,%eax
    call printf    			// imprimir q con printf
    
    movswl v, %esi                     
    movl $fmtv, %edi                  
    movl $0, %eax                    
    call printf    			// imprimir v con printf              


	
	popq %rbx
	
	xor	%eax, %eax
	ret