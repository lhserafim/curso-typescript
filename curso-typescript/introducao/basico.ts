const a: string = 'Teste TS'
console.log(a)

// EXECUÇÃO DE FORMA MANUAL
// Dentro da pasta atual (introducao), digitar tsc nome_arquivo.ts, para gerar o arquivo .js
// Na sequencia, digitar node nome_arquivo.js para executá-lo manualmente

// PARA USAR O CODE RUNNER, digitar ctrl+alt+N
// Necessário instalar o code runner e o: sudo npm i -g ts-node

// PARA UTILIZAR NO NAVEGADOR
// Gerar o arquivo package.json: npm init -y
// Instalar o live-server: npm i -s live-server
// Abrir 2 abas do terminal. Em uma digitar npm start e em outra tsc -w (para adicionar um watch nos arquivos)