function orderJaggedArray(arr) {
    arr.map((element, index) => {
        let arraySlice = arr.slice(index + 1);
        arraySlice.map((m) => {
            if (m.length === element.length) {
                if (element.every((e) => m.includes(e))) {
                    arr.splice(arr.indexOf(m), 1);
                }
            }
        });
    });
    console.log(arr);
    return arr;
}