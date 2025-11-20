// Mostrar a Potência automaticamente
document.addEventListener('DOMContentLoaded', function() {
function calcular() {
var luz = parseInt(document.getElementById('n1').value) || 0
var seco = parseInt(document.getElementById('n2').value) || 0
var umido = parseInt(document.getElementById('n3').value) || 0

var ptluz = luz * 100;
var ptseco = seco * 100;
var ptumido = umido * 600;

document.getElementById('w1').value = ptluz;
document.getElementById('w2').value = ptseco;
document.getElementById('w3').value = ptumido;

window.somapt = ptluz + ptseco + ptumido

// CALCULA A CORRENTE AUTOMATICAMENTE
calcularCorrente()

}

function calcularCorrente() {
    const tensao = parseFloat(document.getElementById('volt').value) || 0;
    
    if (tensao > 0 && window.somapt > 0) {
        window.corrente = (window.somapt / tensao).toFixed(2)
    }
}

// Adiciona os event listeners
document.getElementById('n1').addEventListener('input', calcular);
document.getElementById('n2').addEventListener('input', calcular);
document.getElementById('n3').addEventListener('input', calcular);

// Adiciona listener para a tensão também

document.getElementById('volt').addEventListener('input', calcularCorrente);

// Calcula inicialmente
calcular();
});

// Temperatura Ambiente (°C)

for (let i = 5; i < 65; i = i + 5) {
    document.getElementById("ambiente").innerHTML += `<option value="${i}">${i}°C</option>`;
}

// Circuitos Agrupados (N°)

for (let i=1; i < 21; i++){
    document.getElementById("agrupado").innerHTML += `<option value="${i}">${i}</option>`;
}

class Tabela {
    
    constructor() {

        this.circuito = 1
        this.arrayTabela = []

    }

    salvar() {
        let tabela = this.lerDados()

        if(this.validaCampos(tabela) == true) {
            this.adicionar(tabela)
        }

        this.listaTabela()
    }

    listaTabela() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for (let i=0; i < this.arrayTabela.length; i++) {
            let tr = tbody.insertRow()

            let td_circuito = tr.insertCell()
            let td_potencia = tr.insertCell()
            let td_tensao = tr.insertCell()
            let td_corrente = tr.insertCell()
            let td_linha = tr.insertCell()
            let td_condutor = tr.insertCell()

            td_circuito.innerText = this.arrayTabela[i].circuito
            td_potencia.innerText = this.arrayTabela[i].soma
            td_tensao.innerText = this.arrayTabela[i].tensao
            td_corrente.innerText = this.arrayTabela[i].corrente
            td_linha.innerText = this.arrayTabela[i].linha
            td_condutor.innerText = this.arrayTabela[i].condutor

        }
    }

    adicionar(tabela) {
        this.arrayTabela.push(tabela)
        this.circuito++
    }

    lerDados() {
        let tabela = {}

        tabela.circuito = this.circuito
        tabela.soma = window.somapt || 0
        tabela.tensao = document.getElementById('volt').value
        tabela.corrente = window.corrente || 0
        tabela.linha = document.getElementById('tipo').value
        tabela.condutor = document.getElementById('condutor').value

        return tabela
    }

    validaCampos(tabela) {
        let msg = ''

        if (tabela.tensao == '') {
            msg += 'Informe a Tensão\n'
        }

        if (tabela.linha == '') {
            msg += 'Informe a Linha Elétrica\n'
        }

        if (tabela.condutor == '') {
            msg += 'Informe a N° de Condutores\n'
        }

        if(msg != ''){
            window.alert(msg)
            return false
        }

        return true
    }

    excluir() {
        window.alert('Circuito Excluído')
    }
}

var tabela = new Tabela()