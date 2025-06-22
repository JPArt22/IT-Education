% Definición de la función
f = @(x) x.^3 - 6*x.^2 + 11*x - 6;

% Intervalo inicial
a = 1.5;
b = 2.8;

% Tolerancia y máximo de iteraciones
tol = 1e-4;
max_iter = 20;

% Encabezado de la tabla
fprintf('%2s %10s %10s %10s %12s %12s\n', 'n', 'a_n', 'b_n', 'c_n', 'f(c_n)', '|b_n - a_n|');
fprintf('%s\n', repmat('-', 1, 65));

for n = 1:max_iter
    c = (a + b)/2;
    fc = f(c);
    fprintf('%2d %10.6f %10.6f %10.6f %12.6f %12.6f\n', n, a, b, c, fc, abs(b - a));
    
    if abs(fc) < tol || abs(b - a) < tol
        break;
    end
    
    if f(a)*fc < 0
        b = c;
    else
        a = c;
    end
end
