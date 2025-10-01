'use client';
import React from 'react';
import Link from "next/link";

export default function Main() {

    return (
        <div className="p-4">
            <li>
                <Link href="/tools/button">button</Link>
            </li>
            <li>
                <Link href="/tools/list">list</Link>
            </li>
        </div>
    );
};
