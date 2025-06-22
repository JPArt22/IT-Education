.data

    a: .byte 1,2,3,4,5,6
    fmt: .asciz "%d\n"
.text
.global main
main:

    pushq %rbp
    
	movsbl a+2, %esi
	movl $fmt, %edi
	movl $0, %eax
	call printf
	
	popq %rbp
	
	xor	%eax, %eax
	ret