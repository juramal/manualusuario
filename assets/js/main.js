$(document).ready(function() {

    // Filtro de pesquisa no conteúdo
    $('#content-filter').on('input', function() {
        var val = $(this).val().toLowerCase();
        $('.doc-section').each(function() {
            var text = $(this).text().toLowerCase();
            $(this).toggle(text.indexOf(val) !== -1);
        });
    });

    // Abrir/fechar seções de conteúdo
    $('.toggle-content').on('click', function(e) {
        e.preventDefault();
        var block = $(this).closest('section').find('.section-block');
        var arrow = $(this).find('span');
        block.slideToggle(200, function() {
            if (block.is(':visible')) {
                arrow.html('&#9650;'); // seta para cima
            } else {
                arrow.html('&#9660;'); // seta para baixo
            }
        });
    });

    // Filtro de busca nas subseções
    $('#menu-filter').on('input', function() {
        var val = $(this).val().toLowerCase();
        $('.doc-sub-menu li').each(function() {
            var text = $(this).text().toLowerCase();
            $(this).toggle(text.indexOf(val) !== -1);
        });
    });

    // Abrir/fechar subseções
    $('.toggle-submenu').on('click', function(e) {
        e.preventDefault();
        var submenu = $(this).next('.doc-sub-menu');
        submenu.slideToggle(200);
        var arrow = $(this).find('span');
        arrow.html(submenu.is(':visible') ? '&#9650;' : '&#9660;');
    });

        // Hamburger menu lateral mobile
        $('#sidebar-toggle').on('click', function() {
            $('.doc-sidebar').toggleClass('open');
        });
        // Fecha menu ao clicar fora
        $(document).on('click', function(e) {
            if ($('.doc-sidebar').hasClass('open')) {
                if (!$(e.target).closest('.doc-sidebar, #sidebar-toggle').length) {
                    $('.doc-sidebar').removeClass('open');
                }
            }
        });
	
	/* ===== Affix Sidebar ===== */
	/* Ref: http://getbootstrap.com/javascript/#affix-examples */

    	
	$('#doc-menu').affix({
        offset: {
            top: ($('#header').outerHeight(true) + $('#doc-header').outerHeight(true)) + 45,
            bottom: ($('#footer').outerHeight(true) + $('#promo-block').outerHeight(true)) + 75
        }
    });
    
    /* Hack related to: https://github.com/twbs/bootstrap/issues/10236 */
    $(window).on('load resize', function() {
        $(window).trigger('scroll'); 
    });

    /* Activate scrollspy menu */
    $('body').scrollspy({target: '#doc-nav', offset: 100});
    
    /* Smooth scrolling */
	$('a.scrollto').on('click', function(e){
        //store hash
        var target = this.hash;    
        e.preventDefault();
		$('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});
		
	});
	
    
    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */
    
     $('#cards-wrapper .item-inner').matchHeight();
     $('#showcase .card').matchHeight();
     
    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });    


});