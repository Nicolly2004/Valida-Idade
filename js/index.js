

function verificar(){
    const nome = document.getElementById("nome").value;
    const anoNascimento = document.getElementById("nascimento").value;
    const genero = document.querySelector("input[name=genero]:checked").value;
    const text = document.getElementById("resultado-text");
    const imagem = document.getElementById("resultado-img");
    const resultado = document.getElementById("resultado");

    console.log(nome, anoNascimento, genero);

    const data = new Date();

    const idade = data.getFullYear() - anoNascimento;

    const imageUrl = "img/" + classificaIdade(idade, genero);

    imagem.setAttribute("src", imageUrl)
    
    text.innerText = `Olá ${nome}, identificamos ${(genero == "M" ? "Homem" : "Mulher")} de ${idade} anos`;
    resultado.classList.remove("hidden")
}

function classificaIdade(idade, genero) {
    if (idade >= 0 && idade <= 4) {
        if (genero == "M") {
            return "bebemulher.webp";
        }
        return "bebemulher.webp";

    }


    if (idade >= 5 && idade <= 15) {
        if (genero == "M") {
            return "menina.webp";
        }
        return "menina.webp";

    }

    if (idade >= 16 && idade <= 55) {
        if (genero == "M") {
            return "mulher.jpg"
        }
        return "mulher.jpg"

    }

    if (genero == "M") {
        return "velha.jpg"
    }
    return "velha.jpg"


}