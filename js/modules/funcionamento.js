// Exporta a função `initFuncionamento` como padrão
export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]'); // Seleciona o elemento com o atributo `data-semana`
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number); // Obtém os dias da semana do atributo `data-semana` e converte para números
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number); // Obtém os horários do atributo `data-horario` e converte para números
    
    const dataAgora = new Date(); // Obtém a data e hora atuais
    const diaAgora = dataAgora.getDay(); // Obtém o dia da semana atual (0-6)
    const horarioAgora = dataAgora.getHours(); // Obtém a hora atual (0-23)
    
    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1; // Verifica se o dia atual está nos dias de funcionamento
    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]); // Verifica se a hora atual está dentro do horário de funcionamento
    
    if(semanaAberto && horarioAberto) { // Se estiver aberto na semana e no horário
      funcionamento.classList.add('aberto'); // Adiciona a classe 'aberto' ao elemento
    }
}