.data
    a: .byte 1,2,3,4,5,6
    i: .byte 3
    
    fmta2: .asciz "a[2] = %d\n"
    fmta3: .asciz "a[3] = %d\n"
.text
.global main
main:
	pushq %rbx
	
	movsbl i, %eax
	cltq
	movb a(%rax), %al 
	
	cmpb $4, %al
	jle else
	
if:
    addb $15, %al
    movb %al, a+2
    jmp print
    
else:
    subb a+5, %al
    movb %al, a+3
    jmp print
    
print:
    
    movsbl a+2, %esi
    movl $fmta2, %edi
    movl $0, %eax
    call printf
    
    movsbl a+3, %esi
    movl $fmta3, %edi
    movl $0, %eax
    call printf
	
	popq %rbx
	
	xor	%eax, %eax
	ret