.data
    x: .byte 0x03, 0x2e, 0x01, 0x04
    y: .byte 0x02, 0x2e, 0x01
    fmt: .asciz "0x78, 0x20, 0x3d, 0x20, 0x25, 0x66, 0x0a, 0x00"
    
.text
.global main
main:
	# your code goes here
	
	// subq $8,%rsp
	pushq  %rbp     // alinear el stack
	
    mov       x, %esi
    mov       y, %edi
    add       %esi, %edi
    mov       %edi, x
    
    movss       x,%esi
    cvtss2sd    %esi,%esi
    movl        $fmt,%edi
    movl        $1,%eax
    call        printf
	
	xor	%eax, %eax
	// addq $8,%rsp
	popq        %rbp
	ret