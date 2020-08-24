class Formatter {

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  };

  static sanitize(string) {
    const split = string.split(' ')
    let mapped = split.map( word => {
      return word.replace(/[^A-Za-z0-9-']+/g, '');
    })
    return mapped.join(' ');
  };

  static titleize(string) {
    // Split up title by words
    let splitTitle = string.split(' ');

    // Capitalize first word
    let title = splitTitle.shift()
    title = title[0].toUpperCase() + title.slice(1);
    let preps = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    splitTitle.forEach( word => {
      if ( !preps.includes(word) ) {
        word = word[0].toUpperCase() + word.slice(1);
      }
      title += ` ${word}`;
    })
    return title;
  }
};