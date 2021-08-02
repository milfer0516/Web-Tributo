if (window.screen.availWidth <= 414) {
    const watchAllChapters1 = document.querySelector('#watchCh1')
    const divChapters1 = document.querySelector('#chapters1')

    watchAllChapters1.addEventListener('click', showChapters1)

    function showChapters1 (e) {
        e.preventDefault()
        divChapters1.style.height = 'auto'
        divChapters1.style.overflow = 'visible'
        watchAllChapters1.style.display = 'none'
    }
    const watchAllChapters2 = document.querySelector('#watchCh2')
    const divChapters2 = document.querySelector('#chapters2')

    watchAllChapters2.addEventListener('click', showChapters2)

    function showChapters2 (e) {
        e.preventDefault()
        divChapters2.style.height = 'auto'
        divChapters2.style.overflow = 'visible'
        watchAllChapters2.style.display = 'none'
    }
}