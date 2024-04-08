const alunos = [
    { nome: 'João',
    nota: 7 
    },

    { nome: 'Maria',
    nota: 5
    },

    { nome: 'Pedro',
    nota: 8
    },

    { nome: 'Ana',
    nota: 6 
    },

    { nome: 'Clara',
    nota: 2 
    },

];

const alunosAprovados = AlunosNotaMaior => AlunosNotaMaior.filter(alunos => alunos.nota >= 6);

const alunosAprovadosFinal = alunosAprovados(alunos);
console.log(alunosAprovadosFinal);
