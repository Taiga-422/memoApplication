// BOSSのsaveボタンクリック時のイベント
$("#boss-save").on("click", function () {
    const bossKey = "BOSS_" + $("#boss-num").val();
    const bossValue = $("#boss-memo").val();

    localStorage.setItem(bossKey, bossValue);
    const html = `
    <ul>
        <li >${bossKey}</li>
        <li >${bossValue}</li>
    </ul>
    `;
    $("#boss-memoarea").append(html);
});

// WORKERのsaveボタンクリック時のイベント
$("#worker-save").on("click", function () {
    const workerKey = "WORKER_" + $("#worker-num").val();
    const workerValue = $("#worker-memo").val();

    localStorage.setItem(workerKey, workerValue);
    const html = `
    <ul>
        <li >${workerKey}</li>
        <li >${workerValue}</li>
    </ul>
    `;
    $("#worker-memoarea").append(html);
});

// BOSSのclearクリック時のイベント
$("#boss-clear").on("click", function () {
    let bossNum = $("#boss-num");
    bossNum.val("");
    let bossMemo = $("#boss-memo");
    bossMemo.val("");
});

// Workerのclearクリック時のイベント
$("#worker-clear").on("click", function () {
    let workerNum = $("#worker-num");
    workerNum.val("");
    let workerMemo = $("#worker-memo");
    workerMemo.val("");
});

// BOSS側のページを読み込み、保存したデータ取得して表示する挙動
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("BOSS_")) { //BOSS_から始まるキーのみ表示
        const bossValue = localStorage.getItem(key);
        const html = `
      <ul>
        <li>${key}</li>
        <li>${bossValue}</li>
      </ul>
      `;
        $("#boss-memoarea").append(html);
    }
};

// Worker側のページを読み込み、保存したデータ取得して表示する挙動
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("WORKER_")) { //WORKER_から始まるキーのみ表示
        const workerValue = localStorage.getItem(key);
        const html = `
      <tr>
        <td>${key}</td>
        <td>${workerValue}</td>
      </tr>
      `;
        $("#worker-memoarea").append(html);
    }
};

// BOSSのdeleteクリック時のイベント ※課題提出後に改良。
$("#boss-delete").on("click", function () {
    // localstorageをループしてBOSSのキーだけ削除する。
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("BOSS_")) { //"BOSS_"で始まるキーを削除する。
            localStorage.removeItem(key);
        }
    }
    // BOSSのメモエリアを空にする。
    $("#boss-memoarea").empty();
});

// WORKERのdeleteクリック時のイベント ※課題提出後に改良。
$("#worker-delete").on("click", function () {
    // localstorageをループしてBOSSのキーだけ削除する。
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("WORKER_")) { //"BOSS_"で始まるキーを削除する。
            localStorage.removeItem(key);
        }
    }
    // BOSSのメモエリアを空にする。
    $("#worker-memoarea").empty();
});
