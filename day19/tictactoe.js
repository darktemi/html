const tr1 = document.getElementById('tr1');
const tr2 = document.getElementById('tr2');
const tr3 = document.getElementById('tr3');
const turn_image = document.createElement('style');
const turn_image2 = document.createElement('style');
const trs = [tr1, tr2, tr3];
const tds = [];
let turn = 'O';


const marking = function(event) {
    const trNumber = trs.indexOf(event.target.parentNode);
<<<<<<< HEAD
    const tdNumber = tds[trNumber].indexOf(event.target);
=======
    console.log(trNumber);
    const tdNumber = tds[trNumber].indexOf(event.target);
    console.log(trNumber, tdNumber);
>>>>>>> 52c33df35e6bf21837bc52b7d1cc416f4edb28f0

    if (tds[trNumber][tdNumber].textContent !== '') {// 칸이 이미 채워져 있는가?
    } else {
        tds[trNumber][tdNumber].textContent = turn;
<<<<<<< HEAD

        // 칸이 이미 채워져 있는가?
        let threeTd = false;

=======
        
        let threeTd = false; // 세 칸 다 채워졌나?
        
>>>>>>> 52c33df35e6bf21837bc52b7d1cc416f4edb28f0
        // 가로줄 검사
        if (
            tds[trNumber][0].textContent === turn &&
            tds[trNumber][1].textContent === turn &&
            tds[trNumber][2].textContent === turn
        ) {
          threeTd = true;
        }

<<<<<<< HEAD
        if (//세로줄 검사
=======
        // 세로줄 검사
        if (
>>>>>>> 52c33df35e6bf21837bc52b7d1cc416f4edb28f0
          tds[0][tdNumber].textContent === turn &&
          tds[1][tdNumber].textContent === turn &&
          tds[2][tdNumber].textContent === turn
        ) {
          threeTd = true;
        }
<<<<<<< HEAD
=======

>>>>>>> 52c33df35e6bf21837bc52b7d1cc416f4edb28f0
        // 대각선 검사 필요한 경우 1
        if (trNumber - tdNumber === 0) {
            if (
                tds[0][0].textContent === turn &&
                tds[1][1].textContent === turn &&
                tds[2][2].textContent === turn
            ) {
                threeTd = true
            }
        }
<<<<<<< HEAD
=======

>>>>>>> 52c33df35e6bf21837bc52b7d1cc416f4edb28f0
        // 대각선 검사 필요한 경우 2
        if (Math.abs(trNumber - tdNumber) === 2) {
            if (
                tds[0][2].textContent === turn &&
                tds[1][1].textContent === turn &&
                tds[2][0].textContent === turn
            ) {
                threeTd = true;
            }
        }
<<<<<<< HEAD
        // 다 찼으면
        if (threeTd) {
            alert(turn + 'win!');
            // 초기화
            turn = 'O';
            tds.forEach(function (trs) {
                trs.forEach(function (td) {
                    td.textContent = '';
                });
            });
=======

        // 다 찼으면
        if (threeTd) {
            alert(turn + ' win!');

            // 초기화
            turn = 'O';
            tds.forEach((trs) => trs.forEach((td) => td.textContent = ''));
            // forEach 매서드는 파라미터로 주어진 함수를 배열요소 각각에 대해 실행
>>>>>>> 52c33df35e6bf21837bc52b7d1cc416f4edb28f0

        } else {// 다 안 찼으면
            if (turn === 'O') {
                turn = 'X';
                turn_image2.innerHTML="td:hover{background-image: url(X.jpg); background-size: cover}";
                document.body.appendChild(turn_image2);
            } else {
                turn = 'O';
                turn_image.innerHTML="td:hover{background-image: url(O.jpg); background-size: cover}";
                document.body.appendChild(turn_image);
            }
        } 
    }
};

for (let i = 0; i < 3; i++) {
    tds.push([]);
};

for (let j = 0; j < 3; j++) {
    tds[0].push(tr1.querySelectorAll('td').item(j));
    tds[1].push(tr2.querySelectorAll('td').item(j));
    tds[2].push(tr3.querySelectorAll('td').item(j));
}; //querySelectorAll
//item은 요소 인덱스로 요소를 취득

for (let k = 0; k < 9; k++) {
    const td = document.getElementsByTagName('td').item(k);
    td.addEventListener('click', marking);
<<<<<<< HEAD
};
=======
}; //getElementsByTagName은 해당 태그의 문자열을 취득


turn_image.innerHTML="td:hover{background-image: url(O.jpg); background-size: cover}";
document.body.appendChild(turn_image);
    

        
console.log(trs, tds);

>>>>>>> 52c33df35e6bf21837bc52b7d1cc416f4edb28f0
