const submitReview = function () {
  const comments = document.getElementById('comments1')
  console.log(comments.value)

  const addReview = document.getElementById('list')
  const review = document.createElement('li')
  review.classList.add('card-text')
  review.innerHTML = comments.value
  addReview.appendChild(review)

  document.getElementById('reviewSubmit').classList.add('d-none')
  document.getElementById('success').classList.remove('d-none')
}

const deleteTrack = function (event) {
  const track = event.target

  track.parentElement.parentElement.remove()
}

const addTrack = function () {
  const trackName = document.getElementById('trackName')
  const trackLength = document.getElementById('trackLength')
  const trackArtist = document.getElementById('trackArtist')
  const trackNumber = document.getElementById('trackNumber')

  const list = document.querySelector('#pinkFloyd tbody')

  const newRow = document.createElement('tr')
  const newTrack = document.createElement('td')
  const newLength = document.createElement('td')
  const newArtist = document.createElement('td')
  const newButtonColumn = document.createElement('td')
  const newNumber = document.createElement('th')
  const newButton = document.createElement('button')

  newButton.classList.add('btn-md')
  newButton.classList.add('btn-danger')

  newTrack.innerHTML = trackName.value
  newLength.innerHTML = trackLength.value
  newArtist.innerHTML = trackArtist.value
  newNumber.innerHTML = trackNumber.value
  newButton.innerHTML = 'Delete'
  newNumber.setAttribute('scope', 'row')
  newButton.setAttribute('onclick', 'deleteTrack(event)')

  newRow.appendChild(newNumber)
  newRow.appendChild(newTrack)
  newRow.appendChild(newArtist)
  newRow.appendChild(newLength)
  newRow.appendChild(newButton)
  newButtonColumn.appendChild(newButton)
  newRow.appendChild(newButtonColumn)

  list.appendChild(newRow)

  alert(trackName.value + ' has been added!')
}
