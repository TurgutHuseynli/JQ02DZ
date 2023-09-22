$('*').css({
    'margin': 0,
    'padding': 0,
    'box-sizing': 'border-box'
})
$('.screen').css({
    'height': '100%',
    'background': 'black',
    'padding': '10px 0'
})
$('.n').css({
    'font-family': 'sans-serif',
    'color': 'white',
    'font-weight': 'bold',
    'margin': '10px 0'
})
$('.task').css({
    'width': '200px',
    'height': '200px',
    'background': 'gray'
})
$('.t1 .task, .t2 .task').css({
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center'
})
$('.blackBtn').css({
    'background': 'black',
    'color': 'white',
    'border': '1px solid white', 
    'padding': '2px'
})
$('#b1').click(function(){
    $('.t1 .task').css('background', 'orange')
})
$('#b2').click(function(){
    $('.t2 .task').css({
        'background': 'orange',
        'border-radius': '50%'
    })
})
$('.t3 .task, .t4 .task, .t5 .task, .t6 .task, .t7 .task').css('margin-bottom', '5px')
$('#b3a').click(function(){
    $('.t3 .task').fadeOut(1000)
})
$('#b3b').click(function(){
    $('.t3 .task').fadeIn(1000)
})
$('#b3c').click(function(){
    $('.t3 .task').fadeToggle(1000)
})
$('#b4a').click(function(){
    $('.t4 .task').slideUp(1000)
})
$('#b4b').click(function(){
    $('.t4 .task').slideDown(1000)
})
$('#b4c').click(function(){
    $('.t4 .task').slideToggle(1000)
})
$('#b5a').click(function(){
    $('.t5 .task').hide(1000)
})
$('#b5b').click(function(){
    $('.t5 .task').show(1000)
})
$('#b6').click(function(){
    $('.t6 .task').toggle(1000)
})
$('#b7').dblclick(function(){
    $('.t7 .task').css('background', 'orange')
})