.data

    x: .word   5
    i: .byte   2                    //prueba 1
    //i: .byte   0                    //prueba 2
    fmtb: .string "b[2] = %d\n"
    fmtx: .string "x = %d\n"

.text
.global main
main:
	
    pushq   %rbp
    movq    %rsp, %rbp
    subq    $32, %rsp
    
    //int16_t *p=NULL;
    //TODO: start address of pointer p: rbp-8
    movq    $0, -8(%rbp)               // pointer p at address rbp-8

    
    //int16_t a[3]={1,2,3};    
    //TODO: start address of array a: rbp-14
    movw    $3, -10(%rbp)               //a[2] <-- 3    ;a[2] at address: rbp-10 (highest address)
    movw    $2, -12(%rbp)               //a[1] <-- 2    ;a[1] at address: rbp-12      
    movw    $1, -14(%rbp)               //a[0] <-- 1    ;a[0] at address: rbp-14 (lowest address)


    //int16_t b[3]={4,5,6};
    //TODO: start address of array b: rbp-20
    movw    $6, -16(%rbp)               //b[2] <-- 6    ;b[2] at address: rbp-10 (highest address)
    movw    $5, -18(%rbp)               //b[1] <-- 5    ;b[1] at address: rbp-12      
    movw    $4, -20(%rbp)               //b[0] <-- 4    ;b[0] at address: rbp-14 (lowest address)

    //TODO: do the rest of coding:
    
    //p=a;
    leaq    -14(%rbp), %rax             //rax <-- start address of array a: rbp-14
    movq    %rax, -8(%rbp)              //p <-- start address of array a
    
    //b[2] = b[1] + p[i];
    movswl  -18(%rbp),%edx              //edx <-- b[1] promoted to 32 bits
    movsbq  i,%rax                      //rax <-- (i) 64 bits 
    movq    -8(%rbp),%rcx               //rcx <-- (p) <--> rcx <-- start address of array a
    movswl  (%rcx,%rax,2),%edi          //edi <-- (p[i])<--> edi <-- (a+i*2) <--> edi <-- (a[i]) promoted to 32 bits
    addl    %edi,%edx                   //edx <-- b[1] + (p[i])
    movw    %dx,-16(%rbp)                //b[2] <-- b[1] + (p[i])  demotion to 16 bits
    
    //x = p[i] + b[i]
    leaq -20(%rbp), %rdx                //rcx <-- b <--> rcx <-- start address of array b
    movswl  (%rdx,%rax,2),%edx           //edx <-- b[i]
    addl    %edi, %edx                   //edx <-- p[i] + b[i]
    movw    %dx,x                        //x <-- edx
    
    
    //printf("b[2] = %d\n",b[2]);
    movswl  -16(%rbp),%esi              //esi <-- (b[2])
    movl    $fmtb, %edi
    movl    $0, %eax
    call    printf
    
    //printf("x = %d\n",x);
    movzwl x, %esi              
    movl $fmtx, %edi              
    movb $0, %al                      
    call printf 


    xorl    %eax, %eax
    addq    $32,%rsp
    popq    %rbp