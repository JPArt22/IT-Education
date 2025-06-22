.data
    x: .float 3.14
    y: .float 4.2
    q: .byte 5
    v: .byte 0
    w: .byte 9
    
    fmtx: .asciz "x = %f\n"
    fmtv: .asciz "v = %d\n"
.text
.global main
main:
	
	pushq %rbx
	
	// x = x + q 
	movsbl q, %eax
	cvtsi2ssl %eax, %xmm1
	movss x, %xmm0
	addss %xmm1, %xmm0
	movss %xmm0, x
	
	// x = x + y
	movss y, %xmm2
	addss %xmm2, %xmm0
	movss %xmm0, x
	
	// v = x
	movsbl v, %edx
	cvttss2sil %xmm0, %edx
	movb %dl, v
	
	// v = v + w
	movsbl w, %ecx
	addl %ecx, %edx
	movb %dl, v
	
	
	movss       x,%xmm0
    cvtss2sd    %xmm0,%xmm0         //cvtss2sd: Convert Scalar Single Precision Floating-Point Value to Scalar Double PrecisionFloating-Point Value 
    movl        $fmtx,%edi
    movl        $1,%eax
    call        printf
    
    movsbl v, %esi                     
    movl $fmtv, %edi                  
    movl $0, %eax                    
    call printf    			// imprimir v con printf
    



	
	
	popq %rbx
	xor	%eax, %eax
	ret