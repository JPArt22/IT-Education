.data

    x: .byte 23,126,-45
    z: .byte -45,4,103
    w: .long 0 
    j: .byte 1 
    //j: .byte 0
    fmt: .asciz "w = %d\n"
    
.text
.global main
main:
	# your code goes here
	
	pushq   %rbx
	
	//w=x[1] + z[j];
	//TODO: cargar x[1] en registro cl y z[j] en registro sil, promover a 32 bits y sumar
	movb x+1, %cl
	movsbl j, %eax
	cltq
	movb z(%rax), %sil
	movsbl %cl, %ecx
	movsbl %sil, %edx
	addl %ecx, %edx
	movl %edx, w
	
	
	
	
    //printf("w = %d\n",w);
	movl    w,%esi 
	movl    $fmt,%edi 
	movl    $0,%eax
	call    printf

	//return 0;
	xor	%eax, %eax
	popq    %rbx
	ret