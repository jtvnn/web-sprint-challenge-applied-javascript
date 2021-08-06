const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div')
  const dt = document.createElement('span')
  const ttle = document.createElement('h1')
  const tmp = document.createElement('span')

  header.classList.add('header')
  dt.classList.add('date')
  tmp.classList.add('temp')

  dt.textContent = date
  ttle.textContent = title
  tmp.textContent = temp

  header.appendChild(dt)
  header.appendChild(ttle)
  header.appendChild(tmp)

  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const entryPoint = document.querySelector(selector)
  const head = Header('Lambda Times', 'August 6th, 2021', '70 Degs')
  entryPoint.appendChild(head)
}



export { Header, headerAppender }
