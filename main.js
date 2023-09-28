

document.addEventListener('DOMContentLoaded', function(){
  const toggley = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const closeBtn = document.querySelector('.close-btn');

  
  toggley.addEventListener('click', function(){  
      sidebar.classList.add("show-sidebar");
  });
  closeBtn.addEventListener('click', function(){  
    sidebar.classList.remove("show-sidebar");
  });
  
})



