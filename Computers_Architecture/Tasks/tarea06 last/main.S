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
	
	pushq %rsp
	
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
    cvttss2sil %xmm0, %eax
    movb %al, v
    
    // v = v + w
    movb w, %al
    addb %al, v
    
    movss       x,%xmm0
    cvtss2sd    %xmm0,%xmm0
    movl        $fmtx,%edi
    movl        $1,%eax
    call        printf
    
    
    movsbl      v,%esi
    movl        $fmtv,%edi
    movl        $0,%eax
    call        printf    
	
	xor	%eax, %eax
	popq %rsp
	ret