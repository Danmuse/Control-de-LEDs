import { database } from './firebase.js'
import { ref, set } from 'firebase/database'

const $ = param => document.getElementById(param)

const LEDs = [
  {
    ID: 'LED ROJO',
    status: true,
  },
  {
    ID: 'LED VERDE',
    status: true,
  },
  {
    ID: 'LED AZUL',
    status: true,
  },
]

const BTN_RED = $('BTN_RED')
const BTN_GREEN = $('BTN_GREEN')
const BTN_BLUE = $('BTN_BLUE')

const description_RED = $('description_RED')
const description_GREEN = $('description_GREEN')
const description_BLUE = $('description_BLUE')

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
  if (LEDs[0].status) {
    document.documentElement.style.removeProperty('--grayscale-RED')
    description_RED.innerText = 'El LED está ENCENDIDO'
  } else {
    document.documentElement.style.setProperty('--grayscale-RED', 'grayscale()')
    description_RED.innerText = 'El LED está APAGADO'
  }
  if (LEDs[1].status) {
    document.documentElement.style.removeProperty('--grayscale-GREEN')
    description_GREEN.innerText = 'El LED está ENCENDIDO'
  } else {
    document.documentElement.style.setProperty('--grayscale-GREEN', 'grayscale()')
    description_GREEN.innerText = 'El LED está APAGADO'
  }
  if (LEDs[2].status) {
    document.documentElement.style.removeProperty('--grayscale-BLUE')
    description_BLUE.innerText = 'El LED está ENCENDIDO'
  } else {
    document.documentElement.style.setProperty('--grayscale-BLUE', 'grayscale()')
    description_BLUE.innerText = 'El LED está APAGADO'
  }
}

function WriteLedData(LED_id, status) {
  set(ref(database, 'LEDs/' + LED_id), {
    status: status,
  })
}
