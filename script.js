function toggleSkills(skillId) {
  var target = document.getElementById(skillId);
  if (!target) {
    return;
  }

  var headings = document.querySelectorAll('.major-skill');
  var groups = document.querySelectorAll('.sub-skills');
  var heading = target.previousElementSibling;
  if (!heading || !heading.classList.contains('major-skill')) {
    heading = document.querySelector(".major-skill[onclick*=\"'" + skillId + "'\"]");
  }
  var isOpen = target.classList.contains('is-open');

  groups.forEach(function (group) {
    group.classList.remove('is-open');
  });

  headings.forEach(function (item) {
    item.classList.remove('active');
    item.setAttribute('aria-expanded', 'false');
  });

  if (!isOpen) {
    target.classList.add('is-open');
    if (heading) {
      heading.classList.add('active');
      heading.setAttribute('aria-expanded', 'true');
    }
  }
}

function setupSkillAccessibility() {
  var headings = document.querySelectorAll('.major-skill');

  headings.forEach(function (heading) {
    heading.setAttribute('role', 'button');
    heading.setAttribute('tabindex', '0');

    heading.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        heading.click();
      }
    });
  });
}

function setupSmoothNavigation() {
  var anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      var href = anchor.getAttribute('href');
      if (!href || href.length < 2) {
        return;
      }

      var target = document.querySelector(href);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  setupSkillAccessibility();
  setupSmoothNavigation();
});
