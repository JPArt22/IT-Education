
.data

    a: .byte 1,2,3,4,5,6
    x: .byte 0
    fmt: .asciz "%d\n"
    

.text
.global main
main:

    pushq %rbp
	
	movb a+4, %al
	addb $7,%al
	movb %al,x
	movsbl x, %esi
	movl $fmt, %edi
	movl $0, %eax
	
	call printf
	
	popq %rbp
	
	xor	%eax, %eax
	ret