$(document).ready(function(){$("#main").fitVids();var stickySideBar=function(){var show=$(".author__urls-wrapper button").length===0?$(window).width()>1024:!$(".author__urls-wrapper button").is(":visible");if(show){$(".sidebar").addClass("sticky");}else{$(".sidebar").removeClass("sticky");}};stickySideBar();$(window).resize(function(){stickySideBar();});$(".author__urls-wrapper button").on("click",function(){$(".author__urls").toggleClass("is--visible");$(".author__urls-wrapper button").toggleClass("open");});$(document).keyup(function(e){if(e.keyCode===27){if($(".initial-content").hasClass("is--hidden")){$(".search-content").toggleClass("is--visible");$(".initial-content").toggleClass("is--hidden");}}});$(".search__toggle").on("click",function(){$(".search-content").toggleClass("is--visible");$(".initial-content").toggleClass("is--hidden");setTimeout(function(){$(".search-content input").focus();},400);});var scroll=new SmoothScroll('a[href*="#"]',{offset:20,speed:400,speedAsDuration:true,durationMax:500});if($("nav.toc").length>0){var spy=new Gumshoe("nav.toc a",{navClass:"active",contentClass:"active",nested:false,nestedClass:"active",offset:20,reflow:true,events:true});}
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']").addClass("image-popup");$(".image-popup").magnificPopup({type:"image",tLoading:"Loading image #%curr%...",gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">Image #%curr%</a> could not be loaded.'},removalDelay:500,mainClass:"mfp-zoom-in",callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim");}},closeOnContentClick:true,midClick:true});$('.page__content').find('h1, h2, h3, h4, h5, h6').each(function(){var id=$(this).attr('id');if(id){var anchor=document.createElement("a");anchor.className='header-link';anchor.href='#'+id;anchor.innerHTML='<span class=\"sr-only\">Permalink</span><i class=\"fas fa-link\"></i>';anchor.title="Permalink";$(this).append(anchor);}});});