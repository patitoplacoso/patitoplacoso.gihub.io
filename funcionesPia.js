function showCategory(categoryId) {
  document.querySelectorAll('.products').forEach(category => {
    category.classList.remove('active');
  });
  document.getElementById(categoryId).classList.add('active');
}
