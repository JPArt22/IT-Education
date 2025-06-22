% Datos
tasks = ["Run", "Morning Prayer", "Order", "Cold Shower", ...
         "Productive", "Nap", "Meeting", "Night Prayer", "Sleep", "To Do"];

days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

weekly_data = [
    0 1 1 1 0 1 1 0 0 0;
    0 0 0 1 0 0 1 0 0 0;
    0 1 1 1 0 0 0 0 0 0;
    0 1 0 1 0 1 1 0 0 0;
    1 1 1 1 0 0 0 0 0 0;
    0 1 1 1 0 0 1 1 1 0;
    1 1 1 1 0 1 1 1 1 1
];

% Paleta masculina
colors = [
    48 26 42;
    0 50 53;
    0 60 82;
    28 28 28;
    47 79 79;
    68 48 29;
    46 46 46;
    11 44 11;
    18 18 57;
    68 21 21
] / 255;

% Creamos la figura
figure('Color','k');
axes1 = axes('Color','k');
hold(axes1, 'on');

% Dibujar las barras apiladas reales
h = bar(categorical(days), weekly_data, 'stacked', 'BarWidth', 0.6);

% Aplicamos colores y bordes
for i = 1:length(tasks)
    h(i).FaceColor = colors(i,:);
    h(i).EdgeColor = [0.5 0.5 0.5];
    h(i).LineWidth = 1.2;
    
    % Simular efecto 3D muy sutil con sombra (aplicamos gradiente leve)
    h(i).FaceAlpha = 0.95;
end

% Total diario por cada barra
total_per_day = sum(weekly_data, 2);

% Dibujar la línea discontinua de totales
x = 1:length(days);
plot(x, total_per_day, 'o--', 'Color', [0 1 1], 'MarkerFaceColor', 'w', 'LineWidth', 1.8)

% Mostrar los valores encima de cada barra
for i = 1:length(days)
    text(i, total_per_day(i)+0.3, num2str(total_per_day(i)), ...
         'Color','w','HorizontalAlignment','center','FontSize',10)
end

% Mostrar promedio semanal
total_completed = sum(total_per_day);
average = total_completed / 7;

annotation('textbox', [0.75 0.85 0.15 0.08], 'String', ...
    sprintf('Weekly Avg:\n%.2f', average), 'FontSize', 12, ...
    'Color','w','EdgeColor',[0.5 0.5 0.5],'BackgroundColor','k','LineWidth',1.2);

% Ajuste visual
ylabel('Completed Tasks','Color','w','FontSize',13)
title('Weekly Task Performance (2D stacked bars + pseudo 3D effect)','Color','w','FontSize',16)
ylim([0 12])
grid on
set(gca, 'XColor', 'w', 'YColor', 'w', 'FontSize', 11)

% Agregamos iluminación sutil (pseudo 3D)
material shiny
lighting gouraud
camlight headlight
set(gca, 'Projection','perspective')  % levemente "falso" pero bonito

% Leyenda
legend(tasks, 'TextColor','w','EdgeColor',[0.5 0.5 0.5], ...
       'Color','k','FontSize',9, 'Location', 'eastoutside');

hold off
