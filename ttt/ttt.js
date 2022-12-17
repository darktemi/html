const table = document.createElement('table');
for (let i = 0; i < 3; i++) {
  const tr = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
      const td = document.createElement('td');
      tr.append(td);

      td.addEventListener('click', (cl) => {
        console.log('clieked');
      
        if (cl.target.textContent) return;
        cl.target.textContent = turn;
        if (turn === 'O') {
          turn = 'X';
        } else if (turn === 'X') {
          turn = 'O';
        }
      });
    }
    table.append(tr);
}
document.body.append(table);
