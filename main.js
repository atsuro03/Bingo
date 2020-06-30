"use strict";
{
    function createColumn(col) {
        // ↓ const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 同じ意味
        const source = [];
        for (let i = 0; i < 15; i++) {
            // 1 ... 15
            // source[i] = i + 1 + 15 * 0;
            // 16 ... 30
            // source[i] = i + 1 + 15 * 1;
            // 31 ... 45
            // source[i] = i + 1 + 15 * 2;
            source[i] = i + 1 + 15 * col;
        }

        const column = [];
        // b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        // b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        // b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        // b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        // b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        // ↓ 上の記述と同じ意味
        for (let i = 0; i < 5; i++) {
            column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        }

        return column;
    }

    function createColumns() {
        const columns = [];
        // columns[0] = createColumn(0);
        // columns[1] = createColumn(1);
        // columns[2] = createColumn(2);
        // columns[3] = createColumn(3);
        // columns[4] = createColumn(4);
        // ↓ 上の記述と同じ意味
        for (let i = 0; i < 5; i++) {
            columns[i] = createColumn(i);
        }
        columns[2][2] = "FREE";
        return columns;
    }

    // // 反転させる関数
    // function createBingo(columns) {
    //     // 反転させた配列
    //     const bingo = [];
    //     // 行の数だけループする
    //     for (let i = 0; i < 5; i++) {
    //         bingo[i] = [];
    //         // 5列分
    //         for (let col = 0; col < 5; col++) {
    //             // 反転
    //             bingo[i][col] = columns[col][i];
    //         }
    //     }
    //     return bingo;
    // }

    function renderBingo(columns) {
        // ブラウザ表示
        for (let row = 0; row < 5; row++) {
            const tr = document.createElement('tr');
            for (let col = 0; col < 5; col++) {
                const td = document.createElement('td');
                td.textContent = columns[col][row];
                tr.appendChild(td);
            }
            document.querySelector('tbody').appendChild(tr);
        }
    }
    const columns = createColumns();
    renderBingo(columns);
}
