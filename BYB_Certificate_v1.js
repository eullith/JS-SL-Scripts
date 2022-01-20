var styles = `@media print {
    body, * { visibility: hidden; }
    html, body { overflow: hidden; transform: translateZ(0); }
    #slide {
      transform: scale(1.3) !important;
    }
    #wrapper {
     transform: scale(1) !important;
    }
    #slide,
    #wrapper {
      width: 100% !important;
      height: 100% !important;
      overflow: visible !important;
    }
    #frame {
      overflow: visible !important;
    }
    .slide-transition-container {
      overflow: visible !important;
    }
    @page {size: 14.1in 8in; max-height:100%; max-width:100%}
      .slide-container, .slide-container * {
        visibility: visible !important;
        margin-top: 0px !important;
        margin-bottom: 0px !important;
        margin-left: 0px !important;
        align: center !important;
      }
      #outline-panel {
        display: none !important;
      }
    }
  }`
    var stylesheet = document.createElement('style');
    stylesheet.type = 'text/css';
    stylesheet.innerText = styles;
    document.head.appendChild(stylesheet);
    window.print();