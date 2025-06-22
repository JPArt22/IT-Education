Select 3 + 5 "Suma", 'Luis Carlos ' + 'Guatavita Roncancio' "Nombre" from dual;

Select 3 + 5 "Suma", 'Luis Carlos ' || 'Guatavita Roncancio' "Nombre" from dual;

Select 3 + 5 "Suma", (select d from aa where a=2) "Nombre_1"
      ,'Luis Carlos ' || 'Guatavita Roncancio' "Nombre_2"from dual;

select * from AA;

select * from CC;

select * from CC, AA;

select * from CC, CC;

select * from CC X, AA Y;

select * from (select * from AA),(select * from CC);

select * from (select * from AA) R1,(select * from CC) R2;

select R1.a, R2.a from (select a from AA) R1,(select a from CC) R2;
