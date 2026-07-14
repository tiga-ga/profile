document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Logic
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
  
  if (themeToggleBtn && themeToggleIcon) {
    // Check user preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      themeToggleIcon.className = 'fas fa-sun';
    } else {
      themeToggleIcon.className = 'fas fa-moon';
    }

    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      
      // Save preference
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      
      // Change icon
      themeToggleIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    });
  }

  // Update footer year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Header scroll class
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        if (icon) {
          icon.className = 'fas fa-bars';
        }
      });
    });
  }


  // Intersection Observer for scroll animations
  const fadeElems = document.querySelectorAll('.skill-category, .details-card, .profile-card, .profile-desc');
  
  const fadeOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const fadeOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    });
  }, fadeOptions);

  fadeElems.forEach(elem => {
    // Initial styles for animation
    elem.style.opacity = '0';
    elem.style.transform = 'translateY(20px)';
    elem.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    fadeOnScroll.observe(elem);
  });

  // Experience Timeline Accordion Toggle
  const toggleButtons = document.querySelectorAll('.details-toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      if (content && content.classList.contains('project-desc-wrapper')) {
        const isExpanded = content.classList.contains('expanded');
        
        content.classList.toggle('expanded');
        btn.classList.toggle('active');
        btn.setAttribute('aria-expanded', !isExpanded);
        
        const btnText = btn.querySelector('span');
        if (isExpanded) {
          btnText.textContent = '詳細を表示';
        } else {
          btnText.textContent = '詳細を閉じる';
        }
      }
    });
  });

  // Chart bar click to scroll and open accordion details
  const chartBars = document.querySelectorAll('.chart-bar');
  chartBars.forEach(bar => {
    bar.addEventListener('click', () => {
      const projectId = bar.getAttribute('data-project');
      const targetItem = document.getElementById(projectId);
      
      if (targetItem) {
        // 1. スクロール (ヘッダー等を考慮して中央付近に配置)
        targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // 2. アコーディオンが閉じている場合は開く
        const toggleBtn = targetItem.querySelector('.details-toggle-btn');
        const descWrapper = targetItem.querySelector('.project-desc-wrapper');
        
        if (toggleBtn && descWrapper) {
          const isExpanded = descWrapper.classList.contains('expanded');
          if (!isExpanded) {
            descWrapper.classList.add('expanded');
            toggleBtn.classList.add('active');
            toggleBtn.setAttribute('aria-expanded', 'true');
            
            const btnText = toggleBtn.querySelector('span');
            if (btnText) {
              btnText.textContent = '詳細を閉じる';
            }
          }
        }

        // 3. 視覚的にユーザーを誘導するためのハイライトエフェクト
        targetItem.style.transition = 'background-color 0.3s ease';
        targetItem.style.backgroundColor = 'rgba(99, 102, 241, 0.08)';
        setTimeout(() => {
          targetItem.style.backgroundColor = '';
        }, 1200);
      }
    });
  });
});
