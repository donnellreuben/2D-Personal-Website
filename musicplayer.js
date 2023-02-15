var Unfolding = (function(window) {
			
    'use-strict';
        
    function handle() {
    
        var cover = document.querySelectorAll('.cover');
        
        // Unfold once it's ready
        document.querySelector('.cover.right').classList.add('unfold');

        [].slice.call(document.querySelectorAll('.cover')).forEach(function(cover, index) {

            cover.addEventListener('click', function(event) {
        
                event.preventDefault();
        
                var right = document.querySelector('.cover.right');
    
                // Fold
                if(!right.classList.contains('fold')) {
        
                    document.querySelector('.cover.right').classList.add('fold');
                    document.querySelector('.cover.right').classList.remove('unfold');
                    
                }
            
                // Unfold
                else {
        
                    document.querySelector('.cover.right').classList.add('unfold');
                    document.querySelector('.cover.right').classList.remove('fold');
        
                }
                
            }, false);

        });
    
    }

    // Public API
    return {
    
        cover: handle
    
    }

})(window);

window.addEventListener ? window.addEventListener('load', Unfolding.cover, false) : window.onload = Unfolding.cover();