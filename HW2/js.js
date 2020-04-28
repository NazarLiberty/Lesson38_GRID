$(document).ready(() => {
    let gallery1 = $('#gallery1')
    let gallery2 = $('#gallery2')
    gallery1.on('mouseover', () => {
        gallery2.removeClass('hidden-gallery-container--active')
        gallery1.removeClass('gallery-container--disabled')
    })
    gallery2.on('mouseover', () => {
        gallery1.addClass('gallery-container--disabled')
        gallery2.addClass('hidden-gallery-container--active')
    })
})