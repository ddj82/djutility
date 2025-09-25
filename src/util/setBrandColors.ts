import { generateBrandScale } from './colorScale';

export function setBrandColors(baseHex: string, scope: HTMLElement = document.documentElement) {
    const scale = generateBrandScale(baseHex);
    scope.style.setProperty('--brand', scale.base);
    scope.style.setProperty('--brand-02', scale.xlight);
    scope.style.setProperty('--brand-01', scale.light);
    scope.style.setProperty('--brand-10', scale.dark);
    scope.style.setProperty('--brand-20', scale.xdark);
}
