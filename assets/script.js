var quill = new Quill('#quill-container', {
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ]
  },
  scrollingContainer: '#scrolling-container', 
  placeholder: 'Start writing...',
  theme: 'bubble'
});