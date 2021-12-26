import { database } from './firebase.js'
import { ref, set } from 'firebase/database'

const $ = param => document.getElementById(param)

const description_RED = $('description_RED')
const description_GREEN = $('description_GREEN')
const description_BLUE = $('description_BLUE')

const LEDs = [
  {
    ID: 'LED ROJO',
    status: true,
    style: '--grayscale-RED',
    textElement: description_RED,
  },
  {
    ID: 'LED VERDE',
    status: true,
    style: '--grayscale-GREEN',
    textElement: description_GREEN,
  },
  {
    ID: 'LED AZUL',
    status: true,
    style: '--grayscale-BLUE',
    textElement: description_BLUE,
  },
]

const BTN_RED = $('BTN_RED')
const BTN_GREEN = $('BTN_GREEN')
const BTN_BLUE = $('BTN_BLUE')

BTN_RED.addEventListener('click', () => Switch(LEDs[0]))
BTN_GREEN.addEventListener('click', () => Switch(LEDs[1]))
BTN_BLUE.addEventListener('click', () => Switch(LEDs[2]))

Switch(LEDs[0])
Switch(LEDs[1])
Switch(LEDs[2])

function Switch({ ID, status }) {
  console.log('Estado de LEDs')
  WriteLedData(ID, !status)
  LEDs.map(e => {
    return e.ID == ID ? (e.status = !status) : e
  })
  console.log({ status: LEDs[0].status })
  console.log({ status: LEDs[1].status })
  console.log({ status: LEDs[2].status })

  LEDs.forEach(({ status, style, textElement }) => {
    if (status) {
      document.documentElement.style.removeProperty(style)
      textElement.innerText = 'El LED está ENCENDIDO'
    } else {
      document.documentElement.style.setProperty(style, 'grayscale()')
      textElement.innerText = 'El LED está APAGADO'
    }
  })
}

function WriteLedData(LED_id, status) {
  set(ref(database, 'LEDs/' + LED_id), {
    status: status,
  })
}
