function alphabetPosition(text) {
    return text
      .toLowerCase()
      .split('')
      .filter(l => l >= 'a' & l <= 'z')
      .map(l => l.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
      .join(' ');
  }