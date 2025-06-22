%Define la función 
f = @(x) x.^2 - 4;

% Crear un rango de valores para x
x = linspace(-3, 3, 100);

% Evaluar la función en los puntos de x
y = f(x);

% Encontrar las raíces de la ecuación
root1 = fzero(f, -2); %primera raíz cercana a -2
root2 = fzero(f, 2); %primera raíz cercana a 2

% Graficar la función
figure;
plot(x, y, 'b-', 'LineWidth', 1.5); % Gráfica de f(x)
hold on;
plot([-3 3], [0 0]), 'k--'); % Eje x en y=0
plot(root1, 0, 'ro', 'MarkerSize', 8, 'MarkerColor', 'r'); %raíz en -2
plot(root2, 0, 'ro', 'MarkerSize', 8, 'MarkerColor', 'r'); %raíz en 2

%Añadir etiquetasd y título

xlabel('x');
ylabel('f(x)');
title('Gráfico de F(x)')
