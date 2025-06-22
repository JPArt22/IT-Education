% Ejemplo de sistema de ecuaciones
A = [2 -1 1; 1 0 -1; 3 1 -1]; % Matriz de coeficientes
B = [3; -2; 4] % Vector de términos independientes

% Combina la matriz A y el vector B en una matriz aumentada
AugmentedMatrix = [A B];

% Obtiene el número de filas
n = size(AugmentedMatrix, 1);

% Método de Gauss Jordan
for i = 1:n
    % Hace el elemento de la diagonal igual a 1
    AugmentedMatrix(i, :) = AugmentedMatrix(i, :) /AugmentedMatrix(i, i);

    % Hace que los elementos de las columnas restantes igual a 0
    for j = 1:n
        if i ~= j
            AugmentedMatrix(j, :) = AugmentedMatrix(j, :) - AugmentedMatrix(j, i) * AugmentedMatrix(i, :);
        end
    end
end

x = AugmentedMatrix(:, end);

disp('La solución del sistema es');
disp(x);