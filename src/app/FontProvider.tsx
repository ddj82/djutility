"use client";

import { useEffect } from 'react';

export default function FontProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const savedFont = localStorage.getItem('selectedFont') || 'GowunDodum';
        document.documentElement.setAttribute('data-font', savedFont);
    }, []);

    return <>{children}</>;
}