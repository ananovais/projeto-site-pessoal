function scrollProjects(direction) {
    const container = document.getElementById('projectContainer');
    const scrollAmount = 400;
  
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }  