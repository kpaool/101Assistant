/**
* Template Name: Bootslander - v4.10.0
* Template URL: https://bootstrapmade.com/bootslander-free-bootstrap-landing-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }

    let faqs= [
        {
          "question": "What is 101 Assistant?",
          "answer": "101 Assistant is a cutting-edge browser extension that helps professional and occasional bettors make more informed decisions and maximize their profits. Our technology uses advanced algorithms to identify profitable betting opportunities, including arbitrage and sure bets, in real-time."
      },
      {
          "question": "How does 101 Assistant work?",
          "answer": "101 Assistant seamlessly integrates with your browser, providing you with real-time information on profitable betting opportunities. Our extension also includes features such as automatic bidding, performance reports, and insurance to help you streamline your betting process and maximize your profits."
      },
      {
          "question": "What are the features of 101 Assistant?",
          "answer": "101 Assistant includes a number of powerful features such as arbitrage and sure bet detection, automatic bidding, performance reports, and insurance. These features work together to help you make more informed decisions, streamline your betting process, and maximize your profits."
      },
      {
          "question": "Is 101 Assistant safe to use?",
          "answer": "Yes, 101 Assistant uses military-grade technology and advanced intelligent computing to ensure maximum account safety. We take the security of our customers' data and performance extremely seriously, so you can trust that your information is safe with us."
      },
      {
          "question": "How do I get started with 101 Assistant?",
          "answer": "Getting started with 101 Assistant is easy. Simply download our browser extension and start using it to identify profitable betting opportunities and streamline your betting process. Our extension is easy to use and comes with detailed instructions and support."
      },
      {
          "question": "How much does 101 Assistant cost?",
          "answer": "Pricing information for 101 Assistant can be found on our website. We offer flexible pricing options to suit your needs and budget."
      }
    ];
    let fadeup_delay=0;
    let string='';
    faqs.forEach((item,index)=>{
      string+= `<li data-aos="fade-up" data-aos-delay="${fadeup_delay}">
      <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-${index}" class="collapsed">
      ${item.question}? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
      <div id="faq-list-${index}" class="collapse" data-bs-parent=".faq-list">
        <p>
        ${item.answer}
        </p>
      </div>
    </li>`
      fadeup_delay+=100;
    });
    document.querySelector("#faq-list-id").innerHTML=string;
    console.log(string);

  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

  

  

  
})()