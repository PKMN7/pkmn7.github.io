(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimMobile, {
        "loadScrollBars": function() {
            jQuery(".s-40ae32a9-1ccb-4c99-a735-dbaf156edac4 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-201ab676-2537-456c-a263-fcd224db94ed .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-5073fc9b-576c-4149-9e55-7a82eb159f75 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-1245b409-e50c-45ed-b3c6-74993b4e911e .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Panel_10").overscroll({ showThumbs:false, direction:'vertical' });
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);