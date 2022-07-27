module.exports = {
    // collectCoverage: true, // qualquer teste vai gerar coverage
    collectCoverageFrom: ['<rootDir/src/**/*.ts>'], // diretórios que queremos na cobertura de testes (somente a pasta source)
    coverageDirectory: 'coverage', // queremos colocar numa pasta separada que é a coverage
    coverageProvider: 'babel',
    moduleNameMapper: { // precisa por causa dos paths dos typescripts, no caso os @. Isto é, se encontrar um @, vai substituir por rootDir...
        '@tests/(.+)': '<rootDir/tests/$1>',
        '@/(.+)': '<rootDir/src/$1>'
    },
    roots: [ // aqui dizemos pro jest onde está o diretório raíz dos testes
        '<rootDir>/src',
        '<rootDir>/tests'
    ],
    transform: { // é necessário para o jest usar typescript nos testes, sempre que encontrar arquivos ts, aplica o ts-jest
        '\\.ts$': 'ts-jest'
    },
    testEnvironment: 'node'
}
