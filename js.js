window.onload = function () {
  const albums = document.querySelector('#row').childElementCount

  const count = document.getElementById('count')
  count.innerHTML = albums
}

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
