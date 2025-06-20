const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.observe').forEach(section => {
  observer.observe(section);
});

function sendMail(event) {
  event.preventDefault()
  const name = document.getElementById('name').value
  const email = document.getElementById('mail').value
  const message = document.getElementById('msg').value
  const mailto = document.getElementById('mailtoValue').value
  const cc = email
  const subject = encodeURIComponent('Bericht van ' + name)
  const body = encodeURIComponent(message + '\n\nVan: ' + name + ' (' + email + ')')
  const mailtoLink = 'mailto:' + mailto + '?cc=' + cc + '&subject=' + subject + '&body=' + body
  window.location.href = mailtoLink
}
