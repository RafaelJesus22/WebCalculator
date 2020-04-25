

const insert = (n) => {
    document.form.textview.value = document.form.textview.value+n 
}


const solve = () => {

    const eq = document.form.textview.value;

    if (eq) {
        document.form.textview.value = eval(eq);
    }

}

const Clear = () => {
    document.form.textview.value = ""
}

const backSpace = () => {

}