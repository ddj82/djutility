type HSL = { h: number; s: number; l: number };

const clamp = (n: number, min = 0, max = 100) => Math.min(max, Math.max(min, n));

function hexToRgb(hex: string) {
    const s = hex.replace('#', '').trim();
    const bigint = parseInt(s.length === 3 ? s.split('').map(c => c + c).join('') : s, 16);
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

function rgbToHex(r: number, g: number, b: number) {
    const toHex = (v: number) => v.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toLowerCase();
}

function rgbToHsl(r: number, g: number, b: number): HSL {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0; const l = (max + min) / 2;
    const d = max - min;
    if (d !== 0) {
        s = d / (1 - Math.abs(2 * l - 1));
        switch (max) {
            case r: h = ((g - b) / d) % 6; break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h *= 60; if (h < 0) h += 360;
    }
    return { h, s: s * 100, l: l * 100 };
}

function hslToRgb(h: number, s: number, l: number) {
    s /= 100; l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (0 <= h && h < 60) [r, g, b] = [c, x, 0];
    else if (60 <= h && h < 120) [r, g, b] = [x, c, 0];
    else if (120 <= h && h < 180) [r, g, b] = [0, c, x];
    else if (180 <= h && h < 240) [r, g, b] = [0, x, c];
    else if (240 <= h && h < 300) [r, g, b] = [x, 0, c];
    else [r, g, b] = [c, 0, x];
    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
    };
}

export function hexToHsl(hex: string): HSL {
    const { r, g, b } = hexToRgb(hex);
    return rgbToHsl(r, g, b);
}

export function hslToHex(hsl: HSL): string {
    const { r, g, b } = hslToRgb(hsl.h, hsl.s, hsl.l);
    return rgbToHex(r, g, b);
}

/**
 * 연/진 4단계 생성
 * - lighten: L + 10, +20 (채도는 살짝 낮춤: -5, -10)
 * - darken:  L - 10, -20 (채도는 살짝 높임: +5, +10)
 */
export function generateBrandScale(baseHex: string) {
    const { h, s, l } = hexToHsl(baseHex);

    const lighter = { h, s: clamp(s - 5),  l: clamp(l + 10) };
    const lightest = { h, s: clamp(s - 10), l: clamp(l + 20) };
    const darker = { h, s: clamp(s + 5),  l: clamp(l - 10) };
    const darkest = { h, s: clamp(s + 10), l: clamp(l - 20) };

    return {
        base: baseHex.toLowerCase(),
        light: hslToHex(lighter),
        xlight: hslToHex(lightest),
        dark: hslToHex(darker),
        xdark: hslToHex(darkest),
    };
}
