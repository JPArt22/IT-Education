.data

  val_x: .byte  0x66,0x66,0x3d,0xc2
  half_float_val: .byte 0x3d,0xc2 
  fractional_bytes: .byte 0x66,0x66
  byte_c2: .byte 0xc2
  byte_3d: .byte 0x3d
  byte_66_1: .byte 0x66
  byte_66_2: .byte 0x66

    fmt_unsigned_x: .asciz "32 bits sin signo = %u\n"
    fmt_signed_x:   .asciz "32 bits con signo = %d\n"
    
    fmt_unsigned_y: .asciz "16 bits sin signo = %u\n"
    fmt_signed_y:   .asciz "16 bits con signo = %d\n"
    
    fmt_unsigned_z: .asciz "16 bits sin signo = %u\n"
    fmt_signed_z:   .asciz "16 bits con signo = %d\n"
    
    fmt_unsigned_c: .asciz "8 bits sin signo = %u\n"
    fmt_signed_c:   .asciz "8 bits con signo = %d\n"
    
    fmt_unsigned_v: .asciz "8 bits sin signo = %u\n"
    fmt_signed_v:   .asciz "8 bits con signo = %d\n"
    
    fmt_unsigned_b: .asciz "8 bits sin signo = %u\n"
    fmt_signed_b:   .asciz "8 bits con signo = %d\n"
    
    fmt_unsigned_n: .asciz "8 bits sin signo = %u\n"
    fmt_signed_n:   .asciz "8 bits con signo = %d\n"
    
    fmt_float_x:    .asciz "punto flotante (32 bits) = %f\n"
    fmt_float_u32: .asciz "punto flotante sin signo (32 bits) = %u\n"


        
.text
.global main
main:

   subq $8,%rsp

   movl val_x,%esi
   movl $fmt_unsigned_x , %edi
   movb $0,%al
   call printf

   movl val_x,%esi
   movl $fmt_signed_x , %edi
   movb $0,%al
   call printf

    movzwl half_float_val,%esi
    movl $fmt_unsigned_y , %edi
    movb $0,%al
    call printf

    movswl half_float_val,%esi
    movl $fmt_signed_y , %edi
    movb $0,%al
    call printf

    movzwl fractional_bytes,%esi
    movl $fmt_unsigned_z , %edi
    movb $0,%al
    call printf

    movswl fractional_bytes,%esi
    movl $fmt_signed_z , %edi
    movb $0,%al
    call printf   

    movzbl byte_c2,%esi
    movl $fmt_unsigned_c , %edi
    movb $0,%al
    call printf

    movsbl byte_c2,%esi
    movl $fmt_signed_c , %edi
    movb $0,%al
    call printf

    movzbl byte_3d,%esi
    movl $fmt_unsigned_v , %edi
    movb $0,%al
    call printf

    movsbl byte_3d,%esi
    movl $fmt_signed_v , %edi
    movb $0,%al
    call printf

    movzbl byte_66_1,%esi
    movl $fmt_unsigned_b , %edi
    movb $0,%al
    call printf

    movsbl byte_66_1,%esi
    movl $fmt_signed_b , %edi
    movb $0,%al
    call printf

    movzbl byte_66_2,%esi
    movl $fmt_unsigned_n , %edi
    movb $0,%al
    call printf

    movsbl byte_66_2,%esi
    movl $fmt_signed_n , %edi
    movb $0,%al
    call printf

    movss   val_x, %xmm0
    cvtss2sd %xmm0, %xmm0
    movl    $fmt_float_x, %edi
    movl    $1, %eax
    call    printf
    movl    $0, %eax
    
    movl val_x, %esi
    movl $fmt_float_u32, %edi
    movb $0, %al
    call printf


   addq $8,%rsp

   xor	%eax, %eax
   ret
