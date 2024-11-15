// BOSSのsaveボタンクリック時のイベント
$("#boss-save").on("click", function () {
    const bossKey = $("#boss-num").val();
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
    const workerKey = $("#worker-num").val();
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
    const bossKey = localStorage.bossKey(i);
    const bossValue = localStorage.getItem(bossKey);
    const html = `
      <tr>
        <td>${bossKey}</td>
        <td>${bossValue}</td>
      </tr>
      `;
    $("#boss-memoarea").append(html);
};

// Worker側のページを読み込み、保存したデータ取得して表示する挙動
for (let i = 0; i < localStorage.length; i++) {
    const workerKey = localStorage.workerKey(i);
    const workerValue = localStorage.getItem(workerKey);
    const html = `
      <tr>
        <td>${workerKey}</td>
        <td>${workerValue}</td>
      </tr>
      `;
    $("#worker-memoarea").append(html);
};

// deleteクリック時のイベント ※課題提出後に改良。
$("#boss-delete").on("click", function () {
    localStorage.clear();
    $("#boss-memoarea").empty();
});


