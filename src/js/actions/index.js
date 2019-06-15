//actions


//componentからdispachされたメソッドをreducersに受け渡すための場所
//各引数として、Menu追加時に作成するidと、そのtextなどの情報を受け取り、それをreducersへ渡す


//渡す引数、メニューのid、メニュー内容(text)、疲労度(degree)
export function addMenu(id, text, degree, date) {
    console.log('actions: dispach()を指定することでcomponentから渡された値の入っているactionsです。typeを識別してreducersへその値を引き渡します。');
    return {
        type: "ADD",
        id: id,
        text: text,
        degree: degree,
        date: date
    };
}


export function updateMenu(id, text) {
    console.log('actions: updateのactionsについて');
    return {
        type: "UPDATE",
        id: id,
        text: text
    }
}