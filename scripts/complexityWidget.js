function createComplexityWidget(complexities) {
  const container = document.createElement('div');
  container.className = 'complexity-widget';

  const select = document.createElement('select');
  ['Best Case', 'Average Case', 'Worst Case'].forEach(label => {
    const option = document.createElement('option');
    option.value = label;
    option.textContent = label;
    select.appendChild(option);
  });

  const output = document.createElement('p');
  output.textContent = complexities['Best Case'];

  select.addEventListener('change', () => {
    output.textContent = complexities[select.value];
  });

  container.appendChild(select);
  container.appendChild(output);
  return container;
}
