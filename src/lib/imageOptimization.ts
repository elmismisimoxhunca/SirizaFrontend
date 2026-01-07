export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
}

export const optimizeImageUrl = (
  url: string,
  options: ImageOptimizationOptions = {}
): string => {
  if (!url || !url.startsWith('http')) return url;

  const { width = 600, height = 400, quality = 80 } = options;

  try {
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);

    params.set('w', width.toString());
    params.set('h', height.toString());
    params.set('fit', 'crop');
    params.set('q', quality.toString());

    urlObj.search = params.toString();
    return urlObj.toString();
  } catch {
    return url;
  }
};

export const generateSrcSet = (
  url: string,
  sizes: number[] = [400, 600, 800]
): string => {
  if (!url || !url.startsWith('http')) return url;

  return sizes
    .map((size) => {
      const optimized = optimizeImageUrl(url, { width: size, height: Math.round((size * 2) / 3) });
      return `${optimized} ${size}w`;
    })
    .join(', ');
};
