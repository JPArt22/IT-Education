.data
    a:      .byte 1,2,3,4,5,6          // a[] = {1,2,3,4,5,6}
    i:      .byte 2                   // i = 3
    fmt1:   .string "a[2] = %d\n"
    fmt2:   .string "a[3] = %d\n"

.section .text
.globl main
main:
    pushq %rbp                    // guardar rbp
    movq %rsp, %rbp               // rbp <-- rsp

    movsbl i(%rip), %eax          // eax <-- (i) (sign-ext)
    mov %eax, %ecx                // ecx <-- i
    cltq                          // rax <-- sign-ext(eax)
    movsbl a(,%rax,1), %edx       // edx <-- a[i]

    cmp $4, %edx                  // a[i] - 4
    jl less_than_four            // si a[i] < 4 → THEN

// ELSE: a[i] = a[i] - a[5]
greater_equal_four:
    movsbl a+5(%rip), %eax        // eax <-- a[5]
    sub %eax, %edx                // edx <-- a[i] - a[5]
    mov %ecx, %eax                // eax <-- i (otra vez)
    cltq                          // rax <-- sign-ext(eax)
    mov %dl, a(,%rax,1)           // a[i] <-- resultado
    jmp print_values

// THEN: a[2] = a[i] + 15
less_than_four:
    add $15, %edx                 // edx += 15
    mov %dl, a+2(%rip)            // a[2] <-- edx

print_values:
    movsbl a+2(%rip), %esi        // esi <-- a[2]
    mov $fmt1, %rdi               // rdi <-- formato
    mov $0, %eax                  // reset eax
    call printf

    movsbl a+3(%rip), %esi        // esi <-- a[3]
    mov $fmt2, %rdi               // rdi <-- formato
    mov $0, %eax
    call printf

    mov $0, %eax
    popq %rbp
    ret
