export const msToTime = (milliseconds) => {
  let seconds = milliseconds / 1000;
  const minutes = parseInt(seconds / 60);
  seconds = Math.floor(seconds % 60).toString();
  
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  return `${minutes}:${seconds}`;
}

export const msToTimeDetail = (milliseconds) => {
  let seconds = milliseconds / 1000;
  let minutes = parseInt(seconds / 60);
  seconds = Math.floor(seconds % 60);

  const hours = parseInt(minutes / 60);
  if (hours < 1)  return `${minutes} min ${seconds} sec`;

  minutes = Math.floor(minutes % 60);
  return `${hours} hr` + (minutes > 0 ? ` ${minutes} min` : "");
}

export const songs = (total) => {
  return total > 1 ? `${total} songs` : `${total} song`;
}

export const dateDetail = (d) => {
  const date = new Date(d);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString("en-US", options);
}

export const dateTimeFormat = (dateTime) => {
  const time = dateTime.toLocaleTimeString([], 
    { hour: "2-digit", minute: "2-digit", hour12: false });
  const date = dateTime.toLocaleDateString("en-GB", 
    { year: "numeric", month: "short", day: "numeric" });
  return `${time}, ${date}`;
}