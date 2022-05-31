console.log('running')

const client = document.querySelector('#client-name')
const address = document.querySelector('#client-address')
const date = document.querySelector('#date')

client.textContent = 'Hospital General de México Dr. Eduardo Liceaga'
address.textContent = 'Dr. Balmis 148, Doctores, Cuauhtémoc, 06720 Ciudad de México, CDMX'
date.textContent = new Date().toISOString().slice(0,10).split('-').reverse().join(' / ')