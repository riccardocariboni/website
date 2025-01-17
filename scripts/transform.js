document.getElementById('term-banner').addEventListener('mouseenter', function() {
    document.querySelectorAll('.line').forEach(line => {
        let randomX = (Math.random() - 0.5) * 10; // Random offset between -5px and 5px
        let randomY = (Math.random() - 0.5) * 10; // Random offset between -5px and 5px
        line.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
});

document.getElementById('term-banner').addEventListener('mouseleave', function() {
    document.querySelectorAll('.line').forEach(line => {
        line.style.transform = 'translate(0, 0)';
    });
});
