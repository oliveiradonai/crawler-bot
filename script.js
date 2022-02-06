$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/gabinete",
        method: "GET"
    }).done(function (data) {
        dataMenorPreco = data
        dataFormat = data.slice(Math.max(data.length - 5, 0))
        dataFormat.reverse()
        dataFormat.forEach(element => {
            $(".gab").append(`<li id=${element.id} ${element.status === 0 && "class='indisponivel'"}>${element.preco} ${element.data}</li>`);
        });
        let menorPreco = 0;
        let precoS = '';
        let dataS = '';
        dataMenorPreco.forEach(element =>{
            if (element.status === 1) {
                let precoF = element.preco.replace("R$", "").replace(/[^0-9]/g, "");
                parseFloat(precoF/100);
                if (menorPreco === 0) {
                    menorPreco = precoF;
                    dataS = element.data;
                    precoS = element.preco;
                    // console.log(`1 ${element.id} ${menorPreco}`);
                } else {
                    if (menorPreco < precoF) {
                        // console.log(`1 ${element.id} ${menorPreco}`);
                    } else {
                        if (menorPreco > precoF) {
                            menorPreco = precoF;
                            dataS = element.data;
                            precoS = element.preco;
                            // console.log(`3 ${element.id} ${menorPreco}`);
                        } else {
                            if (menorPreco = precoF) {
                                // console.log(`3 ${element.id} ${menorPreco}`);
                            }
                        }
                    }
                }
            } else {
                return
            }
        });
        $(".gab-card").append(`<p>Menor preço: ${precoS} - ${dataS}</p>`);
        // console.log(`resultado gabinete: ${precoS}`)
    });

    $.ajax({
        url: "http://localhost:3000/placa",
        method: "GET"
    }).done(function (data) {
        dataMenorPreco = data
        dataFormat = data.slice(Math.max(data.length - 5, 0))
        dataFormat.reverse()
        dataFormat.forEach(element => {
           
            $(".plc").append(`<li id=${element.id} ${element.status === 0 && "class='indisponivel'"}>${element.preco} ${element.data}</li>`);
        });
        let menorPreco = 0;
        let precoS = '';
        let dataS = '';
        dataMenorPreco.forEach(element =>{
            if (element.status === 1) {
                let precoF = element.preco.replace("R$", "").replace(/[^0-9]/g, "");
                parseFloat(precoF/100);
                if (menorPreco === 0) {
                    menorPreco = precoF;
                    dataS = element.data;
                    precoS = element.preco;
                    // console.log(`1 ${element.id} ${menorPreco}`);
                } else {
                    if (menorPreco < precoF) {
                        // console.log(`1 ${element.id} ${menorPreco}`);
                    } else {
                        if (menorPreco > precoF) {
                            menorPreco = precoF;
                            dataS = element.data;
                            precoS = element.preco;
                            // console.log(`3 ${element.id} ${menorPreco}`);
                        } else {
                            if (menorPreco = precoF) {
                                // console.log(`3 ${element.id} ${menorPreco}`);
                            }
                        }
                    }
                }
            } else {
                return
            }
        });
        $(".plc-card").append(`<p>Menor preço: ${precoS} - ${dataS}</p>`);
        // console.log(`resultado placa: ${precoS}`)
    });

    $.ajax({
        url: "http://localhost:3000/volante",
        method: "GET"
    }).done(function (data) {
        dataMenorPreco = data
        dataFormat = data.slice(Math.max(data.length - 5, 0))
        dataFormat.reverse()
        dataFormat.forEach(element => {
            $(".vol").append(`<li id=${element.id} ${element.status === 0 && "class='indisponivel'"}>${element.preco} ${element.data}</li>`);
        });
        let menorPreco = 0;
        let precoS = '';
        let dataS = '';
        dataMenorPreco.forEach(element =>{
            if (element.status === 1) {
                let precoF = element.preco.replace("R$", "").replace(/[^0-9]/g, "");
                parseFloat(precoF/100);
                if (menorPreco === 0) {
                    menorPreco = precoF;
                    dataS = element.data;
                    precoS = element.preco;
                    // console.log(`1 ${element.id} ${menorPreco}`);
                } else {
                    if (menorPreco < precoF) {
                        // console.log(`1 ${element.id} ${menorPreco}`);
                    } else {
                        if (menorPreco > precoF) {
                            menorPreco = precoF;
                            dataS = element.data;
                            precoS = element.preco;
                            // console.log(`3 ${element.id} ${menorPreco}`);
                        } else {
                            if (menorPreco = precoF) {
                                // console.log(`3 ${element.id} ${menorPreco}`);
                            }
                        }
                    }
                }
            } else {
                return
            }
        });
        $(".vol-card").append(`<p>Menor preço: ${precoS} - ${dataS}</p>`);
        // console.log(`resultado volante: ${precoS}`)
    });
});
