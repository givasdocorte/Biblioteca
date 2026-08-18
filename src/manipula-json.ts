// importar apenas as funções que precisamos utilizar do "fs"
import { existsSync, readFileSync, mkdirSync, writeFileSync } from "fs";

// 1. Definição do Tipo do Dado (Model)
type Livro = {
    titulo: string;
    autor: string;
    ano: number;
    lido: boolean;
};

// 2. Lista Inicial de Dados (Mock Data)
const livros: Livro[] = [
    {titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, lido: true },
    {titulo: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945, lido: false }
        //adicione mais livros aqui
];

// 3. Verificação e Criação do diretório "dados"
const pasta = "./dados";
if (!existsSync(pasta)) { //verifica a existencia do caminho
    mkdirSync(pasta); //caso não exista ele cria uma pasta com nome "data"
    }

// 4. salvando os dados convertidos na pasta em JSON
const caminho = `${pasta}/livros.json`;
writeFileSync(caminho, JSON.stringify(livros, null, 2));
console.log("dados salvos com sucesso 👍");

// 5. lendo dados de volta e convertendo em objetos
const textolido = readFileSync(caminho, "utf-8");
const livrosrecuperados: Livro[] = JSON.parse(textolido);

// 6. exibição formatada do conteúdo recuperado
console.log("\n === 📚 LIVROS RECUPERADOS 📚 ===")
livrosrecuperados.forEach((livro, index) => {
    const status = livro.lido ? "👍lido" : "👎não lido";
    console.log(`${index + 1}. ${livro.titulo} - ${livro.autor} (${livro.ano}) - ${status}`);

})