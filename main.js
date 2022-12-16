function createGame(player1, id1, hour, player2, id2) {
  return `
  <ul>  
    <li>
      <img src="./assets/icon-${player1}.svg " alt=" Bandeira do ${player1}" />
      <h3> ${id1} </h3>
    </li>
    

    <strong> ${hour} </strong>

    <li>
      <img src="./assets/icon-${player2}.svg " alt=" Bandeira do ${player2}" />
      <h3> ${id2} </h3>
    </li>
  </ul>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class= "card" style= "animation-delay: ${delay}s" >
      <h2> ${date} <span> ${day} </span></h2>
        ${games}
    </div>
  `
}

document.querySelector('#cards').innerHTML =
  createCard(
    '20/11',
    'Domingo',
    createGame('qatar', 'CAT', '13:00', 'ecuador', 'EQU')
  ) +
  createCard(
    '21/11',
    'segunda',
    createGame('england', 'ING', '10:00', 'iran', 'IRA') +
      createGame('senegal', 'SEN', '13:00', 'netherlands', 'HOL') +
      createGame('united-states', 'EUA', '16:00', 'wales', 'GAL')
  ) +
  createCard(
    '22/11',
    'terça',
    createGame('argentina', 'ARG', '07:00', 'saudi-arabia', 'ARA') +
      createGame('denmark', 'DIN', '10:00', 'tunisia', 'TUN') +
      createGame('mexico', 'MEX', '13:00', 'poland', 'POL') +
      createGame('france', 'FRA', '16:00', 'australia', 'AUS')
  ) +
  createCard(
    '23/11',
    'quarta',
    createGame('morocco', 'MAR', '07:00', 'croatia', 'CRO') +
      createGame('germany', 'ALE', '10:00', 'japan', 'JAP') +
      createGame('spain', 'ESP', '13:00', 'costa-rica', 'CRC') +
      createGame('belgium', 'BEL', '16:00', 'canada', 'CAN')
  ) +
  createCard(
    '24/11',
    'quinta',
    createGame('switzerland', 'SUI', '07:00', 'cameroon', 'CAM') +
      createGame('uruguay', 'URU', '10:00', 'south-korea', 'COR') +
      createGame('portugal', 'POR', '13:00', 'ghana', 'GAN') +
      createGame('brazil', 'BRA', '16:00', 'serbia', 'SER')
  ) +
  createCard(
    '25/11',
    'sexta',
    createGame('wales', 'GAL', '07:00', 'iran', 'IRA') +
      createGame('qatar', 'CAT', '10:00', 'senegal', 'SEN') +
      createGame('netherlands', 'HOL', '13:00', 'ecuador', 'EQU') +
      createGame('england', 'ING', '16:00', 'united-states', 'EUA')
  ) +
  createCard(
    '26/11',
    'sabado',
    createGame('tunisia', 'TUN', '07:00', 'australia', 'AUS') +
      createGame('poland', 'POL', '10:00', 'saudi-arabia', 'ARA') +
      createGame('france', 'FRA', '13:00', 'denmark', 'DIN') +
      createGame('argentina', 'ARG', '16:00', 'mexico', 'MEX')
  ) +
  createCard(
    '27/11',
    'domingo',
    createGame('japan', 'JAP', '07:00', 'costa-rica', 'CRC') +
      createGame('belgium', 'BEL', '10:00', 'morocco', 'MAR') +
      createGame('croatia', 'CRO', '13:00', 'canada', 'CAN') +
      createGame('spain', 'ESP', '16:00', 'germany', 'ALE')
  ) +
  createCard(
    '28/11',
    'segunda',
    createGame('cameroon', 'CAM', '07:00', 'serbia', 'SER') +
      createGame('south-korea', 'COR', '10:00', 'ghana', 'GAN') +
      createGame('brazil', 'BRA', '13:00', 'switzerland', 'SUI') +
      createGame('portugal', 'POR', '16:00', 'uruguay', 'URU')
  ) +
  createCard(
    '29/11',
    'terça',
    createGame('ecuador', 'EQU', '12:00', 'senegal', 'SEN') +
      createGame('netherlands', 'HOL', '12:00', 'qatar', 'CAT') +
      createGame('iran', 'IRA', '16:00', 'united-states', 'EUA') +
      createGame('wales', 'GAL', '16:00', 'england', 'ING')
  ) +
  createCard(
    '30/11',
    'quarta',
    createGame('tunisia', 'TUN', '12:00', 'france', 'FRA') +
      createGame('australia', 'AUS', '12:00', 'denmark', 'DIN') +
      createGame('poland', 'POL', '16:00', 'argentina', 'ARG') +
      createGame('saudi-arabia', 'ARA', '16:00', 'mexico', 'MEX')
  ) +
  createCard(
    '01/12',
    'quinta',
    createGame('croatia', 'CRO', '12:00', 'belgium', 'BEL') +
      createGame('canada', 'CAN', '12:00', 'morocco', 'MAR') +
      createGame('japan', 'JAP', '16:00', 'spain', 'ESP ') +
      createGame('costa-rica', 'CRC', '16:00', 'germany', 'ALE')
  ) +
  createCard(
    '02/12',
    'sexta',
    createGame('south-korea', 'COR', '12:00', 'portugal', 'POR') +
      createGame('ghana', 'GAN', '12:00', 'uruguay', 'URU') +
      createGame('serbia', 'SER', '16:00', 'switzerland', 'SUI') +
      createGame('cameroon', 'CAM', '16:00', 'brazil', 'BRA')
  ) +
  createCard(
    '03/12',
    'Sábado',
    createGame('netherlands', 'HOL', '12:00', 'united-states', 'EUA')
  ) +
  createCard(
    '03/12',
    'Sábado',
    createGame('argentina', 'ARG', '16:00', 'australia', 'AUS')
  ) +
  createCard(
    '04/12',
    'Domingo',
    createGame('france', 'FRA', '12:00', 'poland', 'POL')
  ) +
  createCard(
    '04/12',
    'Domingo',
    createGame('england', 'ING', '16:00', 'senegal', 'SEN')
  ) +
  createCard(
    '05/12',
    'Segunda',
    createGame('japan', 'JAP', '12:00', 'croatia', 'CRO')
  ) +
  createCard(
    '05/12',
    'Segunda',
    createGame('brazil', 'BRA', '16:00', 'south-korea', 'COR')
  ) +
  createCard(
    '06/12',
    'Terça',
    createGame('morocco', 'MAR', '12:00', 'spain', 'ESP')
  ) +
  createCard(
    '06/12',
    'Terça',
    createGame('portugal', 'POR', '16:00', 'switzerland', 'SUI')
  ) +
  createCard(
    '09/12',
    'Sexta',
    createGame('croatia', 'CRO', '12:00', 'brazil', 'BRA')
  ) +
  createCard(
    '09/12',
    'Sexta',
    createGame('netherlands', 'HOL', '16:00', 'argentina', 'ARG')
  ) +
  createCard(
    '10/12',
    'Sábado',
    createGame('morocco', 'MAR', '12:00', 'portugal', 'POR')
  ) +
  createCard(
    '10/12',
    'Sábado',
    createGame('england', 'ING', '16:00', 'france', 'FRA')
  ) +
  createCard(
    '13/12',
    'Terça',
    createGame('argentina', 'ARG', '16:00', 'croatia', 'CRO')
  ) +
  createCard(
    '14/12',
    'Quarta',
    createGame('france', 'FRA', '16:00', 'morocco', 'MAR')
  )
