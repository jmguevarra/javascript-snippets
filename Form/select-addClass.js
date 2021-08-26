/**
 * Title: Select Add Class Dynamically
 * 
 * Desc: This is my snippet to add Class upon selection of select Tag. It also helps to manipulate placeholder color and etc.
 */
  const selectTag = document.querySelectorAll('select');
  selectTag.forEach(function(tag){
  	tag.addEventListener('click', function(){
      this.classList.remove("selected");
      
      if(this.selectedIndex != 0){
        this.classList.add("selected");
      }
    });
  });