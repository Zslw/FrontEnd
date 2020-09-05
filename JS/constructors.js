function Book(title, author,pages,haveRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
    this.info = function() {
      console.log(`${name} by ${author}, ${pages}, ${haveRead}`)
    }
  }