const tankerInstance = require('@tanker/file-ponyfill');

async function start() {
  const response = await fetch('https://your.server.com/path/to/a/report.pdf');
  const bits = [await response.arrayBuffer()];

// Construct a file in a cross-browser fashion
  const file = new tankerInstance.FilePonyfill(bits, 'report.pdf', { type: 'application/pdf' });
}