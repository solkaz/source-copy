import Clipboard from 'clipboard';

// Each code block in Github will be rendered in a div with class="highlight"
const CODE_BLOCK_SELECTOR = 'div.highlight';

// Get all code blocks
const codeBlocks = document.querySelectorAll(CODE_BLOCK_SELECTOR);

const copyButtons = [];

// Process each code block to add a copy button
codeBlocks.forEach(codeBlock => {
  // Element that contains the code snippet we want to copy
  // AFAIK, this is always the first (and only) child of the code block
  const codeSnippetEl = codeBlock.firstChild;

  // Extract the code snippet
  const codeSnippet = codeSnippetEl.innerText;

  // Need to set `position: relative` for the code block
  codeBlock.style.position = 'relative';

  // Add a button to the code block
  const copyButton = document.createElement('button');
  copyButton.style.position = 'absolute';
  copyButton.style.top = 0;
  copyButton.style.right = 0;
  copyButton.innerText = 'Copy';
  copyButton.dataset.clipboardText = codeSnippet;

  // Insert the copy button before the code snippet element
  codeBlock.insertBefore(copyButton, codeSnippetEl);

  // Append the copy button to the list of copyButtons
  copyButtons.push(copyButton);
});

// Instanstiate clipboard
const clip = new Clipboard(copyButtons);
console.log('clip', clip);
