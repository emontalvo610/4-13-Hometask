export function hexToRgb(hex: string) {
    // Remove the hash at the beginning of the hex code if it's there
    hex = hex.replace(/^#/, '');
    
    // Parse the hex string into integer RGB values
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    
    // Return the RGB array
    return [r, g, b];
}

export function rgbToHex(rgb: number[]) {
    // Clamp and convert each component to a two-digit hexadecimal number
    const toHex = (c: number) => {
      const hex = Math.max(0, Math.min(255, c)).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
  
    // Return the combined hex code
    return `#${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`;
  }
  