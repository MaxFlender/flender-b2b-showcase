
export function isImage(url: string) {
  return /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(url);
}

export function isVideo(url: string) {
  return /\.(mp4|webm|ogg)$/i.test(url);
}